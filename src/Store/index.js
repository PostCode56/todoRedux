import {createStore, combineReducers} from "redux";
import {tasklistReducer} from "./tasklistReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    taskLists: tasklistReducer,
})
export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)