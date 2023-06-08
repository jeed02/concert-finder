import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="w-full px-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <h1 className="font-bold text-5xl md:text-8xl ">
              FIND YOUR PERFECT CONCERT WHEREVER YOU ARE
            </h1>
          </div>
          <div className=" grid content-end">
            <div>
              <h1 className="text-3xl text-main-100 font-medium mb-4">
                DISCOVER THE BEST LIVE MUSIC, TAILORED TO YOUR MUSIC TASTE
              </h1>
              <button className="accent-button">FIND A CONCERT</button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-16 mt-16 md:mt-32">
        <Image src="/ENCORE.png" height={1080} width={1920}></Image>
      </section>
    </>
  );
}
