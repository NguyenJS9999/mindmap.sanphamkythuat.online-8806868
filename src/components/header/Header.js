"use client";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import { signOut,  } from "next-auth/react"; // useSession
import './header.scss'
import { Fragment, useEffect, useState } from "react";

function Header({session}) {
  const pathname = usePathname();
	// const [ didLogin, setDidLogin ] = useState(false);

	useEffect(() => {
	}, []);

	function handleSignOut() {
		console.log('handleSignOut');
		signOut();
		redirect('/api/auth/login');
	}


  return (
		<>
			<div className="header-component">

				<div>
					<Link href={"/"} className="header-logo">Mindmap Flow</Link>
				</div>

				<div className="header-right flex justify-center items-center gap-[1rem]">

					<div className="header-menu-tabs">
						{/* <Link	href={"/gallery"}	className={`${pathname === "/gallery" && "active"}`} >Thư viện</Link> */}

						<Link	href={"/"}	className={`${pathname === "/" && "active"}`} >Trang chủ</Link>
						<Link	href={"/introduce"}	className={`${pathname === "/introduce" && "active"}`} >Giới thiệu</Link>
						<Link	href={"/feature"}	className={`${pathname === "/feature" && "active"}`} >Tính năng</Link>
						<Link	href={"/price-list"} className={`${pathname === "/price-list" && "active"}`} >Bảng giá</Link>
						<Link	href={"/contact"}	className={`${pathname === "/contact" && "active"}`} >Liên hệ</Link>
					</div>

					<div className="header-auth">

						{/* {description={session?.data?.user?.email} */}

						{ session &&
							<Fragment>
								<span className="active-hover">{session?.user?.name}</span>
								<Link	href={"/my-mindmap"}	className={`active-hover ${pathname === "/register" && "active"}`} >Mindmap</Link>
								<button onClick={handleSignOut} className="active">Đăng xuất</button>
							</Fragment>
						}

						{ !session &&
							<Fragment>
								<Link	href={"/signin"} className={`${pathname === "/signin" && "active"}`} >Đăng nhập</Link>
								<Link	href={"/signin"}	className={`${pathname === "/signin" && "active"}`} >Đăng kí</Link>
							</Fragment>
						}

					</div>

				</div>


				{/* <Search/> */}
				{/* <LoginBtn /> */}
			</div>
		</>
  );
}

export default Header;
