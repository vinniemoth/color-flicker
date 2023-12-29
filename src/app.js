const btn = document.getElementById('button');
const hex = document.getElementById('hex');
const colorName = document.getElementById('color-name');
const copyBtn = document.getElementById('svg');
const copyIcon = document.querySelector('svg');

const main = document.getElementById('main');
const text = document.getElementById('span');

let colors = [
  {
    name: 'Forest Green',
    color: '#00883A',
  },
  {
    name: 'Teal',
    color: '#008581',
  },
  {
    name: 'Café Noir',
    color: '#513C2C',
  },
  {
    name: 'True Blue',
    color: '#586BA4',
  },
  {
    name: 'Olive',
    color: '#87762E',
  },
  {
    name: 'Burnt Orange',
    color: '#BA5B2F',
  },
  {
    name: 'Eerie Black',
    color: '#171d1c',
  },
  {
    name: 'French Blue',
    color: '#0072BB',
  },
];

let randomNumber;

btn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * colors.length);
  main.style.backgroundColor = colors[randomNumber].color;

  if (text.innerHTML.includes('#')) {
    text.innerHTML = colors[randomNumber].color.toLocaleUpperCase();
  } else {
    text.innerHTML = colors[randomNumber].name;
  }

  document.body.style.setProperty(
    '--selectionBackgroundColor',
    colors[randomNumber].color
  );

  return randomNumber;
});

hex.addEventListener('click', () => {
  text.innerHTML = colors[randomNumber].color.toLocaleUpperCase();
});

colorName.addEventListener('click', () => {
  text.innerHTML = colors[randomNumber].name;
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(colors[randomNumber].color);
});

copyBtn.addEventListener('mouseover', () => {
  copyIcon.style.color = colors[randomNumber].color;
});
copyBtn.addEventListener('mouseout', () => {
  copyIcon.style.color = '#000';
});
