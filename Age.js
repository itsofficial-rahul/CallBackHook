import React ,{useMemo}from 'react'

function Age(props) {
    console.log("age is runn");
    
  return (
    <div>
    <h1>{props.text} :- {props.data}</h1>
    
    
    </div>
  )
}

export default React.memo(Age)