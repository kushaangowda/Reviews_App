import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<ImageBackground
			style={styles.header}
			source={require("../assets/game_bg.png")}
		>
			<MaterialIcons
				name="menu"
				size={28}
				onPress={openMenu}
				style={styles.icon}
			/>
			<View style={styles.headerTitle}>
				<Image
					source={require("../assets/heart_logo.png")}
					style={styles.headerImg}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#ddd",
		width: Dimensions.get("window").width,
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#333",
		letterSpacing: 1,
	},
	icon: {
		position: "absolute",
		left: 16,
	},
	headerImg: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
	headerTitle: {
		flexDirection: "row",
	},
});
