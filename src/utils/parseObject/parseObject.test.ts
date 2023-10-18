import { describe, expect, test } from "@jest/globals";
import { collapseObject } from "./parseObject";

describe("parseObject", () => {
  const fn = collapseObject;

  test("1", () => {
    expect(fn({})).toStrictEqual({});
  });

  test("2", () => {
    expect(
      fn({
        key: "value",
        key1: "value1",
        key2: {
          key3: "value3",
          key4: "value4",
          key5: {
            key6: "value6",
            key7: "value7",
            key8: {
              key9: "value9",
              key10: "value10",
            },
          },
        },
      })
    ).toStrictEqual({
      key: "value",
      key1: "value1",
      "key2.key3": "value3",
      "key2.key4": "value4",
      "key2.key5.key6": "value6",
      "key2.key5.key7": "value7",
      "key2.key5.key8.key9": "value9",
      "key2.key5.key8.key10": "value10",
    });
  });
});
