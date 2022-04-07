import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { Box, Text, Group } from "@mantine/core";

const props = {
  links: [
    {
      label: "プロフィール",
      link: "#usage",
      order: 0,
    },
    {
      label: "アカウント",
      link: "#position",
      order: 0,
    },
    {
      label: "テーマ",
      link: "#overlays",
      order: 0,
    },
  ],
};

interface TableOfContentsProps {
  links: { label: string; link: string; order: number }[];
  active: string;
}

export function TableOfContents({ links, active }: TableOfContentsProps) {
  const items = links.map((item) => (
    <Box<"a">
      component="a"
      href={item.link}
      onClick={(event) => event.preventDefault()}
      key={item.label}
      className=""
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.md })}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Group mb="xs">
        <Text className="text-gray-400">設定</Text>
      </Group>
      {items}
    </div>
  );
}

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
        <TableOfContents links={props.links} active="" />
      </div>
    </>
  );
};

export default SettingsPage;
