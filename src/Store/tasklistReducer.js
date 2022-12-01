const defaultState = {
    taskLists:[],
    isTouch:true,
}
export const tasklistReducer = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_TASK":
            return {...state, taskLists:[...state.taskLists, action.payload]}
        case "REMOVE_TASK":
            return {...state, taskLists: state.taskLists.filter(task => task.id !== action.payload)}
        case "TOUCH_TASK":
            return {...state, taskLists: state.taskLists.map((task) => {
                        if (task.id === action.payload) {
                            return {...task, isTouch: !task.isTouch}
                        }
                        return task;
                    })}
        default:
            return state;
    }
}
