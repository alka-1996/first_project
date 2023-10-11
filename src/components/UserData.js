import React from 'react'

const UserData = (data) => {
  return (
   <>
   {data.users.map((curUser) => {
        const{id,avatar,email,first_name,last_name}=curUser;
        return(
            <tr key={id}>
                <td style={{lineHeight:"1.6rem"}}>{id}</td>
                <td>{first_name + ' '+last_name}</td>
                <td>{email}</td>
                <td><img src={avatar} height="120" width="120" /></td>
                 </tr>
        )
    })
   }
   </>
  )
  
}

export default UserData
