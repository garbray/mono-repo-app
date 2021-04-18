import { isTypedArray } from "../type-guards";

describe("isTypedArray() tests", function () {
  test("non-array", () => {
    expect(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      isTypedArray(null, () => true)
    ).toEqual(false);
  });

  test("homogenous array [1, 2, 3]", () => {
    expect(
      isTypedArray([1, 2, 3], (x): x is number => typeof x === "number")
    ).toEqual(true);
  });

  test("mixed array [1, 'a', 3]", () => {
    expect(
      isTypedArray(
        [1, "a", 3],
        (x): x is number => ["number"].indexOf(typeof x) >= 0
      )
    ).toEqual(false);
  });
});
