import React , {useState} from 'react'


export default function About() {
 
    const [MyStyle,setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    }
    )
    const [btntext,setbtntext] = useState(" Enable Dark mode")

    let Togglemode = ()=>{

        if(MyStyle.color === "white"){
            setMyStyle({
                color: "black",
                backgroundColor:"white"
            })
            setbtntext("Enable Dark mode")
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtntext("Disable Dark mode")
        }
    }
  
    return (
    <>
      <div className="card" style ={MyStyle}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item" style ={MyStyle}>An item</li>
    <li className="list-group-item" style ={MyStyle}>A second item</li>
    <li className="list-group-item" style ={MyStyle}>A third item</li>
  </ul>
</div>
<div className="conatiner my-2" >

     <button type="button" className="btn btn-primary" onClick={Togglemode}>{btntext}</button>
    
    </div>
    </>
  )
}
