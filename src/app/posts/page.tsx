import Image from "next/image";
import { linkedinData } from "../../../request";
import Footer from "../components/footer";
import Header from "../components/header";
import { BsFilePost } from "react-icons/bs";

export default async function Posts() {
  const profileData = await linkedinData();

  return (
    <div className="flex flex-col min-h-screen p-8 pt-0 font-[family-name:var(--font-geist-sans)] bg-slate-900 smallPhone:p-2 smallPhone:pb-6">
      <Header />

      <h1 className="flex text-white font-extrabold text-4xl mt-4">
        <BsFilePost className="mr-4 mb-4" /> Projetos
      </h1>

      <div className="grid pb-11 md:grid-cols-3 gap-4 1100:md:grid-cols-2">
        {profileData.projects.items.map((project) => (
          <div
            key={project.title}
            className="p-4 border-solid border-2 border-gray-400 rounded-md"
          >
            <div className="flex gap-4 mb-4">
              <Image
                alt="profile image"
                src={profileData && profileData.profilePicture}
                width={90}
                height={120}
                className="rounded-lg"
              />
              <div>
                <h1 className="flex text-gray-200 text-2xl font-bold text-2xl">{`${profileData.firstName} ${profileData.lastName}`}</h1>

                <h1 className="text-gray-400 font-bold">{project.title}</h1>
              </div>
            </div>
            <div className="flex text-gray-400 pr-2 max-h-[140px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-width-extra-thin">
              {project.description}
            </div>

            <a
              href={`https://github.com/GuiOrlandin/${project.title}`}
              className="flex font-bold text-white justify-end mt-4 hover:text-gray-400"
            >
              Link para o repositório do projeto no GitHub
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
