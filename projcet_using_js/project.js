
document.getElementById('calculateButton').addEventListener('click', calculateChange);

function calculateChange() {
  const total = parseFloat(document.getElementById('totalDue').value).toFixed(2);
  const moneyPaid = parseFloat(document.getElementById('amountPaid').value).toFixed(2);
  let change = (moneyPaid - total).toFixed(2); // Changed to 'let'

  const notesAndCoins = [
    { value: 500, name: '500 notes', return: 0 },
    { value: 200, name: '200 notes', return: 0 },
    { value: 100, name: '100 notes', return: 0 },
    { value: 50, name: '50 notes', return: 0 },
    { value: 20, name: '20 notes', return: 0 },
    { value: 10, name: '10 notes', return: 0 },
    { value: 5, name: '5 notes', return: 0 },
    { value: 2, name: '2 notes', return: 0 },
    { value: 1, name: '1 notes', return: 0 },
    { value: 0.50, name: '0.50 coins', return: 0 },
    { value: 0.25, name: '0.25 coins', return: 0 },
    { value: 0.10, name: '0.10 coins', return: 0 },
    { value: 0.05, name: '0.05 coins', return: 0 },
    { value: 0.01, name: '0.01 coins', return: 0 },
  ];

  let resultText = '';

  for (const item of notesAndCoins) {
    item.return = Math.floor(change / item.value);
    change = (change % item.value).toFixed(2); // now it will work correctly.
    if (item.return > 0) {
      resultText += `<p>${item.name}: ${item.return}</p>`;
    }
  }

  document.getElementById('changeResult').innerHTML = resultText;
}