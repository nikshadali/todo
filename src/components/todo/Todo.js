import "./Todo.scss";
import Input from "../Input/Input";
import List from "../list/List";
const todo = () => {
  return (
    <div className="todo">
      <Input />
      <List />
    </div>
  );
};

export default todo;
