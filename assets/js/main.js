/* --------------------------------------------------------

Template Name: Vevo
Description: Vevo - One Page Portfolio Personal Cv Resume Template
Version: 1.0
Author: coder_hunt

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header Takes The Full Height of The Window
3 - Color Switcher && Changing Colors
4 - Sticky Menu
5 - Hide menu after clicking on a link
6 - Jquery Smooth Scroll
7 - jquery scroll spy
8 - Youtube Video Background
9 - Start EasyPieChart plugin
10 - Start Numbers Animate At Fun-Facts
11 - Start Isotop Plugin in Portfolio With Image Loaded Function
12 - Start Owl Carousel Plugin
13 - Google Map
14 - All Parallax Effect
15 - Scroll To Top
16 - Start Magnific Popup
17 - Typed Text in Home Section
18 - Particle Background

------------------------------------------------------- */

(function($) {

    "use strict";

	/* ---------------------------------------------------
        1 - Adjust Loading Page
	----------------------------------------------------- */
    $(window).on("load", function () {
        $("#loading .preloader").delay(700).animate({
            top: "-100%"
        }, 1000, "easeInQuart");
        $("#loading").delay(1100).fadeOut(1500);
    });
        
    /* ----------------------------------------------------------
        2 - Make Header takes the Full Height of the window
    ------------------------------------------------------------ */
    var homeSec = $(".win-height");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });
    
    /* --------------------------------------------------------
        3 - Color Switcher && Changing Colors
    ---------------------------------------------------------- */
    /* Variables */
    var colorSwitcher 	= $(".color-switcher"),
        switcherBtn 	= $(".switcher-btn"),
        colorSlot 		= $(".color-switcher .color-slot");
    /* Show/Hide color switcher on clicking on switcher button */
    switcherBtn.on("click", function(e) {
        e.preventDefault();
        if(colorSwitcher.hasClass("closed")) {
            colorSwitcher.removeClass("closed").animate({
                right: "0px"
            }, 300, "easeInOutBack");
        } else {
            colorSwitcher.animate({
                right: "-200px"
            }, 300, "easeInOutBack").addClass("closed");
        }
    });

    /* Giving every color-slot it's background color */
    colorSlot.css("background-color", function () {
        return $(this).attr("data-background");
    });

    /* Changing color when clicking on color-slot  */
    colorSlot.on("click", function() {
        var dataTarget = $(this).attr("data-target");
        $("link[href*='color-']").attr("href", dataTarget);		
    });
    
    /* ---------------------------------------------------
        4 - Sticky Menu
    ----------------------------------------------------- */
    $(".header-area").sticky({topSpacing:0});
    
    /* ---------------------------------------------------
        5 - Hide menu after clicking on a link 
    ----------------------------------------------------- */
    $("ul.nav li a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });
    
    /* ---------------------------------------------------
        6 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $("li.smooth-menu > a").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '56';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });       

    /* ---------------------------------------------------
        7 - jquery scroll spy
    ----------------------------------------------------- */
    $(window).on("scroll", function () {
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 94
        }); 
    });
    
    /* ---------------------------------------------------
        8 - Youtube Video
    ----------------------------------------------------- */
    $('#video').YTPlayer({
          fitToBackground: true,
          videoId: 'EfTUpvxEbqc' // paste your youtube video ID here
    });
          
    /* ---------------------------------------------------
        9 - Start EasyPieChart plugin 
    ----------------------------------------------------- */       
    $(window).scroll(function () {

        "use strict";

        if ($().easyPieChart) {
            var count = 0 ;
            var colors = ['#636363'];
            $('.percentage').each(function(){


                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {

                    $(this).easyPieChart({
                        barColor: colors[count],
                        trackColor: '#c5c5c5',
                        scaleColor: false,
                        scaleLength: false,
                        lineCap: 'butt',
                        lineWidth: 3,
                        size: 150,
                        rotate: 0,
                        animate: 2000,
                        onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
                }

                count++;
                if (count >= colors.length) { count = 0};
            });
        }

    });
    
    /* ---------------------------------------------------
        10 - Start numbers animate at fun-facts section 
    ----------------------------------------------------- */
    $(".fun-facts").appear(function () {
          $(".timer").countTo();
    }, {
          accX: 0,
          accY: -350
    });
    
    /* ---------------------------------------------------
        11 - Start Isotop Plugin in Portfolio With Image Loaded Function
    ----------------------------------------------------- */
    // images have loaded
    $(".portfolio-items").imagesLoaded( function() {
        //active isotop js
        $(".portfolio-items").isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });

        //isoptop click function
        $("ul.portfolio-filter > li").on("click", function () {
            $("ul.portfolio-filter > li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: true
                }
            });

            return false;
        }); 
    });
    // images have loaded
    $('.blog-masonry').imagesLoaded( function() {
        //active isotop js
        $('.blog-masonry').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });
    });
    
    /* ---------------------------------------------------
        12 - Start Owl Carousel Plugin
    ----------------------------------------------------- */
    
    $(".service-items").owlCarousel({
        navigation: false,
        autoPlay: 3000,
        slideSpeed: 1500,
        pagination: true,
        paginationSpeed: 1500,
        singleItem: false,
        itemsDesktop : [1199,2],
        items: 2
    });
    $(".testimonial-items").owlCarousel({
        navigation: false,
        autoPlay: 3500,
        slideSpeed: 1500,
        pagination: true,
        paginationSpeed: 1500,
        singleItem: false,
        itemsDesktop : [1199,1],
        itemsTablet : [768,1],
        items: 1
    });
    $(".blog-items").owlCarousel({
        navigation: true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        slideSpeed: 1500,
        pagination: false,
        singleItem: false,
        itemsDesktop : [1199,3],
        items: 3
    });
    $(".social-feed-group").owlCarousel({
        navigation: false,
        autoPlay: 3500,
        slideSpeed: 1500,
        pagination: false,
        singleItem: true,
        items: 1
    });
    
    /* ---------------------------------------------------
        13 - Map
    ----------------------------------------------------- */
    // In the following example, markers appear when the user clicks on the map.
    // Each marker is labeled with a single alphabetical character.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;

    function initialize() {
        var lasvegas = { lat: 36.1699, lng: -115.1398 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: lasvegas,
            styles: 
            [
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "30"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "40"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                    ]
                }
            ]
        });
        
        // Add a marker at the center of the map.
        addMarker(lasvegas, map);
    }

    // Adds a marker to the map.
    function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        var markerIcon = {
            url: 'assets/images/location-pin.png',
            scaledSize: new google.maps.Size(80, 80),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(40,95),
            labelOrigin: new google.maps.Point(40,28)
        };

        var markerLabel = 'V';
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerIcon,
            label: {
                text: markerLabel,
                color: "#232323",
                fontSize: "13px",
                fontWeight: "bold"
            }
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    
    /* ---------------------------------------------------
        14 - All Parallax Effect
    ----------------------------------------------------- */
    var parallaxHome 	    = $("#home.parallax"),
        parallaxFunfacts 	    = $("#fun-facts.parallax"),
        parallaxVideopromo = $("#video-promo.parallax"),
        parallaxTestimonial = $("#testimonial.parallax");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        parallaxHome.css({"background-attachment": "scroll"});
        parallaxFunfacts.css({"background-attachment": "scroll"});
        parallaxVideopromo.css({"background-attachment": "scroll"});
        parallaxTestimonial.css({"background-attachment": "scroll"});
    } else {
        parallaxHome.parallax("50%", 0.3);
        parallaxFunfacts.parallax("50%", 0.15);
        parallaxVideopromo.parallax("50%", 0.15);
        parallaxTestimonial.parallax("50%", 0.15);
    };
    
    /* ---------------------------------------------------
        15 - Scroll To Top
    ----------------------------------------------------- */
    $(document).on("ready", function() {
        var scrollTop = $(".scrollTop");
        $(window).on("scroll", function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
              $(scrollTop).css("opacity", "1");
            } 
            else {
              $(scrollTop).css("opacity", "0");
            }
        });

        $(scrollTop).on("click", function() {
            $('html, body').animate({
              scrollTop: 0
            }, 800);
            return false;
        });
    });
    
    /* ---------------------------------------------------
        16 - Start Magnific Popup Plugin in Video Popup Section
    ----------------------------------------------------- */   
    
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    /* ---------------------------------------------------
        17 - Typed Text in Home Section
	----------------------------------------------------- */
	$(".typed-element").typed({
    	strings: ["zarif","legend","designer"],
    	typeSpeed: 38,
    	loop: true,
    	backDelay: 3000
    });
    
    /* ---------------------------------------------------
        18 - Particle Background
	----------------------------------------------------- */
      var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    
})(jQuery);