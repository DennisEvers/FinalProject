
import './App.css';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


//This is the App component which contains the main information for the pokemon caught database it returns the banners the images the titles as well as the table
//that displays the information stored on the server as well as the update and delete buttons. the handle submit button for the delete button removes the data from the server as well
//as refreshes the current page that you are on. it also has the link to the update button which moves you to the update form page. The data is displayed on this page
// in table form and there is a map function that runs through all the pokemon adding them to the app when it loads along with update and delete buttons tied to each specific pokemon.
// the handle submit button allows you to delete or release the pokemon but comes up with a warning alert to make sure you really want to and dont by mistake 

function App() {

  let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

  const [records, setRecords] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/pokemon')
    .then(res => {
      setRecords(res.data)
    })
  }, [])

  return (
    

            
           
   
     
    
    
    <div className='container'>
      <div className='obtainedBG'>
    
      </div>

              <div className='border1  p-5 pb-3'>
                <h1 className=' fs-1 fw-b text-center titletext'><img src={url} alt=""  width="50px"></img>Pokemon Caught<img src={url} alt=""  width="50px"></img></h1>
              </div>
              <div className='text-center'>
                <p>Keep track of any pokemon you catch with this part of the App. You can add your pokemon what type it is along with its level. If any of that changes it is ok 
                  feel free to update each pokemon individually. Now get out there and start getting that Pokedex done!
                </p>
              </div>

        

      <div className='text-end mt-2 p-2 bg-light text-center'><Link to='/create' className="btn btn-success">Add Caught Pokemon +</Link></div>
      <div className='container text-center'>
      <Card>
          <table className='table table-success table-striped table-hover'>
            <thead>
              <tr>
                <td><strong>Pokemon</strong></td>
                <td><strong>Type</strong></td>
                <td><strong>Level</strong></td>
                <td><strong>ID</strong></td>
                <td><strong>Update and Delete Pokemon</strong></td>
                

              </tr>

            </thead>
         <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td><strong>{d.name}</strong></td>
                <td>{d.type}</td>
                <td>{d.level}</td>
                <td><strong>{d.id}</strong></td>
                <td>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-1'>Update</Link>
                  <button onClick={e => handleSubmit(d.id)} className='btn btn-sm btn-danger'>Release Pokemon</button>
                </td>
              </tr>
            ))
          }
        </tbody>

        </table>
      </Card>
      </div>

      <div className='text-center'>
        <img src="https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/2022-06/pm0130_00_gyarados_256.ktx__2.png" alt=" "></img>
      </div>
    
     
    </div>
  );
  function handleSubmit(id){
    const conf = window.confirm("Are You Sure You Want To Release The Pokemon");
    if(conf) {
      axios.delete('http://localhost:4000/pokemon/'+id)
      .then(res => {
        alert('Pokemon Released Into The Wild');
        window.location.reload();
      }).catch(err => console.log(err))
    }
  
  }
}

export default App;
