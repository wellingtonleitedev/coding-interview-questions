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
    const next = this.head;
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;
    this.head.prev = node;
    this.head = node;
    this.head.prev = null;
    this.head.next = next;
  }

  setTail(node) {
    const prev = this.tail;

    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    this.tail.next = node;
    this.tail = node;
    this.tail.next = null;
    this.tail.prev = prev;
  }

  insertBefore(node, nodeToInsert) {
    let currentNodeFromHead = this.head;
    let currentNodeFromTail = this.tail;

    while (currentNodeFromHead != currentNodeFromTail) {
      if (node === this.head) this.head = nodeToInsert;

      if (currentNodeFromHead === node) {
        nodeToInsert.prev.next = nodeToInsert.next;
        nodeToInsert.next.prev = nodeToInsert.prev;

        nodeToInsert.prev = currentNodeFromHead.prev;
        nodeToInsert.next = currentNodeFromHead;
        currentNodeFromHead.prev.next = nodeToInsert;
        currentNodeFromHead.prev = nodeToInsert;

        break;
      }

      if (currentNodeFromTail === node) {
        nodeToInsert.prev.next = nodeToInsert.next;
        nodeToInsert.next.prev = nodeToInsert.prev;

        nodeToInsert.prev = currentNodeFromTail.prev;
        nodeToInsert.next = currentNodeFromTail;
        currentNodeFromTail.prev.next = nodeToInsert;
        currentNodeFromTail.prev = nodeToInsert;

        break;
      }

      currentNodeFromHead = currentNodeFromHead.next;
      currentNodeFromTail = currentNodeFromTail.prev;
    }
  }

  insertAfter(node, nodeToInsert) {
    let currentNodeFromHead = this.head;
    let currentNodeFromTail = this.tail;

    while (currentNodeFromHead != currentNodeFromTail) {
      if (currentNodeFromHead === node) {
        if (nodeToInsert.prev) nodeToInsert.prev.next = nodeToInsert.next;
        if (nodeToInsert.next) nodeToInsert.next.prev = nodeToInsert.prev;

        nodeToInsert.prev = currentNodeFromHead;
        nodeToInsert.next = currentNodeFromHead.next;
        if (currentNodeFromHead.next)
          currentNodeFromHead.next.prev = nodeToInsert;
        currentNodeFromHead.next = nodeToInsert;

        break;
      }

      if (currentNodeFromTail === node) {
        if (node === this.tail) this.tail = nodeToInsert;

        if (nodeToInsert.prev) nodeToInsert.prev.next = nodeToInsert.next;
        if (nodeToInsert.next) nodeToInsert.next.prev = nodeToInsert.prev;

        nodeToInsert.prev = currentNodeFromTail;
        nodeToInsert.next = currentNodeFromTail.next;
        if (currentNodeFromTail.next)
          currentNodeFromTail.next.prev = nodeToInsert;
        currentNodeFromTail.next = nodeToInsert;

        break;
      }

      currentNodeFromHead = currentNodeFromHead.next;
      currentNodeFromTail = currentNodeFromTail.prev;
    }
  }

  insertAtPosition(position, nodeToInsert) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
      }

      currentNode = currentNode.next;
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) this.head = currentNode.next;
        if (currentNode === this.tail) this.tail = currentNode.prev;

        if (currentNode.prev) currentNode.prev.next = currentNode.next;

        if (currentNode.next) currentNode.next.prev = currentNode.prev;
      }

      currentNode = currentNode.next;
    }
  }

  remove(node) {
    let currentNodeFromHead = this.head;
    let currentNodeFromTail = this.tail;

    while (currentNodeFromHead != currentNodeFromTail) {
      if (currentNodeFromHead === node) {
        currentNodeFromHead.prev.next = currentNodeFromHead.next;
        currentNodeFromHead.next.prev = currentNodeFromHead.prev;
        break;
      }

      if (currentNodeFromTail === node) {
        currentNodeFromTail.prev.next = currentNodeFromTail.next;
        currentNodeFromTail.next.prev = currentNodeFromTail.prev;
        break;
      }

      currentNodeFromHead = currentNodeFromHead.next;
      currentNodeFromTail = currentNodeFromTail.prev;
    }
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    let isValueExist = false;

    while (currentNode) {
      if (currentNode.value === value) {
        isValueExist = true;
      }

      currentNode = currentNode.next;
    }

    return isValueExist;
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
doublyLinkedList.insertAfter(six, three3);
doublyLinkedList.removeNodesWithValue(3);
doublyLinkedList.remove(two);
doublyLinkedList.containsNodeWithValue(5);

doublyLinkedList.getWholeListFromHead();
doublyLinkedList.getWholeListFromTail();

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
