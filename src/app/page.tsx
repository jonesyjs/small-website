
import { headers } from 'next/headers';

export const runtime = "edge";

export default function Home() {
  const headersList = headers();

  // Retrieve the X-Forwarded-For header
  const forwardedFor = headersList.get('x-forwarded-for');

  // Extract the client's IP address
  const clientIp = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown IP';

  return (
    <main>
      <p>Small Business Website</p>
      <h1>Client IP Address</h1>
      <p>{clientIp}</p>
    </main>
  );
}
