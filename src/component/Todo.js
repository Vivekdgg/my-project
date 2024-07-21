import React from 'react'
import TodoItem from './TodoItem';

const Todo = React.memo(({ list }) => {
    console.log('Todo component rendered');
  return (
    <ul>
    {list.map((item) => (
        <TodoItem key={item.id} item={item} />
    ))}
</ul>
  )
});

export default Todo