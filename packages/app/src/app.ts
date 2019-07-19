import express from "express";
import { saySometing } from '@repo/service'

const app = express();
const port = 8080; // default port to listen


// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.json({
        message: saySometing()
    })
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );