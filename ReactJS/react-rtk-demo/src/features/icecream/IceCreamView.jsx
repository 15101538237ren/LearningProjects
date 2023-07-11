import { useSelector, useDispatch } from "react-redux";
import { buyIceCream, restock } from "./icecreamSlice";

function IceCreamView() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of IceCream: {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream(1))}>Buy IceCream</button>
      <button onClick={() => dispatch(buyIceCream(5))}>Buy 5 IceCream</button>
      <button onClick={() => dispatch(restock(10))}>Restock</button>
    </div>
  );
}

export default IceCreamView;
