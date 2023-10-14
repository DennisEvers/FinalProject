import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


// this is the component that adds a new caught pokemon to the pokemon caught data base. This returns the images the titles as well as the form that 
// allows you to add a new pokemon it allows you to add a pokemon name type and level and then the handlesubmit function adds it to the database beofre
// useNavigate directs you back to the pokemon database page


function Add()  {

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

    const [inputData, setInputData] = useState({name:'', type:'', level:''})

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:4000/pokemon', inputData)
        .then(res => {
            alert("Pokemon Added Successfully");
            navigate('/list')
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT_eBPJpeFX5U-DzON1L2Os48NEpcflu7nY8xD2h31eTD5rqmiFANkV9jghRp3PB35dQ&usqp=CAU" width="400px" alt=" "></img>
            </div>
            <div className="text-center">
                <h3><img src={url} alt=""  width="50px"></img>Add New Caught Pokemon<img src={url} alt=""  width="50px"></img></h3>
            </div>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">

            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>  
                <div>
                    <label htmlFor="name">Pokemon</label>
                    <input type="text" name="pokemon" className="form-control" onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" className="form-control" onChange={e => setInputData({...inputData, type: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level">Level</label>
                    <input type="text" name="level" className="form-control" onChange={e => setInputData({...inputData, level: e.target.value})}/>
                </div>
                   <br/>
                <div className="text-center">
                <button className="btn btn-info">Submit</button>
                </div>
                </form>
            </div>
            
            
        </div>
        <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0whCBTsl5pYF2VqMAEK9MZ71antf4OmLjIWxQ_PrLP5_M0lXv3mrgyqPc2d34-z9OKs&usqp=CAU" alt=" " ></img>
            </div>

        </div>

    )
}

export default Add
