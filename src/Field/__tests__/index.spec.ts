import neo from "../Builder";

it("should return proper queries", () => {
  expect(F({ name__eq: "Test" }));
});
