import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-col gap-4 bg-black p-5 text-white">
      <h1 className="text-center text-3xl font-bold">Martín Stanicio</h1>
      <ul className="flex justify-around font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
