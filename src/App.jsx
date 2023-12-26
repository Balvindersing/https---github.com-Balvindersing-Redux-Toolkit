import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddCount } from './store/ReduxStoreSlices'
import ChildComponent from './components/ChildComponent'
function App() {
  //const [count, setCount] = useState(0);
  const useSelectorHook = useSelector(state => {
    console.log(state.value)
    return state.value;
  })
  console.log(useSelectorHook)
  const dispatch = useDispatch();
  const dispatchHandler = (e) => {
    e.preventDefault();
    dispatch(AddCount(1));
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React-Redux-toolKit <br /> [RTK]</h1>
      <div className='card-custom'>
        Parent-Compo`nent
        <div className="card">
          Count Value: {useSelectorHook}
          <br/>
          <button className='button-18' onClick={dispatchHandler}>
            Increment count
          </button>
        </div>
        <hr />
        <div className="card">
          <ChildComponent />
        </div>
      </div>
    </>
  )
}

export default App
