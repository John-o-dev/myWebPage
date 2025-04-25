import Link from 'next/link';
import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout title="Oooops!">
      <div className="message">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link href="/">Go back.</Link>
      </div>
    </Layout>
  );
}
