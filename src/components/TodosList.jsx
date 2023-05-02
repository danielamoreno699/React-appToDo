import PropTypes from 'prop-types';
import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, setTodos, handleChange,delTodo, setUpdate, addTodoItem  }) => {
   
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

  TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired,
    setTodos: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
    addTodoItem: PropTypes.func.isRequired
  };
  
  export default TodosList;
  