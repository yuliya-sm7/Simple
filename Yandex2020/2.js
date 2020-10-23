var a = [
  [1, 0],
  [0, 1],
  [1, 1],
];

module.exports = (function (diffs) {
  let diffsX = diffs.map((item) => item[0]);
  let diffsY = diffs.map((item) => item[1]);
  const sumX = diffsX.reduce((sum, i) => sum + i, 0);
  const sumY = diffsY.reduce((sum, i) => sum + i, 0);
  if (!(sumX % 2 === 0 && sumY % 2 === 0)) return null;

  let minusX = sumX / 2;
  let minusY = sumY / 2;

  const offsetX = diffsX.map((item) => {
    if (item !== 0 && minusX > 0) {
      item = -1 * item;
      minusX--;
    }
    return item;
  });
  const offsetY = diffsY.map((item) => {
    if (item !== 0 && minusY > 0) {
      item = -1 * item;
      minusY--;
    }
    return item;
  });

  const res = [];
  for (let i = 0; i < diffs.length; i++) {
    const point = [offsetX[i], offsetY[i]];
    res.push(point);
  }
  console.log("res", res);
  return res;
})(a);
