const about = [
  {
    id: 1,
    introduction:
      "Hello! My name is Carlos Cao, and I am a Developer based in Auckland, New Zealand (NZ), with over three years of experience in backend development.",
    content:
      "With a strong foundation in Computer Science, I specialise in automating tasks and solving complex challenges, such as optimising backend systems for high-scale applications. I have played a key role in collaborating with diverse teams and clients, delivering scalable solutions that drive real-world impact.",
    end: "I am passionate about leveraging technology to drive innovation and solve real-world business challenges. I am fascinated by how technology pushes boundaries and transforms how we live, work, and interact with the world.",
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
            <div className="mx-auto mt-5 text-center gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
