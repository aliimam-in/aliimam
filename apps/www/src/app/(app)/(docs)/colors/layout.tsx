export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20">
      <div className="relative before:absolute before:-inset-x-6 before:top-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border))]"></div>
      <div className="mx-auto max-w-6xl border-x">{children}</div>
      <div className="relative before:absolute before:-inset-x-6 before:top-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border))]"></div>
    </div>
  );
}
