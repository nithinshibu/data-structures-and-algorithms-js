/* 
Stack - A stack is a linear data structure that follows LIFO or Last In First Out Principle

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
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

let stack = new Stack(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
//console.log(stack);
stack.print();
