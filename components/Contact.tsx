export default function Contact() {
  return (
    <section id="contact">
      <div className="relative isolate overflow-hidden bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-center text-3xl text-decoration-line: underline text-black mb-8 sm:mb-12">
              Contact me
            </h2>
            <div className="flex justify-center mt-6 sm:mt-10">
              <a href="mailto:carlos.cao2@gmail.com">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Contact by Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
