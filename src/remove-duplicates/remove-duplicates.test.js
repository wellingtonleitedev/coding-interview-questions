import {
  LinkedList as LinkedListParent,
  removeDuplicatesFromLinkedList,
} from "./remove-duplicates";

class LinkedList extends LinkedListParent {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }

    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

it("Test Case #1", function () {
  const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
  const expected = new LinkedList(1).addMany([3, 4, 5, 6]);

  console.log({
    actual: removeDuplicatesFromLinkedList(input).getNodesInArray(),
  });

  expect(removeDuplicatesFromLinkedList(input).getNodesInArray()).toEqual(
    expected.getNodesInArray()
  );
});
