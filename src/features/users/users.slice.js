import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    items:[
        {id:101, name: 'Alita', gender:'female', salary:270000},
        {id:102, name: 'Hashira', gender:'male', salary:320000},
        {id:103, name: 'Iva', gender:'female', salary:220000},
        {id:104, name: 'Nedzuko', gender:'female', salary:240000}
    ]
}

export const UserSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{
        salaryUp: function(state, action){
            const person = state.items.find(user => user.id === action.payload)
            if(person){
                person.salary += 50_000
            }
        },

        salaryDown: function(state, action){
            const person = state.items.find(user => user.id === action.payload)
            if(person ){
                if(person.salary - 50_000 < 0){
                    person.salary = 0
                }else{
                    person.salary -= 50_000
                }
            }
        },
        removeUser: function(state, action){
            state.items = state.items.filter(user => user.id !== action.payload)    
        },
        
        swipeUp: function(state, action){
            const index = state.items.findIndex(user => user.id === action.payload)
            if(index > 0){
                [state.items[index - 1], state.items[index]] = [state.items[index], state.items[index - 1]]
            }
        },
        swipeDown: function(state, action){
            const index = state.items.findIndex(user => user.id === action.payload)
            if(index >= 0 && index < state.items.length - 1){
                [state.items[index], state.items[index + 1]] = [state.items[index + 1], state.items[index]]
            }
        }
    }
})
export const reducer = UserSlice.reducer
export const {salaryUp, salaryDown, removeUser, swipeUp, swipeDown} = UserSlice.actions
