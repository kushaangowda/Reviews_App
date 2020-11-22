import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{ title: "Movie 1", rating: 5, body: "lorem ipsum", key: "1" },
		{ title: "Movie 2", rating: 4, body: "lorem ipsum", key: "2" },
		{ title: "Movie 3", rating: 2, body: "lorem ipsum", key: "3" },
	]);

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={reviews}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ReviewDetails", { item: item })
							}
						>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}
