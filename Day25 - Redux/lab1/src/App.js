import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setDefault } from './calculateReducer'
import { Kan, Kon, SIlapakarn } from './addString'

function App() {
  // Get ค่า State
  const count = useSelector(state => state.counter)
  const YYY = useSelector(state => state.addString)
  // ใช้เรียก Actions
  const dispatch = useDispatch()

  return (
    <><h1>{count.salary}</h1>
      <input type='button' value="Increase Salary" onClick={() => dispatch(increment())} />
      <input type='button' value="Decreate Salary" onClick={() => dispatch(decrement())} />
      <input type='button' value="Default Salary" onClick={() => dispatch(setDefault())} />
      <hr/>
      <h1>{YYY.name}</h1>
      <input type='button' value="Kan" onClick={() => dispatch(Kan())} />
      <input type='button' value="Kon" onClick={() => dispatch(Kon())} />
      <input type='button' value="SIlapakarn" onClick={() => dispatch(SIlapakarn())} />
    </>
  );
}

export default App;
