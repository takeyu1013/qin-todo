import { ChangeEventHandler, VFC } from "react";
import { Todo } from "./Todo";

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

export const ListItem: VFC<ListItemProps> = ({ todo, toggle }) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.isDone}
        onChange={toggle}
      />
      <span>{todo.label}</span>
    </label>
  );
};
