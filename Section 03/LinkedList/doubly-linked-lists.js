//Doubly Linkedlist node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    //If the doubly linked list is  empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    // If the list is empty, the new node becomes both the head and tail
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node before the current head
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode; // Update the head to the new node
    }

    this.length++; // Increment the length of the list
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  print() {
    const values = [];
    let temp = this.head;
    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }
    console.log(values.join(" -> "));
  }

  reversePrint() {
    const values = [];
    let temp = this.tail;
    while (temp) {
      values.push(temp.value);
      temp = temp.prev;
    }
    console.log(values);
  }
}

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.print();
//myDoublyLinkedList.pop();
//myDoublyLinkedList.unshift(7);
myDoublyLinkedList.shift();
myDoublyLinkedList.print();
//console.log(myDoublyLinkedList);

/* 

REVERSE A DOUBLY LINKED LIST

reverse() {
  let temp = null;
  let curr = this.head;

  /// Swap next and prev pointers for all nodes
  while (curr !== null) {
    temp = curr.prev;     // Save the current prev
    curr.prev = curr.next; // Reverse the prev pointer
    curr.next = temp;     // Reverse the next pointer
    curr = curr.prev;     // Move to the next node (which is now in curr.prev)
  }

  /// Swap the head and tail
  if (temp !== null) {
    this.tail = this.head;
    this.head = temp.prev; // Adjust head to the new first node
  }

  return this;
}


*/
