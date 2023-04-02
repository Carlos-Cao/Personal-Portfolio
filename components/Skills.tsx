const skills = [
  {
    id: 1,
    programmingLanguage: "Java",
    tool: "Agile",
    framework: "React",
    certification: "Microsoft Certified: Azure Fundamentals",
  },
  {
    id: 2,
    programmingLanguage: "Python",
    tool: "Git",
    framework: "Spring Boot",
    certification: " Microsoft Certified: Azure Developer Associate",
  },
  {
    id: 3,
    programmingLanguage: "C#",
    tool: "Unix",
    framework: "Tailwind CSS",
    certification: "Microsoft Certified: DevOps Engineer Expert",
  },
  {
    id: 4,
    programmingLanguage: "SQL",
    tool: "Docker",
    framework: "Node.js",
    certification: "",
  },
  {
    id: 5,
    programmingLanguage: "HTML",
    tool: "Azure",
    framework: ".NET",
    certification: "",
  },
  {
    id: 6,
    programmingLanguage: "CSS",
    tool: "Jenkins",
    framework: "Apache Kafka",
    certification: "",
  },
  {
    id: 7,
    programmingLanguage: "JavaScript",
    tool: "Kubernetes",
    framework: "Bootstrap",
    certification: "",
  },
  {
    id: 8,
    programmingLanguage: "TypeScript",
    tool: "Jira",
    framework: "Next.js",
    certification: "",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white py-8 sm:py-12 lg:py-24">
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
                      {row.programmingLanguage}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      {row.tool}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      {row.framework}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 sm:px-6 lg:px-8">
                      {row.certification}
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
