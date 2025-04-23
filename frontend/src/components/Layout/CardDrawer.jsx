import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CardDrawer = ({ drawerOpen, toggleCartDrawerOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[28rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawerOpen}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="mb-4 text-xl font-semibold">Cart</h2>
        {/* Component for cart content */}
        <CartContents />
      </div>

      {/* Checkout button fixed at the bottom */}
      <div className="sticky bottom-0 p-4 bg-white">
        <button className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
          Checkout
        </button>
        <p className="mt-2 text-sm tracking-tighter text-center text-gray-500">
          Shipping, taxes and discount codes calculated as checkout.
        </p>
      </div>
    </div>
  );
};

export default CardDrawer;
