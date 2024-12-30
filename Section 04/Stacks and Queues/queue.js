class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  print() {
    let curr = this.first;
    let values = [];
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    console.log(values.join(" -> "));
  }
}

let queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
//queue.pop();
//console.log(queue);
queue.dequeue();
queue.print();
