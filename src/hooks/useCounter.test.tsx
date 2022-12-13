import { act, renderHook, screen } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    // Unlike Regular component which can be asserted using screen hooks donot have any dom elements instead render hook   will wrap the hook in
    //function component invole the hook and returns an obj from which we can destructure property call result
    const { result } = renderHook(useCounter);
    // on this result their exits a property current which will contain all the return values from the custom hooks so we can now asserts
    expect(result.current.count).toBe(0);
  });
  test("should render the initial count with 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  }); 
  test("should increment the  count", () => {
    const { result } = renderHook(useCounter);
    // We error becs we directly changing state
    // result.current.increment()
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("should decrement the  count", () => {
    const { result } = renderHook(useCounter);
    // We error becs we directly changing state
    // result.current.decrement()
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
