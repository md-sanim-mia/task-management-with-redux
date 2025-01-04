import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Redux/features/counter/counterSlice";
import { useAppSelector } from "./Redux/hooks";
import { Button } from "./components/ui/button";

function App() {
  const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state?.counter);

  const handileClickIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handileClickDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div>
        <h2>counter with redux</h2>

        <Button onClick={() => handileClickIncrement(5)}>Increment by 5</Button>
        <Button onClick={() => handileClickIncrement(1)}>Increment</Button>
        <div>{count}</div>
        <Button onClick={handileClickDecrement}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
