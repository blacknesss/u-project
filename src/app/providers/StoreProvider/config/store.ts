import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
//import { useDispatch } from 'react-redux';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// export type AppStore = ReturnType<typeof createReduxStore>;
// export type AppDispatch = AppStore['dispatch'];
// export const useAppDispatch = () => useDispatch<AppDispatch>();
