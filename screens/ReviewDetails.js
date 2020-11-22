import React from "react";
import { globalStyles, images } from "../styles/Global";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
	const { title, body, rating } = route.params.item;
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{title}</Text>
				<Text style={globalStyles.titleText}>{body}</Text>
				<View style={styles.rating}>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	rating: {
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: "#eee",
	},
});
