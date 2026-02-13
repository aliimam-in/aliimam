export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
       <div className="h-full w-full">{children}</div>
    </div>
  );
}
