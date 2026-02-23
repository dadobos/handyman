import { useTranslation } from "react-i18next";

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" aria-hidden="true" className="h-4 w-6">
      <clipPath id="t"><path d="M0 0h60v30H0z" /></clipPath>
      <g clipPath="url(#t)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagNL() {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true" className="h-4 w-6">
      <rect width="3" height="2" fill="#fff" />
      <rect width="3" height="0.6667" y="0" fill="#AE1C28" />
      <rect width="3" height="0.6667" y="1.3333" fill="#21468B" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const current = i18n.language === "nl" ? "nl" : "en";
  const other = current === "en" ? "nl" : "en";

  const setLang = (lng: "en" | "nl") => i18n.changeLanguage(lng);

  return (
    <button
      type="button"
      onClick={() => setLang(other as "en" | "nl")}
      aria-label={t("header.language")}
      className="flex items-center gap-1 bg-white px-2 py-1 text-sm hover:bg-gray-50"
    >
      {other === "en" ? <FlagGB /> : <FlagNL />}
    </button>
  );
}