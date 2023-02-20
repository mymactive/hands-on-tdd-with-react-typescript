import { expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useBadge } from ".";

test("バッジが外れた状態から、外すとバッジは外れている", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useBadge());

  // 実行(act)
  act(() => {
    result.current.detach();
  });

  // 検証(assert)
  expect(result.current.badge).toStrictEqual({
    mode: "detached",
  });
});

test("バッジが外れた状態から、バッジを付けるとバッジは付いている", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useBadge());

  // 実行(act)
  act(() => {
    result.current.attach("hoge");
  });

  // 検証(assert)
  expect(result.current.badge).toStrictEqual({
    mode: "attached",
    name: "hoge",
  });
});

test("バッジが付いている状態から、バッジを外すと外れている", () => {
  // 準備(arrange)
  const { result } = renderHook(() => useBadge());
  act(() => {
    result.current.attach("hoge");
  });

  // 実行(act)
  act(() => {
    result.current.detach();
  });

  // 検証(assert)
  expect(result.current.badge).toStrictEqual({
    mode: "detached",
  });
});