import "./List.scss";
import { remove } from "../../store/todoReducer";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const List = () => {
  const lists = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const listDelete = (payload) => {
    dispatch(remove(payload));
  };
  console.log(lists);
  return (
    <div className="list">
      {lists.map((list) => (
        <div className="item">
          <span>{list}</span>
          <DeleteOutlineOutlinedIcon
            onClick={() => listDelete(list)}
            className="icon"
          />
        </div>
      ))}
    </div>
  );
};

export default List;
