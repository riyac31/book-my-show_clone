//Transforma component into another COMPONENTS
//Adding addittional functionalities ti the existing COMPONENTS


 import React from "react";
 import  { Route } from "react-router-dom";
//layouts
import DefaultLayout from "../layouts/Default.layout.js"
 const DefaultHOC = ({component: Component , ...rest }) => {
   //component
   //props --> path and exact
   return (
     <>
        <Route

              { ...rest}
              component = {(props) => (

                <DefaultLayout>
                <Component {...props}/>
                </DefaultLayout>
              )
            }

          />
     </>
   )
 };

 export default DefaultHOC;
