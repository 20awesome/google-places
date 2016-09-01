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