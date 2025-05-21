import Bounded from "@/component/Bounded";

const Projects = () => {
  return (
    <Bounded>
      <div
        id="projects"
        className="flex flex-col items-center justify-center text-center h-screen bg-gray-100 dark:bg-gray-900 p-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Here are some of the projects I have worked on.
        </p>
      </div>
    </Bounded>
  );
};

export default Projects;
