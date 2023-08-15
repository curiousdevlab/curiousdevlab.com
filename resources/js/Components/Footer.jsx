const Footer = ({ children, ...props }) => {
  return (
    <footer className="max-w-4xl m-auto px-4 py-10">
      <div>
        <p className="text-gray-400 pb-3">
          Code highlighting provided by{" "}
          <a className="hover:underline text-white" href="https://torchlight.dev/" target="_blank">
            Torchlight
          </a>
        </p>
        <p className="text-gray-400">Built with React, Inertia, Laravel and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
