import Todoinput from './components/todoinput';
import './App.css';
import { useState } from 'react';
import TodoList from './components/todoList';

function App() {
  const [Listtodo,setListtodo]= useState ([]);
let addList =(inputText) =>{ setListtodo([...Listtodo,inputText])}

const deleteListItem =(key)=>{
  let newListtodo=[...Listtodo];
  newListtodo.splice(key,1)
  setListtodo([...newListtodo])
}
  return (
   
    <div className='main-container'>
      <div className='center-container'>
      <Todoinput addList={addList}/>
      <h1 className='app-heading'> TODO </h1>
      <hr/>

    {Listtodo.map((ListItem,i)=>{
      return (
        <TodoList key={i} index={i} item= {ListItem} deleteItem={deleteListItem} ></TodoList>
      )
    })}
    
        </div>
    </div>
  );
}

export default App;
