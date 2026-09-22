import { describe, expect, it } from "vitest";
import { formatCurrency, isValidTransferAmount } from "../client/src/lib/banking";

describe("banking transfer helpers", () => {
  it("formats transfer amounts with two decimal places", () => {
    expect(formatCurrency(1250)).toBe("1,250.00");
    expect(formatCurrency(86.4)).toBe("86.40");
  });

  it("accepts positive numeric transfer amounts only", () => {
    expect(isValidTransferAmount("240")).toBe(true);
    expect(isValidTransferAmount("0")).toBe(false);
    expect(isValidTransferAmount("-12")).toBe(false);
    expect(isValidTransferAmount("not-a-number")).toBe(false);
  });
});
