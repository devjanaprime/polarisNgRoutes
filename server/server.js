const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( express.static( 'server/public' ) );

const port = process.env.PORT || 5000;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
});