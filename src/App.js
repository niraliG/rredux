
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { decr, incr, reset } from "./redux/general/action";
import { login, logout } from "./redux/auth/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <p>
        my value ---{">"} <b>{counter}</b>
      </p>
      <hr />
      {console.log("authh--->", auth)}
      {auth && <div>
        <button onClick={() => dispatch(incr())}>increment here</button>
        <button onClick={() => dispatch(reset())}>reset here</button>
        <button onClick={() => dispatch(decr())}>decrement here</button>
      </div>}
      please login to use the feature
      <button onClick={() => dispatch(login())}>click to login</button>
      <button onClick={() => dispatch(logout())}>click to logout</button>
    </>
  );
}

export default App;
