import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh mx-auto flex items-center justify-center">
      {children}
    </div>
  );
}

export default Layout;
