import React,{useMemo} from 'react'

function Title() {
    console.log("title is runn");
  return (
    <div>This is title
    open console check dependency pr hi run ho raha only
it always return a function 
    
    </div>
  )
}

export default React.memo(Title)