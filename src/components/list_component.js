import React from 'react';
//creating tabular format for view 
 const Bike = (props) => (
     <table>
     <thead>
       <tr>
         <th>City</th>
         <th>Area</th>
         <th>Bike</th>
         <th>Click to go Location</th>
       </tr>
       </thead>
       <tbody>
       {
       props.data.map((value, index) => (
         <tr key={index}>
          <td>{value.current_city_name}</td>
          <td>{value.current_location_name}</td>
          <td>{value.display_name}</td>
          <td><button onClick={() => props.navigation(value.current_location_name)}>Navigate to Location</button></td>
        </tr>
      ))
    }
    </tbody>
     </table>
 );

 export default Bike;
