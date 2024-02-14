export const supported_language = [
  { identifier: "eng", name: "English" },
  { identifier: "spn", name: "Spanish" },
  { identifier: "mar", name: "Marathi" },
  { identifier: "chn", name: "Chinese" },
];

const lang = {
  eng: {
    search: "search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  spn: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
  mar: {
    search: "शोध",
    gptSearchPlaceholder: "तुम्हाला आज काय बघायला आवडेल?",
  },
  chn: {
    search: "搜索",
    gptSearchPlaceholder: "今天你想看什么?",
  },
};

export default lang;
