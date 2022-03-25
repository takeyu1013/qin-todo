import Image from "next/image";
import Link from "next/link";
import { Menu, Divider, Text } from "@mantine/core";

type Props = {
  user: {
    image: string;
  };
};

export const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center px-[196px] h-20 w-full bg-white">
      <Link href="/">
        <a>
          <Image
            src="/QinToDo.svg"
            alt="Qintodoサムネイル"
            width="112px"
            height="24px"
          />
        </a>
      </Link>
      <Menu
        control={
          <button>
            <Image
              src={props.user.image}
              alt="プロフィール画像"
              width="36px"
              height="36x"
            />
          </button>
        }
      >
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<></>}>Settings</Menu.Item>
        <Menu.Item icon={<></>}>Messages</Menu.Item>
        <Menu.Item icon={<></>}>Gallery</Menu.Item>
        <Menu.Item
          icon={<></>}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<></>}>Transfer my data</Menu.Item>,
        <Menu.Item color="red" icon={<></>}>
          Delete my account
        </Menu.Item>
      </Menu>
    </header>
  );
};
