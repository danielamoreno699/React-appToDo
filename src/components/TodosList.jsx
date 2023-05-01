import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, setTodos, handleChange,delTodo, setUpdate, addTodoItem  }) => {
    //const { todosProps } = props;
    return (
      <ul>
        {todosProps.map((todo) => (
              <TodoItem 
              key={todo.id} 
              itemProp={todo} 
              handleChange={handleChange}
              addTodoItem = {addTodoItem}
              delTodo={delTodo}
              setUpdate={setUpdate}
              setTodos={setTodos}
               />
        ))}
      </ul>
    );
  };
  export default TodosList;
  