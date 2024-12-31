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
  mdiAws,
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
    certificationLink:
      "https://www.credly.com/badges/71fa60f9-2b91-4a40-af00-e44a9d9dbb4b",
  },
  {
    id: 2,
    programmingLanguage: "Python",
    programmingLanguageIcon: <Icon path={mdiLanguagePython} size={1} />,
    tool: "Git",
    toolIcon: <Icon path={mdiGit} size={1} />,
    framework: "Bootstrap",
    frameworkIcon: <Icon path={mdiBootstrap} size={1} />,
    certification: " Microsoft Certified: Azure Developer Associate",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/9070e05c-7cdc-4a60-ba28-84252d00d8c8",
  },
  {
    id: 3,
    programmingLanguage: "C#",
    programmingLanguageIcon: <Icon path={mdiLanguageCsharp} size={1} />,
    tool: "Unix",
    toolIcon: <Icon path={mdiLinux} size={1} />,
    framework: ".NET",
    frameworkIcon: <Icon path={mdiDotNet} size={1} />,
    certification: "Microsoft Certified: DevOps Engineer Expert",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/37072a25-93c0-4742-88c5-5b12dc87c617",
  },
  {
    id: 4,
    programmingLanguage: "JavaScript",
    programmingLanguageIcon: <Icon path={mdiLanguageJavascript} size={1} />,
    tool: "Jenkins",
    toolIcon: <Icon path={mdiWrench} size={1} />,
    framework: "Spring Boot",
    frameworkIcon: <Icon path={mdiLeafCircle} size={1} />,
    certification: "Microsoft Certified: Azure AI Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/27c80d9d-a539-43cd-82ad-429437947cbb",
  },
  {
    id: 5,
    programmingLanguage: "SQL",
    programmingLanguageIcon: <Icon path={mdiDatabaseSearch} size={1} />,
    tool: "Jira",
    toolIcon: <Icon path={mdiJira} size={1} />,
    framework: "Apache Kafka",
    frameworkIcon: <Icon path={mdiApacheKafka} size={1} />,
    certification: "Microsoft Certified: Azure Data Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/e7127957-33e6-4b70-b678-b574b9903c03",
  },
  {
    id: 6,
    programmingLanguage: "HTML",
    programmingLanguageIcon: <Icon path={mdiLanguageHtml5} size={1} />,
    tool: "Azure",
    toolIcon: <Icon path={mdiMicrosoftAzure} size={1} />,
    framework: "Tailwind CSS",
    frameworkIcon: <Icon path={mdiTailwind} size={1} />,
    certification:
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/d28b5977-ffcc-4a04-b12b-6260a10b857d",
  },
  {
    id: 7,
    programmingLanguage: "CSS",
    programmingLanguageIcon: <Icon path={mdiLanguageCss3} size={1} />,
    tool: "Docker",
    toolIcon: <Icon path={mdiDocker} size={1} />,
    framework: "Next.js",
    frameworkIcon: <Icon path={mdiChevronRight} size={1} />,
    certification: "AWS Certified Cloud Practitioner",
    certificationIcon: <Icon path={mdiAws} size={1} />,
    certificationLink:
      "https://www.credly.com/badges/a80c3a97-638f-4700-babd-7db90809f114",
  },
  {
    id: 8,
    programmingLanguage: "TypeScript",
    programmingLanguageIcon: <Icon path={mdiLanguageTypescript} size={1} />,
    tool: "Kubernetes",
    toolIcon: <Icon path={mdiKubernetes} size={1} />,
    framework: "Node.js",
    frameworkIcon: <Icon path={mdiNodejs} size={1} />,
    certification: "Microsoft Certified: Azure AI Engineer Associate",
    certificationIcon: <Icon path={mdiMicrosoft} size={1} />,
    certificationLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/CarlosCao-3015/B175089E9E68B170?sharingId=5944FE7D5C2A1CCC",
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
                        <span className="ml-2">
                          <a href={row.certificationLink} target="_blank">
                            {row.certification}
                          </a>
                        </span>
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
