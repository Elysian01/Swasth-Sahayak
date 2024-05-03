import ApiManager from "./ApiManager";
import AuthApiManager from "./AuthApiManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dbFunctions from "../api/Queries";

export const loginAPI = async (data) => {
	try {
		console.log("Sending: ", data);
		data["role"] = "FIELDWORKER";
		const result = await ApiManager("/auth/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			data: data,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const downloadAPI = async () => {
	try {
		console.log("Downloading Data from server...");
		const fwid = await AsyncStorage.getItem("FieldWorkerID");
		const token = await AsyncStorage.getItem("AccessToken");

		const result = await AuthApiManager(`/fieldworker/getdata/${fwid}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return result.data; // Return only the data
	} catch (error) {
		console.error("Error downloading data: ", error);
		return { error: error.message }; // Return error message
	}
};

export const uploadVisitedFollowUpsAPI = async () => {
	// this function uploads all the visited follow-up data available in uploadData
	try {
		const token = await AsyncStorage.getItem("AccessToken");
		let uploadData = await AsyncStorage.getItem("uploadData");
		uploadData = JSON.parse(uploadData); // Parse the uploadData string to object
		
		// Filter the follow_up array to include only the visited follow-ups
		const visitedFollowUps = uploadData.follow_up.filter(
			(followUp) => followUp.visited_status === true
		);
		
		// Replace the follow_up array in uploadData with the filtered visited follow-ups
		uploadData.follow_up = visitedFollowUps;
		
		console.log("Uploading data to server ... ");
		console.log(uploadData);

		const result = await ApiManager("/fieldworker/recievedata", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: JSON.stringify(uploadData), // Stringify the uploadData object back to JSON
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const uploadAPI = async () => {
	try {
		const token = await AsyncStorage.getItem("AccessToken");
		const uploadData = await AsyncStorage.getItem("uploadData");
		console.log("Uploading data to server ... ");
		console.log(uploadData);

		const result = await ApiManager("/fieldworker/recievedata", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: uploadData,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const uploadImagesAPI = async () => {
	try {
		const token = await AsyncStorage.getItem("AccessToken");
		const uploadData = await dbFunctions.getAllImages();
		console.log("Uploading Images to server ... ");
		console.log(uploadData);

		const result = await ApiManager("/fieldworker/save", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: uploadData,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};
