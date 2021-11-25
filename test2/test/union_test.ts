import { expect } from "https://deno.land/x/tdd/mod.ts";
import * as _ from "../src/lodash.ts";

Deno.test("union", () => {
  expect(_.union([2, 1], [4, 2], [1, 2])).to.equal([2, 1, 4]);
});
