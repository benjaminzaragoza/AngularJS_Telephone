var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'core', 'ngMaterial', 'ngMessages','ngMdIcons']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        //Router --- Controlem rutes

        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        // Ruta /list , mostrar telefon i dades dintre la mateixa ruta
        .state('home.list', {
                    // definim ruta per defecte
                    url: '/list',
                    views: {
                        // mostrem atraves de "column1Controller" columna 1 -> llista de telefons
                        'columnOne': {
                                // destriem la vista que volem mostrar
                                templateUrl: '/phone-list/phone-list.html',
                                controller: 'column1Controller'
                           },
                        // mostrem atraves de "column2Controller" columna 2 -> detalls telefon
                        'columnTwo': {
                                // destriem la vista que volem mostrar
                                templateUrl: '/phone-detail/phone-detail.html',
                                controller: 'column2Controller'

                            }
                    },
                    // Definim els parametres que volem passar , per als controladors
                    params: {
                        telefonoSeleccionat: null
                    }
                }
           )

        .state('home.chat', {
            url: '/chat',
            views: {
                'chat': {
                    templateUrl: 'chat.html',
                    controller: 'chat1'
                }
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html',
            controller: 'micontrolador'
                })

        .state('form', {
            url: '/form',
            templateUrl: 'form.html'
        })
        .state('form2', {
            url: '/form2',
            views: {
                '': {
                    templateUrl: 'form2.html'
                },
                controller: 'mainController'
            }
        });

});

routerApp.controller('DemoCtrl', function ($scope) {
      $scope.user = {
          name: 'John Doe',
          email: '',
          phone: '',
          address: 'Mountain View, CA',
          donation: 19.99
      };
  });

//Controlador validacio
routerApp.controller('mainController', function ($scope) {

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function (isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert('our form is amazing');
        }

    };

});

// Controlador mostrar llista telefono i caracteristiques
routerApp.controller('column1Controller', function ($scope) {

    $scope.phones = [
                {
                    "age": 0,
                    "id": "motorola-xoom-with-wi-fi",
                    "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
                    "name": "Motorola XOOM\u2122 with Wi-Fi",
                    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
                    "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
                    "android": {
                        "os": "Android 3.0",
                        "ui": "Honeycomb"
                    },
                    "availability": [
                        ""
                    ],
                    "battery": {
                        "standbyTime": "336 hours",
                        "talkTime": "24 hours",
                        "type": "Other ( mAH)"
                    },
                    "camera": {
                        "features": [
                            "Flash",
                            "Video"
                        ],
                        "primary": "5.0 megapixels"
                    },
                    "connectivity": {
                        "bluetooth": "Bluetooth 2.1",
                        "cell": "",
                        "gps": true,
                        "infrared": false,
                        "wifi": "802.11 b/g/n"
                    },
                    "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
                    "display": {
                        "screenResolution": "WXGA (1200 x 800)",
                        "screenSize": "10.1 inches",
                        "touchScreen": true
                    },
                    "hardware": {
                        "accelerometer": true,
                        "audioJack": "3.5mm",
                        "cpu": "1 GHz Dual Core Tegra 2",
                        "fmRadio": false,
                        "physicalKeyboard": false,
                        "usb": "USB 2.0"
                    },
                    "id": "motorola-xoom-with-wi-fi",
                    "images": [
                        "img/phones/motorola-xoom-with-wi-fi.0.jpg",
                        "img/phones/motorola-xoom-with-wi-fi.1.jpg",
                        "img/phones/motorola-xoom-with-wi-fi.2.jpg",
                        "img/phones/motorola-xoom-with-wi-fi.3.jpg",
                        "img/phones/motorola-xoom-with-wi-fi.4.jpg",
                        "img/phones/motorola-xoom-with-wi-fi.5.jpg"
                    ],
                    "name": "Motorola XOOM\u2122 with Wi-Fi",
                    "sizeAndWeight": {
                        "dimensions": [
                            "249.1 mm (w)",
                            "167.8 mm (h)",
                            "12.9 mm (d)"
                        ],
                        "weight": "708.0 grams"
                    },
                    "storage": {
                        "flash": "32000MB",
                        "ram": "1000MB"
                    }


                },
                {
                    "age": 1,
                    "id": "motorola-xoom",
                    "imageUrl": "img/phones/motorola-xoom.0.jpg",
                    "name": "MOTOROLA XOOM\u2122",
                    "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
                    "additionalFeatures": "Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.",
                    "android": {
                        "os": "Android 3.0",
                        "ui": "Android"
                    },
                    "availability": [
                        "Verizon"
                    ],
                    "battery": {
                        "standbyTime": "336 hours",
                        "talkTime": "24 hours",
                        "type": "Other (3250 mAH)"
                    },
                    "camera": {
                        "features": [
                            "Flash",
                            "Video"
                        ],
                        "primary": "5.0 megapixels"
                    },
                    "connectivity": {
                        "bluetooth": "Bluetooth 2.1",
                        "cell": "CDMA 800 /1900 LTE 700, Rx diversity in all bands",
                        "gps": true,
                        "infrared": false,
                        "wifi": "802.11 a/b/g/n"
                    },
                    "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
                    "display": {
                        "screenResolution": "WXGA (1200 x 800)",
                        "screenSize": "10.1 inches",
                        "touchScreen": true
                    },
                    "hardware": {
                        "accelerometer": true,
                        "audioJack": "3.5mm",
                        "cpu": "1 GHz Dual Core Tegra 2",
                        "fmRadio": false,
                        "physicalKeyboard": false,
                        "usb": "USB 2.0"
                    },
                    "id": "motorola-xoom",
                    "images": [
                        "img/phones/motorola-xoom.0.jpg",
                        "img/phones/motorola-xoom.1.jpg",
                        "img/phones/motorola-xoom.2.jpg"
                    ],
                    "name": "MOTOROLA XOOM\u2122",
                    "sizeAndWeight": {
                        "dimensions": [
                            "249.0 mm (w)",
                            "168.0 mm (h)",
                            "12.7 mm (d)"
                        ],

                        "weight": "726.0 grams"
                    },
                    "storage": {
                        "flash": "32000MB",
                        "ram": "1000MB"
                    }
                },
               {
                   "age": 2,
                   "carrier": "AT&T",
                   "id": "motorola-atrix-4g",
                   "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
                   "name": "MOTOROLA ATRIX\u2122 4G",
                   "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
                   "additionalFeatures": "",
                   "android": {
                       "os": "Android 2.2",
                       "ui": "MOTOBLUR"
                   },
                   "availability": [
                       "AT&T"
                   ],
                   "battery": {
                       "standbyTime": "400 hours",
                       "talkTime": "5 hours",
                       "type": "Lithium Ion (Li-Ion) (1930 mAH)"
                   },
                   "camera": {
                       "features": [
                           ""
                       ],
                       "primary": ""
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 2.1",
                       "cell": "WCDMA 850/1900/2100, GSM 850/900/1800/1900, HSDPA 14Mbps (Category 10) Edge Class 12, GPRS Class 12, eCompass, AGPS",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 a/b/g/n"
                   },
                   "description": "MOTOROLA ATRIX 4G gives you dual-core processing power and the revolutionary webtop application. With webtop and a compatible Motorola docking station, sold separately, you can surf the Internet with a full Firefox browser, create and edit docs, or access multimedia on a large screen almost anywhere.",
                   "display": {
                       "screenResolution": "QHD (960 x 540)",
                       "screenSize": "4.0 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "1 GHz Dual Core",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "motorola-atrix-4g",
                   "images": [
                       "img/phones/motorola-atrix-4g.0.jpg",
                       "img/phones/motorola-atrix-4g.1.jpg",
                       "img/phones/motorola-atrix-4g.2.jpg",
                       "img/phones/motorola-atrix-4g.3.jpg"
                   ],
                   "name": "MOTOROLA ATRIX\u2122 4G",
                   "sizeAndWeight": {
                       "dimensions": [
                           "63.5 mm (w)",
                           "117.75 mm (h)",
                           "10.95 mm (d)"
                       ],
                       "weight": "135.0 grams"
                   },
                   "storage": {
                       "flash": "",
                       "ram": ""
                   }
               },
               {
                   "age": 3,
                   "id": "dell-streak-7",
                   "imageUrl": "img/phones/dell-streak-7.0.jpg",
                   "name": "Dell Streak 7",
                   "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around.",
                   "additionalFeatures": "Front Facing 1.3MP Camera",
                   "android": {
                       "os": "Android 2.2",
                       "ui": "Dell Stage"
                   },
                   "availability": [
                       "T-Mobile"
                   ],
                   "battery": {
                       "standbyTime": "",
                       "talkTime": "",
                       "type": "Lithium Ion (Li-Ion) (2780 mAH)"
                   },
                   "camera": {
                       "features": [
                           "Flash",
                           "Video"
                       ],
                       "primary": "5.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 2.1",
                       "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g"
                   },
                   "description": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans",
                   "display": {
                       "screenResolution": "WVGA (800 x 480)",
                       "screenSize": "7.0 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "nVidia Tegra T20",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "dell-streak-7",
                   "images": [
                       "img/phones/dell-streak-7.0.jpg",
                       "img/phones/dell-streak-7.1.jpg",
                       "img/phones/dell-streak-7.2.jpg",
                       "img/phones/dell-streak-7.3.jpg",
                       "img/phones/dell-streak-7.4.jpg"
                   ],
                   "name": "Dell Streak 7",
                   "sizeAndWeight": {
                       "dimensions": [
                           "199.9 mm (w)",
                           "119.8 mm (h)",
                           "12.4 mm (d)"
                       ],
                       "weight": "450.0 grams"
                   },
                   "storage": {
                       "flash": "16000MB",
                       "ram": "512MB"
                   }
               },
               {
                   "age": 4,
                   "carrier": "Cellular South",
                   "id": "samsung-gem",
                   "imageUrl": "img/phones/samsung-gem.0.jpg",
                   "name": "Samsung Gem\u2122",
                   "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
               , "additionalFeatures": "3.2\u201d Full touch screen with Advanced anti smudge, anti reflective and anti scratch glass; Swype text input for easy and fast message creation; multiple messaging options, including text with threaded messaging for organized, easy-to-follow text; Social Community support, including Facebook and MySpace; Next generation Address book; Visual Voice Mail\n",
                   "android": {
                       "os": "Android 2.1",
                       "ui": "TouchWiz"
                   },
                   "availability": [
                       "Cellular South"
                   ],
                   "battery": {
                       "standbyTime": "800 hours",
                       "talkTime": "7 hours",
                       "type": "Nickel Cadmium (NiCd) (1500 mAH)"
                   },
                   "camera": {
                       "features": [
                           ""
                       ],
                       "primary": "3.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 3.0",
                       "cell": "3G/CDMA : 850MHz/1900MHz\n",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g"
                   },
                   "description": "The Samsung Gem\u2122 maps a route to a smarter mobile experience. By pairing one of the fastest processors in the category with the Android\u2122 platform, the Gem delivers maximum multitasking speed and social networking capabilities to let you explore new territory online. A smart phone at an even smarter price is a real find, so uncover the Gem and discover what\u2019s next.",
                   "display": {
                       "screenResolution": "WQVGA (400 x 240)",
                       "screenSize": "3.2 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "800 MHz",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "samsung-gem",
                   "images": [
                       "img/phones/samsung-gem.0.jpg",
                       "img/phones/samsung-gem.1.jpg",
                       "img/phones/samsung-gem.2.jpg"
                   ],
                   "name": "Samsung Gem\u2122",
                   "sizeAndWeight": {
                       "dimensions": [
                           "55.5 mm (w)",
                           "113.0 mm (h)",
                           "12.4 mm (d)"
                       ],
                       "weight": "110.0 grams"
                   },
                   "storage": {
                       "flash": "220MB",
                       "ram": "256MB"
                   }
               },
               {
                   "age": 5,
                   "carrier": "Dell",
                   "id": "dell-venue",
                   "imageUrl": "img/phones/dell-venue.0.jpg",
                   "name": "Dell Venue",
                   "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
               , "additionalFeatures": "Gorilla Glass display, Dedicated Camera Key, Ring Silence Switch, Swype keyboard.",
                   "android": {
                       "os": "Android 2.2",
                       "ui": "Dell Stage"
                   },
                   "availability": [
                       "AT&T,",
                       "KT,",
                       "T-Mobile"
                   ],
                   "battery": {
                       "standbyTime": "400 hours",
                       "talkTime": "7 hours",
                       "type": "Lithium Ion (Li-Ion) (1400 mAH)"
                   },
                   "camera": {
                       "features": [
                           "Flash",
                           "Video"
                       ],
                       "primary": "8.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 2.1",
                       "cell": "850/1900/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE\n900/1700/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g/n"
                   },
                   "description": "The Venue is the perfect one-touch, Smart Phone providing instant access to everything you love. All of Venue's features make it perfect for on-the-go students, mobile professionals, and active social communicators who love style and performance.\n\nElegantly designed, the Venue offers a vibrant, curved glass display that\u2019s perfect for viewing all types of content. The Venue\u2019s slender form factor feels great in your hand and also slips easily into your pocket.  A mobile entertainment powerhouse that lets you download the latest tunes from Amazon MP3 or books from Kindle, watch video, or stream your favorite radio stations.  All on the go, anytime, anywhere.",
                   "display": {
                       "screenResolution": "WVGA (800 x 480)",
                       "screenSize": "4.1 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "1 Ghz processor",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "dell-venue",
                   "images": [
                       "img/phones/dell-venue.0.jpg",
                       "img/phones/dell-venue.1.jpg",
                       "img/phones/dell-venue.2.jpg",
                       "img/phones/dell-venue.3.jpg",
                       "img/phones/dell-venue.4.jpg",
                       "img/phones/dell-venue.5.jpg"
                   ],
                   "name": "Dell Venue",
                   "sizeAndWeight": {
                       "dimensions": [
                           "64.0 mm (w)",
                           "121.0 mm (h)",
                           "12.9 mm (d)"
                       ],
                       "weight": "164.0 grams"
                   },
                   "storage": {
                       "flash": "1000MB",
                       "ram": "512MB"
                   }
               },
               {
                   "age": 6,
                   "carrier": "Best Buy",
                   "id": "nexus-s",
                   "imageUrl": "img/phones/nexus-s.0.jpg",
                   "name": "Nexus S",
                   "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
               , "additionalFeatures": "Contour Display, Near Field Communications (NFC), Three-axis gyroscope, Anti-fingerprint display coating, Internet Calling support (VoIP/SIP)",
                   "android": {
                       "os": "Android 2.3",
                       "ui": "Android"
                   },
                   "availability": [
                       "M1,",
                       "O2,",
                       "Orange,",
                       "Singtel,",
                       "StarHub,",
                       "T-Mobile,",
                       "Vodafone"
                   ],
                   "battery": {
                       "standbyTime": "428 hours",
                       "talkTime": "6 hours",
                       "type": "Lithium Ion (Li-Ion) (1500 mAH)"
                   },
                   "camera": {
                       "features": [
                           "Flash",
                           "Video"
                       ],
                       "primary": "5.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 2.1",
                       "cell": "Quad-band GSM: 850, 900, 1800, 1900\r\nTri-band HSPA: 900, 2100, 1700\r\nHSPA type: HSDPA (7.2Mbps) HSUPA (5.76Mbps)",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g/n"
                   },
                   "description": "Nexus S is the next generation of Nexus devices, co-developed by Google and Samsung. The latest Android platform (Gingerbread), paired with a 1 GHz Hummingbird processor and 16GB of memory, makes Nexus S one of the fastest phones on the market. It comes pre-installed with the best of Google apps and enabled with new and popular features like true multi-tasking, Wi-Fi hotspot, Internet Calling, NFC support, and full web browsing. With this device, users will also be the first to receive software upgrades and new Google mobile apps as soon as they become available. For more details, visit http://www.google.com/nexus.",
                   "display": {
                       "screenResolution": "WVGA (800 x 480)",
                       "screenSize": "4.0 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "1GHz Cortex A8 (Hummingbird) processor",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "nexus-s",
                   "images": [
                       "img/phones/nexus-s.0.jpg",
                       "img/phones/nexus-s.1.jpg",
                       "img/phones/nexus-s.2.jpg",
                       "img/phones/nexus-s.3.jpg"
                   ],
                   "name": "Nexus S",
                   "sizeAndWeight": {
                       "dimensions": [
                           "63.0 mm (w)",
                           "123.9 mm (h)",
                           "10.88 mm (d)"
                       ],
                       "weight": "129.0 grams"
                   },
                   "storage": {
                       "flash": "16384MB",
                       "ram": "512MB"
                   }
               },
               {
                   "age": 7,
                   "carrier": "Cellular South",
                   "id": "lg-axis",
                   "imageUrl": "img/phones/lg-axis.0.jpg",
                   "name": "LG Axis",
                   "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
               , "additionalFeatures": "Accessibility features: Tactile QWERTY keyboard, four-direction keypad, start and end call buttons, dedicated number keys, camera button, TalkBack screen reader",
                   "android": {
                       "os": "Android 2.1",
                       "ui": "LG Home"
                   },
                   "availability": [
                       "Cellular South"
                   ],
                   "battery": {
                       "standbyTime": "500 hours",
                       "talkTime": "8 hours",
                       "type": "Lithium Ion (Li-Ion) (1500 mAH)"
                   },
                   "camera": {
                       "features": [
                           "Flash",
                           "Video"
                       ],
                       "primary": "3.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 2.1",
                       "cell": "1.9 GHz CDMA PCS, 800 MHz CDMA, EVDO Rev. A, 1xRTT",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g"
                   },
                   "description": "Android plus QWERTY is a powerful duo. LG Axis melds a speedy UI with the limitless micro-entertainment of 80,000+ apps including voice-activated Google. Feel the tactile vibration on its tempered glass touchscreen. Take the fuzziness out of your fun with a 3.2MP camera that does 360\u00b0 panoramics. And customize your home screens with shortcuts to your apps, favorites, and widgets. It's the centerpiece of your life.",
                   "display": {
                       "screenResolution": "WVGA (800 x 480)",
                       "screenSize": "3.2 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "",
                       "cpu": "600 MHz Qualcomm MSM7627",
                       "fmRadio": false,
                       "physicalKeyboard": true,
                       "usb": "USB 2.0"
                   },
                   "id": "lg-axis",
                   "images": [
                       "img/phones/lg-axis.0.jpg",
                       "img/phones/lg-axis.1.jpg",
                       "img/phones/lg-axis.2.jpg"
                   ],
                   "name": "LG Axis",
                   "sizeAndWeight": {
                       "dimensions": [
                           "56.0 mm (w)",
                           "116.0 mm (h)",
                           "16.0 mm (d)"
                       ],
                       "weight": "158.0 grams"
                   },
                   "storage": {
                       "flash": "126MB",
                       "ram": "256MB"
                   }
               },
               {
                   "age": 8,
                   "id": "samsung-galaxy-tab",
                   "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
                   "name": "Samsung Galaxy Tab\u2122",
                   "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
               , "additionalFeatures": "Adobe\u00ae Flash\u00ae Player compatible; 1.3MP front-facing camera for video chat; eReader pre-loaded; Swype text input technology\r\n",
                   "android": {
                       "os": "Android 2.2",
                       "ui": "TouchWiz"
                   },
                   "availability": [
                       "AT&T,",
                       "Sprint,",
                       "T-Mobile,",
                       "Verizon"
                   ],
                   "battery": {
                       "standbyTime": "780 hours",
                       "talkTime": "",
                       "type": "Lithium Ion (Li-Ion) (4000 mAH)"
                   },
                   "camera": {
                       "features": [
                           "Flash",
                           "Video"
                       ],
                       "primary": "3.0 megapixels"
                   },
                   "connectivity": {
                       "bluetooth": "Bluetooth 3.0",
                       "cell": "AT&T: GSM/EDGE : 850/900/1800/1900; 3G : 850/1900/2100\r\n\r\nSprint: CDMA : 850/1900MHz\r\n\r\nT-Mobile: GSM/EDGE : 850/900/1800/1900; 3G : 1700/1900\r\n\r\nVerizon: CDMA : 800MHz/1900MHz",
                       "gps": true,
                       "infrared": false,
                       "wifi": "802.11 b/g/n"
                   },
                   "description": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122, the tablet device that delivers enhanced capabilities with advanced mobility, has a large, perfectly sized, 7.0\" screen that offers plenty of room for the thousands of interactive games and apps available for the Android\u2122 platform, and its slim design makes it perfect for travel and one-handed grip. Use the Galaxy Tab to relax and enjoy an e-book, watch rich video or full web content with its Adobe\u00ae Flash\u00ae Player compatibility, video chat using the front-facing camera, or send user-generated content wirelessly to other devices like your TV via AllShare\u2122.  With so many options for customization and interactivity, the Galaxy Tab gives you everything you want, anywhere you go\u2026Feel Free to Tab\u2122.",
                   "display": {
                       "screenResolution": "WSVGA (1024 x 600)",
                       "screenSize": "7.0 inches",
                       "touchScreen": true
                   },
                   "hardware": {
                       "accelerometer": true,
                       "audioJack": "3.5mm",
                       "cpu": "1GHz",
                       "fmRadio": false,
                       "physicalKeyboard": false,
                       "usb": "USB 2.0"
                   },
                   "id": "samsung-galaxy-tab",
                   "images": [
                       "img/phones/samsung-galaxy-tab.0.jpg",
                       "img/phones/samsung-galaxy-tab.1.jpg",
                       "img/phones/samsung-galaxy-tab.2.jpg",
                       "img/phones/samsung-galaxy-tab.3.jpg",
                       "img/phones/samsung-galaxy-tab.4.jpg",
                       "img/phones/samsung-galaxy-tab.5.jpg",
                       "img/phones/samsung-galaxy-tab.6.jpg"
                   ],
                   "name": "Samsung Galaxy Tab\u2122",
                   "sizeAndWeight": {
                       "dimensions": [
                           "120.39 mm (w)",
                           "189.99 mm (h)",
                           "11.9 mm (d)"
                       ],
                       "weight": "379.88 grams"
                   },
                   "storage": {
                       "flash": "16384MB",
                       "ram": "640MB"
                   }
               }
    ];
});

// Controlador detalls telefono
routerApp.controller('column2Controller', function ($scope, $stateParams) {

    //Segons telefon passat agafem les dades
    $scope.phone = $stateParams.telefonoSeleccionat;

    // Segons telefon passat agafem conjunt de imatges
    $scope.setImage = function setImage(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

});


routerApp.controller('mainController', function ($scope) {

    $scope.submitted = false;

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        $scope.submitted = true;

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }
        else {
            alert('ERROR');
        }

    };

});
routerApp.controller('scotchController', function ($scope) {

    $scope.datos = {};

    $scope.datos.message = 'test';
    $scope.datos.message2 = 'test 2';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});

routerApp.controller('chat1', function ($scope) {
    var imagePath = 'img/user.png';
    var telefone = 'img/phone.svg';
    
    //.config(function($mdIconProvider) {
    //    $mdIconProvider
    //      .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
    //})

    $scope.phones = [
      {
          type: 'Home',
          number: '(555) 251-1234',
          options: {
              face: telefone
          }
      },
      {
          type: 'Cell',
          number: '(555) 786-9841',
          options: {
              face: telefone,
              avatarIcon: true
          }
      },
      {
          type: 'Office',
          number: '(555) 314-1592',
          options: {
              face : imagePath
          }
      },
      {
          type: 'Offset',
          number: '(555) 192-2010',
          options: {
              face: telefone
          }
      }
    ];
    $scope.todos = [
      {
          face : imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face : imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face : imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face : imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face : imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
    ];
});

routerApp.controller('menu', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = buildToggler('left');
  
      $scope.menu = [
        { 'name': 'Home', 'icon': 'home', state: 'home' },
        { 'name': 'Admin users', 'icon': 'face', state: 'about' },
        { 'name': 'Formulari', 'icon': 'description', state: 'form' },
        { 'name': 'Formulari 2', 'icon': 'description', state: 'form2' }
      ];
  
      $scope.close = function () {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
      };

      function buildToggler(navID) {
          return function() {
              // Component lookup should always be available since we are not using `ng-if`
              $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
          }
      }
})

routerApp.controller('micontrolador', function ($scope) {
    $scope.titulo = "Todo Usuaris";
    $scope.nuevo = true;
    $scope.generos = [{ id: 1, genero: 'Masculi' }, { id: 2, genero: 'Femeni' }];
    $scope.amigos = [
      { nombre: 'Jose', edad: 25, genero: 'Masculi' },
      { nombre: 'Angela', edad: 21, genero: 'Femeni' },
      { nombre: 'Marinsan', edad: 29, genero: 'Masculi' }
    ];

    $scope.guardar = function (x) {
        if ($scope.nuevo) {
            $scope.amigos.unshift(x);
        }
        else {
            $scope.new = {};
            $scope.nuevo = true;
        }
    };

    $scope.cancel = function () {
        $scope.nuevo = true;
        $scope.new = {};
    }

    $scope.borrar = function (x) {
        var i = $scope.amigos.indexOf(x);
        $scope.amigos.splice(i, 1);
        $scope.new = {};
        $scope.nuevo = true;
    }

    $scope.editar = function (x) {
        $scope.new = x;
        $scope.nuevo = false;
        angular.element('#nombre').focus();
    }
});


//.state('home.detail', {
//    url: '/detail',
//    params: {
//        telefonoSeleccionat: {}
//     },
//    templateUrl: '/phone-detail/phone-detail.html',
//    controller: function ($stateParams, $scope) {

//        $scope.phone = $stateParams.telefonoSeleccionat;
//    }

//})