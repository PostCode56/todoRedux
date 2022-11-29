const defaultState = {
    customers:[],
    isToch:true,
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_CUSTOMER":
            return {...state, customers:[...state.customers, action.payload]}
        case "REMOVE_CUSTOMER":
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case "TOCH_TASK":
            return {...state, customers: state.customers.map((customer) => {
                        if (customer.id === action.payload) {
                            return {...customer, isToch: !customer.isToch}
                        }
                        return customer;
                    })}
        default:
            return state;
    }
}