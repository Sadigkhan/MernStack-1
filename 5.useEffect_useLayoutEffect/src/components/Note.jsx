import React from 'react'

export default function Note({item}) {
  return (
    <div key={item.id}>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  )
}
