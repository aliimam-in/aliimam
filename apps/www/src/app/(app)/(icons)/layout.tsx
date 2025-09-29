export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-20 fixed w-screen z-30 bg-background/20 backdrop-blur-lg" />
      <div className="h-full pt-20 w-full">{children}</div>
    </div>
  );
}
