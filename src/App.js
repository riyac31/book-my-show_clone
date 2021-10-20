import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC component

import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//importing temp COMPONENTS
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";


/*function Name (){
  return <h1> Welcome to home page !!!</h1>
}


function Name2 (){
  return <h1> Welcome to movie page !!!</h1>
}

//this was for default purpose debugging how to do things
function App() {
  return (

    <>
    <Route path="/" exact component={Name} />
    <Route path="/movie" exact component={Name2} />

    </>
  );
}
*/

// /, /movie

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (

    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;




/*
suppose we create an object
const abc ={
 a:1,
 b:2
};


const abc2 = abc;
abc2.c=3;

this will create another object with same specifications as abc and an extra parameter
c and the name of the object will be abc2.



to make this easier we use spread operator

const abc2 = {....abc , c:1};


*/
