import Icon from "@mdi/react";
import {
  mdiLanguageJava,
  mdiLanguagePython,
  mdiLanguageCsharp,
  mdiDatabaseSearch,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiReiterate,
  mdiGit,
  mdiLinux,
  mdiDocker,
  mdiMicrosoftAzure,
  mdiWrench,
  mdiKubernetes,
  mdiJira,
  mdiReact,
  mdiLeafCircle,
  mdiTailwind,
  mdiNodejs,
  mdiDotNet,
  mdiApacheKafka,
  mdiBootstrap,
  mdiChevronRight,
  mdiMicrosoft,
} from "@mdi/js";

const skills = [
  {
    id: 1,
    programmingLanguage: "Java",
    programmingLanguageIcon: <Icon path={mdiLanguageJava} size={1} />,
    tool: "Agile",
    toolIcon: <Icon path={mdiReiterate} size={1} />,
    framework: "React",
    frameworkIcon: <Icon path={mdiReact} size={1} />,
    certification: "Microsoft Certified: Azure Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 2,
    programmingLanguage: "Python",
    programmingLanguageIcon: <Icon path={mdiLanguagePython} size={1} />,
    tool: "Git",
    toolIcon: <Icon path={mdiGit} size={1} />,
    framework: "Spring Boot",
    frameworkIcon: <Icon path={mdiLeafCircle} size={1} />,
    certification: " Microsoft Certified: Azure Developer Associate",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 3,
    programmingLanguage: "C#",
    programmingLanguageIcon: <Icon path={mdiLanguageCsharp} size={1} />,
    tool: "Unix",
    toolIcon: <Icon path={mdiLinux} size={1} />,
    framework: "Tailwind CSS",
    frameworkIcon: <Icon path={mdiTailwind} size={1} />,
    certification: "Microsoft Certified: DevOps Engineer Expert",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 4,
    programmingLanguage: "SQL",
    programmingLanguageIcon: <Icon path={mdiDatabaseSearch} size={1} />,
    tool: "Docker",
    toolIcon: <Icon path={mdiDocker} size={1} />,
    framework: "Node.js",
    frameworkIcon: <Icon path={mdiNodejs} size={1} />,
    certification: "Microsoft Certified: Azure AI Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 5,
    programmingLanguage: "HTML",
    programmingLanguageIcon: <Icon path={mdiLanguageHtml5} size={1} />,
    tool: "Azure",
    toolIcon: <Icon path={mdiMicrosoftAzure} size={1} />,
    framework: ".NET",
    frameworkIcon: <Icon path={mdiDotNet} size={1} />,
    certification: "Microsoft Certified: Azure Data Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 6,
    programmingLanguage: "CSS",
    programmingLanguageIcon: <Icon path={mdiLanguageCss3} size={1} />,
    tool: "Jenkins",
    toolIcon: <Icon path={mdiWrench} size={1} />,
    framework: "Apache Kafka",
    frameworkIcon: <Icon path={mdiApacheKafka} size={1} />,
    certification:
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
  },
  {
    id: 7,
    programmingLanguage: "JavaScript",
    programmingLanguageIcon: <Icon path={mdiLanguageJavascript} size={1} />,
    tool: "Kubernetes",
    toolIcon: <Icon path={mdiKubernetes} size={1} />,
    framework: "Bootstrap",
    frameworkIcon: <Icon path={mdiBootstrap} size={1} />,
    certification: "",
    certificationIcon: "",
  },
  {
    id: 8,
    programmingLanguage: "TypeScript",
    programmingLanguageIcon: <Icon path={mdiLanguageTypescript} size={1} />,
    tool: "Jira",
    toolIcon: <Icon path={mdiJira} size={1} />,
    framework: "Next.js",
    frameworkIcon: <Icon path={mdiChevronRight} size={1} />,
    certification: "",
    certificationIcon: "",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white py-8 sm:py-12 lg:py-24 relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl text-decoration-line: underline text-black mb-8 sm:mb-12">
            Skills
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm font-light">
              <thead className="font-medium">
                <tr>
                  <th scope="col" className="px-4 py-2 sm:px-6 lg:px-8">
                    Programming languages
                  </th>
                  <th scope="col" className="px-4 py-2 sm:px-6 lg:px-8">
                    Skills / Tools
                  </th>
                  <th scope="col" className="px-4 py-2 sm:px-6 lg:px-8">
                    Frameworks
                  </th>
                  <th scope="col" className="px-4 py-2 sm:px-6 lg:px-8">
                    Certifications
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((row) => (
                  <tr key={row.id}>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      <div className="flex justify-center items-center">
                        {row.programmingLanguageIcon}
                        <span className="ml-2">{row.programmingLanguage}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      <div className="flex justify-center items-center">
                        {row.toolIcon}
                        <span className="ml-2">{row.tool}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      <div className="flex justify-center items-center">
                        {row.frameworkIcon}
                        <span className="ml-2">{row.framework}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      <div className="flex justify-center items-center">
                        {row.certificationIcon}
                        <span className="ml-2">{row.certification}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
