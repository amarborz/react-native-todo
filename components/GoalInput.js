import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ addGoalPress, visible, showModal }) => {
	const [enteredText, setEnteredText] = useState('')

	const enteredTextHandler = (enteredText) => {
		setEnteredText(enteredText)
	}

	const addGoalHandler = () => {
		addGoalPress(enteredText)
		setEnteredText('')
		showModal(false)
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={require('../assets/favicon.png')} style={styles.image} />
				<TextInput
					placeholder="Add a new goal!"
					style={styles.input}
					onChangeText={enteredTextHandler}
					value={enteredText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Add goal!"
							onPress={addGoalHandler}
							color="#5e0acc"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={() => showModal(false)}
							color="#f31282"
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#311b6b',
	},

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 14,
	},

	input: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '80%',
		padding: 12,
	},

	button: {
		margin: 8,
	},

	image: {
		width: 50,
		marginBottom: 30,
	},
})
