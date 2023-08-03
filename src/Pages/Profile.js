import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res)=> setUser(res.data[0]))
      .catch((err)=>console.log(err))
    }, [])
    
  return (
    <div>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=201&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
    <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.address?.city} </Card.Text>
        <Button variant="primary" onClick={()=>navigate(-1)}>return</Button>
    </Card.Body>
  </Card>
    
    </div>
  )
}

export default Profile