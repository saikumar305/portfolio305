import Bounded from "@/component/Bounded";

const Skills = () => {
  return (
    <Bounded>
      <div
        id="skills"
        className="flex flex-col items-center justify-center text-center h-screen bg-gray-100 dark:bg-gray-900 p-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          My Skills
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Here are some of the skills I have acquired over the years.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"></div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Frontend Development
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          I have experience with HTML, CSS, and JavaScript frameworks like React
          and Vue.js.
        </p>
      </div>
    </Bounded>
  );
};

export default Skills;
