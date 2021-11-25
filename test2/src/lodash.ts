export function without(list: any[], a: number) {
  var toremove = a;
  list = list.filter(function (item) {
    return item !== toremove;
  });
  return list;
}
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
