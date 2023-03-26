const navigation = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export default function Navigation() {
  return (
    <div className="bg-turquoise">
      <nav
        className="flex items-center justify-between p-6 px-8"
        aria-label="Global"
      >
        <div className="mx-auto flex gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
