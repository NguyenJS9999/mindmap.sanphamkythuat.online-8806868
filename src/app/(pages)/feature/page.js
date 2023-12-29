import React from "react";
import { FaBolt } from "react-icons/fa6";

export const metadata = {
  title: 'Tính năng',
  description: 'Tính năng mindmap',
  // openGraph: {
  //   title: 'Price list | Mindmap',
  //   description: 'Bảng giá mindmap',
  // },
}
function FeaturePage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="text-center">
        <h1 className=" text-4xl font-semibold">Features</h1>
        <p className="text-xl max-w-3xl mx-auto mt-3">
          The main aim of creating Mindmap Flow blocks is to help designers, developers
          and agencies create websites and web apps quickly and easily. Each and
          every block uses minimal custom styling and is based on the utility
          first Tailwind framework.
        </p>
        <button
          type="button"
          className="border-2 border-100 rounded-md px-12 py-2 text-xl mt-8 text-primary-100 hover:text-300 transition-colors hover:bg-accent-100"
        >
          Learn More
        </button>
      </div>
      <div className="flex mt-12 gap-x-11">
        <div className="flex-1 border-[#ddd] border-2 rounded text-center p-10 flex flex-col gap-y-5">
          <span className=" text-primary-100 text-xl w-fit mx-auto block">
            <FaBolt />
          </span>
          <h5 className="text-xl font-semibold">Fresh Design</h5>
          <p className="text-200">
            Mindmap Flow blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>
        <div className="flex-1 border-[#ddd] border-2 rounded text-center p-10 flex flex-col gap-y-5">
          <span className=" text-primary-100 text-xl w-fit mx-auto block">
            <FaBolt />
          </span>
          <h5 className="text-xl font-semibold">Fresh Design</h5>
          <p className="text-200">
            Mindmap Flow blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>
        <div className="flex-1 border-[#ddd] border-2 rounded text-center p-10 flex flex-col gap-y-5">
          <span className=" text-primary-100 text-xl w-fit mx-auto block">
            <FaBolt />
          </span>
          <h5 className="text-xl font-semibold">Fresh Design</h5>
          <p className="text-200">
            Mindmap Flow blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturePage