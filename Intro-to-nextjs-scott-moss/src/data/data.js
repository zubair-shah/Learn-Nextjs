// const notes = [];
const notes = new Array(15).fill(1).map((val, ind) => ({
  id: Date.now() + val,
  title: `Note : ${val}`,
}));

module.exports = notes;
