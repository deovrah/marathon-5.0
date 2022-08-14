ymaps.ready(function () {
	var myMap = new ymaps.Map('mapId',
		{
			center: [59.938700, 30.323110],
			zoom: 18,
			controls: []
		});


/*
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent: 'цвет <strong>носика Гены</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add
*/

	myPlacemark = new ymaps.Placemark([59.938700, 30.323110], {
		iconCaption: 'ул. Большая Конюшенная, 19'
	}, {
		preset: 'islands#redIcon'
	});

	myMap.geoObjects
		.add(myPlacemark);

	myMap.behaviors
		.disable(['scrollZoom']);
});
