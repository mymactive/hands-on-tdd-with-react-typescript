import { useCallback, useReducer, useState } from "react";

type DetachedBadge = {
  mode: "detached";
};

type AttachedBadge = {
  mode: "attached";
  name: string;
};

type Badge = DetachedBadge | AttachedBadge;

type UseBadge = () => {
  badge: Badge;
  attach: (name: string) => void;
  detach: () => void;
};

type AttachAction = { type: "attach"; name: string };
type DetachAction = { type: "detach" };
type Action = AttachAction | DetachAction;
type AttachInReducer = (name: string) => AttachedBadge;
type DetachInReducer = () => DetachedBadge;
type Reducer = (badge: Badge, action: Action) => Badge;

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

export const useBadge: UseBadge = () => {
  const [badge, dispatch] = useReducer(reducer, { mode: "detached" });

  const attach = (name: string) => dispatch({ type: "attach", name });

  const detach = () => dispatch({ type: "detach" });

  return { badge, attach, detach };
};
