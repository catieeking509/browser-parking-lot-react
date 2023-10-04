import React from 'react';
import ParkingLotItem from './ParkingLotItem';



import './ParkingLot.css';


export default function ParkingLotList( {parkingLotItems, deleteItem, editItem} ) {


  let ParkingLotItemsJsx = parkingLotItems.map ( item => 
    <ParkingLotItem key= {item.id} editItem= {editItem} deleteItem= {deleteItem} {...item} />
  );

  

  return (
    <section className="parking-lot-list-container">
      { ParkingLotItemsJsx }
    </section>
  );
}
