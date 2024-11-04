export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto h-dvh flex flex-col gap-12 items-start justify-center">
      {children}
    </div>
  );
}
