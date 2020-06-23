import React from 'react'
import Routes from '../router'
import Style from '../globalStyle'
import Axios from 'axios'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from '../store'
Axios.defaults.baseURL = 'http://localhost:3333';

export default function App() {
    return (
        <Provider store={store}>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <PersistGate loading="null" persistor={persistor}>
        <Routes/>
        <Style/>
        </PersistGate>
        </Provider>
    )
}
