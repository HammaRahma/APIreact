import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
    const navigate = useNavigate()

  return (
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=201&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Button variant="primary"  onClick={()=> navigate(`/profile/${user.id}`)}>Profile</Button>
        </Card.Body>
    </Card>
    
    </div>
  )
}

export default UserCard