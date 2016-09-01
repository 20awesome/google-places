var SinglePlaceView = Backbone.View.extend({

	tagName: "article",
	className: "placeListItem",

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		_.defaults(this.options, this.defaults)
	},

	template: _.template($("#placeElement").html()),

	render: function() {
		var placeTemplate = this.template(this.model.toJSON());
		this.$el.html(placeTemplate);
		return this;
	},

	events: {
		'mouseenter .formarkerPOP': 'addBgColor',
		'mouseleave .formarkerPOP': 'addBgColor',

		// 		'mouseenter .formarkerPOP': () => {
		// 	console.log("mouseover")
		// },
		// 'mouseleave .formarkerPOP': () => {
		// 	console.log("mouseout")
		// },
		// 'click': 'toggleMarker',
		'click': 'toggleMarker'
	},

	addBgColor: function() {
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

	// removeBgColor: function() {
	// 	markersToDisableTogle.forEach(function(marker) {
	// 		marker.setAnimation(null);
	// 	});
	// 	marker = _.findWhere(markerstoclear, {
	// 		title: this.model.get('name')
	// 	});
	// 	if (marker.getAnimation() !== null) {
	// 		marker.setAnimation(null);
	// 	} else {
	// 		marker.setAnimation(google.maps.Animation.BOUNCE);
	// 	}
	// 	markersToDisableTogle.push(marker);

	// },

	toggleMarker: function() {
		this.$(".hide-by-default").toggle();

	},
});



allplaceView = Backbone.View.extend({

	tagName: "section",

	render: function() {
		this.collection.each(this.getDetailedAboutPlace, this);
		this.collection.each(this.addPlace, this);
		return this;
	},

	addPlace: function(place) {
		var placeView = new SinglePlaceView({
			model: place
		});
		this.$el.append(placeView.render().el);

	},

	getDetailedAboutPlace: function(place) {
		var service = new google.maps.places.PlacesService(map);
		var self = place;
		service.getDetails({
			placeId: self.get('place_id')
		}, function(responseplace, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				// console.log(responseplace);
				if (typeof responseplace.website !== "undefined") {
					self.set('website', responseplace.website);
				}
				if (typeof responseplace.url !== "undefined") {
					self.set('url', responseplace.url);
				}
				if (typeof responseplace.opening_hours !== "undefined") {
					// console.log('no');
					self.set('open_now', responseplace.opening_hours.open_now);
				}
				if (typeof responseplace.types !== "undefined") {
					self.set('types', responseplace.types);

				}
				if (typeof responseplace.photos !== "undefined") {
					self.set('photos', responseplace.photos);

				}

			}
		})
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
				map: map,
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
			places.forEach(function(place) {
				var searchplace = new Place(place);
				myplacesCollection.add(searchplace);
				var icon = new google.maps.MarkerImage(

					"data/ui/marker.png",
					new google.maps.Size(64, 64),
					new google.maps.Point(0, 0),
					new google.maps.Point(48, 32)
				)
				var markerId = Math.floor(Math.random() * 1000000);
				icon.url += "#" + markerId;

				// Create a marker for each place.
				var marker = new google.maps.Marker({
					map: map,
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
			var placeGroupView = new allplaceView({
				collection: myplacesCollection
			});

			$("#allPlaces").html(placeGroupView.render().el);


		})

	},


});