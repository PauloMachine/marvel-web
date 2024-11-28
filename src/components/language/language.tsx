import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "src/components/ui/select";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const options = [
    { value: "en", label: "English" },
    { value: "pt", label: "Português" },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Select
      options={options}
      value={language}
      onChange={handleLanguageChange}
    />
  );
};

export default LanguageSelect;
