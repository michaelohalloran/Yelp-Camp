var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");


var data = [
    {
        name: "Cloud's Rest",
        image: "http://www.ireland-information.com/public-domain-photographs-of-ireland/photos/thumbnails/pink-purple-country-scene-s1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Seaside Heights",
        image: "http://www.ireland-information.com/public-domain-photographs-of-ireland/photos/thumbnails/Donegal-scene-s1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Maroon Bells",
        image: "https://az616578.vo.msecnd.net/files/2017/01/22/636206507998248966480899939_colorado-landscape-wallpaper-wallpaper-2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Autumn's Aurora",
        image: "http://www.cultivatingculture.com/wp-content/uploads/2013/07/shutterstock_95271874-copy.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]


function seedDB() {
    //remove all campgrounds
    Campground.remove({}, function(err) {
    // 	if(err) {
    // 		console.log(err);
    // 	}
    // 	console.log("Removed all");
    // 	//add some campgrounds
    //     data.forEach(function(seed) {
    //     	Campground.create(seed, function(err, campground) {
    //     		if(err) {
    //     			console.log(err);
    //     		} else {
    //     			console.log("Added campground!");
    //     			Comment.create(
    //     			    {
    //     			        text: "Great scenery",
    //     			        author: "Homer"
    //     			    }, function(err, comment) {
    //                 			if(err) {
    //                 				console.log(err);
    //                 			} else {
    //                     			campground.comments.push(comment);
    //                     			campground.save();
    //                     			console.log("Made new comment");
    //                 			}
    //     		    });
    //     		}
    //     	});
    //     });
    }); 
}

module.exports = seedDB;
