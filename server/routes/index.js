let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
const productController = require('../controllers/product.js')();
const cartController = require('../controllers/cart.js')();

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Servises page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Men page. */

router.get('/men',productController.index);

/* GET Women page. */
router.get('/women', indexController.displayWomenPage);

/* GET Kids page. */
router.get('/kids', indexController.displayKidsPage);

/* GET Offers page. */
router.get('/offers', indexController.displayOffersPage);
/* GET Sale40 page. */
router.get('/sale40', indexController.displaySale40Page);

/* GET Sale50 page. */
router.get('/sale50', indexController.displaySale50Page);

/* GET Sale60 page. */
router.get('/sale60', indexController.displaySale60Page);

/* GET Wishlist page. */
router.get('/wishlist', indexController.displayWishlistPage);

/* GET Bag page. */
router.get('/cart', cartController.index);
//post Route for products
router.post('/update-cart', cartController.update);

/* GET Profile page. */
router.get('/profile', indexController.displayProfilePage);

/* Get Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register page */
router.get('/register', indexController.displayResisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* Get Route for Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
