import { useTranslations } from "next-intl";
import { IoLanguageSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * 语言选择器
 * @returns
 */
export default function LanguageSelector() {
  const translate = useTranslations();

  const router = useRouter();

  const cookieLang = Cookies.get("locale");
  const [lang, setLang] = useState(cookieLang ? cookieLang : "zh");

  const onSelectLang = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    Cookies.set("locale", e.target.value);
    //刷新页面加载新的语言
    router.refresh();
  };

  return (
    <label className="select select-ghost w-40 hover:cursor-pointer focus-within:outline-none">
      <span className="label">
        <IoLanguageSharp className="text-xl" />
      </span>
      <select value={lang} onChange={onSelectLang}>
        <option value="zh">{translate("langs.zh")}</option>
        <option value="en">{translate("langs.en")}</option>
      </select>
    </label>
  );
}
