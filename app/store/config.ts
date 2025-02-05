import { configureStore } from '@reduxjs/toolkit';

/* Project */
import { HomeSlice, HomeStateType } from '~/store/home.store';
import { CartSlice, CartStateType } from '~/store/cart.store';

export const AppStore = configureStore({
  reducer: {
    home: HomeSlice.reducer,
    cart: CartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppState = ReturnType<typeof AppStore.getState>;
export type AppState = {
  home: HomeStateType;
  cart: CartStateType;
};

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch;
