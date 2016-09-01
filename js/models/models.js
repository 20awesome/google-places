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
		this.set('currentLatLng', currentLatLng);
		var mapOptions = {
			zoom: this.get('zoom'),
			minZoom: this.get('minZoom'),
			maxZoom: this.get('maxZoom'),
			center: currentLatLng,
			mapTypeControl: false
		};
		this.set('mapOptions', mapOptions);
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