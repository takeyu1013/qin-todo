import type { VFC } from "react";
import Image from "next/image";

import type { ScheduleType } from "../TaskHeader";
import { TaskHeader } from "../TaskHeader";

type Props = {
  schedule: ScheduleType;
};

export const TaskCard: VFC<Props> = ({ schedule }) => {
  return (
    <div className="pt-6">
      <div className="pb-4">
        <TaskHeader schedule={schedule} />
      </div>
      {/* TODO タスクリストのコンポーネントに置き換える */}
      <ul>
        <li>
          <div className="flex py-2">
            <div className="w-9 h-6 pr-3">
              <Image
                src="/EmptyCheckboxIcon.svg"
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
                src="/EmptyCheckboxIcon.svg"
                alt="O"
                width="24px"
                height="24px"
              />
            </div>
            <p>ESLintのインストール</p>
          </div>
        </li>
      </ul>
      {/* TODO <TaskForm>に置き換える */}
      <div className="flex py-2">
        {/* TODO チェックボックスコンポーネントに置き換える */}
        <div className="w-9 h-6 pr-3">
          <Image src="/PlusIcon.svg" alt="+" width="24px" height="24px" />
        </div>
        {/* TODO 入力エリアのコンポーネントに置き換える */}
        <input className="outline-none" placeholder="タスクを追加する" />
      </div>
    </div>
  );
};
