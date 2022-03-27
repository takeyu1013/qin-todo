import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mantine/core";

type Props = {
  user: {
    image: string;
  };
};

export const Header = (props: Props) => {
  const className = "font-bold px-6 py-3";

  return (
    <header className="flex justify-between items-center px-[196px] h-20 w-full bg-white">
      <Link href="/">
        <a>
          <Image
            src="/QinToDo.svg"
            alt="Qintodoサムネイル"
            width="112px"
            height="24px"
            layout="fixed"
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
              height="36px"
              layout="fixed"
              objectFit="contain"
            />
          </button>
        }
      >
        <Menu.Item
          className={className}
          icon={
            <div className="next-image-space-removal-wrapper">
              <Image
                src="/settings.svg"
                alt="設定"
                width="22px"
                height="22px"
                layout="fixed"
              />
            </div>
          }
        >
          設定
        </Menu.Item>
        <Menu.Item
          className={className}
          color="red"
          icon={
            <div className="next-image-space-removal-wrapper">
              <Image
                src="/logout.svg"
                alt="ログアウト"
                width="22px"
                height="22px"
                layout="fixed"
              />
            </div>
          }
        >
          ログアウト
        </Menu.Item>
      </Menu>
    </header>
  );
};
