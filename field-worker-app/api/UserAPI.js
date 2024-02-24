import ApiManager from "./ApiManager";

export const loginAPI = async (data) => {
	try {
		console.log("Sending: ", data);
		proxyData = {
			username: "a1",
			password: "a1",
		};
		const result = await ApiManager("/login", {
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
