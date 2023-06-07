// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './Component/App'
// const root=ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//     <>

//     <App/>

//     </>
// )



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import RazApp from './RazorinfoProject/RazApp'
// const root=ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//     <>
    
//     <RazApp/>

//     </>
// )


// crud

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Postdata from './Crud/Postdata'
// import Chatapp from './Crud/Chatapp'
// const root=ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//     <>
    
//     <Postdata/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Chatapp/>

//     </>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
// import CState from './Concept/CState'
import ControlledComponent from './Concept/ControlledComponent'
import UncontrolledComponent from './Concept/UncontrolledComponent'
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    

    {/* <CState/> */}
    <h4>ControlledComponent</h4>
    <ControlledComponent/>
    <h4>UnControlledComponent</h4>
    <UncontrolledComponent/>

    </>
)

