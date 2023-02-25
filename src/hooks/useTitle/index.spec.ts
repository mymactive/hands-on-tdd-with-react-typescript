import { test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTitle } from ".";

test("称号なしの時に、称号を外すと、称号はなしのままである", () => {
  const { result } = renderHook(() => useTitle());

  result.current.strip();

  expect(result.current.title).toStrictEqual({ mode: "stripped" });
});

// TODO: ここにテストを追加してください。
test("称号なしの時に、称号を付けると、称号がある", () => {});
