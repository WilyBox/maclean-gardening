export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="font-poppins">{children}</div>
    </div>
  );
}
