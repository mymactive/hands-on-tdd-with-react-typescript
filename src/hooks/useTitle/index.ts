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

// TODO: stripを実装する
export const useTitle: UseTitle = () => {};
