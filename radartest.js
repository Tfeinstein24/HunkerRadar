//  var map;

//   function initialize() {
//     var mapOptions = {
//       zoom: 5,
//       center: new google.maps.LatLng(42.5, -95.5),
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    //Load Images and add them to imageArray
    tileNEX = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX);

    tileNEX5 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m05m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD5',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX5);

    tileNEX10 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m10m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD10',
        isPng: true,
        optimized: false
    });
    map.overlayMapTypes.push(tileNEX10);

    tileNEX15 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m15m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD15',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX15);

    tileNEX20 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m20m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD20',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX20);

    tileNEX25 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m25m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD25',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX25);

    tileNEX30 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m30m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD30',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX30);

    animateRadar();


  //}

  google.maps.event.addDomListener(window, 'load', initialize);

  function animateRadar() {
    var index = map.overlayMapTypes.getLength() - 1;

    window.setInterval(function(){

        map.overlayMapTypes.getAt(index).setOpacity(0.00);

        index--;
        if(index < 0){
            index = map.overlayMapTypes.getLength() - 1;
        }
        map.overlayMapTypes.getAt(index).setOpacity(0.60);
    }, 400);
  }