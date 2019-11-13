class Stack {
  constructor() {
    this.top = -1;
    this.size = 0;
    this.arr = [];
  }
  insert(element) {
    if (this.top == -1) {
      this.arr.push(element);
      this.size++;
      this.top++;
    } else if (this.top >= 10) {
      console.log("\n---\nStack overflow\n---\n");
    } else {
      this.arr.push(element);
      this.size++;
      this.top++;
    }
  }
  delete() {
    if (this.top == -1) {
      console.log("underflow");
    } else {
      this.size--;
      this.top--;
      console.log("removed " + this.arr.pop());
    }
  }
  peek(index) {
    if (index < 0 || index > 10) {
      console.log("Cannot peek at these locations");
    } else {
      console.log("Element at location " + index + " is " + this.arr[index]);
    }
  }
}

let minstack = new Stack();
minstack.insert(10);
minstack.insert(20);
minstack.peek(0);
minstack.delete();
console.log(minstack);
