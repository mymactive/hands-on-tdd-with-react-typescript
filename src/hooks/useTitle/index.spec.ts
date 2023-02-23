import { expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTitle } from ".";

test("称号なしの時に、外すと、称号はなしのままである", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useTitle());

  // 実行(act)
  act(() => {
    result.current.strip();
  });

  // 検証(assert)
  expect(result.current.title).toStrictEqual({
    mode: "stripped",
  });
});

test("称号無しの時に、称号を付けると称号はある", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useTitle());

  // 実行(act)
  act(() => {
    result.current.adopt("hoge");
  });

  // 検証(assert)
  expect(result.current.title).toStrictEqual({
    mode: "adopted",
    text: "hoge",
  });
});

test("称号ありの時から、称号を外すと称号はなしとなる", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useTitle());
  act(() => {
    result.current.adopt("hoge");
  });

  // 実行(act)
  act(() => {
    result.current.strip();
  });

  // 検証(assert)
  expect(result.current.title).toStrictEqual({
    mode: "stripped",
  });
});
