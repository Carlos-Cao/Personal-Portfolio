import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "LiveQuery",
    href: "https://github.com/Carlos-Cao/LiveQuery",
    description: "Live Q&A",
    imageUrl: "/livequery.png",
  },
  {
    id: 2,
    title: "PokePortal",
    href: "https://github.com/Carlos-Cao/PokePortal",
    description: "Collection of Pokemon Projects",
    imageUrl: "/pokeportal.png",
  },
  {
    id: 3,
    title: "BookLookUp",
    href: "https://github.com/Carlos-Cao/BookLookUp",
    description: "Google Books Library Web App",
    imageUrl: "/booklookup.png",
  },
  {
    id: 4,
    title: "Sportalytics",
    href: "https://github.com/Carlos-Cao/Sportalytics",
    description: "Browse Sports Teams and Players",
    imageUrl: "/sportalytics.png",
  },
  {
    id: 5,
    title: "NetSpinAI",
    href: "https://github.com/Carlos-Cao/NetSpinAI",
    description: "AI Chatbot",
    imageUrl: "/netspinai.png",
  },
  {
    id: 6,
    title: "PomoTicker",
    href: "https://github.com/Carlos-Cao/PomoTicker",
    description: "Productivity Timer App",
    imageUrl: "/pomoticker.png",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="bg-lightGrey py-10 sm:py-12 md:py-16 lg:py-24 relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl text-decoration-line: underline text-black mb-8 sm:mb-12">
              Projects
            </h2>
          </div>
          <div className="mx-auto mt-5 grid grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id}>
                <article key={post.id} className="max-w-xl">
                  <div className="flex flex-col items-center">
                    <div className="image-container">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={640}
                        height={640}
                        className="bg-gray-50 object-cover w-64 h-64 border border-gray-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:underline">
                        <a href={post.href}>{post.title}</a>
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600 line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
