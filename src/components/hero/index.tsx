import { getBannerVideo } from "@/utils/actions/get-data";
import { BannerVideoProps } from "@/utils/bannerVideo-type";
import Link from "next/link";
export async function Hero() {
  const dataVideo: BannerVideoProps = await getBannerVideo();
  return (
    <>
      <section className="flex justify-center items-center h-[calc(100vh-80px)] w-full">
        <div className=" w-full h-full overflow-hidden bg-black">
          <video
            className="w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={dataVideo.object.metadata.videobannerweb.url}
              type="video/webm"
            />
          </video>
        </div>
      </section>
      <section className="absolute top-0 left-0 h-full w-full">
        <div className="flex items-start justify-center flex-col h-full w-full max-w-7xl mx-auto gap-2 px-4">
          <h1 className="text-white font-bold text-4xl md:text-7xl">
            Por quê?
          </h1>
          <p className="text-white font-bold text-3xl md:text-5xl md:max-w-5xl">
            A <span className="text-red-800">curiosidade</span> é a verdadeira
            essência do conhecimento.
          </p>
          <div className="rounded-md py-2 bg-red-600 text-white font-semibold text-sm sm:text-md md:text-lg mt-4">
            <Link href={"/post"} className="px-2">
              Acesse, abra sua mente e descubra o porquê.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
