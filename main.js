// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// OPDRACHT 1A
const toSell = inventory.reduce((acc, currentValue) => {
  return acc + (currentValue.originalStock - currentValue.sold);
}, 0);
console.log('tvs to sell: ', toSell);

// OPDRACHT 1B
const myDiv = document.getElementById('tvs-to-sell');
const newSpan = document.createElement('span');
newSpan.setAttribute('class', 'red');
newSpan.textContent = toSell;
myDiv.appendChild(newSpan);

// OPDRACHT 2A
const types = inventory.map((tv) => tv.type);
console.log('All tv types: ', types);

// OPDRACHT 2B
const allSoldTvs = inventory.filter((tv) => {
  return (tv.originalStock - tv.sold <= 0);
});
console.log('sold tv\'s: ', allSoldTvs);

// OPDRACHT 2C
const hasAmbilight = inventory.filter(tv => tv.options.ambiLight);
console.log('All tv\'s with ambilight', hasAmbilight);

// OPDRACHT 2D
const sortLowHigh = inventory.sort((a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  // a must be equal to b
  return 0;
});
console.log('sort by prize: ', sortLowHigh);

// of korter:
const sortLowHighShort = inventory.sort((a, b) => {
  return a.price - b.price;
});
console.log('sort by prize (short version): ', sortLowHighShort);

// OPDRACHT 3
const twoTvTypes = document.getElementById('two-tv-types');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = inventory[0].type;
p2.textContent = inventory[1].type;

twoTvTypes.appendChild(p1);
twoTvTypes.appendChild(p2);

// OPDRACHT 4A
const makeName = tv => `${tv.brand} ${tv.type} - ${tv.name}`;
console.log(makeName(inventory[0]));
console.log(makeName(inventory[1]));

// OPDRACHT 4B
// const optionsTest = inventory[3].options;
// const keys = Object.keys(optionsTest);
// console.log(keys);

// const myString = keys.reduce((acc, option) => {
//   if (option) {
//     console.log('length :', keys.length);
//     const keys = option.keys(options);
//   }

// });

// console.log('string is: ', myString);



const makeOptions = tv => {
  const options = [];
  for (let prop in tv.options) {
    if (Object.prototype.hasOwnProperty.call(tv.options, prop)) {
      if (tv.options[prop]) {
        options.push(prop);
      }
    }
  }
  let output = 'Beschikt over ';
  options.forEach((option, index) => {
    if (index === options.length - 2) {
      output += option + ' en ';
    } else if (index === options.length - 1) {
      output += option;
    } else {
      output += option + ', ';
    }
  });
  return output;
}
console.log(makeOptions(inventory[3]));

// OPDRACHT 4C
const printScreenSize = availableSizes => {
  let output = '';
  availableSizes.forEach((size, index) => {
    output += `${size} inches (${size * 2.54} cm)`;
    output += index !== (availableSizes.length - 1) ? ' | ' : '';
  })
  return output;
}
console.log(printScreenSize(inventory[0].availableSizes));

// OPDRACHT 4D / OPDRACHT 5
printTvData(inventory);

function printTvData(tvList) {
  const tvData = document.getElementById('tv-data');
  tvData.textContent = '';
  tvList.forEach(tv => {
    let p = document.createElement('p');
    tvData.appendChild(p);

    let span = document.createElement('span');
    span.textContent = makeName(tv);
    p.appendChild(span);

    span = document.createElement('span');
    span.textContent = `€${tv.price},-`;
    p.appendChild(span);

    span = document.createElement('span');
    span.textContent = printScreenSize(tv.availableSizes);
    p.appendChild(span);

    span = document.createElement('li');
    span.textContent = makeOptions(tv);
    p.appendChild(span);
  });
}

// OPDRACHT 6A
const totalPrice = inventory.reduce((acc, tv) => {
  return acc + (tv.originalStock - tv.sold) * tv.price;
}, 0);
console.log(`Total price: EURO ${totalPrice},-`);
const totalOriginalStock = document.getElementById("total-original-stock-price");
totalOriginalStock.textContent = `Totaal prijs van alle tv's op voorraad: EURO ${totalPrice},-`;

//OPDRACHT 6B
const totalPriceSold = inventory.reduce((acc, tv) => {
  return acc + tv.sold * tv.price;
}, 0);
console.log(`Total price: EURO ${totalPriceSold},-`);
const totalSold = document.getElementById("total-sold");
totalSold.textContent = `Totaal prijs van alle verkochte tv's: EURO ${totalPriceSold},-`;

// OPDRACHT 7
const sort = (sortBy) => {
  switch (sortBy) {
    case 'price':

      break;
    case 'price':

      break;
    case 'sold':
      printTvData(allSoldTvs);
      break;

    default:
      break;
  }
}









// // 1. Sla het HTML element op waar we straks iets in willen plaatsen
// const banaanLijst = document.getElementById('banaan');

// // 2. Maak een nieuwe HTML node (in dit geval li element)
// const banaanItemOne = document.createElement('li');

// // 3. Zet er een attribuut "class" op met de waarde "yellow"
// banaanItemOne.setAttribute('class', 'yellow');

// // 4. Stop tekst in dit element
// banaanItemOne.textContent = "Hallo";

// // 5. Voeg dit <li>-element toe aan het bestaande <ul> element
// banaanLijst.appendChild(banaanItemOne);


