import React from 'react'

function ChildComponent(props) {
  return (
    <div><button onClick={()=> props.parentHandler('child')}>ChildComponent</button></div>
  )
}

export default ChildComponent