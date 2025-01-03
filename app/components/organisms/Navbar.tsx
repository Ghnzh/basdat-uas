import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed bottom-6 right-0 left-0 flex justify-center shadow-lg lg:space-x-3 space-x-2">
      <div className="bg-[#121212] flex justify-center items-center p-2 rounded-xl text-center font-light gap-x-2 cursor-pointer text-[#eaeaea]">
        <Link
          href={"/books"}
          className="hidden lg:block p-[12px] border-[0.5px] border-[#212121] hover:border-[#f4f4f4] rounded-lg"
        >
          Beranda
        </Link>

        <Link
          href={"/books/create"}
          className="p-[12px] border-[0.5px] border-[#212121] hover:border-[#f4f4f4] rounded-lg"
        >
          Buat Data Baru
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
