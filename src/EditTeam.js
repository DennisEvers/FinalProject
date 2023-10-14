import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// this is the EditTeam component that is used to edit the pokemon team database page. The link button on that page brings you to this form page in order to update.
// the page returns some images as well as a title and the forms to change any information on the pokemon teams that you entered. it populates using the use effect from the 
// to the form and then the handlesubmit button updates it on the server sends an alert and then navigates you bnack to the team page where you started.
// I also disabled the ID of the pokemon team so you can see it but not change it and mess with the server. The forms are all text based as well and 
// I auto populate them with the information that was originally put into them so you dont have to re-enter any info making it a more user
// friendly experience. use effect and handlesubmit are all based on the individual teams id thats added to the url so they can be accessed specifically 
// The form contains 6 pokemon where you can populate the names type and level of all 6 pokemon for the team.


function EditTeam() {

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/team/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:4000/team/'+id, data)
        .then(res => {
            alert("Pokemon Team Updated successfully!");
            navigate('/team')
            
        })

    }
    return(

        <div>
                <div className="text-center">
                     <img src="https://twinfinite.net/wp-content/uploads/2022/05/All-Ashs-Pokemon.jpg?fit=1200%2C675" width="500px" alt=" " ></img>
                </div>
            <div className='text-center'>
                <h2><img src={url} alt=""  width="50px"></img>Update Your Pokemon Team<img src={url} alt=""  width="50px"></img></h2>
            </div>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}> 
                    <div>
                    <label htmlFor="id">Team ID</label>
                    <input type="text" disabled name="id" value={data.id} className="form-control" />    
                    </div> 
                
                <div>
                    <label htmlFor="name1">Pokemon 1</label>
                    <input type="text" name="pokemon1" value={data.pokemon1} className="form-control" 
                    onChange={e => setData({...data, pokemon1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type1">Type</label>
                    <input type="text" name="type1" value={data.type1} className="form-control" 
                    onChange={e => setData({...data, type1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level1">Level</label>
                    <input type="text" name="level1" value={data.level1} className="form-control" 
                    onChange={e => setData({...data, level1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name2">Pokemon 2</label>
                    <input type="text" name="pokemon2" value={data.pokemon2} className="form-control" 
                    onChange={e => setData({...data, pokemon2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type2">Type</label>
                    <input type="text" name="type2" value={data.type2} className="form-control" 
                    onChange={e => setData({...data, type2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level2">Level2</label>
                    <input type="text" name="level2" value={data.level2} className="form-control" 
                    onChange={e => setData({...data, level2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name3">Pokemon 3</label>
                    <input type="text" name="pokemon3" value={data.pokemon3} className="form-control" 
                    onChange={e => setData({...data, pokemon3: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type3">Type</label>
                    <input type="text" name="type3" value={data.type3} className="form-control" 
                    onChange={e => setData({...data, type3: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level3">Level</label>
                    <input type="text" name="level3" value={data.level3} className="form-control" 
                    onChange={e => setData({...data, level3: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name4">Pokemon 4</label>
                    <input type="text" name="pokemon4" value={data.pokemon4} className="form-control" 
                    onChange={e => setData({...data, pokemon4: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type4">Type</label>
                    <input type="text" name="type4" value={data.type4} className="form-control" 
                    onChange={e => setData({...data, type4: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level4">Level</label>
                    <input type="text" name="level4" value={data.level4} className="form-control" 
                    onChange={e => setData({...data, level4: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name5">Pokemon 5</label>
                    <input type="text" name="pokemon5" value={data.pokemon5} className="form-control" 
                    onChange={e => setData({...data, pokemon5: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type5">Type</label>
                    <input type="text" name="type5" value={data.type5} className="form-control" 
                    onChange={e => setData({...data, type5: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level5">Level</label>
                    <input type="text" name="level5" value={data.level5} className="form-control" 
                    onChange={e => setData({...data, level5: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name6">Pokemon 6</label>
                    <input type="text" name="pokemon6" value={data.pokemon6} className="form-control" 
                    onChange={e => setData({...data, pokemon6: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type6">Type</label>
                    <input type="text" name="type6" value={data.type6} className="form-control" 
                    onChange={e => setData({...data, type6: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level6">Level</label>
                    <input type="text" name="level6" value={data.level6} className="form-control" 
                    onChange={e => setData({...data, level6: e.target.value})}/>
                </div>
                
              
                
                <br/>
                <div className='text-center'>
                <button className="btn btn-info">Update</button>
                </div>
                </form>
            </div>

            
        </div>
                    <div className='text-center'>
                       <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a519a75e-fcdf-46ad-9ef8-14f8655efcf1/dfdcrrb-41c12546-2d7d-4d0b-8a5a-80d5dee50167.png/v1/fit/w_828,h_334/all_of_the_pokemon_ash_caught_in_kanto__indigo_lau_by_totaldramaexpanded_dfdcrrb-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTE1IiwicGF0aCI6IlwvZlwvYTUxOWE3NWUtZmNkZi00NmFkLTllZjgtMTRmODY1NWVmY2YxXC9kZmRjcnJiLTQxYzEyNTQ2LTJkN2QtNGQwYi04YTVhLTgwZDVkZWU1MDE2Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mfTfylulGn4wwaProVn7I6RI41n7ssIJj1JFWrS1E0c" width="500px" alt=" " ></img>
                    </div>
        </div>
    )
}

export default EditTeam;