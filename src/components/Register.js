"use client";
import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
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
        `https://api-social-psi.vercel.app/api/v1/auth/register `,
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
        toast.success("Signup success!");
        router.push("/signin");
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
    <div className="flex flex-col h-[100vh] bg-primary !z-[199] relative items-center justify-center">
      <h3 className="text-[2.5rem] mb-2 font-semibold">Register</h3>
      <form
        action=""
        className="w-[500px] mx-auto flex flex-col gap-[1rem]"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          isRequired
          startContent={
            <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
          }
          onChange={handleChange}
        />
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
          radius="sm"
          size="lg"
          type="submit"
          className="w-full h-12"
          color="danger"
        >
          Sign Up
        </Button>
        <p className="text-center">
          Do you have account?{" "}
          <Link
            href={"/signin"}
            className="text-danger"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
