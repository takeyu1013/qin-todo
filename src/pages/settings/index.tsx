import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { Text, Group } from "@mantine/core";

const SETTINGS = [
  {
    label: "プロフィール",
    // path: "/profile",
    path: "#",
    icon: "/arrow.svg",
  },
  {
    label: "アカウント",
    // path: "/account",
    path: "#",
    icon: "/arrow.svg",
  },
  {
    label: "テーマ",
    // path: "/theme",
    path: "#",
    icon: "/arrow.svg",
  },
] as const;

const SUPPORTS = [
  {
    label: "プライバシーポリシー",
    // path: "/policy",
    path: "#",
    icon: "/arrow.svg",
  },
  {
    label: "利用規約",
    // path: "/rules",
    path: "#",
    icon: "/arrow.svg",
  },
  {
    label: "お問い合わせ",
    // path: "/question",
    path: "#",
    icon: "/externalLink.svg",
  },
] as const;

type Link = { label: string; path: string; icon: string };

type TableOfContentsProps = Readonly<{
  title: string;
  links: ReadonlyArray<Link>;
}>;

const TableOfContents = ({ title, links }: TableOfContentsProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Group mb="xs">
        <Text className="text-gray-400 font-bold">{title}</Text>
      </Group>
      {links.map(({ label, path, icon }) => (
        <Link key={label} href={path}>
          <a className="py-3 flex justify-between">
            <span className="font-bold">{label}</span>
            <div className="next-image-space-removal-wrapper ">
              <Image src={icon} alt=">" width={22} height={22} />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

const SettingsPage: NextPage = () => {
  return (
    <main className="px-48 py-7">
      <div className="flex justify-between">
        <Link href="/">
          <a className="w-6 next-image-space-removal-wrapper">
            <Image src="/close.svg" alt="x" width={22} height={22} />
          </a>
        </Link>
        <h1 className="font-bold">設定</h1>
        {/* フレックスで配置しやすくするためのダミー要素 */}
        <div className="w-6" />
      </div>
      <TableOfContents title="設定" links={SETTINGS} />
      <TableOfContents title="サポート" links={SUPPORTS} />
    </main>
  );
};

export default SettingsPage;
