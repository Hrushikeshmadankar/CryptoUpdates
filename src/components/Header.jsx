export const Header = () => {
  return (
    <header className="top-0 z-[1] flex text-center w-full items-center justify-between px-[30px] font-sans bg-[#111827] text-white h-20">
      <div className="flex items-center ml-auto mr-auto">
        <a href="/">
          <p className="font-bold text-2xl">
            <span className="text-yellow-500">C</span>ypto
            <span className="text-yellow-500">U</span>pdates
          </p>
        </a>
      </div>
    </header>
  );
};

export default Header;
