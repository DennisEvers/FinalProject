import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



//This is the Edit component for the gym badges. It like the others pulls the specific gym badge using the id of the object and then auto populates the data. In this one 
// I have no id and just the name of the gmy and the badge but i have them disabled so the only thing you can change is weather you got the badge or not. the handlesubmit 
//function is tied to the form that is linked to the submit button. The handlesubmit puts the data back into the server updated and then alerts you and navigates you
//back to the original page you were on with the badges displayed.



function EditGym() {

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/gym/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:4000/gym/'+id, data)
        .then(res => {
            alert("Pokemon Badge Updated successfully!");
            navigate('/gymtable')
            
        })

    }
    return(

        <div>
                    <div className='text-center'>
                       <img src="https://m.media-amazon.com/images/M/MV5BNTU0YmFlN2ItZjBlZC00OWRiLTk4MzItYzA0MTljMTE3NWM3XkEyXkFqcGdeQXVyNjc4ODAzODc@._V1_.jpg" width="500px" alt=" " ></img>
                    </div>
            <div className='text-center'>
                <h2><img src={url} alt=""  width="50px"></img>Update Gym Badge Progress<img src={url} alt=""  width="50px"></img></h2>
            </div>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">

            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}> 
                    <div>
                    <label htmlFor="name">Gym Name</label>
                    <input type="text" disabled name="name" value={data.name} className="form-control" />    
                    </div> 
                    <div>
                    <label htmlFor="name">Badge Name</label>
                    <input type="text" disabled name="name" value={data.badge} className="form-control" />    
                    </div> 
                
                <div>
                    <label htmlFor="obtained">Obtained </label>
                    <input type="text" name="obtained" value={data.obtained} className="form-control" 
                    onChange={e => setData({...data, obtained: e.target.value})}/>
                     
                    
                </div>
    

                <br/>
                <div className='text-center'>
                <button className="btn btn-info">Update Badge</button>
                </div>
                </form>
            </div>

            
        </div>
                    <div className='text-center'>
                       <img src="https://archives.bulbagarden.net/media/upload/thumb/c/c9/Ash_Unova_Badges.png/1200px-Ash_Unova_Badges.png" width="500px" alt=" " ></img>
                    </div>
        </div>
    )
}

export default EditGym;