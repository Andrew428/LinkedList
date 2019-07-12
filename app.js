/* LinkedList */
import LinkedList from './util/LinkedList.js';
import DoublyLinkedList from './util/doublyLinkedList.js';

window.onload = () => {

  // LinkedList
  const list = new LinkedList(); 
  list.append(1);    
  list.append(2);    
  list.append(3);
  
  list.prepend(0);
  list.prepend(-1);

  list.search(1);
  list.search(3); 
  list.search(999); 

  list.deleteHead(); // -1
  list.deleteTail(); // 3
  list.deleteTail(); // 2
  list.deleteHead(); // 0

  list.deleteHead(); // 1

  list.deleteTail();
  console.log(list);

    // Doubly LinkedList
    const myDoublyLinkedList = new DoublyLinkedList(); 
    myDoublyLinkedList.append(1);    
    myDoublyLinkedList.append(2);    
    myDoublyLinkedList.append(3);
    console.log(myDoublyLinkedList);
    
};