# 🌐 Graphs

### 🌱 1. What is a Graph? (Very Simple)

A **Graph** is a collection of:

- **Nodes (Vertices)** → things
- **Edges** → connections between things

Real-life examples 🌍

- **Google Maps** → places (nodes) + roads (edges)
- **Social networks** → users + friendships
- **Internet** → computers + cables
- **Flight routes** → cities + flights

---

### The Problem: "Connecting the Dots"

Trees (like the Heap and Trie we learned) are strict. Parents have children. There is a hierarchy.
But real life is messy.

- **Facebook:** You are friends with A. A is friends with B. B is friends with You. (A circle!).
- **Google Maps:** Roads connect cities in all directions. You can go from New York to Boston and back.

A **Graph** is simply a collection of things connected to other things, with no strict "Parent/Child" rules.

---

### 🧱 2. Basic Graph Terms (Must Know)

| Term | Meaning |
| --- | --- |
| **Vertex (Node)** | A point (person, city) |
| **Edge** | Connection between two nodes |
| **Degree** | Number of edges connected to a node |
| **Path** | Sequence of connected nodes |
| **Cycle** | Path that starts & ends at same node |
| **Connected Graph** | Every node reachable |
| **Disconnected** | Some nodes isolated |

---

### 🔗 3. Types of Graphs (Very Important)

✅ Undirected Graph

Edge works **both ways** (friendship).

> A —— B
> 

✅ Directed Graph (Digraph)

Edge has **direction** (Instagram follow).

> A → B
> 

✅ Weighted Graph

Edges have **cost/weight** (distance, time).

> A --5--> B
> 

✅ Unweighted Graph

All edges have equal cost.

---

### 🧠 4. Graph Representation (How We Store Graphs)

✔ 1️⃣ Adjacency List (MOST USED ✅)

Each node stores a list of neighbors.

```jsx
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};
```

✅ Space efficient

✅ Used in interviews & real systems

---

❌ 2️⃣ Adjacency Matrix (Less Used)

```
    A B C D
A [ 0 1 1 0 ]
B [ 1 0 0 1 ]
C [ 1 0 0 0 ]
D [ 0 1 0 0 ]
```

❌ Uses more memory

---

## 📘 **Adjacency Matrix vs Adjacency List**

| Feature | **Adjacency Matrix** | **Adjacency List** |
| --- | --- | --- |
| **Basic Idea** | A **2D table** showing edges using 0/1 | A **list of neighbors** for each node |
| **Structure** | Uses a matrix of size `V × V` | Uses an object/map of arrays |
| **Stores** | All possible edges | Only the actual edges |
| **Memory Usage** | **High** — O(V²) | **Low** — O(V + E) |
| **Good For** | **Dense graphs** (many edges) | **Sparse graphs** (few edges) |
| **Edge Check (u → v?)** | **Very fast**: O(1) | **Slower**: O(k) (k = neighbors count) |
| **Finding Neighbors** | Must scan entire row → **O(V)** | Just read the list → **O(k)** |
| **Insert Edge** | O(1) | O(1) (amortized) |
| **Remove Edge** | O(1) | O(k) |
| **Add Vertex** | Expensive — must resize matrix | Very easy — O(1) |
| **Remove Vertex** | Very expensive — full row/column removal | Simple — remove list + adjust others |
| **Space Efficiency** | Poor for large graphs | Excellent for large graphs |
| **Cache Friendliness** | Good (continuous memory) | Moderate |
| **Use Cases** | Graph algorithms requiring fast edge lookup | BFS, DFS, shortest-path algorithms |
| **Common Algorithms Using It** | Warshall, Floyd | Dijkstra, Prim, Kruskal, BFS/DFS |
| **Easy to understand?** | Medium | Very easy |
| **Representation Example** | Matrix form | Object/list form |
| **Weighted Graph Support** | Easy | Easy |

---

### 🌳 5. Why Graphs Are Important?

Graphs help solve:

- Shortest path
- Connectivity
- Cycles
- Network flow
- Dependencies

Used in:

✔ Google Maps

✔ Facebook friends

✔ Recommendation systems

✔ Operating systems

✔ Compilers

✔ AI search

---

### 🔍 6. Graph Traversals (CORE)

Traversal = visiting all nodes.

✅ BFS (Breadth First Search)

- Visits **level by level**
- Uses **Queue**
- Finds **shortest path** (unweighted graph)

```jsx
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];

  visited.add(start);

  while (queue.length) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

---

### ✅ DFS (Depth First Search)

- Goes **deep first**
- Uses **Stack / Recursion**
- Used for **cycle detection**

```jsx
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  visited.add(node);
  console.log(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
```

---

## ⚙️ 7. BFS vs DFS (Easy Compare)

| Feature | BFS | DFS |
| --- | --- | --- |
| Uses | Queue | Stack/Recursion |
| Finds shortest path | ✅ Yes | ❌ No |
| Memory | More | Less |
| Best for | Level search | Deep exploration |

---

## 🧠 8. Cycle Detection (Basic Idea)

- **Directed graph** → detect using recursion stack
- **Undirected graph** → detect using parent tracking

(We’ll code this in the advanced lesson.)

---

## 🚦 9. Graph Algorithms (Roadmap)

We’ll cover these next, step-by-step:

1️⃣ BFS & DFS (deep)

2️⃣ Cycle Detection

3️⃣ Topological Sorting (DAG)

4️⃣ Shortest Path

- Dijkstra
- Bellman-Ford
    
    5️⃣ Minimum Spanning Tree
    
- Prim’s
- Kruskal’s
    
    6️⃣ Union-Find (Disjoint Set)
    
    7️⃣ Flood Fill
    
    8️⃣ Strongly Connected Components
    

---
## ✅ What is a Complete Graph?

A **complete graph** is a graph where **every pair of distinct vertices is connected by an edge**.

👉 No missing connections.

---

### 📌 Key Facts

- Denoted as **Kₙ** (complete graph with `n` vertices)
- **Each vertex connects to all others**
- **No self-loops**, no multiple edges (simple graph)

## 🌟 10. Easy Summary

| Concept | Meaning |
| --- | --- |
| Graph | Nodes + Edges |
| Directed | One-way |
| Undirected | Two-way |
| Weighted | Edge has cost |
| BFS | Level-by-level |
| DFS | Go deep |
| Best representation | Adjacency List |

# ⭐ **1. Adjacency List – Time Complexity**

| Operation | Time Complexity |
| --- | --- |
| Add Vertex | **O(1)** |
| Add Edge | **O(1)** |
| Remove Edge | **O(E)** (worst case) |
| Remove Vertex | **O(V + E)** |
| Check Edge | **O(k)** (k = number of neighbors) |
| BFS | **O(V + E)** |
| DFS | **O(V + E)** |
| Get Neighbors | **O(k)** |

### 👍 Best for **sparse** graphs (few edges)

---

# ⭐ **2. Adjacency Matrix – Time Complexity**

| Operation | Time Complexity |
| --- | --- |
| Add Vertex | **O(V²)** (matrix resize) |
| Add Edge | **O(1)** |
| Remove Edge | **O(1)** |
| Check Edge | **O(1)** |
| Remove Vertex | **O(V²)** |
| BFS | **O(V²)** |
| DFS | **O(V²)** |
| Get Neighbors | **O(V)** |

### 👍 Best for **dense** graphs (many edges)

---

# ⭐ BFS / DFS Complexity (general rule)

- **BFS** → **O(V + E)**
- **DFS** → **O(V + E)**

Because they visit:

- **Every vertex** → O(V)
- **Every edge** → O(E)

---

# ⭐ One-line Summary

| Representation | Best For | BFS/DFS |
| --- | --- | --- |
| **Adjacency List** | Sparse graphs | **O(V + E)** |
| **Adjacency Matrix** | Dense graphs | **O(V²)** |