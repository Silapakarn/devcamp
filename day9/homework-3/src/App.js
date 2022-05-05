import './App.css';
import React , {useState} from 'react';


function App() {
  let i = 0;
  let [toDoList, setToDoList] = useState([{ date: Date(), msg: "hello" }]);
  

  function checkEnter(e) {
    let message = e.target.value;

    if (e.key === "Enter" && message !== "") 
    {
      let Add = [...toDoList];
      Add.push({ date: Date(), msg: message });
      setToDoList(Add);
      e.target.value = "";

    
    } else if (e.key === "Enter" && message == "") {
      e.target.value = "";
      alert("NO ToDoList");
    }
  }



  function deleteList(x) {
    let ans = toDoList.filter((y) => y.msg !== x.msg);
    setToDoList(ans);
  }

  return (
    <div className="card">
      <div>
        {toDoList.map((x) => (
          <div>
            <p>{x.date}</p>
            <p>{x.msg}</p>
            <button onClick={() => deleteList(x)}>DELETE</button>
          </div>
        ))}
      </div>

      <input className="note" type="text" onKeyDown={checkEnter}></input>
    </div>
  );
}




export default App;
