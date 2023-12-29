import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const footerCSS = {
  footer: "w-100 bg-[#f3f4f6] pb-5",
  container: "container max-w-7xl xl:mx-auto",
  footerUp: "flex py-12",
  itemTop: "min-w-[240px]",
  h3: "text-xl font-bold",
  ul: "mt-5 flex flex-col gap-y-2",
  link: "text-200 hover:text-primary-200 hover:border-200 hover:border-b",
  footerDown: "py-12 flex",
  itemBottom: "px-4",
  h4: "font-bold",
  p: "text-200",
};
export default function Footer() {
  return (
    <footer className={`${footerCSS.footer}`}>
      <div className={`${footerCSS.container}`}>
        <div className={`${footerCSS.footerUp}`}>
          {/* Item 1  */}
          <div className={`${footerCSS.itemTop}`}>
            <h3 className={`${footerCSS.h3}`}>Features</h3>
            <ul className={`${footerCSS.ul}`}>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Cool stuff
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Random feature
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Team feature
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Stuff for developers
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Another one
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Last time
                </Link>
              </li>
            </ul>
          </div>
          {/* Item 2  */}
          <div className={`${footerCSS.itemTop}`}>
            <h3 className={`${footerCSS.h3}`}>Resources</h3>
            <ul className={`${footerCSS.ul}`}>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Resource
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Resource name
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Another resource
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          {/* Item 3  */}
          <div className={`${footerCSS.itemTop}`}>
            <h3 className={`${footerCSS.h3}`}>About</h3>
            <ul className={`${footerCSS.ul}`}>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Team
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Locations
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* Item 4  */}
          <div className={`${footerCSS.itemTop}`}>
            <h3 className={`${footerCSS.h3}`}>Help</h3>
            <ul className={`${footerCSS.ul}`}>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Support
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href={"#"} className={`${footerCSS.link}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Item 5  */}
          <div className={`${footerCSS.itemTop} ml-auto`}>
            <h3 className={`${footerCSS.h3}`}>Stay connected</h3>
            <ul className={`flex mt-5 gap-x-3`}>
              <li>
                <Link
                  href={"#"}
                  className={`border-2 border-[#aaa] rounded-full p-1.5 block text-xl text-200 hover:bg-accent-400 hover:text-300 hover:border-300`}
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`border-2 border-[#aaa] rounded-full p-1.5 block text-xl text-200 hover:bg-accent-400 hover:text-300 hover:border-300`}
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`border-2 border-[#aaa] rounded-full p-1.5 block text-xl text-200 hover:bg-accent-400 hover:text-300 hover:border-300`}
                >
                  <FaGooglePlusG />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={`${footerCSS.footerDown}`}>
          <div className={`${footerCSS.itemBottom} md:w-1/6`}>
            <h4 className={`${footerCSS.h4}`}>Mindmap Flow</h4>
          </div>
          <div className={`${footerCSS.itemBottom} md:w-1/4`}>
            <h4 className={`${footerCSS.h4}`}>Address</h4>
            <p className={`${footerCSS.p}`}>
              123 6th St. <br />
              Melbourne, FL 32904
            </p>
          </div>
          <div className={`${footerCSS.itemBottom} md:w-1/3`}>
            <h4 className={`${footerCSS.h4}`}>Free Resources</h4>
            <p className={`${footerCSS.p}`}>
              Use our HTML blocks for <b>FREE</b>. <br /> All are MIT License
            </p>
          </div>
          <div className={`${footerCSS.itemBottom} mx-auto`}>
            <button
              type="button"
              className={`bg-accent-500 text-300 px-4 py-2 rounded-md`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
