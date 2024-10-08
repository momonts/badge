import "../globals.css";

export const metadata = {
  title: "Mint Concert Tickets",
  description: "This is a sample of NFT concert tickets",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
