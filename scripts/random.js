function pickTwoItems(params) {
  const items = [
    "Ben",
    "Rebecca",
    "Brigham",
    "Jenn",
    "Marlayna",
    "Jared",
    "Sandra",
    "Justin",
    "William",
  ];

  // Shuffle the list of items using Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Pair each item with the item following it in the shuffled list
  const pairs = [];
  for (let i = 0; i < items.length - 1; i++) {
    pairs.push([items[i], items[i + 1]]);
  }
  pairs.push([items[items.length - 1], items[0]]); // Last item is paired with the first item

  // Print the pairs to the screen
  const output = document.getElementById("output");
  for (const [item1, item2] of pairs) {
    const li = document.createElement("li");
    li.textContent = `${item1} Is Shopping For ${item2}`;
    output.appendChild(li);
  }
}
