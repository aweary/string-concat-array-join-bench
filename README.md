# string concat vs array join

````
npm install
npm run bench
```

## Results

#### node `v7.5.0`

```
Array.push + Array.join x 547,371 ops/sec ±1.94% (82 runs sampled)
String concat x 1,283,146 ops/sec ±1.48% (86 runs sampled)
Template string concat x 984,701 ops/sec ±1.51% (87 runs sampled)
Fastest is String concat
```

#### node `v6.9.0`

```
Array.push + Array.join x 553,434 ops/sec ±5.07% (79 runs sampled)
String concat x 1,320,344 ops/sec ±3.63% (76 runs sampled)
Template string concat x 1,013,330 ops/sec ±2.93% (83 runs sampled)
Fastest is String concat
```

### node `v5.12.0`

```
Array.push + Array.join x 143,848 ops/sec ±21.42% (61 runs sampled)
String concat x 588,972 ops/sec ±1.70% (85 runs sampled)
Template string concat x 357,902 ops/sec ±2.56% (82 runs sampled)
Fastest is String concat
```

### node `v4.6.1`

```
Array.push + Array.join x 190,131 ops/sec ±6.63% (75 runs sampled)
String concat x 576,294 ops/sec ±1.69% (85 runs sampled)
Template string concat x 369,546 ops/sec ±1.62% (84 runs sampled)
Fastest is String concat
```
