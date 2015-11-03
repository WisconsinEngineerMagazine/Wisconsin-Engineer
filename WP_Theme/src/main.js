$( document ).ready(function() {

	$("#show-mobile-menu").click(function(){
		if($(this).hasClass("ion-navicon")){
			$(this).transition({ rotate: '359deg' });
			$('#nav-links').css({ transformOrigin: '100% 0px' }).transition({ scale: 1, delay: 0, duration: 400});
			$(this).removeClass("ion-navicon");
			$(this).addClass("ion-ios-close-empty");
		}else{
			$(this).transition({ rotate: '0deg' });
			$('#nav-links').css({ transformOrigin: '100% 0px' }).transition({ scale: 0, delay: 0, duration: 400});
			$(this).removeClass("ion-ios-close-empty");
			$(this).addClass("ion-navicon");
		}
	});

	$(".showsubscribe").click(function(){
		$("#pushover").toggleClass("pushed");
	});

	$("#close_sidebar").click(function(){
		$("#pushover").removeClass("pushed");
	});
	$("nav, #body_content, footer").click(function(){
		if($("#pushover").hasClass("pushed")){
			$("#pushover").removeClass("pushed");
		}
	});

});

function initialize() {

	var locations = [
						  [43.075625, -89.410314, 'Agriculture Hall'],
						  [43.076130, -89.416377, 'Agricultural Engineering'],
						  [43.077871, -89.416413, 'Bradley Residence Hall'],
						  [43.077146, -89.411313, 'Carson Gulley Commons'],
						  [43.076778, -89.406962, 'Elizabeth Waters Hall'],
						  [43.077746, -89.414446, 'Holt Commons'],
						  [43.077525, -89.430202, 'Health Science Learning Center'],
						  [43.074022, -89.407339, 'Medical Sciences Center'],
						  [43.075593, -89.411992, 'Microbial Sciences'],
						  [43.075691, -89.408896, 'Nancy Nicholas Hall'],
						  [43.076109, -89.413350, 'Steenbock Library'],
						  [43.075576, -89.406974, 'Van Hise Hall'],
						  [43.078394, -89.433989, 'Waisman Center'],
						  [43.072517, -89.409641, 'CAE Building'],
						  [43.071455, -89.406669, 'Computer Science'],
						  [43.072431, -89.413433, 'Engineer Centers'],
						  [43.071751, -89.410304, 'Engineering Hall'],
						  [43.072550, -89.411457, 'Engineering Research Building'],
						  [43.070681, -89.406156, 'Geology (Weeks Hall)'],
						  [43.072993, -89.411303, 'Material Science & Engineering'],
						  [43.072752, -89.412470, 'Mechanical Engineering'],
						  [43.067466, -89.413007, 'Mickies Dairy Bar'],
						  [43.072535, -89.406212, 'Psychology (Brogden) Building'],
						  [43.073183, -89.409304, 'QQ Express'],
						  [43.068008, -89.409783, 'The Regent Apartments'],
						  [43.069712, -89.411387, 'Camp Randall Sports Center'],
						  [43.071852, -89.407882, 'Union South'],
						  [43.071421, -89.408625, 'Wendt Commons'],
						  [43.073757, -89.405433, 'Chamberlin Hall'],
						  [43.075703, -89.402316, 'Education Building'],
						  [43.076708, -89.401275, 'Helen C. White (College) Library'],
						  [43.075512, -89.405200, 'Ingraham Hall'],
						  [43.076191, -89.399826, 'Memorial Union'],
						  [43.076271, -89.398442, 'Red Gym'],
						  [43.074361, -89.392561, 'Siver Mines Subs'],
						  [43.074762, -89.397674, 'The University Bookstore'],
						  [43.074761, -89.404971, 'Van Vleck Hall'],
						  [43.072594, -89.404705, 'Chemistry Building'],
						  [43.070697, -89.399949, 'Ogg Residence Hall'],
						  [43.071740, -89.399976, 'Sellery Residence Hall'],
						  [43.070490, -89.398366, 'SERF'],
						  [43.071658, -89.397020, 'Witte Residence Hall']
					];


	var mapOptions = {
	  center: { lat: 43.0742762, lng: -89.4083356},
	  zoom: 15,
	  disableDefaultUI: true
	};

	var styles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
	var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	map.setOptions({styles: styles});

  	setMarkers(map,locations)




}
google.maps.event.addDomListener(window, 'load', initialize);


function setMarkers(map,locations){
    var marker, i;
	for (i = 0; i < locations.length; i++){

 		var lat = locations[i][0];
 		var long = locations[i][1];
 		var place =  locations[i][2];

 		latlngset = new google.maps.LatLng(lat, long);

  		var marker = new google.maps.Marker({
          	map: map,
          	title: place ,
          	position: latlngset,
        });
        // map.setCenter(marker.getPosition());

        var content = place;



  		var infowindow = new google.maps.InfoWindow()

		google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
	        return function() {
	           infowindow.setContent(content);
	           infowindow.open(map,marker);
	        };
		})(marker,content,infowindow));

	}
}



$("#mobile_menu_button").click(function(){
	$("#navul").toggle(200);
	$("#menu_icon").toggleClass("ion-navicon");
	$("#menu_icon").toggleClass("ion-ios-close-empty");
	$("#menu_icon").toggleClass("menuout");
});



$("#contact-form-send").click(function () {

	$(this).html("Sending <i class='ion-more'></i>");

    var empty = "";
    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var message = $("#contact-message").val();
    if (empty == message || empty == email || empty == message){
		$("#contact-error").delay(300).slideDown().delay(3500).slideUp(300);
		$("#contact-form-send").html("Send Message <i class='ion-ios-paperplane'></i>");

        e.preventDefault();
    }
    else{
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'lq4msOm2tOT7-hPl3fBw6A',
				'message': {
                    'from_email': 'noreply@wisconsinengineer.com',
                    'to': [
                {
                    'email': 'wiscengrmag@gmail.com',
                    'name': 'Wisconsin Engineer',
                    'type': 'to'
                }
                ],
                'autotext': 'true',
                'subject': 'Contact Wisconsin Engineer - '+name,
                'html': '<span style="font-size:12pt; font-family: Helvetica, sans-serif;"><b>Message From:</b><br/> <span style="background-color:yellow;">'+name+'</span><br/><br/><b>Email Address:</b><br/>  <span style="background-color:yellow;">'+email+'</span><b><br/><br/>Message:</b><br/> <span style="background-color:yellow;">'+message+'</span></span><br/><h5>This is an automatically-generated email. Do not reply.</h5><br/><h3>To respond to this person, copy and paste the email address from above, or <a href="mailto:'+email+'?Subject=Thanks%20For%20Contacting%20Wisconsin%20Engineer">Click Here</a></h3>'
            }
        }
        }).done(function(response) {
			$("#contact-form-send").html("Message Sent <i class='ion-ios-checkmark-empty'></i>");
			$("#contact-name, #contact-email, #contact-message, #contact-form-send").prop( "disabled", true );

        });


    }


});
