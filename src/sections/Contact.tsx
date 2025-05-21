import Bounded from "@/component/Bounded";

const Contact = () => {
  return (
    <Bounded>
      <div
        id="contact"
        className="flex flex-col items-center justify-center text-center h-screen bg-gray-100 dark:bg-gray-900 p-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          Contact Me
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          I would love to hear from you! Feel free to reach out via email or
          social media.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          You can contact me at{" "}
          <a
            href="mailto:saikumarrachakonda@email.com"
            className="text-blue-500 hover:underline"
          >
            mail
          </a>{" "}
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/saikumar305"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
        </p>
      </div>
    </Bounded>
  );
};

export default Contact;
