import { getBannerVideo } from "@/utils/actions/get-data";
import { BannerVideoProps } from "@/utils/bannerVideo-type";
import Link from "next/link";
export async function Hero() {
  const dataVideo: BannerVideoProps = await getBannerVideo();
  return (
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
      <div className="absolute top-48 md:top-60 md:left-20  text-start flex gap-2 flex-col">
        <h1 className="text-white font-bold text-4xl md:text-7xl px-4">
          Por quê?
        </h1>
        <p className="text-white font-bold text-3xl md:text-5xl px-4 md:max-w-5xl">
          A <span className="text-red-800">curiosidade</span> é a verdadeira
          essência do conhecimento.
        </p>
      </div>
      <div className="absolute top-96 left-4 md:top-[500px] md:left-auto  rounded-md  px-5 py-2 bg-red-600 text-white font-semibold text-sm sm:text-md md:text-lg">
        <Link href={"/post"}>Acesse, abra sua mente e descubra o porquê.</Link>
      </div>
    </section>
  );
}
