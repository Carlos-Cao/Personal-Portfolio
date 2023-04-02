import Icon from "@mdi/react";
import { mdiGithub, mdiStackOverflow, mdiLinkedin } from "@mdi/js";

export default function Footer() {
  return (
    <section>
      <div className="bg-turquoise">
        <footer className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center flex flex-col justify-between py-4 sm:py-6">
            <div className="text-black text-sm sm:text-base relative isolate overflow-hidden items-center">
              <p
                className="hover:cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                © Carlos Cao 2019
              </p>
              <div className="flex justify-center items-center">
                <a
                  href="https://github.com/Carlos-Cao"
                  className="hover:scale-110 transform transition-all"
                >
                  <Icon path={mdiGithub} size={1} className="mr-2" />
                </a>
                <a
                  href="https://nz.linkedin.com/in/carloscao"
                  className="hover:scale-110 transform transition-all"
                >
                  <Icon path={mdiLinkedin} size={1} className="mr-2" />
                </a>
                <a
                  href="https://stackoverflow.com/users/14185445/cc337"
                  className="hover:scale-110 transform transition-all"
                >
                  <Icon path={mdiStackOverflow} size={1} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
