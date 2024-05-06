import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center flex-col lg:flex-row mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center gap-2">
              <i className="ri-qr-code-line text-3xl text-blue-600"></i>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white tracking-wide">
                PlayWith<span className='text-blue-500 font-extrabold'>QRCode</span>
              </span>
            </a>
            <div className='flex gap-3 mt-2 lg:mt-0'>
              <div className="flex items-center lg:order-2">
                <Link
                  href="/pages/qrCodeGenerator"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Generate
                </Link>
              </div>
              <div className="flex items-center lg:order-2">
                <Link
                  href="/pages/qrCodeScanner"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Scan
                </Link>
              </div>
              <div className="flex items-center lg:order-2">
                <Link
                  href="#"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
