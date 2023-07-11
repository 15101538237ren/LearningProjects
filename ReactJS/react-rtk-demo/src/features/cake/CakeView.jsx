import { useSelector, useDispatch } from "react-redux";
import { buyCake, restock } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(1))}>Buy Cake</button>
      <button onClick={() => dispatch(buyCake(5))}>Buy 5 Cake</button>
      <button onClick={() => dispatch(restock(10))}>Restock</button>
    </div>
  );
}

export default CakeView;
