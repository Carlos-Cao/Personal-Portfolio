export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mt-2 text-3xl tracking-tight text-decoration-line: underline text-gray-900 sm:text-4xl">
              Skills
            </h2>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="font-medium">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Programming languages
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Skills / Tools
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Frameworks
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Certifications
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Python
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">Java</td>
                          <td className="whitespace-nowrap px-6 py-4">Otto</td>
                          <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            2
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td className="whitespace-nowrap px-6 py-4">
                            Thornton
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            3
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            Larry the Bird
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            @twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
