import axios from 'axios';

import './App.css';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


// this is the gym table form which lists all the gmy leaders and there badges types and locations as well as if you have obtained that badge or not. Most of this data is not changable 
// and is just on the server for the list part the only thing you can change on it is the yes or no from weather you were able to obtain the badge or not.
//use effect allows you to get the info from the server and the funciton returns the table as well as a well as some images. It has a map function as well so that it goes through and adds
// a new row with all data for all gym leaders and there badges as well as adding a button to update each individually that is tied to that gym badge so you only update the right one.
// the titles are stylized inline and the tables are styled with css as well as bootstrap allowing for colors as well as hovering.


function GymTable() {

  let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

  const [records, setRecords] = useState([])
  


  useEffect(() => {
    axios.get('http://localhost:4000/gym')
    .then(res => {
      setRecords(res.data)
    })
  }, [] )

  return ( 


    
    <div>
            <div className="text-center">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59bb55c6-428c-413c-a237-edcaf77cfdc7/d4zw0dn-741eb5e1-c7ed-4be7-8782-0ea9d29b3860.png/v1/fit/w_684,h_459,q_70,strp/pokemon___all_gym_badges_from_generation_1__5_by_awesomeadam15_d4zw0dn-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDU5IiwicGF0aCI6IlwvZlwvNTliYjU1YzYtNDI4Yy00MTNjLWEyMzctZWRjYWY3N2NmZGM3XC9kNHp3MGRuLTc0MWViNWUxLWM3ZWQtNGJlNy04NzgyLTBlYTlkMjliMzg2MC5wbmciLCJ3aWR0aCI6Ijw9Njg0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5AxbOc4l6uThTPC7HNL1_m4FSdDVzX3ey9bwnbvA0EE" width="500px" alt=" " ></img>
            </div>

                <div className='border1  p-5 pb-3'>
                <h1 className=' fs-1 fw-b text-center titletext'><img src={url} alt=""  width="50px"></img>All Gyms Leaders and Badges<img src={url} alt=""  width="50px"></img></h1>
                 </div>
                 <div className='container text-center'>
                  <p>This part of the App helps you keep track of your pokemon journey through out all the generations. It allows you to track all the gym leaders, there gyms, there 
                    pokemon type of choice, and what there badge is. You can use this to get a leg up on your compition by building a team that best utlizes the type advantages
                    when battling these feirce gym leaders. Once battled and won you can update the list to show weather or not you have obtained that badge. This can really help to show 
                    how much of a Pokemon Master you have become by being the best and beating them all. Good Luck trainers, your going to need it!
                  </p>
                 </div>

      <div className='container'>
      <Card>
         
          <table className='table table-success table-striped table-hover'>
            <thead>
              <tr>

                <td><strong>Generation</strong></td>
                <td><strong>Gym Name</strong></td>
                <td><strong>Gym Leader</strong></td>
                <td><strong>Gym Type</strong></td>
                <td><strong>Gym Badge</strong></td>
                <td><strong>Obtained</strong></td>
                <td><strong>Update</strong></td>
                
                

              </tr>

            </thead>
            
         <tbody>
            
        
                <>
                {
      records.map((d, gym) =>  (

                <tr key={d.gym}>
                    <td>{d.gen}</td>
                    <td>{d.name}</td>
                    <td>{d.leader}</td>
                    <td>{d.type}</td>
                    <td>{d.badge}</td>
                    <td>{d.obtained}</td>
                    <td>
                    <Link to={`/updategym/${d.id}`} className='btn btn-sm btn-primary me-1'>Update Badge Status</Link>

                    </td>

                </tr>
  
      ))}

                 </>

            </tbody>

         </table>
      </Card>
      </div>

      <div className="text-center">
                <img src="https://cdn.vox-cdn.com/thumbor/dK0HZgQRJexx4swffsb4e-XDHBQ=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71614827/Ash_Ketchum_World_Champion_Screenshot_2.0.jpg" width="500px" alt=" " ></img>
            </div>

           

    
     
    </div>
  
  )
  
  }


export default GymTable;
