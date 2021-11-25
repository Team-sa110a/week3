# .without(傳統模式)

## 先寫程式再寫測試

### 程式部分

```
export function without(list: any[], a: number) {
  var toremove = a;
  list = list.filter(function (item) {
    return item !== toremove;
  });
  return list;
}
```

### 測試部分

```
Deno.test("without", () => {
  assertEquals(_.without([2, 1, 2, 3], 2), [1, 3]);
});
```

### 執行結果

```
PS D:\s\sa110a\test2\example> deno run .\ex1.ts
Check file:///D:/s/sa110a/test2/example/ex1.ts
[ 1, 3 ]
```

# .union(TDD 模式)

## 先寫測試再寫程式

### 測試部分

```
Deno.test("union", () => {
  expect(_.union([2, 1], [4, 2], [1, 2])).to.equal([2, 1, 4]);
});
```

### 程式部分

```
export function union(...args: any[]) {
  var clist: any[] = [];
  for (let i = 0; i < args.length; i++) {
    clist = clist.concat(args[i]);
  }
  var result = clist.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  return result;
}
```

### 執行結果

```
PS D:\s\sa110a\test2\example> deno run .\ex1.ts
Check file:///D:/s/sa110a/test2/example/ex1.ts
[ 2, 1, 4 ]
```

# .isEmpty(BDD 模式)

## 較口語化，較易懂，先寫程式再寫測試

### 程式部分

```
export function isEmpty(list: any) {
  var answer = Object.prototype.toString.call(list);
  if (list instanceof Array) {
    return false;
  } else if (list instanceof Object) {
    return false;
  } else if (list instanceof String) {
    return true;
  } else if (list instanceof Boolean) {
    return true;
  } else if (list instanceof Function) {
    return true;
  } else if ((answer = "undefined")) {
    return true;
  }
}
```

### 測試部分

```
Deno.test("isEmpty", () => {
  var test = _.isEmpty(1);
  expect(test).to.equal(true);
});
```

### 執行結果

```
PS D:\s\sa110a\test2\example> deno run .\ex1.ts
Check file:///D:/s/sa110a/test2/example/ex1.ts
true
```

## 總測試結果

```
PS D:\s\sa110a\test2\test> deno test .
Check file:///D:/s/sa110a/test2/test/isempty_test.ts
Check file:///D:/s/sa110a/test2/test/union_test.ts
Check file:///D:/s/sa110a/test2/test/without_test.ts
running 1 test from file:///D:/s/sa110a/test2/test/isempty_test.ts
test isEmpty ... ok (9ms)
running 1 test from file:///D:/s/sa110a/test2/test/union_test.ts
test union ... ok (20ms)
running 1 test from file:///D:/s/sa110a/test2/test/without_test.ts
test without ... ok (7ms)

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (120ms)
```
