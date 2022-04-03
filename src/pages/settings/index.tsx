import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

const SettingsPage: NextPage = () => {
  return (
    <>
      <div className="px-48 py-7">
        <div className="flex justify-between">
          <Link href="/">
            <a className="w-6 next-image-space-removal-wrapper">
              <Image src="/close.svg" alt="x" width={22} height={22} />
            </a>
          </Link>
          <h1 className="font-bold">設定</h1>
          <div className="w-9" />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
