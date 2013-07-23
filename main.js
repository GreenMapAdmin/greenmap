function initialize() {
    var loc, map, marker, infobox;
    
    loc = new google.maps.LatLng(-33.890542, 151.274856);
    
    map = new google.maps.Map(document.getElementById("map"), {
         zoom: 12,
         center: loc,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    marker = new google.maps.Marker({
        map: map,
        position: loc,
        visible: true
    });

    infobox = new google.maps.InfoWindow({
         content: $(".infowindow-contents")[0],
         disableAutoPan: false,
         maxWidth: 600,
         pixelOffset: new google.maps.Size(0, 0),
         zIndex: null,
         boxStyle: {
            background: "red",
            opacity: 1,
            width: "280px"
        },
        closeBoxMargin: "2px 2px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        infobox.open(map, this);
        // map.panTo(loc);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
