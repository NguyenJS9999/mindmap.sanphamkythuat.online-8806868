import Image from "next/image";
import React from "react";

export const metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu mindmap',
  // openGraph: {
  //   title: 'Price list | Mindmap',
  //   description: 'Bảng giá mindmap',
  // },
}

function IntroducePage() {
  return (
    <div
      className={`container xl:mx-auto max-w-7xl py-12 flex flex-col gap-y-12`}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-200 mt-3 pr-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="relative w-full lg:w-8/12 h-[450px] bg-[#aaa] rounded-lg">
          <Image
            src={"https://i.ibb.co/FhgPJt8/Rectangle-116.png"}
            fill
            sizes="100%"
            alt="about"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-200 mt-3 pr-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="relative w-full lg:w-8/12 shadow-lg rounded-md flex gap-x-10 max-h-[350px] p-3">
          <div className="relative flex-1 max-w-[250px] h-[180px]">
            <Image
              src={"https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"}
              fill
              sizes="100%"
              alt="about"
            />
          </div>
          <div className="relative flex-1 max-w-[250px] h-[180px]">
            <Image
              src={"https://i.ibb.co/fGmxhVy/Rectangle-119.png"}
              fill
              sizes="100%"
              alt="about"
            />
          </div>
          <div className="relative flex-1 max-w-[250px] h-[180px]">
            <Image
              src={"https://i.ibb.co/Pc6XVVC/Rectangle-120.png"}
              fill
              sizes="100%"
              alt="about"
            />
          </div>
          <div className="relative flex-1 max-w-[250px] h-[180px]">
            <Image
              src={"https://i.ibb.co/7nSJPXQ/Rectangle-121.png"}
              fill
              sizes="100%"
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
