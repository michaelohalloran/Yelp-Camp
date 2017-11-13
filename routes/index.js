var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");



//root route
router.get("/", function(req, res) {
	res.render("landing");	
});


//Register/Sign up Route

router.get("/register", function(req, res){
	res.render("register");
});


//register a new user
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user) {
		if(err) {
			console.log(err);
			return res.render("register");
		} 
		passport.authenticate("local")(req, res, function() {
			res.redirect("/campgrounds");
		});
	}); 
});

//========================
//LOGIN ROUTES
//========================

//show login page
router.get("/login", function(req, res) {
	res.render("login");
});


//handle login logic
router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/campgrounds",
		failureRedirect: "/login",
	}), function(req, res) {	
});


//========================
//LOGOUT ROUTES
//========================

//logout 
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/campgrounds");

});



//middleware to require user be logged in before, e.g., posting new comment
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next(); 
	}
	res.redirect("/login");
};



module.exports = router;