// import { useSelector, useDispatch } from 'react-redux'
// import { initState, create, update, del } from '../Reducer/calculateReducer'

// function Test_Upload() {
  
//   // Get ค่า State
//   const myStore = useSelector(state => state.counter)

//   // ใช้เรียก Actions
//   const dispatch = useDispatch();
  
  
//   const dummyData = [{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}];

//   return (
//     <><h1>{JSON.stringify(myStore)}</h1>
    
//       <input type='button' value="Init" onClick={() => dispatch(initState(dummyData))} />
//       <input type='button' value="Create" onClick={() => dispatch(create({id:myStore.data.length+1,name:'a'}))} />
//       <input type='button' value="Update" onClick={() => dispatch(update({id:1,name:'b'}))} />
//       <input type='button' value="Delete" onClick={() => dispatch(del(1))} />
//     </>
//   );
// }

// export default Test_Upload;