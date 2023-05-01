import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
// import Navbar from '@/components/Navbar';
// import Modal from '@/components/Modal';

const TodoApp = () => {
    return (
    <div className="wrapper">
      <div className="todos">
       <Header />
       {/* <Navbar/> */}
       {/* <Modal/> */}
       <TodosLogic />
       </div>
    </div>
    );
  };
  export default TodoApp;
  