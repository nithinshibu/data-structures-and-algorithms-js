class Node {
  constructor(value) {
    this.value = value; // Corrected from `head` to `value` to store the node's data
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    // If linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Connect the current tail to the new node
      this.tail = newNode; // Update the tail reference
    }
    this.length++; // Increment the length of the linked list
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
console.log(myLinkedList);
