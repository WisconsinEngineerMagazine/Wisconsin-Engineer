wemApp.controller('homeController', ['$scope',
    function($scope) {
        ga('send', 'pageview', '/home');

        var locations = [
            ['Ag Hall Room 125', 43.0755, -89.4104],
            ['Ag Journalism Henry Mall Entrance', 43.07431, -89.41078],
            ['Bascom Lobby', 43.07492, -89.40448],
            ['Birge Lobby', 43.0744, -89.40401],
            ['CAE Front Entrance', 43.07251, -89.40963],
            ['Carson\'s Entrance', 43.07714, -89.41079],
            ['Chamberlain University Entrance', 43.07368, -89.40549],
            ['Chemistry University Entrance', 43.0729, -89.40461],
            ['Comp. Sci. Dayton Lobby', 43.07135, -89.40618],
            ['ECB North Front Entrance', 43.07312, -89.41334],
            ['Liz Waters East Front', 43.07675, -89.40691],
            ['Engineering Hall', 43.07186, -89.41001],
            ['ERB Front Lobby', 43.07252, -89.41098],
            ['Gordon', 43.07167, -89.3981],
            ['Grainger', 43.07238, -89.40116],
            ['Helen C White', 43.07653, -89.40119],
            ['Holt', 43.07786, -89.41461],
            ['Ingrahm Lobby', 43.07562, -89.40538],
            ['M.E.', 43.07302, -89.41233],
            ['Med Sci ICU Deli', 43.0741, -89.40673],
            ['Memorial Union', 43.07616, -89.39976],
            ['Natatorium Lobby', 43.07679, -89.41989],
            ['Ogg', 43.07059, -89.40026],
            ['Peterson', 43.07382, -89.39854],
            ['Psychology', 43.07257, -89.40626],
            ['Regent Apts', 43.06807, -89.40982],
            ['Sellery', 43.07175, -89.40019],
            ['SERF', 43.07059, -89.39862],
            ['Shell', 43.07029, -89.40976],
            ['Steenbock', 43.07614, -89.41326],
            ['Sterling', 43.07436, -89.40564],
            ['Van Hise', 43.0754, -89.40666],
            ['Van Vleck', 43.07525, -89.40531],
            ['Waisman', 43.0787, -89.43377],
            ['Witte', 43.07172, -89.39695],
            ['BSE', 43.07477, -89.41059],
            ['Bradley', 43.07775, -89.41649],
            ['Coffebytes University', 43.07305, -89.39895],
            ['HSL', 43.07764, -89.43034],
            ['Geology', 43.07072, -89.40613],
            ['Humanities', 43.07382, -89.3998],
            ['Indie Coffee', 43.06767, -89.40663],
            ['Java Den', 43.0723, -89.40406],
            ['Library Cafe', 43.07292, -89.40911],
            ['Mickey\'s', 43.06767, -89.4129],
            ['Materials Sciences', 43.0731, -89.41134],
            ['Red Gym', 43.07609, -89.39849],
            ['WARF', 43.07625, -89.42633],
            ['Welcome Center', 43.06802, -89.40052],
            ['Wentd', 43.0716, -89.40874],
            ['Nancy Nicholas', 43.07549, -89.40959],
            ['Education', 43.07553, -89.4023],
            ['Microbial Sciences', 43.07571, -89.41228]
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: new google.maps.LatLng(43.0751694, -89.4042638),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
          scrollwheel: false,
          zoomControl: true,
          styles: [{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#1c99ed"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1f79b5"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#6d6d6d"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#e1eddd"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"45"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ff9500"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#009aff"},{"saturation":"100"},{"lightness":"5"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#ff9500"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"lightness":"1"},{"saturation":"100"},{"hue":"#009aff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"lightness":"33"},{"saturation":"-100"},{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#4db4f8"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }



    }
]);
