import React from 'react';

const Blog = React.lazy(() => import('blog/Blog'));

function blog() {
  return (
    <div>
      <React.Suspense fallback="Loading Blog...">
        <Blog />
      </React.Suspense>
    </div>
  );
}

export default blog;
