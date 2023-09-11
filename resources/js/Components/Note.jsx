const Note = ({ title, children })  => {
  return (
    <div className="border-2 rounded-md w-full min-w-0 px-2 md:px-2 max-w-prose sm:max-w-none pb-[12px] border-yellow-500 my-12">
      <div className="flex text-yellow-500 -mt-4">
        <div className="flex flex-row items-center px-4 bg-[#0f1218] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            ></path>
          </svg>
          <span className="ml-2 text-sm font-semibold">{ title ?? 'Note'}</span>
        </div>
      </div>
      <div className="px-4 py-1 react-note-block">{children}</div>
    </div>
  );
}

export default Note;