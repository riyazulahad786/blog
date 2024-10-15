// app/layout.js (or app/page.js for Next.js 13+)
import { PostProvider } from './context/PostContext';

export default function RootLayout({ children }) {
  return (
    <PostProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </PostProvider>
  );
}
