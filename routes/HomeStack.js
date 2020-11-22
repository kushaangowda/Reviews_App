import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
	<Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: "#ddd",
				height: 80,
			},
			headerTitleAlign: "Centered",
			headerTintColor: "#000",
			headerTitleStyle: {
				fontWeight: "bold",
			},
		}}
	>
		{/* pass default style to all navbars */}
		<Screen name="Home" component={Home} options={{ title: "Home" }} />
		<Screen
			name="ReviewDetails"
			component={ReviewDetails}
			options={{ title: "Review Details" }}
		/>
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
