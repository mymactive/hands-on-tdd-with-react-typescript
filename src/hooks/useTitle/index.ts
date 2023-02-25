type StrippedTitle = {
  mode: "stripped";
};

type AdoptedTitle = {
  mode: "adopted";
  text: string;
};

type Title = AdoptedTitle | StrippedTitle;

type UseTitle = () => {
  title: Title;
  adopt: (text: string) => void;
  strip: () => void;
};

// TODO: `称号なし→付ける→称号あり`のテストを使って`付ける`操作を実装してください。
export const useTitle: UseTitle = () => {
  const title = { mode: "stripped" } as const;
  const strip = () => {};

  return { title, strip };
};
