import React from "react"; //useContext
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
	//const FavoritesMealsCtx = useContext(FavoritesContext);
	const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);

	const favoritesMeals = MEALS.filter(
		(meal) => favoriteMealIds.includes(meal.id) //FavoritesMealsCtx.ids.
	);

	if (favoritesMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>
					You have not set any favorite meal yet.
				</Text>
			</View>
		);
	}

	return <MealsList items={favoritesMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
