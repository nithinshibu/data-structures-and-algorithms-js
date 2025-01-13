class HashTable {
  constructor(size = 6) {
    // Initialize the hash table with an array of the specified size (default is 6).
    this.keyMap = new Array(size);
  }

  hashFunction(key) {
    // Start with a sum of 0, which will store the hash value.
    let sum = 0;
    const PRIME_NUMBER = 31; // A prime number to reduce collisions in the hash function.

    // Loop through each character of the key, up to a maximum of 100 characters.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // Get the ASCII code of the character, adjusting by subtracting 96 to map 'a' to 1, 'b' to 2, etc.
      const charCode = key.charCodeAt(i) - 96;

      // Update the sum using the prime number and current character code, and keep it within the array bounds.
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    // Return the computed hash value, which determines the index for this key.
    return sum;
  }

  set(key, value) {
    // Calculate the index for the key using the hash function.
    const index = this.hashFunction(key);

    // If the slot at the calculated index is empty, initialize it as an empty array.
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // Add the key-value pair to the array at the calculated index.
    this.keyMap[index].push([key, value]);

    // Return the current hash table instance to allow method chaining if needed.
    return this;
  }

  get(key) {
    // Calculate the index for the key using the hash function.
    const index = this.hashFunction(key);

    // Check if the array at the calculated index exists.
    if (this.keyMap[index]) {
      // Loop through the array at the index to find the key-value pair.
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // If the key matches the current pair's key, return the associated value.
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    // If the key is not found, return undefined.
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  getAllValues() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

// Create a new hash table instance to store phone book entries.
const phoneBook = new HashTable();

// Add a key-value pair to the hash table (e.g., name and phone number).
phoneBook.set("john", "555-333-444");
phoneBook.set("james", "555-331-844");
phoneBook.set("jordan", "555-337-644");

// Retrieve the phone number for the given key ("john") and log it to the console.
console.log(phoneBook.get("john"));

console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
