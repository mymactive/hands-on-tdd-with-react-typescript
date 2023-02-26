import { useReducer } from "react";

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

type AdoptAction = { type: "adopt"; text: string };
type StripAction = { type: "strip" };
type Action = AdoptAction | StripAction;

type Adopt = (text: string) => AdoptedTitle;
type Strip = () => StrippedTitle;
type Reducer = (title: Title, action: Action) => Title;

const adopt: Adopt = (text) => ({ mode: "adopted", text } as const);
const strip: Strip = () => ({ mode: "stripped" } as const);
const reducer: Reducer = (_, action) => {
  switch (action.type) {
    case "adopt":
      return adopt(action.text);
    case "strip":
      return strip();
    default:
      throw Error("Unexpected action type: ${action.type}");
  }
};

export const useTitle: UseTitle = () => {
  const [title, dispatch] = useReducer(reducer, { mode: "stripped" });

  const strip = () => {
    dispatch({ type: "strip" });
  };
  const adopt = (text: string) => {
    dispatch({ type: "adopt", text });
  };

  return { title, strip, adopt };
};
