'use client';

import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang="en">
      <body>
        <Error statusCode={undefined as never} />
      </body>
    </html>
  );
}
