/**
 * ======================================================
 * GRAPH IMPLEMENTATION – ADJACENCY LIST
 * ======================================================
 *
 * This graph is:
 * - Undirected
 * - Unweighted
 *
 * Operations included:
 * - Add vertex           → O(1)
 * - Add edge             → O(1)
 * - Remove edge          → O(V)
 * - Remove vertex        → O(V + E)
 * - Check edge           → O(V)
 * - Display Graph        → O(V + E)
 * - BFS traversal        → O(V + E)
 * - DFS traversal        → O(V + E)
 *
 * ======================================================
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /* ---------- Add Vertex ---------- */

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /* ---------- Add Edge (Undirected) ---------- */

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    /* ---------- Remove Edge ---------- */

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1].filter(v => v !== vertex2);

        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    /* ---------- Remove Vertex ---------- */

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    /* ---------- Check if Edge Exists ---------- */

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1]?.includes(vertex2) &&
            this.adjacencyList[vertex2]?.includes(vertex1)
        );
    }

    /* ---------- Display Graph ---------- */

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }

    /* ======================================================
       BREADTH FIRST SEARCH (BFS)
    ====================================================== */

    bfs(start) {
        const visited = {};
        const queue = [start];
        const result = [];

        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for (let neighbour of this.adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }

        return result;
    }

    /* ======================================================
       DEPTH FIRST SEARCH (DFS – Recursive)
    ====================================================== */

    dfs(start) {
        const result = [];
        const visited = {};

        const dfsHelper = (vertex) => {
            if (!vertex) return;

            visited[vertex] = true;
            result.push(vertex);

            for (let neighbour of this.adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    dfsHelper(neighbour);
                }
            }
        };

        dfsHelper(start);
        return result;
    }
}

/* =======================
   Example Usage
======================= */

// const graph = new Graph();

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");

// graph.display();

// console.log("BFS:", graph.bfs("A"));
// console.log("DFS:", graph.dfs("A"));
