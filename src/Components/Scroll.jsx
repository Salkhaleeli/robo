import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid rgb(110, 33, 138)', height: '900px' }}>
      {props.children}
    </div>
  )
}

export default Scroll