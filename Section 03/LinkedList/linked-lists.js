class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);

/* 
LinkedList {
  head: Node { head: 1, next: null },
  tail: Node { head: 1, next: null },
  length: 1
}
*/
