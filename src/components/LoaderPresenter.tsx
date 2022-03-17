import type { VFC } from "react";

export const LoaderPresenter: VFC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin h-10 w-10 border-4 border-rose-500 rounded-full border-t-transparent"></div>
    </div>
  );
};
