const explorers = [
  ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
  ["Mawson", "South Pole", "New Hebrides"],
  ["Hillary", "Everest", "South Pole"],
];

module.exports = (function (explorers) {
  let toponims = explorers.reduce((acc, item) => {
    acc.push(...item.slice(1));
    return acc;
  }, []);
  toponims = Array.from(new Set(toponims));

  const res = toponims.map((place) => {
    const peoples = [];
    explorers.forEach((explorer) => {
      if (explorer.slice(1).includes(place)) {
        peoples.push(explorer[0]);
      }
    });
    return [place, ...peoples];
  });

  console.log(res);
  return res;
})(explorers);
