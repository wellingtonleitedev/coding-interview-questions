import { DoublyLinkedList } from "./linked-list-construction";

class TestNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const Node = TestNode;

function getNodeValuesHeadToTail(linkedList) {
  const values = [];
  let node = linkedList.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead(linkedList) {
  const values = [];
  let node = linkedList.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

function bindNodes(nodeOne, nodeTwo) {
  nodeOne.next = nodeTwo;
  nodeTwo.prev = nodeOne;
}

it("Test Case #1", function () {
  const linkedList = new DoublyLinkedList();
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const three2 = new Node(3);
  const three3 = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  bindNodes(one, two);
  bindNodes(two, three);
  bindNodes(three, four);
  bindNodes(four, five);
  linkedList.head = one;
  linkedList.tail = five;

  linkedList.setHead(four);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 3, 5]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([5, 3, 2, 1, 4]);

  linkedList.setTail(six);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 3, 5, 6]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 3, 2, 1, 4]);

  linkedList.insertBefore(six, three);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 3, 6]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 3, 5, 2, 1, 4]);

  linkedList.insertAfter(six, three2);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 3, 6, 3]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([3, 6, 3, 5, 2, 1, 4]);

  linkedList.insertAtPosition(1, three3);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([3, 4, 1, 2, 5, 3, 6, 3]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([3, 6, 3, 5, 2, 1, 4, 3]);

  linkedList.removeNodesWithValue(3);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 6]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 2, 1, 4]);

  linkedList.remove(two);
  expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 5, 6]);
  expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 1, 4]);

  expect(linkedList.containsNodeWithValue(5)).toEqual(true);
});
