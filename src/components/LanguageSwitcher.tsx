import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">
        {i18n.language === 'en' ? 'ქართული' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
