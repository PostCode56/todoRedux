import React from 'react';
import { useSelector } from 'react-redux';

import { RemoveButton, TaskStyledBlock, TaskToDO } from './Task.styles';
import classes from './Task.css';

function Task({ touchToDO, removeTask }) {
  const taskLists = useSelector((state) => state.taskLists.taskLists);
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
