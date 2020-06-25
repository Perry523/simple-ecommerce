import {createStore} from 'redux'
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
export default function cart(state = [], action){
    switch (action.type){
        case 'ADD':
            let exists = false
            if(state.length > 0){
                state.forEach(prod => {
                    if(prod.nome === action.prod.nome && prod.variant === prod.variant){
                        alert('item ja existe')
                        return exists = true 
                    }                    
                })
            }
            else{
                return [action.prod]
            }
            if(exists) return state
            return [...state, action.prod];
        default:
            return state
    }
}