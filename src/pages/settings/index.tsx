import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { createStyles, Box, Text, Group } from "@mantine/core";

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

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.md,
    fontWeight: "bold",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 6 : 7],
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 2 : 7],

    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

interface TableOfContentsProps {
  links: { label: string; link: string; order: number }[];
  active: string;
}

export function TableOfContents({ links, active }: TableOfContentsProps) {
  const { classes, cx } = useStyles();
  const items = links.map((item) => (
    <Box<"a">
      component="a"
      href={item.link}
      onClick={(event) => event.preventDefault()}
      key={item.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
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
