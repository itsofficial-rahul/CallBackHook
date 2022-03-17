import React, { useState,useMemo,useCallback } from 'react'
import Age from './Age'
import Btn from './Btn'
import Sal from './Sal'
import Title from './Title'
function Parent() {
   
    const [age,setAge]=useState(20)
    const [salary,setSalary] =useState(5000)
   const upage=useCallback(
     () => {
   setAge(age+1)
     },
     [age],
   )
   
    const upsal=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>Parent
      <Title ></Title>
    <Age  text="age" data={age} />
    <Btn text="update Age" fun={upage} ></Btn>
    <Sal  text="salary" data={salary}  ></Sal>
    <Btn text="update salary" fun={upsal} ></Btn>
    </div>
  )
}

export default React.memo( Parent)