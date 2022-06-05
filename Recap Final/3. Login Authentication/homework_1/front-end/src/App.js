import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react'



function Form(props) { 

  let firstname = useRef()
  let lastname = useRef()
  let gender = useRef()

  const onClick = () => {
    props.getValue({
      name: firstname.current.value,
      lastname: lastname.current.value,
      gender: gender.current.value
    })
  }

  return (
    <>
      <input type="text" ref={firstname} />
      <input type="text" ref={lastname} />

      <select ref={gender}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Na'>Na</option>
      </select>

      <input type='button' value="submit" onClick={onClick} />
    </>
  )
}


function App() {

  //useState
  const [maleList, setMaleList] = useState([])
  const [FemaleList, setFemaleList] = useState([])
  const [NaList, setNaList] = useState([])

  //getValue
  const getValue = (value) => {
    if(value.gender === 'Male'){
      return setMaleList([...maleList,value])
    }else if(value.gender === 'Female'){
      return setFemaleList([...FemaleList,value])
    }else{
      return setNaList([...NaList,value])
    }
  }
  
  return (
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <Form getValue={getValue} />
      <hr />
      <h3>Male List</h3>
        {/* <p>{JSON.stringify(maleList)}</p> */}
        <p>{maleList.length}</p>
      <h3>Female List</h3>
        {/* <p>{JSON.stringify(FemaleList)}</p> */}
        <p>{FemaleList.length}</p>
      <h3>Na List</h3>
        <p>{JSON.stringify(NaList)}</p>
        {/* <p>{NaList.length}</p> */}
    </div>
  );
}

export default App;
