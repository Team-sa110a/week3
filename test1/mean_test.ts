import { expect } from 'https://deno.land/x/bdd/mod.ts'
import * as _ from "./mean.ts";

Deno.test("mean", () => {
    expect(_.mean([4,2,8,6])).to.equal(5)
  })
  