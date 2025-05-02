export const initNaverMap = (mapContainerId: string, mapOptions: naver.maps.MapOptions) => {
  const mapContainer = document.getElementById(mapContainerId);
  if (!mapContainer) {
    console.error(`Map container with id ${mapContainerId} not found.`);
    return;
  }

  const map = new naver.maps.Map(mapContainer, mapOptions);

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
