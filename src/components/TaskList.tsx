import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { VFC } from "react";
import { Task } from "../types/task";
import { TaskItem } from "./TaskItem";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { ScheduleType } from "./TaskHeader";

type TaskListProps = {
  tasks: Task[];
  schedule: ScheduleType;
  taskListForm: UseFormReturnType<{
    tasks: FormList<Task>;
  }>;
  triggerTaskListFormSubmit: () => void;
  handleSubmitToEditTask: ({ tasks }: { tasks: FormList<Task> }) => void;
};

export const TaskList: VFC<TaskListProps> = ({
  tasks,
  schedule,
  taskListForm,
  triggerTaskListFormSubmit,
  handleSubmitToEditTask,
}) => {
  const handleDragEndToReorderTaskList = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (active.id === over.id) return;

    const activeIndex = taskListForm.values.tasks.findIndex(
      (task) => task.id === active.id
    );

    const overIndex = taskListForm.values.tasks.findIndex(
      (task) => task.id === over.id
    );

    taskListForm.reorderListItem("tasks", {
      from: activeIndex,
      to: overIndex,
    });

    triggerTaskListFormSubmit();
  };

  return (
    <DndContext onDragEnd={handleDragEndToReorderTaskList}>
      <SortableContext items={tasks}>
        <ul>
          {tasks.map((task, index) => (
            <li key={task.id}>
              <div className="py-2">
                <TaskItem
                  task={task}
                  schedule={schedule}
                  index={index}
                  taskListForm={taskListForm}
                  triggerTaskListFormSubmit={triggerTaskListFormSubmit}
                  handleSubmitToEditTask={handleSubmitToEditTask}
                />
              </div>
            </li>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};
