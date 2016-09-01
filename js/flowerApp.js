Backbone.Model.prototype.get = function(attr) {
    if (-1 === attr.indexOf('.')) {
        return this.attributes[attr];
    }

    return _.inject(attr.split('.'), function(o, k) {
        return o && o[k];
    }, this.attributes);
};

var place = new Place();
var markersToDisableTogle = [];
var markers = [];
var markerstoclear = [];

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    // console.log('Your current position is:');
    // console.log('Latitude : ' + crd.latitude);
    // console.log('Longitude: ' + crd.longitude);
    // console.log('More or less ' + crd.accuracy + ' meters.');
    var map = new Map({
        zoom: 14,
        maxZoom: 18,
        minZoom: 12,
        latitude: crd.latitude,
        longitude: crd.longitude

    });
    var myView = new MapView({
        model: map
    });
    $('div#map').append(myView.render().el);

};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    var map = new Map({
        zoom: 14,
        maxZoom: 18,
        minZoom: 12
    });
    var myView = new MapView({
        model: map
    });
    $('div#map').append(myView.render().el);
};

navigator.geolocation.getCurrentPosition(success, error, options);

// console.log(myplacesCollection);