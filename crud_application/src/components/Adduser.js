import React, { useEffect ,useState  } from "react"
import axios from "axios";

import './Adduser.css';
const Adduser =() => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getuser();
    console.log(data)
  }, []);

  const getuser = async () => {
    await axios.get('http://localhost:4000/posts')
    .then((res) => setData(res.data));
  };

  const [formData,setFormData]=useState({
    name:'',
    mobile:'',
    email:'',
    password:'',
});

const [updateData,setupdateData]=useState({
  name:'',
  mobile:'',
  email:'',
  password:'',
  id:''
});

  const handleFormSubmit =async(e) =>{
    let response= await axios.post('http://localhost:4000/posts',formData)

    if(response){
      alert("data submitted succesfully")
    } else{
      alert("something went wrong")
    }

    setFormData(
      { name:'',
      mobile:'',
      email:'',
      password:''}

    );
    getuser();
    
  };
    const handleDelete = async (id) => {
      await axios.delete('http://localhost:4000/posts/' + id).
      then((res) => {alert('delete successfully');
 
      });
    };

    const handleupdate = async (id) => {
      await axios.put(`http://localhost:4000/posts/${updateData.id}`,updateData).then((res) => {alert('data updated successfully');
 
      });
    };
  
    return (
        <div className="container">
        <div className="row">
        <div className="div-col-md7">
        <h1>Add User Form</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John"
           value={formData.name}
          onChange={(e) => setFormData({...formData, name:e.target.value})}/>
        
        </div>
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+92088965431"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile:e.target.value})}/>
          
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email:e.target.value})}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleFormControlInput1"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password:e.target.value})}/>
        </div>

        <div class="mb-3">
        <button className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
        </div>
        </div>
        </div>
        <div>
      <h1> User Dashboard </h1>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
                {data && data.map((user) =>(
               <tr>
               <th scope="row">{user.id}</th>
               <td>{user.name}</td>
               <td>{user.mobile}</td>
               <td>{user.email}</td>
               <td style={{ display :"flex",justifyContent:"space-between"}}>
              <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => 
              setupdateData({
                name:user.name,
                mobile:user.mobile,
                email:user.email,
                password:user.password,
                id:user.id,
              })
               } >Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
               </td>
               </tr>
              ))}
                 
            </tbody>
            </table>
                    
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John"
           value={updateData.name}
          onChange={(e) => setupdateData({...updateData, name:e.target.value})}/>
        
        </div>
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+92088965431"
                value={updateData.mobile}
                onChange={(e) => setupdateData({...updateData, mobile:e.target.value})}/>
          
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
          value={updateData.email}
          onChange={(e) => setupdateData({...updateData, email:e.target.value})}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleFormControlInput1"
          value={updateData.password}
          onChange={(e) => setupdateData({...updateData, password:e.target.value})}/>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={() => handleupdate()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
   
        </div>
)
}

export default Adduser
