import ApiManager from "./ApiManager";

export const loginAPI = async (data) => {
	try {
		console.log("Sending: ", data);
		proxyData = {
			username: "xyz",
			password: "xdyz",
		};
		const result = await ApiManager("/auth/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			data: proxyData,
		});
		return result;
	} catch (error) {
		return error.response;
	}
};
