import React from 'react';
const TodoItem = React.memo(({ item }) => {
    console.log('TodoItem component rendered');
    return <li>{item.title}</li>;
});

export default TodoItem