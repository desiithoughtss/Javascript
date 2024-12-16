// 1
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let TeaOrder = makeTea("green tea");
console.log(TeaOrder);

// 2
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

console.log(orderTea("chai"));
