import { BsFilePost } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex p-2 pl-0 border-b-2 smallPhone:p-0">
      <div className="flex mt-0 gap-6 w-full justify-end ">
        <button className=" hover:bg-slate-800 rounded-md p-2">
          <FaHome className="hover:cursor-pointer" size={24} color="white" />
        </button>
        <button className=" hover:bg-slate-800 rounded-md p-2">
          <BsFilePost
            className="hover:cursor-pointer"
            size={24}
            color="white"
          />
        </button>
      </div>
    </header>
  );
}
