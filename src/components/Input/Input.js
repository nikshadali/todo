import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/todoReducer";
import "./Input.scss";
const Input = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const handleData = () => {
    if (data) {
      dispatch(add(data));
      setData("");
    }
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Enter....."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleData}>Save</button>
    </div>
  );
};

export default Input;
