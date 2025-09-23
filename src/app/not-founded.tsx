import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Not Found</h1>
      <p>Could not find the requested resource.</p>
      <Link href="/">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>
          Return Home
        </a>
      </Link>
    </div>
  );
}