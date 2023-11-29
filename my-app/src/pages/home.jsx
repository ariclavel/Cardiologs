import React from "react";
import Column from "../components/Column";
import { Box } from "@mui/system";
import Loading from "../components/Loading";

export default function Home({cards}){
    return (
        <div>
        {cards?
        (<div>
            <Box sx={{ marginLeft:15, textAlign: 'center', color: '#6693F5'}}>
            <   h1>Patients </h1>
            </Box>
            <Column cards ={cards} />
        </div>
        ):
        (<Loading/>)
        }
        </div>
    );
}
