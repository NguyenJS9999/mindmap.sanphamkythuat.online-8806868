"use client";
import { Button, Input } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaGithub, FaRegEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import './login.scss'

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api-social-psi.vercel.app/api/v1/auth/login `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();
      if (response.ok) {
        signIn("credentials", {
          user: JSON.stringify(data),
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="login-component flex flex-col h-[100vh] !z-[199] relative items-center justify-center">
      <h3 className="text-[2.5rem] mb-2 font-semibold">Log In</h3>
      <form
        action=""
        className="w-[500px] mx-auto flex flex-col gap-[1rem]"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          isRequired
          startContent={
            <MdEmail className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
          }
          onChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          variant="bordered"
          isRequired
          startContent={
            <RiLockPasswordFill className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
          }
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FaRegEyeSlash className="text-xl pointer-events-none text-default-400" />
              ) : (
                <FaRegEye className="text-xl pointer-events-none text-default-400" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          onChange={handleChange}
        />
        <Button
          color="danger"
          radius="sm"
          borderRadius="4px"
          size="lg"
          type="submit"
          className="w-full h-12 sign-btn"
        >
          Sign In
        </Button>
        <p className="text-center font-[500]"> OR </p>
        <div>
          <Button
            size="lg"
            color="default"
            variant="bordered"
            className="flex items-center w-full"
            radius="sm"
            onClick={() => {
              signIn("github");
            }}
          >
            <FaGithub fontSize={"1.4rem"} />
            Sign in with Github
          </Button>
        </div>
        <div>
          <Button
            size="lg"
            color="default"
            variant="bordered"
            className="flex items-center w-full"
            radius="sm"
            onClick={() => {
              signIn("google");
            }}
          >
            <FcGoogle fontSize={"1.4rem"} />
            Sign in with Google
          </Button>
        </div>
        <p className="text-center">
          Don't you have account?{" "}
          <Link
            className="text-danger"
            href={"/signup"}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
