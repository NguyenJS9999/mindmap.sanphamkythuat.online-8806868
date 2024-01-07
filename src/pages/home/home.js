// import Image from "next/image";
// import Link from "next/link";
// import { MdLocationOn } from "react-icons/md";
// import Search from "~/components/Search";
import Image from 'next/image';
import { API, URL_IMG } from '~/utils/config';
// import { altSlug } from "~/utils/slugify";
import './home.scss';

const getData = async () => {
	const res = await fetch(`${API}/pages`);
	return res.json();
};

async function Home() {
	// const data = await getData();
	return (
		<div className="homepage">
			<div className="container homepage-wrap">
				<h1>Học tập hiệu quả với bản đồ tư duy</h1>
				<button type="button" class="btn btn-secondary mt-2">
					Sử dụng miễn phí
				</button>
				<Image
					src="/bg-mind-map.png"
					width={672}
					height={352}
					alt="Picture of the author"
          className='mt-2'
				/>
				{/*  */}
				<div className="flex gap-x-[100px] mt-10">
					<div className="flex-1 text-center">
						<span className="h-[2px] w-[80px] bg-[rgb(199,210,254)] inline-block"></span>
						<h5 className="text-xl font-medium my-3">DỄ SỬ DỤNG</h5>
						<p className="text-200">
							Mindmap Flow blocks bring in an air of fresh design with
							their creative layouts and blocks, which are easily
							customizable
						</p>
					</div>
					<div className="flex-1 text-center">
						<span className="h-[2px] w-[80px] bg-[rgb(199,210,254)] inline-block"></span>
						<h5 className="text-xl font-medium my-3">
							KHÔNG GIỚI HẠN
						</h5>
						<p className="text-200">
							Mindmap Flow blocks are the cleanest pieces of HTML blocks,
							which are built with utmost care to quality and
							usability.
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

export default Home;

{
	/* <div className="relative banner">
        <div className="absolute bottom-[-4rem] left-[50%] -translate-x-1/2 p-[2rem] bg-primary shadow-xl rounded-md">
          <Search />
        </div>
      </div>
      <h2 className="text-center text-[3rem] font-semibold mt-[8rem]">
        Popular Destinations
      </h2>
      <div className="wide mb-[5rem] mt-[2rem] flex flex-col gap-[3rem]">
        {data?.map((tour, index) => {
          const { name, content, textcontent } = tour.home;
          return (
            <div
              key={index}
              className="flex gap-[2rem] flex-row-reverse w-full h-full p-8 border border-[#ddd] rounded-md border-solid shadow-xl"
            >
              <div className="overflow-hidden w-[50%] rounded-[0.6rem]">
                <Image
                  src={`${URL_IMG}${tour.destinationBox[0].src}`}
                  width={200}
                  height={200}
                  alt="img"
                  className="object-cover w-full h-[18rem] rounded-[0.6rem] hover:scale-110 transition-all"
                />
              </div>
              <div className="p-[1.4rem] w-[50%]">
                <div className="flex items-center">
                  <MdLocationOn color="#FFD220" fontSize={"1.4rem"} />
                  <h2 className="font-semibold text-[1.2rem]">{name}</h2>
                </div>
                <strong className="block mt-1 text-[1.1rem] capitalize">
                  {content}
                </strong>
                <p className="line-clamp-4">{textcontent}</p>
                <div className="flex items-center justify-between mt-6">
                  <Link
                    href={`/tour/${altSlug(name)}-${altSlug(content)}~${tour.id}`}
                    className="btn text-yellow-500 font-semibold py-[0.5rem]"
                  >
                    View more
                  </Link>
                  <Link
                    href={`/checkout/${altSlug(name)}-${altSlug(content)}~${tour.id}`}
                    className="btn text-yellow-500 font-semibold py-[0.5rem]"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div> */
}
