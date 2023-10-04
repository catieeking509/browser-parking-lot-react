import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';

import NavBar from './Components/NavBar/NavBar';
import ContactForm from './Components/ContactForm/ContactForm';
import phone from './Components/Images/phone.png';

import './App.css';


function App() {

  let [parkingLotItems, setParkingLotItems] = useState([]);



  function initializePageState() {
    let savedState = localStorage.getItem("items");
    if (typeof savedState === 'string') {
      let parsedState = JSON.parse(savedState);
      setParkingLotItems(parsedState);
    };
  }

  useEffect(initializePageState, []);

  function addItem(date, link, description, priority) {
    setParkingLotItems(function (oldItems) {
      let newItems = [
        ...oldItems, 
        {
          date,
          description,
          link,
          priority,
          id: nanoid(),
        },
      ];
      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
    });
  }


  function deleteItem(id) {
    setParkingLotItems((oldItems) => 
      oldItems.filter((item) => item.id !== id)
    );
  }

  function editItem(id, date, link, description, priority) {
       
    setParkingLotItems(function (oldItems) {
      let newItems = oldItems.map(
        item => item.id === id ? ({id, date, description, link, priority}) : item
      );

      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
    });
  }


  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <h1 className="header">BROWSER PARKING LOT</h1>
      <p className="sub-heading">less tabs = less stress!</p>
      <main>
        <ParkingLotForm submitItem={ addItem } />
        <ParkingLotList 
          parkingLotItems={ parkingLotItems } 
          editItem={ editItem }
          deleteItem= { deleteItem }/>
        <div className="contact-form-container">
          <img src={phone} className="contact-image" alt="phone" />
          <ContactForm />
        </div>
      </main>
      <footer>
        created with love thanks to: coffee, tequila, and cheese.
      </footer>
    </div>
  );
}

export default App;
