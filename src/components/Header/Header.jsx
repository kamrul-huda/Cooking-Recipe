import banner from "../../assets/images/chef_1.jpg";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="lexend">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Calories</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
          <a href="#" className="text-2xl font-bold hover:bg-none">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Calories</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <label className="input input-bordered flex items-center rounded-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow round-full
            "
              placeholder="Search"
            />
          </label>
          <a href="#" className="rounded-full text-4xl bg-[#0BE58A] p-2">
            <RiAccountCircleLine />
          </a>
        </div>
      </div>

      <div className="relative mt-5">
        <img
          className="w-full h-full rounded-3xl  bg-gradient-to-l hover:bg-gradient-to-r  before:opacity-10"
          src={banner}
          alt=""
        />

        <div className="w-full h-full  absolute bg-gradient-to-r from-stone-950 via-slate-50 to-stone-950 opacity-10 rounded-3xl top-0 left-0"></div>
        <div className="w-2/3 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-7">
          <h1 className="text-5xl text-white font-bold leading-snug lexend">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="text-xl text-white leading-8">
            Embark on a culinary journey and uncover the art of exceptional
            cooking. From gourmet delights to homey classics, explore flavors
            that inspire
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="btn bg-[#0BE58A] rounded-full text-[#150B2B] hover:bg-[#0BE58A] hover:scale-105 text-xl">
              Explore Now
            </button>
            <button className="btn bg-transparent hover:bg-transparent hover:scale-105 text-white font-semibold text-xl rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
