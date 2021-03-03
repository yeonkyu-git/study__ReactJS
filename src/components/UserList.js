import React, { useRef } from 'react'

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}



function UserList() {

  const users = [
    {
      id: 1,
      username: 'yeonkyu',
      email: 'yeonkyu@lgcns.com'
    },
    {
      id: 2,
      username: 'park',
      email: 'park@lgcns.com'
    },
    {
      id: 3,
      username: 'kim',
      email: 'kim@lgcns.com'
    }
  ]

  const nextId = useRef(4)


  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  )
}

export default UserList
