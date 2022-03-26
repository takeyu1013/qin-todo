import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mantine/core";

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
        <Menu.Item
          icon={
            <Image src="/settings.svg" alt="設定" width="22px" height="22px" />
          }
        >
          設定
        </Menu.Item>
        <Menu.Item
          color="red"
          icon={
            <Image
              src="/logout.svg"
              alt="ログアウト"
              width="22px"
              height="22px"
            />
          }
        >
          ログアウト
        </Menu.Item>
      </Menu>
    </header>
  );
};
