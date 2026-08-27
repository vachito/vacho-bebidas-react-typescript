import { create } from "zustand";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationsSliceType } from "./notificationSlice";
import { createAISlice, type AISlice } from "./asSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationsSliceType & AISlice>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  })),
);
