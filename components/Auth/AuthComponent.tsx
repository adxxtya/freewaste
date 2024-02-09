"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthComponent = () => {
  return (
    <div className="w-full p-8 h-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h1 className="text-5xl text-center">Whoops!!! 😶‍🌫️</h1>
        <Image
          src="/images/vector/auth.svg"
          alt="Auth"
          width="500"
          height="500"
          className=""
        />
        <h1 className="text-3xl text-center">
          Login to your Account to access this website!
        </h1>
        <div className="flex w-full flex-col md:flex-row md:items-center md:justify-center text-2xl md:space-x-12 my-8 gap-4">
          <div
            onClick={() => signIn()}
            className="py-3 px-10 rounded-sm text-white font-semibold bg-secondary hover:bg-secondary/70"
          >
            Register
          </div>
          <div
            onClick={() => signIn()}
            className="py-3 px-10 rounded-sm text-white font-semibold bg-primary hover:bg-primary/70"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
