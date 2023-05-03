// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const UserDashboard = () => {

//   return (
//     <div>
//       <h1> User Dashboard </h1>
//       <table className="table table-dark table-hover">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Mobile No</th>
//             <th scope="col">Email</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//                 {data && data.map((user) =>(
//                <tr>
//                <th scope="row">{user.id}</th>
//                <td>{user.name}</td>
//                <td>{user.mobile}</td>
//                <td>{user.email}</td>
//                <td style={{ display :"flex",justifyContent:"space-between"}}>
//               <button className="btn btn-info">Edit</button>
//               <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
//                </td>
//                </tr>
//               ))}
                 
//             </tbody>
//             </table>
                    
//             </div>
//     )
// }

// export default UserDashboard