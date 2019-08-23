import express from "express";
import { saySometing } from '@repo/service'

const app = express();
const port = process.env.PORT || 8080; // default port to listen


// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    console.log("handling request");
    res.json({
        message: saySometing() + " v2" 
    })
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );