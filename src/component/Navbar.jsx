// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import avatarImg from "../assets/hero-carosel/user.jpg";
// import { useLogoutUserMutation } from "../redux/features/auth/authApi";
// import { logout } from "../redux/features/auth/authSlice";

// const navLists = [
//   { name: "Home", path: "/" },
//   { name: "About us", path: "/about-us" },
//   { name: "Privacy Policy", path: "/privacy-policy" },
//   { name: "Contact Us", path: "/contact-us" },
// ];
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   console.log(user);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const dispatch = useDispatch();
//   const [logoutUser] = useLogoutUserMutation();

//   const handleLogout = async () => {
//     try {
//       await logoutUser().unwrap();
//       dispatch(logout());
//     } catch (error) {}
//   };
//   return (
//     <>
//       <header className="bg-white py-6 border">
//         <nav className="container mx-auto flex justify-between px-5 ">
//           <a href="/">
//             <img src="/hotel.jpeg" alt="" className="h-12" />
//           </a>
//           <ul className="sm:flex hidden items-center gap-8">
//             {navLists.map((list, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={`${list.path}`}
//                   className={({ isActive }) => (isActive ? "active" : "")}
//                 >
//                   {list.name}
//                 </NavLink>
//               </li>
//             ))}

//             {/* render btn based on user login activity */}
//             {user && user.role === "user" ? (
//               <li className="flex items-center gap-3">
//                 <img src={avatarImg} alt="" className="size-8" />
//                 <button
//                   className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <li>
//                 <NavLink to="/login">Login</NavLink>
//               </li>
//             )}

//             {user && user.role === "admin" && (
//               <li className="flex items-center gap-3">
//                 <img src={avatarImg} alt="" className="size-8" />
//                 <Link to="/dashboard">
//                   <button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm">
//                     Dashboard
//                   </button>
//                 </Link>
//               </li>
//             )}
//           </ul>

//           {/* toggle menu */}
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={toggleMenu}
//               className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
//             >
//               {isMenuOpen ? (
//                 <IoClose className="size-6" />
//               ) : (
//                 <IoMenu className="size-6" />
//               )}
//             </button>
//           </div>
//         </nav>

//         {/* mobile menu */}
//         {isMenuOpen && (
//           <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
//             {navLists.map((list, index) => (
//               <li className="mt-5 px-4" key={index}>
//                 <NavLink
//                   onClick={() => setIsMenuOpen(false)}
//                   to={`${list.path}`}
//                   className={({ isActive }) => (isActive ? "active" : "")}
//                 >
//                   {list.name}
//                 </NavLink>
//               </li>
//             ))}
//             <li className="px-4 mt-5">
//               <NavLink to="/login">Login</NavLink>
//             </li>
//           </ul>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import avatarImg from "../assets/hero-carosel/user.jpg";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {}
  };

  return (
    <>
      <header className="relative font-sans">
        <div className="absolute inset-0 backdrop-blur-lg opacity-80"></div>

        <nav className="relative container mx-auto flex justify-between px-5 items-center bg-white/50 shadow-xl backdrop-blur-lg py-5 border-b border-gray-300 rounded-b-lg">
          <a href="/">
            <img
              src="/hotel.jpeg"
              alt="Logo"
              className="h-12 rounded-lg shadow-lg"
            />
          </a>

          <ul className="sm:flex hidden items-center gap-8">
            {navLists.map((list, index) => (
              <li key={index}>
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-700 font-semibold font-serif transition duration-300"
                      : "text-gray-500 hover:text-gray-700 font-serif transition duration-300"
                  }
                >
                  {list.name}
                </NavLink>
              </li>
            ))}

            {user && user.role === "user" ? (
              <li className="flex items-center gap-3">
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="size-8 rounded-full shadow-md border-gray-400"
                />
                <button
                  className="bg-gray-600 px-4 py-1.5 text-white font-serif font-semibold rounded-md shadow-lg hover:bg-gray-500 transition-all duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="text-gray-500 hover:text-gray-700 transition duration-300 font-serif font-semibold"
                >
                  Login
                </NavLink>
              </li>
            )}

            {user && user.role === "admin" && (
              <li className="flex items-center gap-3">
                <img
                  src={avatarImg}
                  alt="Admin Avatar"
                  className="size-8 rounded-full shadow-md border-gray-400"
                />
                <Link to="/dashboard">
                  <button className="bg-gray-600 px-4 py-1.5 text-white font-serif font-semibold rounded-md shadow-lg hover:bg-gray-500 transition-all duration-300">
                    Dashboard
                  </button>
                </Link>
              </li>
            )}
          </ul>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-4 bg-gray-100 rounded-lg text-gray-700 shadow-md hover:text-gray-900 transition duration-300"
            >
              {isMenuOpen ? (
                <IoClose className="size-6" />
              ) : (
                <IoMenu className="size-6" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white/80 shadow-lg backdrop-blur-lg z-50">
            {navLists.map((list, index) => (
              <li className="mt-5 px-4" key={index}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to={list.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-700 font-semibold font-serif transition duration-300"
                      : "text-gray-500 hover:text-gray-700 font-serif transition duration-300"
                  }
                >
                  {list.name}
                </NavLink>
              </li>
            ))}
            <li className="px-4 mt-5">
              <NavLink
                to="/login"
                className="text-gray-500 hover:text-gray-700 transition duration-300 font-serif font-semibold"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
