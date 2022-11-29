import React, {useState} from 'react';
import {FormTask, MyButtonStyled, StyledForm, TaskList, TitleTodo} from "./Form.styles";
import MyInput from "../Input/MyInput";
import {useDispatch, useSelector} from "react-redux";
import classes from "./Form.css"
const Form = () => {
    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customers)
    const [value, setValue] = useState("")
    const newPost = (e) =>{
        if (value){
            e.preventDefault();
            const Post ={
                value,
                id:Date.now(),
            }
            setValue("")
            console.log(value)
            dispatch({type:"ADD_CUSTOMER", payload :Post,})
        } else {
            alert("Введите заметку!")
        }
    }
    const removeTask = (customer) =>{
        dispatch({type:"REMOVE_CUSTOMER", payload: customer})
    }
    const tochToDO = (customer) =>{
        dispatch({type:"TOCH_TASK", payload: customer})
    }
    return (
        <form action="" onSubmit={newPost}>
        <StyledForm>
            <TitleTodo>ToDoApp from Redux</TitleTodo>
            <FormTask>
                <MyInput value={value}
                onChange ={e => setValue(e.target.value)}/>
                <MyButtonStyled onClick={newPost}>Добавить клиента</MyButtonStyled>
            </FormTask>
            <TaskList> {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div className={"taskToDO"} key={customer.id}>
                            <div className={customer.isToch ? "textToDo_None" : "textToDo"} onClick={()=> tochToDO(customer.id)} >{customer.value}</div>
                            <div className={"removeBtn"} onClick={() => removeTask(customer.id)}>X</div>
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