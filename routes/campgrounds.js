var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var Comment = require("../models/comment");

//INDEX route
router.get("/", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if(err) {
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});


//NEW route
router.get("/new", isLoggedIn, function(req, res) {
	res.render("campgrounds/new");
});


//CREATE route
router.post("/", isLoggedIn, function(req, res) {
//get data from form, add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, image: image, description: desc, author: author};
	// campgrounds.push(newCampground);
	//create new campground and save to DB, redirect to campgrounds if successful
	Campground.create(newCampground, function(err, newlyCreated) {
		if(err) {
			console.log(err);
		} else {
			console.log(newlyCreated);
			res.redirect("campgrounds");
		}
	});
});


//SHOW route
router.get("/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
		if(err) {
			console.log(err)
		} else {
			console.log(foundCampground); 
			//render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

//EDIT CAMPGROUND ROUTE

router.get("/:id/edit", checkCampgroundOwnership, function (req, res) {
	Campground.findById(req.params.id, function(err, foundCampground) {
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});


//UPDATE CAMPGROUND ROUTE

router.put("/:id", checkCampgroundOwnership, function(req, res) {
	//find and update correct campground
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id); //redirects to that campground's show page
		}
	});
});

//DESTROY ROUTE
router.delete("/:id", checkCampgroundOwnership, function(req, res) {
	Campground.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");			
		}
	});
});


//middleware to require user be logged in before, e.g., posting new comment
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next(); 
	}
	res.redirect("/login");
};

function checkCampgroundOwnership (req, res, next) {
	if(req.isAuthenticated()) {
		Campground.findById(req.params.id, function(err, foundCampground) {
			if(err) {
				res.redirect("back");
			} else {
				if(foundCampground.author.id.equals(req.user._id)) {
					next();
				} else {
					res.redirect("back"); 
				}
			}
		});
	} else {
		res.redirect("back");
	}
}

module.exports = router;