const about = [
  {
    id: 1,
    introduction:
      "Hello there, my name is Carlos Cao and I am a Developer based in Auckland, New Zealand",
    content:
      "I specialise in Backend Integration Development and have a background in CS. I am deeply passionate about technology because of its limitless potential to create positive impact in our lives. From automating tedious tasks to solving complex problems, coding allows me to create solutions that make a difference. As a Developer, I take pride in crafting efficient algorithms and debugging complex software. I am always looking for ways to improve my skills and stay up to date with the latest trends and technologies in the industry.",
    end: "Whether I am collaborating with others or working independently, I bring a sharp analytical mind and attention to detail to every project I work on. I believe that technology is more than just a tool it is a driving force behind innovation and progress.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="bg-lightGrey py-24 sm:py-32 relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-center text-3xl text-decoration-line: underline tracking-tight text-black">
              About Me
            </h2>
            <div className="border-t border-gray-200 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {about.map((item) => (
                <div className="mt-6" key={item.id}>
                  <p className="text-lg sm:text-lgleading-9 text-gray-600">
                    {item.introduction}
                  </p>
                  {item.content && (
                    <p className="mt-4 text-lg leading-9 text-gray-600">
                      {item.content}
                    </p>
                  )}
                  {item.end && (
                    <p className="mt-4 text-lg leading-9 text-gray-600">
                      {item.end}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
