const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];

const rainbow = destination.concat(native, hero);

rainbow.reverse();

rainbow.splice(1, 1, 'Of');
rainbow.splice(2, 0, 'York');
rainbow.splice(4, 0, 'Gave', 'Battle', 'In', 'Vain');
rainbow.pop();

const rainbowList = document.createElement('ul');
rainbow.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  rainbowList.appendChild(listItem);
});
document.body.appendChild(rainbowList);
