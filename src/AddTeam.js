import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


// This is the addteam component This contains the function that will add the a new team and it returns the new team form as well as the images and the titles for the page as well
// The function submit on it adds the new team to the server as well as navigates you back to the team webpage. It is all stylized with a combination of 
// css as well as bootstrap and some inline stylizing but there is not much of that. The submit button triggers the handle submit attached to the form itself in order to add the new team.
// I also have an added successfully alert when your team is added 


function AddTeam()  {

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"


    const [inputData, setInputData] = useState({id:'', pokemon1:'', type1: '', level1:'', pokemon2:'', type2: '', level2:'',
     pokemon3:'', type3: '', level3:'', pokemon4:'', type4: '', level4:'', pokemon5:'', type5: '', level5:'', pokemon6:'', type6: '', level6:''})

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:4000/team', inputData)
        .then(res => {
            alert("Pokemon Team Added Successfully");
            navigate('/team')
        }).catch(err => console.log(err));
    }

    return (

        <>
        <div className="text-center">
                <img src="https://gameplace.b-cdn.net/wp-content/uploads/2017/04/26.png" width="500px" alt=" " ></img>
            </div>
            <div className="text-center">
                <h2><img src={url} alt=""  width="50px"></img>Create Your Pokemon Team<img src={url} alt=""  width="50px"></img></h2>
            </div>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>  
                <div>
                    <label htmlFor="name1">Pokemon 1</label>
                    <input type="text" name="pokemon1" className="form-control" onChange={e => setInputData({...inputData, pokemon1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type1">Type</label>
                    <input type="text" name="type1" className="form-control" onChange={e => setInputData({...inputData, type1: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level1">Level</label>
                    <input type="text" name="level1" className="form-control" onChange={e => setInputData({...inputData, level1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name2">Pokemon 2</label>
                    <input type="text" name="pokemon2" className="form-control" onChange={e => setInputData({...inputData, pokemon2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type2">Type</label>
                    <input type="text" name="type2" className="form-control" onChange={e => setInputData({...inputData, type2: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level2">Level</label>
                    <input type="text" name="level2" className="form-control" onChange={e => setInputData({...inputData, level2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name3">Pokemon 3</label>
                    <input type="text" name="pokemon3" className="form-control" onChange={e => setInputData({...inputData, pokemon3: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type3">Type</label>
                    <input type="text" name="type3" className="form-control" onChange={e => setInputData({...inputData, type3: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level3">Level</label>
                    <input type="text" name="level3" className="form-control" onChange={e => setInputData({...inputData, level3: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name4">Pokemon 4</label>
                    <input type="text" name="pokemon4" className="form-control" onChange={e => setInputData({...inputData, pokemon4: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type4">Type</label>
                    <input type="text" name="type4" className="form-control" onChange={e => setInputData({...inputData, type4: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level4">Level</label>
                    <input type="text" name="level4" className="form-control" onChange={e => setInputData({...inputData, level4: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name5">Pokemon 5</label>
                    <input type="text" name="pokemon5" className="form-control" onChange={e => setInputData({...inputData, pokemon5: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type5">Type</label>
                    <input type="text" name="type5" className="form-control" onChange={e => setInputData({...inputData, type5: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level5">Level</label>
                    <input type="text" name="level5" className="form-control" onChange={e => setInputData({...inputData, level5: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name6">Pokemon 6</label>
                    <input type="text" name="pokemon6" className="form-control" onChange={e => setInputData({...inputData, pokemon6: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type6">Type</label>
                    <input type="text" name="type6" className="form-control" onChange={e => setInputData({...inputData, type6: e.target.value})}/>
                </div>
                
                <div>
                    <label htmlFor="level6">Level</label>
                    <input type="text" name="level6" className="form-control" onChange={e => setInputData({...inputData, level6: e.target.value})}/>
                </div>
                   <br/>
                <div className="text-center">
                <button className="btn btn-info">Submit</button>
                </div>
                </form>
            </div>

            
        </div>
        <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfw7RUQXzLPIYOOLetdJVW2uFmgX1szIpimx-Y1ZeQWaSfFv3AURqzxAp_eYl6HVr9NfA&usqp=CAU" width="600px" alt=" " ></img>
            </div>
        </>
    )
}

export default AddTeam