"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Choice from "./components/Choice";
import LanguageSelector from "./components/LanguageSelector";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  //国际化
  const translate = useTranslations();

  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="w-full p-2 border border-base-200 flex justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="animate-bounce"
          />
          <h1 className="font-semibold">{translate("app")}</h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center">
        <Choice />
      </div>
    </div>
  );
}
