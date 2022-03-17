import React,{useMemo} from 'react'

function Sal(props) {
    console.log("salary is  is runn");
  return (
    <div>
    <h1>{props.text} :- {props.data}</h1>
    
    </div>
  )
}
export default  React.memo(Sal)