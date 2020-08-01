import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {AppRootStateType} from "./state/store";
import {juniorPageReducer} from "./reduxTaskReducer";
import {pageModeReducer} from "./pageModeReducer";



const rootReducer = combineReducers({
    juniorPage: juniorPageReducer,
    pageMode: pageModeReducer
})

const initialGlobalState: AppRootStateType = {
    juniorPage: {loading: false},
    pageMode: {darkMode: false}
};

export const storyBookStore = createStore(rootReducer, initialGlobalState);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
