export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/martinstanicio/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/martinstanicio" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.github.com/martinstanicio" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
      <p>Martín Stanicio © {new Date().getFullYear()}</p>
    </footer>
  );
}
