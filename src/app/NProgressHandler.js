"use client";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname, useRouter } from "next/navigation";

export default function NProgressHandler() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    NProgress.configure({ showSpinner: false, color: "#41C88E" });
    NProgress.start();
    NProgress.done();
    // Listen for route changes
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleStop);
    router.events?.on("routeChangeError", handleStop);
    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleStop);
      router.events?.off("routeChangeError", handleStop);
    };
  }, [pathname]);
  return null;
}
