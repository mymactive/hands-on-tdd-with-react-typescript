import { test, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTitle } from "./useTitle";

test("称号なしの時に、称号を外すと、称号はなしのままである", () => {
  const { result } = renderHook(() => useTitle());

  act(() => {
    result.current.strip();
  });

  expect(result.current.title).toStrictEqual({ mode: "stripped" });
});

test("称号なしの時に、称号を付けると、称号がある", () => {
  const { result } = renderHook(() => useTitle());

  act(() => {
    result.current.adopt("hoge");
  });

  expect(result.current.title).toStrictEqual({ mode: "adopted", text: "hoge" });
});

test("称号がある時に、称号を外すと、称号はなしとなる", () => {
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
  expect(result.current.title).toStrictEqual({ mode: "stripped" });
});
