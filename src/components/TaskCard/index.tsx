import type { VFC } from "react";
import Image from "next/image";

import type { TaskHeaderProps } from "../TaskHeader";
import { TaskHeader } from "../TaskHeader";

export const TaskCard: VFC<TaskHeaderProps> = ({ schedule }) => {
  return (
    <div className="pl-6 pt-6">
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
      {/* TODO 新規タスクのコンポーネントに置き換える */}
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
