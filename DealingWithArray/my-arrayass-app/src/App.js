import {useState} from 'react'
import './App.css';

function App() {
  // *STEP 1* 
  let [name,setName] = useState("");
  let [dept,setDept] = useState("");
  let [school,setSchool] = useState("");

// *STEP 2*
  let [allStudents, SetAllStudents] = useState([])
 const addStudent =()=>{
    // **sTEP 3**
    //IN ES6 IF THE KEY AND VALUE ARE THE SAME YOU ARE ALLOWED TO WRITE ONLY ONE OF THEM
      let newStudent = {name,dept,school}
    // **STEP 4**
    SetAllStudents([...allStudents,newStudent])
    // to clear the Value after inputting it
      setName("");
      setDept("");
      setSchool("");
 
  }
  
const deleteStudent = index =>{
  let filteredstudents = allStudents.filter((_,i)=>i !== index);
  SetAllStudents(filteredstudents);
}

  return (
    <div className="App">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder='Name'/>
      <input  value={dept} onChange={e=>setDept(e.target.value)} placeholder='Dept'/>
      <input  value={school} onChange={e=>setSchool(e.target.value)} placeholder='School'/>
      <button onClick={addStudent}>Add addStudent</button>
    
     {allStudents.length >0? <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Department</th>
          <th>School</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allStudents.map((student, i)=>(
          <tr key={i}>
            <td>{i+1}</td>
          <td>{student.name}</td>
          <td>{student.dept}</td>
          <td>{student.school}</td>
         
          <td><button onClick={()=>deleteStudent(i)}>Delete</button></td>
          
          
        </tr>
        ))}
        
      </tbody>
     </table>
     : <div>No student Yet</div>
        }
    </div>
   
   
  );
}

export default App;
//Ass 
/* Name of product
Price
quantity
edit
delete*/