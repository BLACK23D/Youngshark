import Link from "next/link";

export default function NotFound() {
  return (
    <main className="ys2-not-found">
      <p className="ys2-eyebrow">404 · Signal not found</p>
      <h1>This route is outside the system.</h1>
      <p>The page may have moved or the address may be incomplete.</p>
      <Link className="ys2-button" href="/">
        Return home
      </Link>
    </main>
  );
}
