import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'

const persistConfig ={
    key: 'cart',
    storage
} 

const persistedReducer = persistReducer(persistConfig,cart)


function cart(state = [], action){
    switch (action.type){
        case 'ADD':
            console.log(state)
            /*if(state.length > 0){
                state.map(prod => {
                    if(!(prod.nome ==! action.prod.nome && prod.variant ==! prod.variant)){
                        return alert('item ja está cadastrado')
                    }
                    else return [...state, action.prod]
     
                })
            }
            else{
                return [...state, action.prod]
            }*/
            return [...state];
        default:
            return state
    }
}
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}

