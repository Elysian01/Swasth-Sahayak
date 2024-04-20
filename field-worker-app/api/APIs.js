import ApiManager from "./ApiManager";

export const loginAPI = async (data) => {
	try {
		console.log("Sending: ", data);
		// proxyData = {
		// 	username: "xyz",
		// 	password: "xdyz",
		// };
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

export const getFieldWorkerDetailsAPI = async () => {
	try {
		console.log("Fetching Field Worker Details...");

		const result = await ApiManager("/", {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const downloadAPI = async () => {
	try {
		console.log("Downloading Data from server...");

		const result = await ApiManager("/fieldworker/getdata/1", {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const uploadAPI = async (uploadData) => {
	try {
		console.log("Data Uploading: ", uploadData);
		const result = await ApiManager("/fieldworker/followupsReschedule", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			data: uploadData,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};

export const uploadImagesAPI = async (uploadData) => {
	try {
		console.log("Data Uploading: ", uploadData);
		const result = await ApiManager("/fieldworker/followupsReschedule", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			data: uploadData,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};
