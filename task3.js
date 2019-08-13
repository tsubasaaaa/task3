export function fibonacci1(n) { 
  let result = 0, a = 1, b;
  for (var i = 0; i < n; i++) {
      b = result;
      result = a;
      a = result + b;
  }
  return result;
}

export function fibonacci2(n) { 
  let result = 0, a = 1, b;
  let hairetu = [];
  for (var i = 0; i < n; i++) {
      b = result;
      result = a;
      a = result + b;
      hairetu.push(result);
  }
  return hairetu;
}