import Navigation from "./Navigation";

export default function Main() {
  return (
    <section id="main">
      <div className="bg-turquoise h-screen">
        <header className="absolute inset-x-0 top-0 z-50">
          <Navigation />
        </header>
        <div className="relative flex items-center h-full px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight text-white sm:text-6xl">
                Carlos Cao
              </h1>
              <h2 className="mt-6 text-lg leading-8 text-white">
                Software Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
