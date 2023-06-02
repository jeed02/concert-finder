"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="w-full mb-16 py-6 border-b-2 border-main-200 px-16">
      {/* Desktop Nav */}
      <div className="flex items-center justify-between md:flex hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={49}
            alt="Logo"
            className=""
          ></Image>
        </Link>
        <div className="flex gap-5">
          <Link href="/">
            <h1 className="text-md text-main-200 font-medium">LIVE STREAMS</h1>
          </Link>
          <Link href="/">
            <h1 className="text-md text-main-200 font-medium">
              CONCERTS NEAR YOU
            </h1>
          </Link>
          <Link href="/">
            <h1 className="text-md text-main-200 font-medium">FESTIVALS</h1>
          </Link>
        </div>
        {session?.user ? (
          <div className="flex gap-5 items-center">
            <Link href="/" onClick={() => signOut()}>
              <h1 className="text-md underline font-bold">SIGN OUT</h1>
            </Link>
            <Link href="/profile">
              <Image
                src={session.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Link
                  href="/"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  <h1 className="text-md underline font-bold">REGISTER</h1>
                </Link>
              ))}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="flex items-center justify-between md:hidden flex relative">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={49}
            alt="Logo"
            className=""
          ></Image>
        </Link>
        <RxHamburgerMenu
          size={30}
          color="white"
          className="cursor-pointer"
          onClick={() => setToggleDropdown((prev) => !prev)}
        ></RxHamburgerMenu>
        {toggleDropdown && (
          <div className="absolute mt-72 w-full py-5 bg-offwhite border-main-200 border-2 min-w-[210px] flex flex-col gap-3 justify-end items-end text-offblack md:hidden ">
            <Link href="/" onClick={() => setToggleDropdown(!toggleDropdown)}>
              <h1 className="text-md text-white font-medium mr-3 border-b-2 border-main-200 hover-main-200">
                LIVE STREAMS
              </h1>
            </Link>
            <Link href="/" onClick={() => setToggleDropdown(!toggleDropdown)}>
              <h1 className="text-md text-white font-medium mr-3 border-b-2 border-main-200 hover-main-200">
                CONCERTS NEAR YOU
              </h1>
            </Link>
            <Link href="/" onClick={() => setToggleDropdown(!toggleDropdown)}>
              <h1 className="text-md text-white font-medium mr-3 border-b-2 border-main-200 hover-main-200">
                FESTIVALS
              </h1>
            </Link>
            {session?.user ? (
              <Link
                href="/"
                onClick={() => {
                  setToggleDropdown(!toggleDropdown);
                  signOut();
                }}
              >
                <h1 className="">SIGN OUT</h1>
              </Link>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <Link
                      href="/"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      <h1 className="text-md text-white font-medium mr-3 border-b-2 border-main-200 hover-main-200 font-bold">
                        REGISTER
                      </h1>
                    </Link>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
