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

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined; // Return undefined if the list is empty
    }

    let currentHead = this.head;
    this.head = this.head.next; // Move the head to the next node
    currentHead.next = null; //removing the first node
    this.length--;

    if (this.length === 0) {
      // If the list is now empty, reset the tail
      this.tail = null;
    }

    return currentHead; // Return the removed node
  }

  print() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }

  //get the first element
  getFirst() {
    console.log(this.head);
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null; // Return null for invalid indices
    }
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let i = 0;
    while (temp) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
      i++;
    }
  }

  //Set method -> finds a node and updates its value
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //Add a new element in any position
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    //Uses the get method to find the node right before the desired position (index-1)
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(11);
myLinkedList.push(12);

//myLinkedList.pop();
//myLinkedList.unshift(7);

//myLinkedList.shift();
myLinkedList.print();
myLinkedList.insert(2, 27);
myLinkedList.print();
//console.log(myLinkedList.get(1));
//myLinkedList.getFirst();
//console.log(myLinkedList.getLast());

//console.log(myLinkedList);
