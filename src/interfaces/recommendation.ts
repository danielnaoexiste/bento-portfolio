interface IRecommendation {
  author: string;
  role: string;
  date: string;
  originalText: string;
  translatedText: string;
  linkedin: string;
  originalLang: "en" | "pt";
}

type IRecommendations = IRecommendation[];
