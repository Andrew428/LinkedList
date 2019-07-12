/* LinkedList */
import LinkedList from './util/LinkedList.js';

window.onload = () => {
  
  const list = new LinkedList(); 
  list.append(1);    
  list.append(2); 
  list.append(2);   
  list.append(3);
  list.append(0);
  list.prepend(0);
  list.prepend(0);  
  console.log(list);
  list.removeDups();
  console.log(list);

};