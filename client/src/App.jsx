import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Patients from './Patients' ;
import UpdatePatients from './UpdatePatients' ;
import CreatePatients from './CreatePatients';






function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Patients/>}></Route>
       
        <Route path='/createpatients' element={<CreatePatients/>}></Route>
       
         <Route path='/update/:id' element={<UpdatePatients/>}></Route>

         
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
