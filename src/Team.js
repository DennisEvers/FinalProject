
import axios from 'axios';

import './App.css';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


//This is the app page for the team section. This is the main page that displays the teams that you can create in the app.
// it contains the use effect to populate the data fromt he backend server as well as the images and the table displayed when the function is returned.
// under the title and images there is a card that contains the table that has a map function that goes through all the teams that are on the server and 
// displays them. It displays them in one team that has 6 pokemon on it as well as a centered title and a centered update and delete button.
// titels are stylized inline and each button is linked to the team that it is connected to. I have the map go through each team with its own card 
// so that it is easier to read as well for the user. The Update button links you to the update form with it auto populated with the current data
// as well as a disbnand team button that warns you if you are sure you wanna disband the team and then a alert stating that it was successful.


function Team() {

  let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"


  const [records, setRecords] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/team')
    .then(res => {
      setRecords(res.data)
    })
  }, [])

  return (
    

    

   <>
     
    
    
    <div>
      <div className='teamBG'>

      </div>

                <div className='border1  p-5 pb-3'>
                <h1 className=' fs-1 fw-b text-center titletext'><img src={url} alt=""  width="50px"></img>Pokemon Teams<img src={url} alt=""  width="50px"></img></h1>
                 </div>
                 <div className='text-center container'>
                  <p>This part of the App allows you to keep track of any pokemon team you may have or want. You can keep track of teams used to beat the Elite four,
                     your favorite teams, and teams you may not have but want like a Dream Team. Use the Team Data Base to keep track of whatever your pokemon Teams
                     needs may be so happy building.
                  </p>
                 </div>


      <div className='text-end mt-2 p-2 bg-light text-center'><Link to='/createteam' className="btn btn-success">Add Pokemon Team +</Link></div>

      {
            records.map((d, i) => (
      <div className='container'>
      <Card>
        <h3 className='text-center'>Team {d.id}</h3> 
          <table className='table table-info table-striped table-hover'>
            <thead>
              <tr>
            
                <td><strong>Pokemon</strong></td>
                <td><strong>Type</strong></td>
                <td><strong>Level</strong></td>
                

              </tr>

            </thead>
            
         <tbody>
            
        
                <>


                <tr key={i}>
                    <td>{d.pokemon1}</td>
                    <td>{d.type1}</td>
                    <td>{d.level1}</td>
                    
                </tr>
                <tr key={i}>
                    <td>{d.pokemon2}</td>
                     <td>{d.type2}</td>
                     <td>{d.level2}</td>
                   
                 </tr>
                 <tr key={i}>
                    <td>{d.pokemon3}</td>
                     <td>{d.type3}</td>
                     <td>{d.level3}</td>
                   
                 </tr>
                 <tr key={i}>
                    <td>{d.pokemon4}</td>
                     <td>{d.type4}</td>
                     <td>{d.level4}</td>
                   
                 </tr>
                 <tr key={i}>
                    <td>{d.pokemon5}</td>
                     <td>{d.type5}</td>
                     <td>{d.level5}</td>
                   
                 </tr>
                 <tr key={i}>
                    <td>{d.pokemon6}</td>
                     <td>{d.type6}</td>
                     <td>{d.level6}</td>
                   
                 </tr>
                 <tr>
                 </tr>
                 

                 </>
             

         
            </tbody>


         </table>
                    <div className='text-center m-1 p-1 pb-3'>
                        <Link to={`/updateteam/${d.id}`} className='btn btn-sm btn-primary me-1'>Update Team</Link>
                        <button onClick={e => handleSubmit(d.id)} className='btn btn-sm btn-danger'>Disband Team</button>
                    </div>
      </Card>
      </div>
          

            ))
}

        <div className='text-center'>
           <img src="https://i.kym-cdn.com/photos/images/original/001/171/299/9de.jpg" alt=" " width="400px"></img>
        </div>
        
    
     
    </div>
    </>
  );
  function handleSubmit(id){
    const conf = window.confirm("Are You Sure You Want To Disband The Team");
    if(conf) {
      axios.delete('http://localhost:4000/team/'+id)
      .then(res => {
        alert('Pokemon Team Disbanded');
        window.location.reload();
      }).catch(err => console.log(err))
    }
  
  }
}

export default Team;



//<td>
//<Link to={`/update/${d.team}`} className='btn btn-sm btn-primary me-1'>Update</Link>
//<button onClick={e => handleSubmit(d.team)} className='btn btn-sm btn-danger'>Delete</button>
//</td>