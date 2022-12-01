import React, {useState} from 'react';
import {FormTask, MyButtonStyled, StyledForm, TaskList, TitleTodo} from "./Form.styles";
import MyInput from "../UI/Input/MyInput";
import {useDispatch, useSelector} from "react-redux";
import classes from "./Formtasks.css"
import {addTaskAction, removeTaskAction, touchTaskAction} from "../../Store/actions/todo";
const Form = () => {
    const dispatch = useDispatch()
    const taskLists = useSelector(state => state.taskLists.taskLists)
    const [value, setValue] = useState("")
    const newPost = (e) =>{
        if (value){
            e.preventDefault();
            const Post ={
                value,
                id:Date.now(),
            }
            setValue("")
            dispatch(addTaskAction(Post))
        } else {
            alert("Введите заметку!")
        }
    }
    const removeTask = (task) =>{
        dispatch(removeTaskAction(task))
    }
    const touchToDO = (task) =>{
        dispatch(touchTaskAction(task))
    }
    return (
        <form action="src/Components/Form/Form" onSubmit={newPost}>
        <StyledForm>
            <TitleTodo>ToDoApp from Redux</TitleTodo>
            <FormTask>
                <MyInput value={value}
                onChange ={e => setValue(e.target.value)}/>
                <MyButtonStyled onClick={newPost}>Добавить запись</MyButtonStyled>
            </FormTask>
            <TaskList> {taskLists.length > 0
                ?
                <div>
                    {taskLists.map(task =>
                        <div className={"taskToDO"} key={task.id}>
                            <div className={task.isTouch ? "textToDo_None" : "textToDo"} onClick={()=> touchToDO(task.id)} >{task.value}</div>
                            <div className={"removeBtn"} onClick={() => removeTask(task.id)}>X</div>
                        </div>
                    )}
                </div>
                :
                <div className={"textNone"}>
                    Записи отсутствуют
                </div>}
            </TaskList>
        </StyledForm>
        </form>
    );
};
export default Form;