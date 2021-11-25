import { expect } from "https://deno.land/x/tdd/mod.ts";
import * as _ from "../src/lodash.ts";

Deno.test("isEmpty", () => {
  var test = _.isEmpty(1);
  expect(test).to.equal(true);
});
