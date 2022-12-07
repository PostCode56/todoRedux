import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MyInput from '../UI/Input/MyInput';

import { addTaskAction, removeTaskAction, touchTaskAction } from '../../Store/actions/todo';
import Task from '../Task/Task';

import {
  FormTask, MyButtonStyled, StyledForm, TaskList, TextNone, TitleTodo,
} from './Form.styles';

function Form() {
  const dispatch = useDispatch();
  const taskLists = useSelector((state) => state.taskLists.taskLists);
  const [inputValue, setInputValue] = useState('');
  const newPost = (e) => {
    if (inputValue) {
      e.preventDefault();
      const Post = {
        inputValue,
        id: Date.now(),
      };
      setInputValue('');
      dispatch(addTaskAction(Post));
    } else {
      alert('Введите заметку!');
    }
  };

  const removeTask = (task) => {
    dispatch(removeTaskAction(task));
  };

  const touchToDO = (task) => {
    dispatch(touchTaskAction(task));
  };

  return (
    <form action="src/Components/Form/Form" onSubmit={newPost}>
      <StyledForm>
        <TitleTodo>ToDoApp from Redux</TitleTodo>
        <FormTask>
          <MyInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <MyButtonStyled
            onClick={newPost}
          >
            Добавить запись
          </MyButtonStyled>
        </FormTask>
        <TaskList>
          {taskLists.length > 0
            ? (
              <Task
                touchToDO={touchToDO}
                removeTask={removeTask}
              />
            )
            : <TextNone>Записи отсуствуют</TextNone>}
        </TaskList>
      </StyledForm>
    </form>
  );
}
export default Form;
