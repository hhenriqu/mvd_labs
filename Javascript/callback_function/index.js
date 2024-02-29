function add(a, b) {
  return a + b
}

function divider(a, b) {
  return (a / b)
}

function callback(a, b, operation) {
  return operation(a, b)
}
 
console.log(callback(55, 5, divider)) 