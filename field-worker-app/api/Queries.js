import * as SQLite from "expo-sqlite";

const DB_NAME = "images";
const db = SQLite.openDatabase(DB_NAME);

const createImagesTable = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS Images (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    abhaId TEXT,
                    image TEXT,
					date TEXT
                );`,
				[],
				(_, result) => {
					if (result.rowsAffected > 0) {
						resolve("Images table created successfully");
					} else {
						resolve("Images table already exists");
					}
				},
				(_, error) => {
					reject("Error creating Images table: " + error);
				}
			);
		});
	});
};

const deleteAllImages = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM Images",
				[],
				(_, { rowsAffected }) => {
					resolve(rowsAffected + " Rows Deleted From Images");
				},
				(_, error) => {
					reject(
						"Error deleting records from Images table: " +
							error
					);
				}
			);
		});
	});
};

const insertImage = (abhaId, image, date) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO Images (abhaId, image, date) VALUES (?, ?,?)",
				[abhaId, image, date],
				(_, { rowsAffected }) => {
					if (rowsAffected > 0) {
						resolve(
							`${rowsAffected} Data inserted into Images successfully`
						);
					} else {
						reject("Failed to insert data into Images");
					}
				},
				(_, error) => {
					reject(`Error inserting data into Images: ${error}`);
				}
			);
		});
	});
};

const getAllImages = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM Images",
				[],
				(_, { rows }) => {
					const entries = rows._array; // Renamed from patients to entries
					resolve(entries);
				},
				(_, error) => {
					reject("Error fetching Images: " + error.message); // Improved error message
				}
			);
		});
	});
};

export default {
	createImagesTable,
	deleteAllImages,
	insertImage,
	getAllImages,
};
