class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linked_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    var node = new Node(val);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

let ll = new Linked_list();
ll.add(20);
ll.add(30);
ll.add(40);
console.log(ll);
console.log(ll.size);
