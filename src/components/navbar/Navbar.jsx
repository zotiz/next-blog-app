"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/post",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const isSession = false;
  const isAdmin = false;

  return (
    <div className="bg-lime-900 w-full">
      <div className="flex justify-between items-center py-4 text-white m-auto w-11/12 h-16">
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="hidden md:flex gap-8 text-sm items-center font-light">
          {menuLink.map((item, index) => (
            <Link
              key={index}
              className={`${
                pathname === item.link
                  ? "bg-white text-lime-900 px-2 py-1 rounded-md"
                  : ""
              }`}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
          {!isSession ? (
            <Link
              className={`${
                pathname === "/login"
                  ? "bg-white text-lime-900 px-2 py-1 rounded-md"
                  : ""
              }`}
              href="/login"
            >
              Login
            </Link>
          ) : (
            <div className="flex gap-8 justify-between items-center">
              {isAdmin && (
                <Link
                  className={`${
                    pathname === "/admin"
                      ? "bg-white text-lime-900 px-2 py-1 rounded-md"
                      : ""
                  }`}
                  href="/admin"
                >
                  Admin
                </Link>
              )}

              <Link
                className={`${
                  pathname === "/logout"
                    ? "bg-white text-lime-900 px-2 py-1 rounded-md"
                    : ""
                }`}
                href="/logout"
              >
                Logout
              </Link>
            </div>
          )}
        </div>

        <div
          onClick={() => setToggle(!toggle)}
          className="md:hidden transition-all relative"
        >
          {!toggle && <i className="bx bx-menu text-3xl "></i>}

          {toggle && <i className="bx bx-x text-3xl"></i>}
        </div>
        {toggle && (
          <div className="w-full max-h-screen flex justify-center items-center gap-6 flex-col text-white absolute top-16 bottom-0 left-0 right-0 bg-lime-600 md:hidden z-50">
            {menuLink.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setToggle(false)}
                className="hover:scale-110 transition-all"
              >
                {item.title}
              </Link>
            ))}
            {!isSession ? (
              <Link
                className="hover:scale-110 transition-all"
                href="/login"
                onClick={() => setToggle(false)}
              >
                Login
              </Link>
            ) : (
              <div className="flex flex-col gap-8 justify-between items-center">
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="hover:scale-110 transition-all"
                  >
                    Admin
                  </Link>
                )}

                <Link href="/logout" className="hover:scale-110 transition-all">
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
