import Image from 'next/image';
// import Link from 'next/link';
// import { FcGoogle } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	return (
		<div className="homepage">
			<div className="container homepage-wrap">
				<h1>Học tập hiệu quả với bản đồ tư duy</h1>
				<button type="button" class="btn btn-s econdary mt-2">
					Sử dụng miễn phí
				</button>
				<Image
					src="/bg-mind-map.png"
					width={672}
					height={352}
					alt="Picture of the author"
					className="mt-2"
				/>
				{/*  */}
				<div className="flex gap-x-[100px] mt-10">
					<div className="flex-1 text-center">
						<span className="h-[2px] w-[80px] bg-[rgb(199,210,254)] inline-block"></span>
						<h5 className="text-xl font-medium my-3">DỄ SỬ DỤNG</h5>
						<p className="text-200">
							Mindmap Flow blocks bring in an air of fresh design
							with their creative layouts and blocks, which are
							easily customizable
						</p>
					</div>
					<div className="flex-1 text-center">
						<span className="h-[2px] w-[80px] bg-[rgb(199,210,254)] inline-block"></span>
						<h5 className="text-xl font-medium my-3">
							KHÔNG GIỚI HẠN
						</h5>
						<p className="text-200">
							Mindmap Flow blocks are the cleanest pieces of HTML
							blocks, which are built with utmost care to quality
							and usability.
						</p>
					</div>
					<div className="flex-1 text-center">
						<span className="h-[2px] w-[80px] bg-[rgb(199,210,254)] inline-block"></span>
						<h5 className="text-xl font-medium my-3">
							QUẢN LÝ VÀ CHIA SẺ
						</h5>
						<p className="text-200">
							Mindmap Flow blocks is a perfect tool for designers,
							developers and agencies looking to create stunning
							websites in no time.
						</p>
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
}
