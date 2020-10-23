const data = [
  {
    geometry: [10, 20],
    text: "James",
  },
  {
    geometry: [20, 40],
    text: "Bond",
  },
  {
    geometry: [5, 40],
    text: "Bond",
  },
];
const dictionary = ["James", "Bond"];

module.exports = (function (inputData, inputDictionary) {
  let message = "";
  inputData.forEach((item) => {
    if (!inputDictionary.includes(item.text)) {
      message = "Unreadable message";
    }
  });
  if (message) return message;

  inputData.sort((a, b) => {
    if (a.geometry && b.geometry) {
      return a.geometry[0] - b.geometry[0];
    } else return 0;
  });

  message = inputData.reduce((str, item) => {
    return str + item.text + " ";
  }, "");

  console.log(message);
  return message;
})(data, dictionary);
