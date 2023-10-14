import React from "react";
import GymTable from "./GymTable";

// this is a component that just returns the component i already made called the gym table.
// so when you acces the gym page the gym table component is displayed. I did this in order to give the gym table its own page rather then having it on the home page like it was originally 


function GymPage () {

    return (
        <GymTable/>
    )

}



export default GymPage;