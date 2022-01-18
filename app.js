const express = require( "express" );
const app = express();

const path = require( "path" );

app.listen( process.env.PORT || 3000, ()=> console.log('Server running!!!') );

const publicPath = path.resolve( __dirname, './public' );
app.use( express.static( publicPath ) );

app.set( 'view engine', 'ejs' );