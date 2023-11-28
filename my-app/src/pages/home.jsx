import React from "react";
import Column from "../components/Column";
export default function Home(){
    /*async function logMovies() {
        const response = await fetch("https://github.com/CardioLogs/card-triage/blob/master/server/cards.json");
        const movies = await response.json();
        console.log(movies);
        //return(movies)
    }*/
      
    return (
        <div>
          <h1>Welcome to my app</h1>
          <Column/>
        </div>
    );
}
