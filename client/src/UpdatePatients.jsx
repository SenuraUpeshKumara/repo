import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdatePatients() {

    const{id} = useParams();
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [date,setDate] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('http://localhost:3001/getPatient/'+id)
      .then(result =>{console.log(result)
        
        
        setName(result.data.name)
        setNumber(result.data.number)
        setEmail(result.data.email)
        setAge(result.data.age)
        setGender(result.data.gender)
        setDate(result.data.date)
      })
      .catch(err => console.log(err))
  },[])

  

  const Update =(e) => {
    e.preventDefault();

    axios.put('http://localhost:3001/updatepatients/'+ id, { name,number,email,age,gender,date })
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Update}>
                    <h2 style={{ color: 'black' ,fontWeight: 'bold'}}>Add a channeling</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="name"><h6 style={{ color: 'black' ,fontWeight: 'bold'}}>Name</h6></label>
                        <input type="text" placeholder='Enter name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="number"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Number</h7></label>
                        <input type="text" placeholder='Enter the name' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Email</h7></label>
                        <input type="text" placeholder='sample@gmail.com' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    

                  

                    <div className='mb-2'>
                        <label htmlFor="gender"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Gender</h7></label>
                        <select className='form-control' value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value={'male'}>Male</option>
                            <option value={'female'}>Female</option>
                            <option value={'none'}>None of the above</option>
                            </select>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="age"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Age</h7></label>
                        <input type='text' placeholder='Enter the age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="date"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Date</h7></label>
                        <input type="date"  className='form-control' value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h6 style={{ color: 'white' }}>Update</h6></button>
                </form>
               
            </div>
        </div>
    )
}

export default UpdatePatients;