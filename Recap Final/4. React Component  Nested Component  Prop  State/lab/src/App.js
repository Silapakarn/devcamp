import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';

//Lab 2
// const RenderProps = (props) => {
//   return (<>{props.component}</>)
// }


// const Display = (props) => {
//   return (
//     <div>
//       <p>string: {props.myStr}</p>
//       <p>number: {props.myNumber}</p>
//       <p>false value: {props.myBool.toString()}</p>
//       <p>true value: {props.myTrueBool.toString()}</p>
//       <p>null: {props.myNull === null && 'yes'}</p>
//       <p>undefined: {props.myUndefinded === undefined && 'yes'}</p>
//       <p>object: {JSON.stringify(props.myObj)}</p>
//       <p>array: {JSON.stringify(props.myArray)}</p>
//       <p>Date: {props.myDate.toString()}</p>
//       <p>function: {props.myShowNameFunc('John')}</p>
//       <p>Component:</p>
//       <RenderProps component={(<ProfileFuncComp firstname="Hollie" lastname="Chang" />)} />
//     </div>
//   )
// }


// const ProfileFuncComp = (props) => {
//   return (<><p>Firstname : {props.firstname}</p>
//     <p>Lastname : {props.lastname}</p></>)
// }


// function App() {
//   const str = 'hello react!'
//   const number = 5
//   const bool = false
//   const nullValue = null
//   const undefinedValue = undefined
//   const obj = { name: 'somchai', b: 2 }
//   const arr = ['john', 2, 'smith', 4]
//   const now = new Date()
//   const showNameFunc = (name) => {
//     return 'my name is ' + name
//   }
//   return (
//     <Display myStr={str} myNumber={number} myBool={bool} myTrueBool myNull={nullValue} myUndefinded={undefinedValue} myObj={obj} myArray={arr} myDate={now} myShowNameFunc={showNameFunc}
//     />
//   );
// }


//Lab 3
// const ProfileFuncComp = (props) => {
//   return (<><p>Firstname : {props.firstname}</p>
//     <p>Lastname : {props.lastname}</p>
//     <div>{props.children}</div></>)
// }

// class ProfileClassComp extends React.Component {
//   render() {
//     return (<><p>Firstname : {this.props.firstname}</p>
//       <p>Lastname : {this.props.lastname}</p>
//       <div>{this.props.children}</div></>)
//   }
// }

// function App() {
//   return (
//     <>
//       <ProfileClassComp firstname="Poppie" lastname="Finney"><h1>Student</h1></ProfileClassComp>
//       <ProfileFuncComp firstname="Hollie" lastname="Chang"><h1>Teacher</h1></ProfileFuncComp>
//     </>
//   );
// }



//Synthetic Event - Target
// const changeForm = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.type, e.target.name);
// }

// const blurForm = (e) => {
//   alert(`You out of Focus with Firstname "${e.target.value}"`)
// }

// function App() {
//   return (
//     <><p>Firstname</p><input type="text" name="firstname" onBlur={blurForm} onChange={changeForm} /></>
//   );
// }


//Event Handler with Parameter
// const people = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Somchai' },
//   { id: 3, name: 'Derp' }
// ]

// const clickButton = (e, name) => {
//   alert(`You click on name "${name}"`)
// }

// function App() {
//   const list = people.map(x => 
//     (<p key={x.id}> name: {x.name} 
//       <span>
//         <input type="button" value="Click" onClick={e => { clickButton(e, x.name) }}></input>
//       </span>
//     </p>))

//   return (
//     <>{list}</>
//   );
// }


/*State คือข้อมูลที่ใช้ภายใน React Component ซึ่งสามารถเปลี่ยนแปลงได้ โดย State  จะมีลักษณะเป็น Object และมีเฉพาะใน Class Component ซึ่งใน Function Component จะมี State Hook ซึ่ง release มาเมื่อ February 2019 
โดยทั้งสองมีโครงสร้างคือเป็น Immutable ไม่สามารถแก้ไขได้โดยตรงแต่สามารถแก้ไขได้โดยผ่าน Function ที่กำหนดไว้เฉพาะ และมีค่ามีการเปลี่ยนแปลงจะทำการ Render ใหม่*/

function App() {

  //useState
  const [member, setMember] = useState({
    name: 'John',
    age: 30,
    skills: [{ id: 1, name: 'React' },
    { id: 2, name: 'NodeJS' }]
  });


  const onChangeAge = () => {
    setMember({ age: 20 });
  }

   return <>
    <p>Name : {member.name}</p>
    <p>Age : {member.age}</p>

    <ul>
      {member.skills && member.skills.map(skill =>
        <li key={skill.id}>{skill.name}</li>)}
    </ul>

    <button onClick={onChangeAge}>change age</button>
  </>
}


export default App;
