import React from "react";
import { globalStyles } from "../styles/Global";
import { View, Text } from "react-native";

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>About Screen</Text>
		</View>
	);
}
