// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getWholeListFromHead() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log({ list });
  }

  getWholeListFromTail() {
    const list = [];
    let currentNode = this.tail;
    while (currentNode) {
      list.push(currentNode.value);

      currentNode = currentNode.prev;
    }

    console.log({ list });
  }

  setHead(node) {
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    this.remove(nodeToInsert);

    if (node === this.head) this.head = nodeToInsert;

    if (!node) return;

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev) node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    this.remove(nodeToInsert);

    if (node === this.tail) this.tail = nodeToInsert;

    if (!node) return;

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next) node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    let currentNode = this.head;
    let currentPosition = 1;

    while (currentNode) {
      if (currentPosition === position) {
        this.insertBefore(currentNode, nodeToInsert);

        break;
      }

      currentNode = currentNode.next;
      currentPosition += 1;
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        this.remove(currentNode);
      }

      currentNode = currentNode.next;
    }
  }

  remove(node) {
    this.setHeadOrTail(node);

    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;

    // node.prev = null;
    // node.next = null;
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return !!currentNode;
  }

  setHeadOrTail(node) {
    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    }
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let three2 = new Node(3);
let three3 = new Node(3);
let four = new Node(4);
let four2 = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.next = two;

two.prev = one;
two.next = three;

three.prev = two;
three.next = four;

four.prev = three;
four.next = five;

five.prev = four;

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.head = one;
doublyLinkedList.tail = five;

doublyLinkedList.getWholeListFromHead();
doublyLinkedList.getWholeListFromTail();

doublyLinkedList.setHead(four);
doublyLinkedList.setTail(six);
doublyLinkedList.insertBefore(six, three);
doublyLinkedList.insertAfter(six, three2);
doublyLinkedList.insertAtPosition(1, three3);
doublyLinkedList.removeNodesWithValue(3);
doublyLinkedList.remove(two);
doublyLinkedList.containsNodeWithValue(5);
doublyLinkedList.containsNodeWithValue(8);

doublyLinkedList.getWholeListFromHead();
doublyLinkedList.getWholeListFromTail();

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
