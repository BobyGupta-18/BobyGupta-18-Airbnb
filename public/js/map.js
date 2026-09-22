

        mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container:"map",
    

        center:  listing.geometry.coordinate, 
        zoom: 8 ,
    });

    const marker = new mapboxgl.Marker ( {color:"red"})
    .setLngLat(listing.geometry.coordinate)
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
  `<h3>${listing.location}</h3><p>Exact location provided after booking</p>`
    )
)
    
    
    .addTo(map);
