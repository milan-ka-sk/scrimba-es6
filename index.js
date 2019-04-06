const exampleSet = new Set([1,1,1,1,2,2,2,2]);

console.log(exampleSet); // {1, 2}
console.log(exampleSet.size); // 2

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet); // {1, 2, 5, 17}

exampleSet.delete(5);

console.log(exampleSet); // {1, 2, 17}

console.log(exampleSet.has(5)); // false

exampleSet.clear();

console.log(exampleSet.size); // 0