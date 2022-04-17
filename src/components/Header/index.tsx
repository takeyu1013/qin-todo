import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { VFC } from "react";
import { Auth } from "@supabase/ui";
import { supabase } from "../../../utils/supabaseClient";

export const Header: VFC = () => {
  const { user } = Auth.useUser();

  const menuItemClass = "font-bold px-6 py-3";
  const dummyAvatarImage = "https://i.pravatar.cc/36";

  return (
    <header className="flex justify-between items-center px-[196px] h-20 w-full bg-white">
      <Link href="/">
        <a className="next-image-space-removal-wrapper">
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
          <div className="next-image-space-removal-wrapper">
            <Image
              src={user?.user_metadata?.avatar_url || dummyAvatarImage}
              alt="プロフィール画像"
              width="36px"
              height="36px"
              layout="fixed"
              objectFit="contain"
            />
          </div>
        }
      >
        <Link href="/settings">
          <a>
            <Menu.Item
              className={menuItemClass}
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
          </a>
        </Link>
        <Menu.Item
          className={menuItemClass}
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
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          ログアウト
        </Menu.Item>
      </Menu>
    </header>
  );
};
