import type { VFC } from "react";
import Image from "next/image";

import type { ScheduleType } from "../TaskHeader";
import { TaskHeader } from "../TaskHeader";
import { TaskForm } from "../TaskForm";

type Props = {
  schedule: ScheduleType;
};

export const TaskCard: VFC<Props> = ({ schedule }) => {
  return (
    <>
      <div className="pb-4">
        <TaskHeader schedule={schedule} />
      </div>
      {/* TODO タスクリストのコンポーネントに置き換える */}
      <ul>
        <li>
          <div className="flex py-2">
            <div className="w-9 h-6 pr-3">
              <Image
                src="/offCheckedCheckboxIcon.svg"
                alt="O"
                width="24px"
                height="24px"
              />
            </div>
            <p className="text-[#757575] line-through">Next.jsのインストール</p>
          </div>
        </li>
        <li>
          <div className="flex py-2">
            <div className="w-9 h-6 pr-3">
              <Image
                src="/offCheckedCheckboxIcon.svg"
                alt="O"
                width="24px"
                height="24px"
              />
            </div>
            <p>ESLintのインストール</p>
          </div>
        </li>
      </ul>
      <TaskForm />
    </>
  );
};
