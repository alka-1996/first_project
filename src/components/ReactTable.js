import { useEffect, useState } from 'react'
import UserData from './UserData';
const API="https://reqres.in/api/users?page=2";

const ReactTable = () => {
  const [newUsers,setUsers] = useState([]);

const fetchUsers= async (url) =>{
 try {
const response = await fetch(url);
const data = await response.json()
//if (data.length > 0){
  setUsers(data.data);
//}
console.log("--data--",data.data);
 }
 catch(e){
  console.log(e)
 }
  }

  useEffect(() => {
    fetchUsers(API);
    console.log("--setUsers--",newUsers)
  },[]);


  return (<>
 <table style={{width:"100%",margin:"20px",borderRadius:"2rem",border:"1rem hidden #443c68", borderCollapse:"collapse",boxShadow:"0 0 0 1px black",
 overflow:"hidden"}}> 
  <thead style={{backgroundColor:"#443c68",color:"#fff"}}>
    <tr>
    <th>id</th>
    <th>employee_name</th>
    <th>email</th>    
    <th>profile_image</th>
    </tr>
  </thead>
  <tbody>
    {newUsers.length > 0 ?
    <UserData users={newUsers}/>
    :
    <></>}
  </tbody>
 </table>
  </>)
  
}

export default ReactTable
