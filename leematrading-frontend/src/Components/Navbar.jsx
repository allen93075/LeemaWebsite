import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-[#001F3F] text-[#CD7F32] py-4 px-6 flex justify-between items-center fixed w-full top-0 shadow-md z-50">
      <div className="flex space-x-6">
        <Link href="/">
          <span className="text-lg hover:text-white transition-colors cursor-pointer">Home</span>
        </Link>
        {/* <Link href="/shop">
          <span className="text-lg hover:text-white transition-colors cursor-pointer">Shop</span>
        </Link> */}
        {/* <Link href="/about">
          <span className="text-lg hover:text-white transition-colors cursor-pointer">About Us</span>
        </Link> */}
        <Link href="/contact">
          <span className="text-lg hover:text-white transition-colors cursor-pointer">Contact</span>
        </Link>
      </div>
      {/* <div className="flex space-x-4">
        <Link href="/account">
          <span className="cursor-pointer hover:text-white">🔑</span>
        </Link>
        <Link href="/cart">
          <span className="cursor-pointer hover:text-white">🛒 (0)</span>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;