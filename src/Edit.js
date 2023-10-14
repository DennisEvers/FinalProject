import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// this is the Edit component that is used to edit the pokemon caught database page. The link button on that page brings you to this form page in orde to update.
// the page returns some images as well as a title and the forms to change any information on the pokemon caught. it populates using the useeffect from the 
// to the form and then the handlesubmit button updates it on the server sends an alert and then navigates you bnack to the list page where you started.
// I also disabled the ID of the pokemon so you can see it but not change it and mess with the server. The forms are all text based as well and 
// I auto populate them with the information that was originally put into them so you dont have to re-enter any info making it a more user
// friendly experience. 




function Edit() {

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/pokemon/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:4000/pokemon/'+id, data)
        .then(res => {
            alert("Pokemon Updated successfully!");
            navigate('/list')
            
        })

    }
    return(
        <div>
            <div className='text-center'>
                <img src="https://cdn.vox-cdn.com/thumbor/rqsdYndsQs-QqL7E9o6dYy7ELGY=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/72604357/jlee_230831_1001_pogo_charmander_cd.0.jpg" alt=" " width="400px"></img>
            </div>
            <div>
                <h3 className='text-center'><img src={url} alt=""  width="50px"></img>Update Caught Pokemon<img src={url} alt=""  width="50px"></img></h3>
            </div>
            
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            
            <div className="w-50 border bg-light p-5 ">
                <form onSubmit={handleSubmit}> 
                    <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" disabled name="id" value={data.id} className="form-control" />    
                    </div> 
                
                <div>
                    <label htmlFor="name">Pokemon</label>
                    <input type="text" name="pokemon" value={data.name} className="form-control" 
                    onChange={e => setData({...data, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" value={data.type} className="form-control" 
                    onChange={e => setData({...data, type: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="level">Level</label>
                    <input type="text" name="level" value={data.level} className="form-control" 
                    onChange={e => setData({...data, level: e.target.value})}/>
                </div>
                <br/>
                <div className='text-center'>
                <button className="btn btn-info ">Update</button>
                </div>
                </form>
            </div>

            
        </div>
        <div className='text-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzZM5k9K9Dx98LE_23NxdCCYtREe6d8WqgkE4U5H1OM9s2LeBSs393GoF7hRjxtg4xkA&usqp=CAU" alt=" " width="400px"></img>
            </div>
        </div>
    )
}

export default Edit;