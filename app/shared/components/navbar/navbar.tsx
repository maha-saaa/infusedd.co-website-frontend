import Image from "next/image";
import logoBgCream from "@/public/logo-bg-cream.svg";
import logoBgPurple from "@/public/logo-bg-purple.svg";
import logoBgYellow from "@/public/logo-bg-yellow.svg";

type Props = {
  bgColor: number;
};

export default function Navbar({ bgColor }: Props) {
  return (
    <header className="m-6">
      <div className="flex flex-row items-center justify-center sm:justify-between">
        <a className="flex flew-row gap-2 items-center" href="./">
          <Image
            src={
              bgColor === 0
                ? logoBgCream
                : bgColor === 1
                ? logoBgPurple
                : logoBgYellow
            }
            width={52}
            height={21}
            alt="website logo"
          />
          <p className="font-extrabold">infusedd.co</p>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a className="font-medium">Services</a>
          <a className="font-medium">Portfoilio</a>
          <a className="font-medium">Review</a>
          <a className="font-medium">team</a>
          <a className="font-medium">FAQ</a>
        </nav>
        <button className="bg-black rounded-3xl h-11 px-5 hidden sm:flex sm:items-center sm:justify-center">
          <p className="text-white text-sm font-bold">How to start</p>
        </button>
      </div>
    </header>
  );
}
