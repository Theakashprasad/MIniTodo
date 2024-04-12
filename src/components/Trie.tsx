import React from 'react';

// Define the TrieNode class
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Define the Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  autoComplete(word) {
    if(word === '') return null
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.collectWord(node, word, list);
    return list;
  }

  collectWord(node, word, list) {
    if (node.isEndOfWord) {
      list.push(word);
    }
    for (let char in node.children) {
      this.collectWord(node.children[char], word + char, list);
    }
  }
}
type Props = {
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
}
function TrieExport({todo, setTodo}:Props) {
    console.log(todo);
  const trie = new Trie();

  trie.insert('home work');
  trie.insert('eating');
  trie.insert('sleeping');
  trie.insert('working');
  trie.insert('dancing');
  trie.insert('watching');
  trie.insert('running');
  trie.insert('playing');
  trie.insert('playing');
  trie.insert('dead');

  const autoValue =  trie.autoComplete(todo);
console.log(autoValue);

  return (
    <div className='h-10'>
      <h2 className='font-bold text-sm dark:text-white'>Trie Autocomplete</h2>
      <ul className='flex-col font-thin text-blue-800 cursor-pointer dark:text-blue-200'>
                {autoValue && autoValue.map((item, index) => (
                    <li key={index} onClick={() => setTodo(item)}>{item}</li>
                ))}
            </ul>    </div>
  );
}

export default React.memo(TrieExport) 
