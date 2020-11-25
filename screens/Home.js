import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/Global";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);

	const [reviews, setReviews] = useState([
		{ title: "Movie 1", rating: 5, body: "lorem ipsum", key: "1" },
		{ title: "Movie 2", rating: 4, body: "lorem ipsum", key: "2" },
		{ title: "Movie 3", rating: 2, body: "lorem ipsum", key: "3" },
	]);

	const addReview = (review) => {
		review.key = Math.random().toString() + Math.random().toString();
		setReviews((currentReviews) => {
			return [review, ...currentReviews];
		});
		setModalOpen(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							onPress={() => setModalOpen(false)}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<MaterialIcons
				name="add"
				size={24}
				onPress={() => setModalOpen(true)}
				style={styles.modalToggle}
			/>
			<FlatList
				data={reviews}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ReviewDetails", { item: item })
							}
						>
							<Card>
								<Text style={globalStyles.titleText}>{item.title}</Text>
							</Card>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#aaa",
		borderRadius: 10,
		alignSelf: "center",
		padding: 10,
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
	modalContent: {
		flex: 1,
	},
});
