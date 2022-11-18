class Node {
  constructor(val) {
    (this.val = val), (this.left = null), (this.right = null);
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    let newNode = new Node(val);
    if (this.isTreeEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.val === val) {
      return true;
    } else if (root.val > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.val);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.val);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.val);
    }
  }

  bfsTraversing(root) {
    let queue = [];
    queue.push(this.root);
    while (queue.length) { 
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.val);
    }
  }
}
let bst = new BST();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);

/* 
  bst.preOrder(bst.root);
  bst.inOrder(bst.root);
  bst.postOrder(bst.root); */

bst.bfsTraversing();

//console.log(bst.search(bst.root, 5));

//console.log(bst);
//console.log(bst.isTreeEmpty());
