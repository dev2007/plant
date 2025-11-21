"use client";

import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import { useTranslations } from "next-intl";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  //国际化
  const translate = useTranslations();

  return (
    <div className="h-screen w-screen">
      <nav className="w-full p-2 border border-base-200 flex justify-between">
        <div className="flex items-center space-x-1">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <h1 className="font-semibold">{translate("app")}</h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
}
