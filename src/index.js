/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createDrawerNavigator,
} from 'react-navigation';
import screenOne from './screenOne';
import screenTwo from './screenTwo';
import screenThree from './screenThree';
import screenFour from './screenFour';
import screenFive from './screenFive';

const stackNavigator = createStackNavigator({
	screenOne: {
		screen: screenOne,
	},
	screenTwo,
});

const TabNavigator = createBottomTabNavigator({
	screenTwo,
	screenThree,
	screenFour,
});

const MyDrawerNavigator = createDrawerNavigator(
	{
		stackNavigator,
		TabNavigator,
		screenFive,
	},
	{
		navigationOptions: ({ navigation }) => ({
			title: 'ReactNavigation', // Title to appear in status bar
			headerLeft: (
				<TouchableOpacity
					onPress={() => {
						navigation.dispatch(DrawerActions.toggleDrawer());
					}}
				>
					<Text>Menu Image</Text>
				</TouchableOpacity>
			),
			headerStyle: {
				backgroundColor: '#333',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}),
	}
);

const Index = createAppContainer(MyDrawerNavigator);
export default Index;
