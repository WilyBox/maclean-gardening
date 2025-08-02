// components/LoadingScreen.tsx
"use client";

import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Image
        src="/images/logo-navbar-horiz.webp"
        alt="Maclean Gardening Logo"
        width={300}
        height={150}
        className="opacity-0 animate-fade-out w-full h-auto max-w-[300px]"
        priority
      />
    </div>
  );
};

export default LoadingScreen;
