import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Note from './components/Note';
import FormAddNote from './components/FormAddNote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Timer from './components/Timer';
import Stats from './components/Stats';

function App() {
  const newTaskList = useSelector((state) => state.task.taskList);

  return (
    <>
      <ToastContainer autoClose={1000} theme='dark' />
      <div className='App'>
        <Header />
        <div className='main-feature-container'>
          <FormAddNote />
          <Timer />
          <Stats />
        </div>

        <div className='notes-list'>
          {newTaskList?.map((task, index) => {
            return (
              <Note
                key={index}
                id={task.id}
                title={task.title}
                body={task.body}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
