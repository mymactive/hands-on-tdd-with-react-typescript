import { useCallback, useReducer, useState } from "react";

type DetachedTag = {
  mode: "detached";
};

type AttachedTag = {
  mode: "attached";
  name: string;
};

type Tag = DetachedTag | AttachedTag;

type UseTag = () => {
  tag: Tag;
  attach: (name: string) => void;
  detach: () => void;
};

type AttachAction = { type: "attach"; name: string };
type DetachAction = { type: "detach" };
type Action = AttachAction | DetachAction;
type AttachInReducer = (name: string) => AttachedTag;
type DetachInReducer = () => DetachedTag;
type Reducer = (tag: Tag, action: Action) => Tag;

const attachInReducer: AttachInReducer = (name) => ({ mode: "attached", name });
const detachInReducer: DetachInReducer = () => ({ mode: "detached" });
const reducer: Reducer = (_, action) => {
  switch (action.type) {
    case "attach":
      return attachInReducer(action.name);
    case "detach":
      return detachInReducer();
    default:
      throw new Error("invalid action");
  }
};

export const useTag: UseTag = () => {
  const [tag, dispatch] = useReducer(reducer, { mode: "detached" });

  const attach = (name: string) => dispatch({ type: "attach", name });

  const detach = () => dispatch({ type: "detach" });

  return { tag, attach, detach };
};
