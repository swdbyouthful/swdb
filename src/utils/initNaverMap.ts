export const initNaverMap = (mapContainerId: string, mapOptions: naver.maps.MapOptions): void => {
  if (typeof window === 'undefined' || !window.naver?.maps) {
    console.warn('Naver Maps SDK is not loaded');
    return;
  }

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

  const map = new window.naver.maps.Map(mapContainer, { ...defaultMapOptions, ...mapOptions });

  new window.naver.maps.Marker({
    position: map.getCenter(),
    map,
  });
};
