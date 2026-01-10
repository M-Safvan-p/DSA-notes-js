# 🧩Arrays — Core Data Structure

🌱  What Is an Array?

An **Array** is a **collection of elements stored in a single variable**,

where each element is stored **next to each other in memory**.

Example:

```
Index:  0   1   2   3
Value: [10, 20, 30, 40]
```

- `arr[0] = 10`
- `arr[2] = 30`

So, instead of making 4 different variables,

you can store them all inside **one array**!

### 💻 Example in JavaScript

```jsx
let numbers = [10, 20, 30, 40];
console.log(numbers[0]); // Output: 10
console.log(numbers[3]); // Output: 40
```

✅ Arrays make data easy to store, access, and manage.


## ⚙️ 2. Array Operations

Let’s go through the **main 4 operations** step by step 👇

| Operation | Description | Example Method | Time Complexity |
| --- | --- | --- | --- |
| Traversal | Visit each element | `for loop` | O(n) |
| Insertion | Add new element | `push()`, `unshift()`, `splice()` | O(1) / O(n) |
| Deletion | Remove element | `pop()`, `shift()`, `splice()` | O(1) / O(n) |
| Searching | Find element | `for loop`, `includes()` | O(n) |
| Sorting | Arrange elements | `sort()` | O(n log n) |

## ⚙️ 3. Types of Array

### 🔹 1️⃣ One-Dimensional Array (1D Array)

It’s a simple, single-row array that stores data in a **straight line**.

**Structure:**

```
Index → 0   1   2   3
Value → [10, 20, 30, 40]
```

✅ **Use Case:** Storing simple lists like names, marks, prices, etc.

### 🔹 2️⃣ Two-Dimensional Array (2D Array)

It’s an array **of arrays** — data stored in **rows and columns**, like a **table** or **grid**.

**JavaScript Example:**

```jsx
let matrix = [
  [1, 2, 3],  // Row 0
  [4, 5, 6],  // Row 1
  [7, 8, 9]   // Row 2
];

console.log(matrix[0][2]); // Output: 3 (Row 0, Column 2)
console.log(matrix[2][1]); // Output: 8 (Row 2, Column 1)
```

✅ **Use Case:** Representing tables, maps, grids, or game boards.

### 🔹 3️⃣ Multi-Dimensional Array (3D or more)

It’s an **array inside another array**, which itself can contain more arrays.

In short — an **array of 2D arrays** 😅

**Structure (3D):**

```
[
  [ [1, 2], [3, 4] ],
  [ [5, 6], [7, 8] ]
]
```

**JavaScript Example:**

```jsx
let cube = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

console.log(cube[0][1][1]); // Output: 4
console.log(cube[1][0][0]); // Output: 5
```

✅ **Use Case:** 3D games, simulations, or representing 3D coordinates (x, y, z).

---

## ⚙️ Summary Table

| Type | Structure | Example | Real-Life Analogy | Use Case |
| --- | --- | --- | --- | --- |
| **1D Array** | Single row | `[10,20,30]` | Train coaches | Simple lists |
| **2D Array** | Rows + Columns | `[[1,2,3],[4,5,6]]` | Table or Chessboard | Matrices, grids |
| **3D Array** | Layers of 2D arrays | `[[[1,2],[3,4]],[[5,6],[7,8]]]` | Bookshelf | 3D games, simulations |

### 💡 Important Notes for JavaScript:

- JavaScript doesn’t have a *fixed-size* array like C or Java.
    
    You can freely add or remove items.
    
- You can even mix types (numbers, strings, etc.) —
    
    but in DSA, we usually keep all elements of the **same type**.
 

 ## 🧩 Topic 13: Advanced Array Concepts

### 🔹 1️⃣ Homogeneous vs Heterogeneous Arrays

🧠 Concept:

- **Homogeneous Array** → All elements are of the **same type**.
- **Heterogeneous Array** → Elements can be of **different types**.

💻 JavaScript Example:

```jsx
// Homogeneous
let marks = [85, 90, 95, 100];
// Heterogeneous
let mixed = [101, "Safwan", true, { city: "Kozhikode" }];
```

✅ JavaScript arrays are **heterogeneous by nature** —

they can store multiple data types together, unlike languages like C or Java.

### 🔹 2️⃣ Jagged Array (or Ragged Array)

🧠 Concept:

A **jagged array** is an **array of arrays** where **each inner array has a different length**.

It’s like a 2D array, but **not all rows have the same number of elements**.

💻 Example:

```jsx
let jaggedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
console.log(jaggedArray[0]); // [1, 2, 3]
console.log(jaggedArray[1][1]); // 5
```

✅ Useful when rows have varying lengths (like storing students per class).

### 🔹 4️⃣ Sparse Array

🧠 Concept:

A **sparse array** has **many empty or undefined elements** —

most of its space is unused.

💡 Real-life analogy:

Imagine a **large parking lot** 🅿️ with only a few cars parked.

Most spaces are empty — that’s a **sparse array**.

💻 Example:

```jsx
let sparseArr = [];
sparseArr[5] = 10;
sparseArr[10] = 20;

console.log(sparseArr); // [ <5 empty items>, 10, <4 empty items>, 20 ]
console.log(sparseArr.length); // 11
```

✅ Useful for cases where most data is missing (like sparse matrices in AI/ML).


### 🔹 5️⃣ Subarray

🧠 Concept:

A **subarray** is a **continuous part** (or slice) of an array.

💡 Real-life analogy:

If you have a playlist of 10 songs 🎵,

a subarray is like selecting songs 3 to 6 as a smaller list.

### 💻 Example:

```jsx
let arr = [10, 20, 30, 40, 50];
let subarr = arr.slice(1, 4);
console.log(subarr); // [20, 30, 40]
```

✅ `slice(start, end)` → end index is *excluded*.

### 🔹 6️⃣ Flatten a Multidimensional Array

🧠 Concept:

To **flatten** an array means to **convert nested arrays into a single array**.

### 💻 Example:

```jsx
let multiArr = [1, [2, [3, 4], 5]];
let flat = multiArr.flat(2);
console.log(flat); // [1, 2, 3, 4, 5]
```

✅ The number in `flat(2)` tells how many levels deep to flatten.

You can also use:

```jsx
multiArr.flat(Infinity);
```

to flatten any depth.

## ⚙️ Summary Table

| Concept | Description | Example | Real-life Analogy |
| --- | --- | --- | --- |
| **Homogeneous** | Same type elements | `[1,2,3]` | Basket of apples |
| **Heterogeneous** | Mixed type elements | `[1,"Safwan",true]` | Mixed fruits |
| **Jagged** | 2D array with uneven rows | `[[1,2],[3,4,5]]` | Rows with diff. students |
| **Multidimensional** | Array of arrays (2D, 3D) | `[[1,2,3],[4,5,6]]` | Grid or cube |
| **Sparse** | Mostly empty array | `[ , , ,10]` | Empty parking lot |
| **Subarray** | Continuous portion of array | `arr.slice(1,4)` | Playlist section |
| **Flatten** | Convert nested arrays to single | `.flat()` | Unboxing boxes |
| **Reverse** | Reverse order | `.reverse()` | People turning line around |