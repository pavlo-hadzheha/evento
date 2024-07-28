export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
}
