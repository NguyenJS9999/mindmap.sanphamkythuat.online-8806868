import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export const metadata = {
	title: 'Bảng giá',
	description: 'Bảng giá mindmap'
	// openGraph: {
	//   title: 'Contact | Mindmap',
	//   description: 'Bảng giá mindmap',
	// },
};
function PricePage() {
	return (
		<div className="max-w-7xl mx-auto py-12">
			<div className="text-center">
				<h1 className="text-5xl font-semibold">
					<span className=" text-primary-100">Flexible</span> Plans
				</h1>
				<p className=" text-xl text-200 font-semibold mt-7 max-w-sm mx-auto">
					Choose a plan that works best for you and your team.
				</p>
			</div>
			<div className="mt-12 max-w-6xl mx-auto flex flex-row items-center">
				{/* Item 1 */}
				<div className="flex-1 p-9 shadow-xl rounded-s-3xl flex flex-col gap-y-7 relative z-0">
					<div className="flex-1 flex gap-x-5">
						<div className="relative w-20 h-20 rounded-3xl overflow-hidden">
							<Image
								src={
									'https://res.cloudinary.com/williamsondesign/abstract-1.jpg'
								}
								fill
								sizes="100%"
								alt="price"
							/>
						</div>
						<div>
							<h5 className="text-2xl font-semibold">Basic</h5>
							<p className="text-3xl font-bold">
								<span className="text-200 text-[20px] font-semibold align-top inline-block">
									$
								</span>
								10
								<span className="text-200 text-[18px] font-semibold">
									/ user
								</span>
							</p>
						</div>
					</div>

					<hr />

					<div className="text-200 font-medium text-xl flex flex-col gap-y-3">
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							Get started with
							<span className="text-100">messaging</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							Flexible
							<span className="text-100">team meetings</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							<span className="text-100">5 TB</span> cloud storage
						</p>
					</div>
					<Link
						href={'#'}
						className="text-300 text-xl bg-accent-100 block py-4 text-center rounded-xl"
					>
						Choose Plan
						<IoIosArrowRoundForward className=" inline-block text-2xl align-middle" />
					</Link>
				</div>
				{/* Item 2 */}
				<div className="flex-1 p-9 shadow-xl rounded-3xl flex flex-col gap-y-10 relative z-1 bg-primary-200 text-white h-[460px]">
					<div className="flex-1 flex gap-x-5">
						<div className="relative w-20 h-20 rounded-3xl overflow-hidden">
							<Image
								src={
									'https://res.cloudinary.com/williamsondesign/abstract-2.jpg'
								}
								fill
								alt="price"
								sizes="100%"
							/>
						</div>
						<div>
							<h5 className="text-3xl font-semibold">Startup</h5>
							<p className="text-3xl font-bold">
								<span className="text-primary-300 text-[20px] font-semibold align-top inline-block">
									$
								</span>
								24
								<span className="text-primary-300 text-[18px] font-semibold">
									/ user
								</span>
							</p>
						</div>
					</div>

					<hr />

					<div className="text-primary-300 font-medium text-xl flex flex-col gap-y-3">
						<p className="">
							<IoMdCheckmark className="text-3xl inline-block align-middle mr-3" />
							All features in
							<span className="text-300">Basic</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-3xl inline-block align-middle mr-3" />
							Flexible
							<span className="text-300">call scheduling</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-3xl inline-block align-middle mr-3" />
							<span className="text-300">15 TB</span> cloud
							storage
						</p>
					</div>
					<Link
						href={'#'}
						className="text-300 text-xl bg-accent-100 block py-5 text-center rounded-xl"
					>
						Choose Plan
						<IoIosArrowRoundForward className=" inline-block text-2xl align-middle" />
					</Link>
				</div>
				{/* Item 3 */}
				<div className="flex-1 p-9 shadow-xl rounded-e-3xl flex flex-col gap-y-7 relative z-0">
					<div className="flex-1 flex gap-x-5">
						<div className="relative w-20 h-20 rounded-3xl overflow-hidden">
							<Image
								src={
									'https://res.cloudinary.com/williamsondesign/abstract-1.jpg'
								}
								fill
								sizes="100%"
								alt="price"
							/>
						</div>
						<div>
							<h5 className="text-2xl font-semibold">
								Enterprise
							</h5>
							<p className="text-3xl font-bold">
								<span className="text-200 text-[20px] font-semibold align-top inline-block">
									$
								</span>
								35
								<span className="text-200 text-[18px] font-semibold">
									/ user
								</span>
							</p>
						</div>
					</div>

					<hr />

					<div className="text-200 font-medium text-xl flex flex-col gap-y-3">
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							All features in
							<span className="text-100">Startup</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							Growth
							<span className="text-100">oriented</span>
						</p>
						<p className="">
							<IoMdCheckmark className="text-2xl inline-block align-middle mr-3" />
							<span className="text-100">Unlimited</span> cloud
							storage
						</p>
					</div>
					<Link
						href={'#'}
						className="text-300 text-xl bg-accent-100 block py-4 text-center rounded-xl"
					>
						Choose Plan
						<IoIosArrowRoundForward className=" inline-block text-2xl align-middle" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PricePage;
