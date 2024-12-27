// const stringArr = ["a", "b", "c", "d", "e"];

// const numArr = [1, 2, 3, 4, 5];

// const boolArr = [true, false];

// const mixedArr = ["a", "apple", true, 1, null, undefined, { key: "value" }];

// console.log(mixedArr);

//Creating our own array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    //re-indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArr = new MyArray();
newArr.push("apple");
newArr.push("orange");
newArr.push("grapes");
console.log(newArr.get(2));

//newArr.pop();
//console.log(newArr);
//newArr.shift();
//newArr.deleteByIndex(1);
console.log(newArr);

//This is  how the shift method works

/*

Initial data

{
  0: "apple",
  1: "orange",
  2: "grapes"
}



Length =3;

Step 1: Storing the first item

const firstItem = "apple"; // this.data[0]


Step 2: Re-indexing 

 i = 0: this.data[0] = this.data[1] -> { 0: "orange", 1: "orange", 2: "grapes" }
 i = 1: this.data[1] = this.data[2] -> { 0: "orange", 1: "grapes", 2: "grapes" }
 i = 2: this.data[2] = undefined -> { 0: "orange", 1: "grapes", 2: undefined }

Step 3: Remove the last element

delete this.data[2]; // { 0: "orange", 1: "grapes" }

Step 4: Updating the length 

this.length = 2;



*/
