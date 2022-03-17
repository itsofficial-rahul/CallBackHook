import React,{useMemo} from 'react'

 function Btn(props) {
    console.log("btn is run", props.text);
  return (
    <div>
    <button onClick={()=>props.fun()}>{props.text}</button>
    
    
    
    </div>
  )
}
export default React.memo(Btn)
