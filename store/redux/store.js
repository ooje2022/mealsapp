import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites-redux";

export const store = configureStore({
	reducer: {
		favoritesMeals: favoritesReducer,
	},
});
