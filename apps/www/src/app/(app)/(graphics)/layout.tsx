export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div> 
      <div className="h-full pt-20 px-3 w-full">{children}</div>
    </div>
  );
}
