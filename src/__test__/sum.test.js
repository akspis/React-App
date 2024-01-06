import sum from "../Components/sum";

test("total of two number ", () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
});
