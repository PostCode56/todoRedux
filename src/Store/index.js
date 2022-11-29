import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})
export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)