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