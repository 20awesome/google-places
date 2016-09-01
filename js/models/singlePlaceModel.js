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
