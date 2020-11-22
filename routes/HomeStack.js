import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
	<Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: "#ddd",
				height: 80,
			},
			headerTintColor: "#000",
			headerTitleStyle: {
				fontWeight: "bold",
			},
		}}
	>
		{/* pass default style to all navbars */}
		<Screen
			name="Home"
			component={Home}
			options={({ navigation }) => {
				{
					return {
						headerTitle: () => (
							<Header title="Reviews App" navigation={navigation} />
						),
					};
				}
			}}
		/>
		<Screen
			name="ReviewDetails"
			component={ReviewDetails}
			options={{ title: "Review Details" }}
		/>
	</Navigator>
);

export default HomeStack;
