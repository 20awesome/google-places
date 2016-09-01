// // Namespace our app
// var app = app || {};
//
// app.singleFlower = Backbone.Model.extend({
//
//   defaults: {
//     color: "pink",
//     img: "images/placeholder.jpg"
//   }
//
// });





// // Namespace our app
// var app = app || {};
// var current_possition = {lat: -33.867, lng: 151.195};
//
// app.singlePlace = Backbone.Model.extend({
//
//       defaults: {
//           id: '', currentLatLng: {}, mapOptions: {}, map: {},
//           position: {lat: -33.867, lng: 151.195} , zoom: 13, maxZoom: 16, minZoom: 12
//       },
//     initMap: function(){
//
//         var map;
//         var infowindow;
//
//         this.set('position', position);
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: position,
//             zoom: 15
//         });
//
//         infowindow = new google.maps.InfoWindow();
//         var service = new google.maps.places.PlacesService(map);
//         service.nearbySearch({
//             location: position,
//             radius: 500,
//             type: ['store']
//         });
//     }
//
//     },
//     //
//     // initialize: function() {
//     //     console.log("A model instance named " + this.get("lat") +  " has been created and it costs " + this.get("lng"));
//     //     // Cut and paste this inside our initialize method
//     //     this.on('change', function(){
//     //         console.log("Something in our model has changed");
//     //     });
//     //     // Cut and paste this inside our initialize method
//     //     this.on('change:lat', function(){
//     //         console.log("The price for the " + this.get("lat") + " model just changed to $" + this.get("lng") + " dollars");
//     //     });
//     // }
//
//
//
//
// });
//
//

// // Namespace our flowerApp
// var app = app || {};
//
// app.allFlowersView = Backbone.View.extend({
//
//   tagName: "section",
//
//   render: function() {
//  	  this.collection.each(this.addFlower, this);
//  		return this;
//   },
//
//  addFlower: function(flower) {
//  		var flowerView = new app.singleFlowerView ({ model: flower });
//  		this.$el.append(flowerView.render().el);
//  }
//
// });


// MapView = Backbone.View.extend({
//     defaults:{
//         region: 'us', language: 'en'
//     },
//     id: 'gmaps-container',
//     className: 'gmaps_container',
//     initialize: function(){
//         var url = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDTYiB0fCl7XsUaS-oxVkwyr17JuGg9BZU&sensor=false";
//         $.ajax({
//             url: url,
//             dataType: "script",
//             async: false,
//             success: function(){
//                 console.log('script loaded');
//             }
//         });
//         this.model.set('map', new google.maps.Map(this.el, this.model.get('mapOptions')));
//     },
//     render: function(){
//         console.log('init map');
//         $('#' + this.id).replaceWith(this.el);
//         return this;
//     }
// });
// // Namespace our flowerApp
// var app = app || {};
//
// app.singleFlowerView = Backbone.View.extend({
//
//   tagName: "article",
//   className: "flowerListItem",
//
//   template: _.template( $("#flowerElement").html() ),
//
//   render: function() {
//     var flowerTemplate = this.template(this.model.toJSON());
//     this.$el.html(flowerTemplate);
//     return this;
//   },
//
//   events: {
//   	'mouseover': 'addBgColor',
//   	'mouseout': 'removeBgColor'
//   },
//
//   addBgColor: function() {
//     this.$el.addClass("bgColorImage");
//   },
//
//   removeBgColor: function() {
//     this.$el.removeClass("bgColorImage");
//   }
//
// });
// // Namespace our flowerApp
// var app = app || {};
//
// // A group (array) of Flower models
// app.FlowersCollection = Backbone.Collection.extend({
//
//   // What type of models are in this collection?
//   model: app.singleFlower
//
// });
// // Namespace our flowerApp
// var app = app || {};
//
// app.Router = Backbone.Router.extend({
//
// routes :{
// 	"": "noCopy",
// 	"heirloomRose" : "heirloomRoseMessage",
// 	"rainbowRose": "rainbowRoseMessage",
// 	"redRose" : "redRoseMessage"
// },
//
// noCopy: function() {
//   $("#copy").html("");
// },
//
// heirloomRoseMessage: function() {
//   $("#copy").html("Heirloom Roses are great Mother's Day flowers");
// },
//
// rainbowRoseMessage: function() {
//   $("#copy").html("Choose Rainbow Roses for your wedding");
// },
//
// redRoseMessage: function() {
//   $("#copy").html("On Valentine's Day, give that special someone Red Roses");
// }
//
// });
//
//

Backbone.Model.prototype.get = function(attr) {
    if (-1 === attr.indexOf('.')) {
        return this.attributes[attr];
    }

    return _.inject(attr.split('.'), function(o, k) {
        return o && o[k];
    }, this.attributes);
};

Map = Backbone.Model.extend({
    defaults: {
        currentLatLng: {},
        mapOptions: {},
        map: {},
        idOfMap: 'map',
        idOfSearchbox: 'pac-input',
        latitude: 49.4329979,
        longitude: 32.0910807,
        zoom: 13,
        maxZoom: 16,
        minZoom: 15,
        pyrmont: {},
        radius: 1000,
        type: 'cafe'
    },
    initialize: function() {

    },
    initMap: function() {

        getlatitude = this.get('latitude');
        getlongitude = this.get('longitude');
        var currentLatLng = {
                latitude: getlatitude,
                longitude: currentLatLng
            }
            // console.log(currentLatLng);
        this.set('currentLatLng', currentLatLng);
        var mapOptions = {
            zoom: this.get('zoom'),
            minZoom: this.get('minZoom'),
            maxZoom: this.get('maxZoom'),
            center: currentLatLng,
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
        this.set('mapOptions', mapOptions);
        // console.log(this.get('mapOptions'));
    },


});
var Place = Backbone.Model.extend({
    defaults: {
        rating: '0.0',
        website: 'default_site',
        url: 'default_url',
        types: ['defaulttype'],
        open_now: 'dontknow',
        photos: 'no photos'


    }
});
var place = new Place();

markersToDisableTogle = []

var SinglePlaceView = Backbone.View.extend({

    tagName: "article",
    className: "placeListItem",

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        // this.listenTo(this.model, 'change:url', this.render);
        // this.listenTo(this.model, 'change:longitude', this.render);
        _.defaults(this.options, this.defaults)
    },

    template: _.template($("#placeElement").html()),

    render: function() {
        var placeTemplate = this.template(this.model.toJSON());
        this.$el.html(placeTemplate);

        return this;
    },

    events: {
        'mouseover': 'addBgColor',
        'mouseout': 'removeBgColor',
        // 'click': 'toggleMarker',
        'click': 'toggleMarker'
    },

    addBgColor: function() {
        // this.$el.addClass("bgColorImage");
        // this.$el.attr('id', '#demo');
        // this.$el.attr('data-toggle', 'collapse');
        // blocktodisplay = this.$el.find(".hide-by-default");
        // blocktodisplay.css("display", "block");

        var service = new google.maps.places.PlacesService(map);
        var self = this.model;
        service.getDetails({
            placeId: this.model.get('place_id')
        }, function(responseplace, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // console.log(responseplace);
                self.set('website', responseplace.website);
                self.set('url', responseplace.url);
                self.set('open_now', responseplace.opening_hours.open_now);
                self.set('types', responseplace.types);
                self.set('photos', responseplace.photos)
            }
            // console.log(self);
        })
    },

    removeBgColor: function() {
        // this.$el.find(".hide-by-default").hide();
        // this.$el.removeClass("bgColorImage");
        // blocktodisplay = this.$el.find(".hide-by-default");
        // blocktodisplay.css("display", "none");
        // this.$el.removeAttr('id', '#demo');
        // this.$el.removeAttr('data-toggle', 'collapse');


    },



    toggleMarker: function() {
        this.$(".hide-by-default").toggle();
        // blocktodisplay.removeClass(".hide-by-default");
        // this.$el.$(".hide-by-default")
        markersToDisableTogle.forEach(function(marker) {
            marker.setAnimation(null);
        });
        marker = _.findWhere(markerstoclear, {
            title: this.model.get('name')
        });
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        markersToDisableTogle.push(marker);



    },



});

var PlacesCollection = Backbone.Collection.extend({
    model: Place,

    initialize: function() {

        // This will be called when an item is added. pushed or unshifted
        // this.on('add', function(model) {
        //     console.log('something got added');
        // });
        // // This will be called when an item is removed, popped or shifted
        // this.on('remove', function(model) {
        //     console.log('something got removed');
        // });
        // // This will be called when an item is updated
        // this.on('change', function(model) {
        //     console.log('something got changed');
        // });
    },
});
var myplacesCollection = new PlacesCollection();
var markers = [];
var markerstoclear = [];

allplaceView = Backbone.View.extend({

    tagName: "section",

    render: function() {
        this.collection.each(this.addPlace, this);
        return this;
    },

    addPlace: function(flower) {
        var placeView = new SinglePlaceView({
            model: flower
        });
        this.$el.append(placeView.render().el);

    }

});
MapView = Backbone.View.extend({

    tagName: 'div',
    initialize: function() {
        this.listenTo(this.model, 'change:latitude', this.render);
        this.listenTo(this.model, 'change:longitude', this.render);
    },
    render: function() {
        this.initMap();
        this.infowindow();
        this.initSearchbox();
        return this;
    },
    initMap: function() {
        var pyrmont = {
            lat: this.model.get('latitude'),
            lng: this.model.get('longitude')
        };
        this.model.set('pyrmont', pyrmont);
        map = new google.maps.Map(document.getElementById(this.model.get('idOfMap')), {
            center: pyrmont,
            zoom: this.model.get('zoom')
        });
        this.model.set('map', map);
    },
    infowindow: function() {
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: this.model.get('pyrmont'),
            radius: this.model.get('radius'),
            type: ['cafe']
                //     })
                // },
        }, this.callbackFunc);
    },
    callbackFunc: function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                // _(places).push(results[i]);
                // var place = new Place(results[i]);
                // myplacesCollection.add(place);
                var searchplace = new Place(results[i]);
                myplacesCollection.add(searchplace);

            }
        }
        myplacesCollection.each(function(place) {

            var placeLoc = place.get('geometry.location');
            var marker = new google.maps.Marker({
                map: place.get('map'),
                animation: google.maps.Animation.DROP,
                position: place.get('geometry.location')

            });
            markers.push(marker);
            marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.get('name'));
                infowindow.open(map, this);
            });


        });


        // var placeGroupView = new allplaceView({
        //     collection: myplacesCollection
        // });

        // $("#allPlaces").html(placeGroupView.render().el);

    },

    initSearchbox: function() {

        var input = document.getElementById(this.model.get('idOfSearchbox'));
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', function() {

            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];
            markerstoclear.forEach(function(marker) {
                marker.setMap(null);
            });
            markerstoclear = [];


            myplacesCollection.reset();
            // var service = new google.maps.places.PlacesService(map);
            places.forEach(function(place) {
                var searchplace = new Place(place);
                // console.log(searchplace);
                myplacesCollection.add(searchplace);
                // console.log(myplacesCollection);

                // service.getDetails({
                //     placeId: place.place_id
                // }, function(place, status) {
                //     if (status === google.maps.places.PlacesServiceStatus.OK) {

                //         var searchplace = new Place(place);
                //         console.log(searchplace);
                //         myplacesCollection.add(searchplace);
                //         console.log(myplacesCollection);

                //     }
                // });

                // populate model and place collection
                // var searchplace = new Place(place);
                // myplacesCollection.add(searchplace);

                // var icon = {
                // url: place.icon,
                // size: new google.maps.Size(71, 71),
                // origin: new google.maps.Point(0, 0),
                // anchor: new google.maps.Point(17, 34),
                // scaledSize: new google.maps.Size(25, 25)
                var icon = new google.maps.MarkerImage(

                        "data/ui/marker.png",
                        new google.maps.Size(64, 64),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(48, 32)
                    )
                    // };
                var markerId = Math.floor(Math.random() * 1000000);
                icon.url += "#" + markerId;

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    // icon: icon,
                    title: place.name,
                    animation: google.maps.Animation.DROP,
                    position: place.geometry.location,
                    uniqueSrc: icon.url

                });

                _(markerstoclear).push(marker);
                marker.addListener('click', toggleBounce);

                function toggleBounce() {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);

                    }
                }
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });


            });
            // console.log(myplacesCollection);
            var placeGroupView = new allplaceView({
                collection: myplacesCollection
            });

            $("#allPlaces").html(placeGroupView.render().el);


        })

    },


});



// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function success(pos) {
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');

//     var map = new Map({
//         zoom: 14,
//         maxZoom: 18,
//         minZoom: 12,
//         latitude: crd.latitude,
//         longitude: crd.longitude

//     });
//     var myView = new MapView({
//         model: map
//     });
//     $('div#map').append(myView.render().el);

// };

// function error(err) {
//     console.warn('ERROR(' + err.code + '): ' + err.message);
var map = new Map({
    zoom: 14,
    maxZoom: 18,
    minZoom: 12
});
var myView = new MapView({
    model: map
});
$('div#map').append(myView.render().el);
// };

// navigator.geolocation.getCurrentPosition(success, error, options);

// console.log(myplacesCollection);
// var Place1 = new app.singlePlace({
//   name: "Red Roses",
//   price: 39.925,
//   color: "Red",
//   img: "images/redRoses.jpg",
//   link: "redRose"
// });
//
// var Place2 = new app.singlePlace({
//   name: "Rainbow Roses",
//   price: 291.95,
//   color: "orange",
//   link: "rainbowRose"
// });
//
// var Place3 = new app.singlePlace({
//   name: "Heirloom roses",
//   price: 192212111.95220,
//   img: "images/heirloomPinkRoses.jpg",
//   link: "heirloomRose"
// });

// var flowerGroup = new app.FlowersCollection([
//   redRoses, rainbowRoses, heirloomRoses
// ]);
//
// var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});
//
// $("#allFlowers").html(flowerGroupView.render().el);
//
// var flowerRouter = new app.Router();
//
// Backbone.history.start();

// var map = new Map({zoom: 8, maxZoom: 18, minZoom: 8});
// map.initMap({coords: {latitude: -34.397, longitude: 150.644}});
// var mapView = new MapView({model: map});
// mapView.render();
// console.log('some');
var Rectangle = Backbone.Model.extend({


});

var myRectangle = new Rectangle({
    width: 100,
    height: 60,
    position: {
        x: 300,
        y: 34
    },
    color: 'green'

});
var models = [
    new Rectangle({
        width: 100,
        height: 60,
        position: {
            x: 300,
            y: 150
        },
        color: 'green'

    }),
    new Rectangle({
        width: 100,
        height: 60,
        position: {
            x: 400,
            y: 150
        },
        color: 'red'

    }),
    new Rectangle({
        width: 100,
        height: 60,
        position: {
            x: 300,
            y: 250
        },
        color: 'black'

    })
];

var RectangleView = Backbone.View.extend({

    tagName: 'div',
    className: 'rectangle',

    events: {
        'click': 'move'

    },

    render: function() {
        this.setDimensions();
        this.setPosition();
        this.setColor();
        return this;
    },



    setDimensions: function() {
        this.$el.css({
            width: this.model.get('width') + 'px',
            height: this.model.get('height') + 'px'
        });
    },

    setPosition: function() {
        var position = this.model.get('position');
        this.$el.css({
            left: position.x,
            top: position.y
        });
    },

    setColor: function() {
        this.$el.css('background-color', this.model.get('color'));
    },

    move: function() {
        this.$el.css('left', this.$el.position().left + 10);
    }
});

//var1
// _(models).each(function (model){
//     $('div#canvas').append(new RectangleView({model: model}).render().el);
// });

//var 2
var myView = new RectangleView({
    model: myRectangle
});


$('div#canvas').append(myView.render().el);



var Vehicle = Backbone.Model.extend({
    defaults: {
        as: 3
    },
    initialize: function() {
        console.log('some init');
    },


    summary: function() {

        return JSON.stringify(this.toJSON());
    },

    asString: function() {
        return JSON.stringify(this.toJSON());

    }



});
// var car = new Vehicle({
//     'a': '1',
//     'b': 2
// });

// car.on('change:some', function() {
//     // body...
//     console.log('something changed ');
// });

// car.on('change', function() {
//     // body...
//     console.log('something changed ');
// });
// car.set('some', '3');

// car.trigger('change');


// console.log(car.isNew());
// var B = Vehicle.extend({});
// var b = new B({
//     three: '3'
// })
// console.log(b.summary());
// $(document).ready(function() {
//     $('.tooltip').tooltipster({
//         animation: 'fade',
//         delay: 200,
//         theme: 'tooltipster-punk',
//         trigger: 'click'
//     });
// });