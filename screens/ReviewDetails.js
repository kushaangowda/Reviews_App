import React from "react";
import { globalStyles } from "../styles/Global";
import { View, Text } from "react-native";

export default function ReviewDetails({ route, navigation }) {
	const { title, body, rating } = route.params.item;
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>{title}</Text>
			<Text style={globalStyles.titleText}>{body}</Text>
			<Text style={globalStyles.titleText}>{rating}</Text>
		</View>
	);
}
