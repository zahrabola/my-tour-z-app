import React from "react";
import Tour from "./Tour";

 const Tours = ({ tours, removeTour }) => {
   return (
     <section>
       <div className="Title">
         <h2>OurTours</h2>
         <div className="underline"></div>
       </div>
       <div>
         {tours.map((tour) => {
           return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
         })}
       </div>
     </section>
   );
 };




export default Tours; 
