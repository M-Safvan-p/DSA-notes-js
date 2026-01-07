/**
 * ======================================================
 * TRIE (PREFIX TREE) IMPLEMENTATION – JavaScript
 * ======================================================
 *
 * A Trie is used for efficient string operations like:
 * - Insert
 * - Search
 * - Prefix matching
 *
 * Time Complexity:
 * - Insert: O(L)
 * - Search: O(L)
 * - StartsWith: O(L)
 *
 * Where L = length of the word / prefix
 *
 * ======================================================
 */

/* ======================================================
   TRIE NODE
====================================================== */

class TrieNode {
    constructor() {
        this.children = {}; // character -> TrieNode
        this.isEnd = false; // marks end of a word
    }
}

/* ======================================================
   TRIE CLASS
====================================================== */

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Insert a word into the Trie
     * Time Complexity: O(L)
     */
    insert(word) {
        let current = this.root;

        for (let ch of word) {
            if (!current.children[ch]) {
                current.children[ch] = new TrieNode();
            }
            current = current.children[ch];
        }

        current.isEnd = true;
        return true;
    }

    /**
     * Check if any word starts with the given prefix
     * Time Complexity: O(L)
     */
    startsWith(prefix) {
        let current = this.root;

        for (let ch of prefix) {
            if (!current.children[ch]) return false;
            current = current.children[ch];
        }

        return true;
    }

    /**
     * Search for a complete word
     * Time Complexity: O(L)
     */
    search(word) {
        let current = this.root;

        for (let ch of word) {
            if (!current.children[ch]) return false;
            current = current.children[ch];
        }

        return current.isEnd;
    }

    /**
     * Lazy Delete a word from the Trie
     * (Only unmarks isEnd, does NOT remove nodes)
     *
     * Time Complexity: O(L)
     */
    delete(word) {
        let current = this.root;

        for (let ch of word) {
            if (!current.children[ch]) return false;
            current = current.children[ch];
        }

        if (!current.isEnd) return false;

        current.isEnd = false;
        return true;
    }
}

/* =======================
   Example Usage
======================= */

// const trie = new Trie();
// trie.insert("cat");
// trie.insert("cap");

// console.log(trie.search("cat"));     // true
// console.log(trie.search("car"));     // false
// console.log(trie.startsWith("ca"));  // true
// trie.delete("cat");
// console.log(trie.search("cat"));     // false
