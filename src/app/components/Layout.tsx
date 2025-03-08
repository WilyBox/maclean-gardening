export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="pt-20 font-poppins">{children}</div>
    </div>
  );
}
