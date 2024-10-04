"use client";

import { useRouter } from "next/navigation";
import { BsFilePost } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex p-2 pl-0 border-b-2 smallPhone:p-0">
      <div className="flex mt-0 gap-2 w-full justify-end ">
        <button className=" hover:bg-slate-800 rounded-md p-2">
          <FaHome
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
            size={24}
            color="white"
          />
        </button>
        <button className=" hover:bg-slate-800 rounded-md p-2">
          <BsFilePost
            onClick={() => router.push("/posts")}
            className="hover:cursor-pointer"
            size={24}
            color="white"
          />
        </button>
      </div>
    </header>
  );
}
