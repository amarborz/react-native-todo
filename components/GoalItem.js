import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ text, deleteHandler, id }) => {
	return (
		<Pressable onPress={deleteHandler.bind(this, id)}>
			<View style={styles.goalsText}>
				<Text style={styles.goals}>{text}</Text>
			</View>
		</Pressable>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalsText: {
		backgroundColor: '#ccc',
		padding: 8,
		margin: 8,
		borderRadius: 6,
		borderColor: 'black',
		borderWidth: 2,
		width: '50%',
		textAlign: 'center',
		alignSelf: 'center',
	},
})
