import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      searchCharacter: "Search character",
      viewMore: "View more about {{name}}",
      characterNotFound: "Character '{{name}}' does not exist",
      errorOccurred: "Oops! Something went wrong",
      paginationDescribe: "Page {{page}} of {{totalPages}}",
      charactersLabel: "Characters",
      additionalInfo: "Additional Info",
      noDescription: "Character without description",
      series: "Series",
      comics: "Comics",
    },
  },
  pt: {
    translation: {
      searchCharacter: "Procurar personagem",
      viewMore: "Ver mais sobre {{name}}",
      characterNotFound: "Personagem '{{name}}' não existe",
      errorOccurred: "Oops! Encontramos um problema",
      paginationDescribe: "Página {{page}} de {{totalPages}}",
      charactersLabel: "Personagens",
      additionalInfo: "Informações adicionais",
      noDescription: "Personagem sem descrição",
      series: "Séries",
      comics: "Quadrinhos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
