import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
	const [goalList, setGoalList] = useState([])
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(true)
	}

	const addGoalHandler = (enteredText) => {
		setGoalList((oldGoals) => [
			...oldGoals,
			{ text: enteredText, key: Math.random().toString() },
		])
	}

	const deleteGoalHandler = (id) => {
		setGoalList((oldList) => oldList.filter((item) => item.key !== id))
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button title="Add new goal" onPress={toggleModal} color="#5e0acc" />
				<GoalInput
					addGoalPress={addGoalHandler}
					visible={showModal}
					showModal={setShowModal}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goalList}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.key}
									deleteHandler={deleteGoalHandler}
								/>
							)
						}}
					/>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
		paddingTop: 20,
	},
})
