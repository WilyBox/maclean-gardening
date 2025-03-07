import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      {/* Include Navbar */}
      <Navbar />

      {/* Add padding to prevent content from being hidden under fixed navbar */}
      <div className="pt-20 font-poppins">{children}</div>
    </div>
  );
}
