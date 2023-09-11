const Footer = ({ children, ...props }) => {
  return (
    <>
      <footer className="max-w-4xl m-auto px-4 py-10">
        <div className="fixed bottom-8 right-10">
          <a
            href="#top"
            className="flex items-center hover:border-gray-500 bg-gray-900 border border-gray-700 px-5 py-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                clipRule="evenodd"
              />
            </svg>
            <span className="block ml-2 text-sm font-bold">Scroll to Top</span>
          </a>
        </div>
        <div>
          <p className="text-gray-400 pb-3">
            Code highlighting provided by{" "}
            <a
              className="hover:underline text-white"
              href="https://torchlight.dev/"
              target="_blank"
            >
              Torchlight
            </a>
          </p>
          <p className="text-gray-400">
            Built with React, Inertia, Laravel and Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
