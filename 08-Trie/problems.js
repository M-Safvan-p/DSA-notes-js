/**
 * ======================================================
 * TRIE PROBLEMS – JavaScript
 * ======================================================
 *
 * Given words:
 * ["cat", "cap", "can", "bat"]
 *
 * Tasks:
 * 1. Insert all words into a Trie
 * 2. Search for "cap"        → true
 * 3. Search for "cab"        → false
 * 4. Check if any word starts with "ca"
 * 5. Autocomplete for prefix "ca"
 * 6. Count total number of words in the Trie
 * 7. Find longest prefix of "camera" in Trie
 * 8. Check if "ca" is a complete word
 * 9. Count how many words start with prefix "ca"
 *
 * ======================================================
 */

/* ======================================================
   TRIE NODE
====================================================== */

class TrieNode {
    constructor() {
        this.children = {};   // Stores character → TrieNode
        this.isEnd = false;   // Marks end of a word
    }
}

/* ======================================================
   TRIE IMPLEMENTATION
====================================================== */

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /* ---------- Insert a Word ---------- */

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

    /* ---------- Search a Complete Word ---------- */

    search(word) {
        let current = this.root;

        for (let ch of word) {
            if (!current.children[ch]) return false;
            current = current.children[ch];
        }
        return current.isEnd;
    }

    /* ---------- Check Prefix Exists ---------- */

    startsWith(prefix) {
        let current = this.root;

        for (let ch of prefix) {
            if (!current.children[ch]) return false;
            current = current.children[ch];
        }
        return true;
    }

    /* ---------- Autocomplete ---------- */

    autoComplete(prefix) {
        let current = this.root;

        for (let ch of prefix) {
            if (!current.children[ch]) return [];
            current = current.children[ch];
        }

        const result = [];

        function dfs(node, word) {
            if (node.isEnd) result.push(word);

            for (let c in node.children) {
                dfs(node.children[c], word + c);
            }
        }

        dfs(current, prefix);
        return result;
    }

    /* ---------- Count Total Words ---------- */

    countWords() {
        let count = 0;

        function dfs(node) {
            if (node.isEnd) count++;
            for (let c in node.children) {
                dfs(node.children[c]);
            }
        }

        dfs(this.root);
        return count;
    }

    /* ---------- Count Words With Given Prefix ---------- */

    countWordsWithPrefix(prefix) {
        let current = this.root;

        for (let ch of prefix) {
            if (!current.children[ch]) return 0;
            current = current.children[ch];
        }

        let count = 0;

        function dfs(node) {
            if (node.isEnd) count++;
            for (let c in node.children) {
                dfs(node.children[c]);
            }
        }

        dfs(current);
        return count;
    }

    /* ---------- Longest Prefix Match ---------- */

    longestPrefix(word) {
        let current = this.root;
        let result = "";

        for (let ch of word) {
            if (!current.children[ch]) break;
            result += ch;
            current = current.children[ch];
        }
        return result;
    }
}

/* ======================================================
   TEST CASES (TASKS 1–9)
====================================================== */

const words = ["cat", "cap", "can", "bat"];
const trie = new Trie();

/* 1. Insert words */
for (let word of words) {
    trie.insert(word);
}

/* 2. Search "cap" */
console.log(trie.search("cap")); // true

/* 3. Search "cab" */
console.log(trie.search("cab")); // false

/* 4. Check prefix "ca" */
console.log(trie.startsWith("ca")); // true

/* 5. Autocomplete "ca" */
console.log(trie.autoComplete("ca")); // ["cat", "cap", "can"]

/* 6. Count total words */
console.log(trie.countWords()); // 4

/* 7. Longest prefix of "camera" */
console.log(trie.longestPrefix("camera")); // "ca"

/* 8. Check if "ca" is a complete word */
console.log(trie.search("ca")); // false

/* 9. Count words starting with "ca" */
console.log(trie.countWordsWithPrefix("ca")); // 3
