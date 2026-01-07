# 🌲 Prefix Tree (Trie)

### 🌱 1. What is a Prefix Tree (Trie)?

A **Trie** (pronounced *try*) is a **tree data structure** used to store **strings** (words).

👉 Each node represents **one character**

👉 Words are stored **letter by letter**

👉 Common prefixes are **shared**

✅ Real-life example

Think of **mobile keyboard autocomplete** 📱

- You type `"ca"`
- Keyboard suggests: **cat, car, camera**

Behind the scenes → **Trie**

---

### 🧠 2. Why is it called a “Prefix” Tree?

Because it stores and works with **prefixes**.

Example words:

```
cat
car
camera
```

Shared prefix = `"ca"`

Trie stores `"ca"` **only once**, saving time and space.

---

### 🧩 3. Basic Structure of Trie Node

Each node contains:

1. **children** → next characters
2. **isEndOfWord** → marks end of a valid word

```jsx
class TrieNode {
  constructor() {
    this.children = {};   // map of characters
    this.isEnd = false;
  }
}
```

---

### 🌳 4. Visual Structure (Simple)

Words: `cat`, `car`

```
(root)
  |
  c
  |
  a
 / \
t   r
```

- `t` → end of "cat"
- `r` → end of "car"

---

- 🧑‍💻 5. Trie Implementation in JavaScript
    
    ```jsx
    class Trie {
      constructor() {
        this.root = new TrieNode();
      }
    
      insert(word) {
        let current = this.root;
    
        for (let ch of word) {
          if (!current.children[ch]) {
            current.children[ch] = new TrieNode();
          }
          current = current.children[ch];
        }
        current.isEnd = true;
      }
    }
    ```
    
- 🔍 6. Search a Word in Trie
    
    ```jsx
    search(word){
            let current = this.root;
    
            for(let ch of word){
                if(!current.children[ch])return false;
                current = current.children[ch];
            }
            return current.isEnd;
        }
    ```
    
- *Finds word in O(length of word)*
- 🔎 7. Prefix Search (startsWith) /
    
    ```jsx
    startWith(prefix){
            let current = this.root;
    
            for(let ch of prefix){
                if(!current.children[ch])return false
                current = current.children[ch];
            }
            return true;
        }
    ```
    
- *Used for autocomplete.*

---

### ❌ 8. Delete a Word from Trie (Advanced)

Idea:

- Go to last character
- Unmark `isEnd`
- Remove nodes if they are not used by other words

(Deletion is usually asked as **concept**, not full code for beginners.)

---

### ⚙️ 9. Time & Space Complexity

⏱ Time Complexity

| Operation | Complexity |
| --- | --- |
| Insert | **O(L)** |
| Search | **O(L)** |
| Prefix search | **O(L)** |

`L` = length of word

✅ Independent of number of words stored

---

### 💾 Space Complexity

- Can be **high** because each character stores a node
- Optimized versions exist (Compressed Trie / Radix Tree)

---

### 🔥 10. Trie vs Hash Table vs BST

| Feature | Trie | Hash Table | BST |
| --- | --- | --- | --- |
| Search Time | O(L) | O(1) avg | O(log n) |
| Prefix Search | ✅ Yes | ❌ No | ❌ No |
| Memory | High | Medium | Medium |
| Ordered words | ✅ Yes | ❌ No | ✅ Yes |
| Best for | Strings, prefixes | Key-value | Sorted data |

### 🎯 11. Applications of Trie (Very Important)

✅ Real-World

✔ Autocomplete

✔ Spell checker

✔ Search suggestions

✔ Dictionary apps

✔ Contact search

✔ URL routing

✔ IP routing

✅ DSA / Interview Problems

✔ Longest common prefix

✔ Word search

✔ Replace words

✔ Auto-suggest systems

✔ Phone directory

✔ Prefix matching

✔ Word break problems

---

### 🌟 12. Advantages & Disadvantages

✅ Advantages

✔ Very fast prefix search

✔ Easy autocomplete

✔ No collisions like hash

✔ Alphabetical order traversal

❌ Disadvantages

❌ High memory usage

❌ Not good for numeric keys

❌ More complex than arrays/maps

### 🧠 Easy Summary

| Concept | Meaning |
| --- | --- |
| Trie | Tree for strings |
| Node | One character |
| Prefix | Shared start of words |
| isEnd | Marks complete word |
| Best Use | Autocomplete |
| Search speed | Depends on word length |