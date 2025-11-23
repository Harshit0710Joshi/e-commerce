"use client";

import { useAuth } from "../context/AuthContext";
import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  if (loading) return null;

  // pages where header & footer should be hidden
  const hideLayout =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  return (
    <>
      {!hideLayout && (user ? <HeaderAfterLogin /> : <HeaderBeforeLogin />)}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
