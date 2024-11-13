import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];
    try {
      
      const itemsRef = collection(db, "users", userId, "items");
      const itemsQuery = query(itemsRef);
  
      const querySnapshot = await getDocs(itemsQuery);
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,     // Document ID
          ...doc.data()   // Document data
        });
      });
      
      return items; // Return the array of items
    } catch (error) {
      console.error("Error retrieving items: ", error);
      throw error;
    }
  }

  async function addItem(userId, item) {
    try {
    
      const itemsRef = collection(db, "users", userId, "items");
  
      
      const docRef = await addDoc(itemsRef, item);
      return docRef.id; // Return the ID of the new document
    } catch (error) {
      console.error("Error adding item: ", error);
      throw error;
    }
  }
  
  export { getItems, addItem };