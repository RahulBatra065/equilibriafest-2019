<<<<<<< HEAD

// Particle JS Config
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },

        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 1499.3805191013182,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
//Smoother Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        //basically listens to all anchors being clicked on
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
                // then takes every single event to make it smooooooooooooth
                // and repeat
        });
    });
});
// Sidenav trigger
$(document).ready(function() {
    $('.sidenav').sidenav();
});
console.log('All Rights Reserved Equilibria Organisers 2019-20 // rahulbatra.in');
AOS.init(); // AOS
=======
$('.fa-instagram').click(function() {
        $(location).attr('href', 'https://instagram.com/equilibria_2019');
    })
    //Date countdown
function getTime() {
    var today = new Date();
    var yearToLive = 2019;
    var currentYear = today.getFullYear();
    var diffToYear = currentYear - yearToLive;
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var daysToLive = 30;
    var diffToDays = daysToLive - currentDay;
    const monthToLive = 10;
    var diffToMonth = monthToLive - currentMonth;
    var currentHours = today.getHours();
    var hoursToLive = 00;
    var diffToHours = currentHours - hoursToLive;
    var currentMinutes = today.getMinutes();
    var minutesToLive = 60;
    var diffToMinutes = minutesToLive - currentMinutes;
    var currentSeconds = today.getSeconds();
    var secondsToLive = 60;
    var diffToSeconds = secondsToLive - currentSeconds;
    var TimeDifference = diffToYear + ' Years ' + diffToMonth + ' Months ' + diffToDays + ' Days ' + diffToHours + ' Hours ' + diffToMinutes + ' Minutes ' + diffToSeconds + ' Seconds ';
    $(".countdown").text(TimeDifference);
    var t = setTimeout(getTime, 500);
    /*var time = [currentYear, currentMonth, currentDay, currentHours, currentMinutes, currentSeconds];

    $(".current").text('[' + time + ']'); */
    return TimeDifference
    return time
}
getTime();


console.log('All Rights Reserved Equilibria Organisers 2019-20 // rahulbatra.in');
>>>>>>> master
