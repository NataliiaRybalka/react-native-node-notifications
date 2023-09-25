import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import registerForPushNotifications from './registerForPushNotifications';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

const App = () => {
	useEffect(() => {
		registerForPushNotifications()
	}, []);

	const send = async () => {
		await fetch('https://f946-185-130-54-83.ngrok-free.app/message', {
			method: 'POST',
			body: JSON.stringify({
				title: 'Title',
				body: 'Body message',
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<View style={styles.container}>
			<Text>Notifications Example</Text>

			<Button title='Get notification' onPress={send} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;