import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
	<Navigator
		headerMode="screen"
		screenOptions={{
			headerStyle: {
				backgroundColor: "#eee",
			},
			headerTintColor: "#444",
			height: 60,
		}}
	>
		<Screen
			name="About"
			component={About}
			options={{ title: "About Reviews App" }}
		/>
	</Navigator>
);

export default AboutStack;
