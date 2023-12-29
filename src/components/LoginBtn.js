"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";

function LoginBtn() {
  const session = useSession();
  if (session.status === "loading") {
    return <p className="ml-auto mr-6">Loading ...</p>;
  }
  if (session.status === "unauthenticated") {
    return (
      <div className="flex gap-2 ml-auto mr-6">
        <FaUser fontSize={"1.4rem"} />
        <Link href={"/signin"}>Sign in</Link>
      </div>
    );
  }
  return (
    <div className="ml-auto mr-6">
      <Dropdown
        radius="sm"
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger>
          <div className="flex">
            <FaUser fontSize={"1.4rem"} />
            <p className="ml-1 underline decoration-[1.5]">
              {session.data.user.name}
            </p>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile & Actions" disabledKeys={["profile"]}>
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-12 gap-2 opacity-100"
            >
              <User
                name={session.data.user.name}
                description={session.data.user.email}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "sm",
                  src: `${session.data.user.image}`,
                }}
              />
            </DropdownItem>
          </DropdownSection>

          <DropdownItem
            key="logout"
            startContent={<MdLogout />}
            className="h-12 text-[1.4rem]"
            fontSize="2rem"
          >
            <Button onClick={() => signOut()} color="foreground">
              Log out
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default LoginBtn;
