const express = require( 'express' );
const router =  express.Router();
const mainController = require( '../controllers/mainController' );

router.get( '/', mainController.home );
router.get( '/eur', mainController.euro );
router.get( '/btc', mainController.btc );

module.exports = router;