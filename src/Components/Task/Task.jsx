import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeTaskAction, touchTaskAction } from '../../Store/actions/todo';

import { RemoveButton, TaskStyledBlock, TaskToDO } from './Task.styles';
import classes from './Task.css';

function Task() {
  const taskLists = useSelector((state) => state.taskLists.taskLists);
  const dispatch = useDispatch();

  const removeTask = (task) => {
    dispatch(removeTaskAction(task));
  };

  const touchToDO = (task) => {
    dispatch(touchTaskAction(task));
  };

  return (
    <div>
      {taskLists.map((task) => (
        <TaskToDO key={task.id}>
          <TaskStyledBlock
            className={task.isTouch
              ? 'textToDo_None'
              : 'textToDo'}
            onClick={() => touchToDO(task.id)}
          >
            {task.inputValue}
          </TaskStyledBlock>
          <RemoveButton onClick={() => removeTask(task.id)}>X</RemoveButton>
        </TaskToDO>
      ))}
    </div>
  );
}

export default Task;
