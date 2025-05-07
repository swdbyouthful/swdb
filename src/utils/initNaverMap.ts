export const initNaverMap = (mapContainerId: string, mapOptions: naver.maps.MapOptions) => {
  const mapContainer = document.getElementById(mapContainerId);

  if (!mapContainer) {
    console.error(`Map container with id ${mapContainerId} not found.`);
    return;
  }

  const defaultMapOptions = {
    mapTypeId: window.naver.maps.MapTypeId.NORMAL,
    draggable: true,
    zoomControl: true,
    zoomControlOptions: {
      position: window.naver.maps.Position.RIGHT_TOP,
      style: window.naver.maps.ZoomControlStyle.SMALL,
    },
    scrollWheel: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [window.naver.maps.MapTypeId.NORMAL, window.naver.maps.MapTypeId.SATELLITE],
      position: window.naver.maps.Position.LEFT_TOP,
      style: window.naver.maps.MapTypeControlStyle.BUTTON,
    },
  };

  const map = new naver.maps.Map(mapContainer, { ...defaultMapOptions, ...mapOptions });

  // Add a marker at the center of the map
  const marker = new naver.maps.Marker({
    position: map.getCenter(),
    map: map,
  });

  // Add a click event listener to the map
  naver.maps.Event.addListener(map, 'click', (event) => {
    return;
    marker.setPosition(event.latlng);
  });

  return map;
};
