export default function Home() {
  return (
    <section className="w-full px-16">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-7xl font-bold">
            FIND YOUR PERFECT CONCERT WHEREVER YOU ARE
          </h1>
        </div>
        <div className=" grid content-end">
          <div>
            <h1 className="text-2xl text-main-100 font-medium mb-4">
              DISCOVER THE BEST LIVE MUSIC, TAILORED TO YOUR MUSIC TASTE
            </h1>
            <button className="accent-button">FIND A CONCERT</button>
          </div>
        </div>
      </div>
    </section>
  );
}
