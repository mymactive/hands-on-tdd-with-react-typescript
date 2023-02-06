import { expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTag } from ".";

test("attachを呼ぶと、attachedに変化する", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useTag());

  // 実行(act)
  act(() => {
    result.current.attach("hoge");
  });

  // 検証(assert)
  expect(result.current.tag).toStrictEqual({
    mode: "attached",
    name: "hoge",
  });
});

test("最後にdetachを呼ぶと、detachedに変化する", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useTag());
  act(() => {
    result.current.attach("hoge");
  });

  // 実行(act)
  act(() => {
    result.current.detach();
  });

  // 検証(assert)
  expect(result.current.tag).toStrictEqual({
    mode: "detached",
  });
});
