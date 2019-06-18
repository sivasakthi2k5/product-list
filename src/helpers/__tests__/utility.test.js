import { formatPrice } from "helpers/utility";

describe("helper utility", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test("should return $20 with $ prefix", () => {
    const result = formatPrice("20");
    expect(result).toBe("$20");
  });
  test("should return $ only", () => {
    const result = formatPrice("");
    expect(result).toBe("$");
  });
  test("should return $0 price with $ prefix", () => {
    const result = formatPrice("0");
    expect(result).toBe("$0");
  });
});
