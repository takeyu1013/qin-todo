import Image from "next/image";
import Link from "next/link";

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
      <Link href="#">
        <a>
          <Image
            src={props.user.image}
            alt="プロフィール画像"
            width="36px"
            height="36x"
            objectFit="contain"
          />
        </a>
      </Link>
    </header>
  );
};
