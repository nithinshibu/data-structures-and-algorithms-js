class Node {
  constructor(value) {
    this.value = value;
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

  pop() {
    //if the linked list is empty
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    //will be looped until the temp.next !== null
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null; //this will remove the last element from the linked list
    this.length--;

    //if the linkedlist contains only one element
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(11);
myLinkedList.push(12);

myLinkedList.pop();

console.log(myLinkedList);
