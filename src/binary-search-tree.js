const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.core = null;
  }
  root() {
    return this.core;
  }

  add(data) {
    this.core = addNode(this.core, data);
    function addNode(node,data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
    if (data < node.data){
      node.left = addNode(node.left, data);
    } else {
      node.right = addNode(node.right, data);
    }
    return node;
    }
  }

  has(data) {
    return searchNode(this.core, data);
    function searchNode(node, data) {
      if (node === null){
      return false;
      }
      if (node.data === data){
        return true;
      }
      return data > node.data ? searchNode(node.right, data): searchNode(node.left, data);
    }
  }

  find(data) {
    return findNode(this.core, data);
    function findNode(node, data) {
      if (node === null){
      return null;
      }
      if (node.data === data){
        return node;
      }
      return data > node.data ? findNode(node.right, data): findNode(node.left, data);
    }
  }
  
  remove(data) {
  this.core = removeNode(this.core, data);
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if ((node.left === null) && (node.right === null)) {
          return null;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      } 
      if (node.left === null) {
        node = node.right;
        return node;
      }
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (this.core === null){
    return;
    }
    let node = this.core;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.core === null){
    return;
    }
    let node = this.core;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};