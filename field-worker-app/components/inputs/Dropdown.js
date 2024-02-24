import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import "../../AppStyles";
import AppStyles from "../../AppStyles";

const data = [
	{ id: 1, label: "English", labelInEnglish: "English" },
	{ id: 2, label: "हिन्दी", labelInEnglish: "Hindi" },
];

const Dropdown = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const toggleDropdown = () => setOpen(!isOpen);

	const handleItemClick = (id, label) => {
		selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
		console.log(label);
		props.setLang(label);
		toggleDropdown();
	};

	return (
		<View style={styles.dropdown}>
			<TouchableOpacity
				style={styles.dropdownHeader}
				onPress={toggleDropdown}
			>
				<Text style={styles.dropdownMainText}>
					{selectedItem
						? data.find((item) => item.id == selectedItem)
								.label
						: "Select your Language"}
				</Text>
				<Text style={[styles.icon, isOpen && styles.iconOpen]}>
					&#x25B8;
				</Text>
			</TouchableOpacity>
			{isOpen && (
				<View style={styles.dropdownBody}>
					{data.map((item) => (
						<TouchableOpacity
							key={item.id}
							style={styles.dropdownItem}
							onPress={() =>
								handleItemClick(
									item.id,
									item.labelInEnglish
								)
							}
						>
							<Text
								style={[
									styles.dropdownItemDot,
									item.id == selectedItem &&
										styles.selectedDot,
								]}
							>
								•
							</Text>
							<Text style={styles.dropdownLabel}>
								{item.label}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		width: 250,
		marginTop: 25,
		borderRadius: 10,
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
		elevation: 2,
		fontSize: 24,
	},
	dropdownHeader: {
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	dropdownMainText: {
		fontSize: 20,
	},
	dropdownBody: {
		borderTopWidth: 1,
		borderTopColor: "#E5E8EC",
		paddingVertical: 5,
	},
	dropdownItem: {
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	dropdownItemDot: {
		opacity: 0,
		marginRight: 5,
		width: 20,
	},
	dropdownLabel: {
		color: AppStyles.color.primary,
		fontSize: 16,
		lineHeight: 20,
		fontWeight: "bold",
	},
	selectedDot: {
		opacity: 1,
	},
	icon: {
		fontSize: 18,
		color: AppStyles.color.primary,
		transform: [{ rotate: "0deg" }],
		// transition: "transform 0.2s ease-in-out",
	},
	iconOpen: {
		transform: [{ rotate: "90deg" }],
	},
});

export default Dropdown;
