import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center m-6">
      <div>
        <Image src="/cube.svg" width={381} height={381} alt="website logo" />
      </div>
      <span className="flex flex-col items-center gap-11 mb-20">
        <p className="text-7xl font-semibold text-center">
          Your Starts journey here.
        </p>
        <p className="text-2xl font-normal text-center">
          This is your gen Z guid into the world
        </p>
      </span>
      <div className="flex flex-row items-center justify-between gap-8">
        <button className="bg-black rounded-[48px] py-5 px-12">
          <p className="text-white text-xl font-semibold">Kick off project</p>
        </button>
        <button className="border border-black rounded-[48px] py-5 px-12">
          <p className="text-black text-xl font-semibold">Our Portfolio</p>
        </button>
      </div>
    </section>
  );
}
