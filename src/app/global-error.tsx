'use client';

import Error from 'next/error';

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body>
        <Error statusCode={undefined as never} />
      </body>
    </html>
  );
}
