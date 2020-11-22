import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
	<Navigator
		headerMode="screen"
		screenOptions={{
			headerStyle: {
				backgroundColor: "#ddd",
				height: 80,
			},
			headerTintColor: "#000",
			headerTitleStyle: {
				fontWeight: "bold",
			},
			headerTitleAlign: "center",
		}}
	>
		<Screen
			name="About"
			component={About}
			options={({ navigation }) => {
				{
					return {
						headerTitle: () => <Header title="About" navigation={navigation} />,
					};
				}
			}}
		/>
	</Navigator>
);

export default AboutStack;
