import React from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { uploadAPI, uploadImagesAPI, uploadVisitedFollowUpsAPI } from "./APIs";
import dbFunctions from "./api/Queries";
import { UPLOUD_HOUR, UPLOUD_MINUTE } from "../config";

const checkNetworkAndDataChange = async () => {
	try {
		const state = await NetInfo.fetch();
		console.log("Is connected?", state.isConnected);
		const dataChangeStatus = await AsyncStorage.getItem(
			"DataChangeStatus"
		);
		const imageStatus = await AsyncStorage.getItem("ImageAddedStatus");

		const currentTime = new Date();
		const uploadTime = new Date();
		uploadTime.setHours(UPLOUD_HOUR); // Setting the hour to 5:00 PM
		uploadTime.setMinutes(UPLOUD_MINUTE); // Setting the minutes to 30

		if (state.isConnected && dataChangeStatus === "true") {
			if (currentTime < uploadTime) {
				await uploadAPI();
				console.log("Uploaded All data to server");
			} else {
				await uploadVisitedFollowUpsAPI();
				console.log(
					"Uploaded visited follow-ups to server, and all available data in uploadData"
				);
			}

			const fwid = await AsyncStorage.getItem("FieldWorkerID");
			let data = await AsyncStorage.getItem("uploadData");
			data = JSON.parse(data);

			const uploadTemplate = {
				fieldworker_id: fwid,
				follow_up: data["follow_up"],
				questionnaire_response: [],
				fieldworker_comments: [],
				artifacts: [],
				doctors: data["doctors"],
				chosen_doctor: [],
				patient_registeration: [],
			};

			console.log(uploadTemplate);

			await AsyncStorage.setItem(
				"uploadData",
				JSON.stringify(uploadTemplate)
			);
			await AsyncStorage.setItem("DataChangeStatus", "false");
		} else if (state.isConnected && imageStatus === "true") {
			// upload images
			await uploadImagesAPI();
			console.log("Uploaded images to server");
			await dbFunctions.deleteAllImages();
			await AsyncStorage.setItem("ImageAddedStatus", "false");
		}
	} catch (error) {
		console.error("Error checking network and data change:", error);
	}
};

export default checkNetworkAndDataChange;
