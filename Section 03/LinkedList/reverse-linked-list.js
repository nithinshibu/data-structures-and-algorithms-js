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
  print() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }

  //Reverse the linked list

  reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head; // Update tail to current head
    while (curr !== null) {
      //saving the next node
      let next = curr.next;
      //reverse the link
      curr.next = prev;
      //moving the pointers
      prev = curr;
      curr = next;
    }
    this.head = prev; // Update head to last node (prev)
    return prev;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(11);
myLinkedList.push(12);

console.log("Original Linked List:");
myLinkedList.print();

myLinkedList.reverse();
console.log("Reversed Linked List:");
myLinkedList.print();

/* 

---Leet code JS solution--

class Solution {
    reverseList(head) {
        ///Initialize pointers
        let prev = null; // Previous node starts as null
        let curr = head; // Current node starts at the head

        ///Traverse the list
        while (curr !== null) {
            let next = curr.next; // Save the next node
            
            curr.next = prev; // Reverse the link
            
            ///Move pointers forward
            prev = curr; // Move prev to the current node
            curr = next; // Move curr to the next node
        }

        /// prev is now the new head of the reversed list
        return prev;
    }
}


*/

/* 

prev = null: This keeps track of the previous node. It starts as null because the first node will point to null in the reversed list.

curr = head: This is the current node we’re processing, starting at the head of the list.


While Loop (Reversing Process)
The loop continues until we reach the end of the list (curr becomes null).

Step 1: Save the next node
let next = curr.next;
This saves the next node in the original list because we’ll change the next pointer of the current node.

Step 2: Reverse the pointer
curr.next = prev;
This changes the next pointer of the current node to point to the previous node instead of the next one.

Step 3: Move forward

prev = curr;: The prev pointer moves to the current node.
curr = next;: The curr pointer moves to the next node in the original list.
Return the New Head
When the loop ends, prev will be pointing to the new head of the reversed list.


Example Walkthrough:
Let’s reverse this list:
1 -> 2 -> 3 -> null

Before Loop
prev = null, curr = 1

First Iteration

Save next: next = 2
Reverse curr.next: 1 -> null
Move pointers:
prev = 1, curr = 2

Second Iteration

Save next: next = 3
Reverse curr.next: 2 -> 1 -> null
Move pointers:
prev = 2, curr = 3

Third Iteration

Save next: next = null
Reverse curr.next: 3 -> 2 -> 1 -> null
Move pointers:
prev = 3, curr = null
End of Loop
curr = null, and prev is the new head (3).


Final Output:
The reversed list:
3 -> 2 -> 1 -> null


*/
