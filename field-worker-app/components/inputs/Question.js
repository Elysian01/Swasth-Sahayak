import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import AppStyles from "../../AppStyles";

const Question = (props) => {
	const { question, responseInput } = props;
	const [userInput, setUserInput] = useState("");

	const handleInputChange = (option) => {
		setUserInput(option);
		const response = {
			"question-id": question["question-id"],
			"user-response": option,
		};
		responseInput(response);
	};

	const renderOptions = () => {
		if (question.type === "MCQ") {
			return (
				<View style={styles.options}>
					{question.options.map((option, index) => (
						<Pressable
							key={index}
							onPress={() => handleInputChange(option)}
							style={[
								styles.optionContainer,
								userInput === option &&
									styles.selectedOption,
							]}
						>
							<Text
								style={[
									styles.optionText,
									userInput === option &&
										styles.selectedOptionText,
								]}
							>
								{option}
							</Text>
						</Pressable>
					))}
				</View>
			);
		} else if (question.type === "NAT") {
			return (
				<TextInput
					style={styles.input}
					inputMode="numeric"
					placeholder="Enter your answer"
					onChangeText={handleInputChange}
					value={userInput}
				/>
			);
		} else if (question.type === "TEXT") {
			return (
				<TextInput
					style={styles.input}
					placeholder="Enter your answer"
					onChangeText={handleInputChange}
					value={userInput}
				/>
			);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.questionText}>{question.question}</Text>
			{renderOptions()}
		</View>
	);
};

export default Question;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 10,
		marginBottom: 20,
	},
	questionText: {
		fontSize: 20,
		fontWeight: "bold",
		paddingHorizontal: 10,
		margin: 10,
		width: "80%",
		alignSelf: "center",
		textAlign: "center",
	},
	options: {
		flexDirection: "column",
		alignItems: "center",
	},
	optionContainer: {
		backgroundColor: "#ffffff",
		borderRadius: 5,
		padding: 10,
		marginBottom: 5,
		width: "60%",
		borderWidth: 1,
		borderColor: "#cccccc",
	},
	optionText: {
		fontSize: 18,
		alignSelf: "center",
	},
	selectedOption: {
		backgroundColor: AppStyles.color.primary,
	},
	selectedOptionText: {
		color: "white",
		fontWeight: "600",
	},
	input: {
		backgroundColor: "#ffffff",
		width: "60%",
		alignSelf: "center",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#cccccc",
		padding: 10,
		marginTop: 5,
		marginBottom: 10,
		fontSize: 16,
	},
});
