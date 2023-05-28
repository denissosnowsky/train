var stations = {
    'kovel': [
        {
            time: ['08:42', '18:20'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kovel',
            lightsClass: 'lights4',
        },
    ],
    'rozhyshche': [
        {
            time: ['19:19', '19:20'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'rozhyshche',
            lightsClass: 'lights4',
        },
        {
            time: ['07:38', '07:40'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'rozhyshche',
            lightsClass: 'lights4',
        }
    ],
    'kivertsi': [
        {
            time: ['19:38', '19:58'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kivertsi',
            lightsClass: 'lights4',
        },
        {
            time: ['20:59', '21:01'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kivertsi_morning',
            lightsClass: 'lights4',
        },
        {
            time: ['06:01', '06:02'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kivertsi_morning',
            lightsClass: 'lights4',
        },
        {
            time: ['06:54', '07:15'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kivertsi_morning',
            lightsClass: 'lights4',
        }
    ],
    'lutsk': [
        {
            time: ['20:19', '20:42'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'lutsk',
            lightsClass: 'lights4',
        },
        {
            time: ['06:15', '06:39'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'lutsk_morning',
            lightsClass: 'lights4',
        }
    ],
    'rivne': [
        {
            time: ['22:20', '22:27'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'rivne_night',
            lightsClass: 'lights2',
        },
        {
            time: ['04:50', '04:54'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'rivne_night',
            lightsClass: 'lights2',
        }
    ],
    'zdolbuniv': [
        {
            time: ['22:44', '23:00'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'zdolbuniv_night',
            lightsClass: 'lights2',
        },
        {
            time: ['04:17', '04:33'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'zdolbuniv_night',
            lightsClass: 'lights2',
        }
    ],
    'ostroh': [
        {
            time: ['22:27', '22:29'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'ostroh_night',
            lightsClass: 'lights2',
        },
        {
            time: ['03:48', '03:50'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'ostroh_night',
            lightsClass: 'lights2',
        }
    ],
    'kryvyn': [
        {
            time: ['23:44', '23:46'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kryvyn_night',
            lightsClass: 'lights2',
        },
        {
            time: ['03:30', '03:32'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'kryvyn_night',
            lightsClass: 'lights2',
        }
    ],
    'slavuta': [
        {
            time: ['23:58', '23:59'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'slavuta_night',
            lightsClass: 'lights2',
        },
        {
            time: ['03:16', '03:18'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'slavuta_night',
            lightsClass: 'lights2',
        }
    ],
    'shepetivka': [
        {
            time: ['00:23', '00:43'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'shepetivka_night',
            lightsClass: 'lights2',
        },
        {
            time: ['02:44', '02:54'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'shepetivka_night',
            lightsClass: 'lights2',
        }
    ],
    'polonne': [
        {
            time: ['01:14', '01:16'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'polonne_night',
            lightsClass: 'lights2',
        },
        {
            time: ['02:08', '02:10'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'polonne_night',
            lightsClass: 'lights2',
        }
    ],
    'pechanivka': [
        {
            time: ['01:37', '01:39'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'pechanivka_night',
            lightsClass: 'lights2',
        },
        {
            time: ['01:39', '01:41'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'pechanivka_night',
            lightsClass: 'lights2',
        }
    ],
    'chudniv_volynsky': [
        {
            time: ['02:01', '02:03'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'chudniv_volynsky_night',
            lightsClass: 'lights2',
        },
        {
            time: ['01:11', '01:13'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'chudniv_volynsky_night',
            lightsClass: 'lights2',
        }
    ],
    'berdychiv': [
        {
            time: ['02:39', '02:49'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'berdychiv_night',
            lightsClass: 'lights2',
        },
        {
            time: ['00:20', '00:33'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            stationClass: 'berdychiv_night',
            lightsClass: 'lights2',
        }
    ],
    'kozyatyn': [
        {
            time: ['03:17', '03:37'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'kozyatyn_night',
            lightsClass: 'lights2',
        },
        {
            time: ['23:25', '23:52'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'kozyatyn_night',
            lightsClass: 'lights2',
        }
    ],
    'fastiv': [
        {
            time: ['04:53', '04:55'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'fastiv_night',
            lightsClass: 'lights2',
        },
        {
            time: ['22:04', '22:07'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'fastiv_night',
            lightsClass: 'lights2',
        }
    ],
    'kyiv': [
        {
            time: ['06:07', '07:20'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'kyiv_morning',
            lightsClass: 'lights4',
        },
        {
            time: ['07:20', '21:10'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            stationClass: 'kyiv',
            lightsClass: 'lights4',
        }
    ],
};

var trains = {
    '088': [
        {
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            run: [
                ['00:00', '00:20', 'right'],
                ['00:33', '00:58', 'right'],
                ['01:00', '01:11', 'right'],
                ['01:13', '01:39', 'right'],
                ['01:41', '02:08', 'right'],
                ['02:10', '02:44', 'right'],
                ['02:54', '03:16', 'right'],
                ['03:18', '03:30', 'right'],
                ['03:32', '03:48', 'right'],
                ['03:50', '04:17', 'right'],
                ['04:33', '04:50', 'right'],
                ['04:54', '06:01', 'right'],
                ['06:02', '06:15', 'right'],
                ['06:39', '06:54', 'left'],
                ['07:15', '07:38', 'right'],
                ['07:40', '08:42', 'right'],
                ['18:20', '19:19', 'left'], // Kovel
                ['19:20', '19:38', 'left'],
                ['19:58', '20:19', 'right'],
                ['20:42', '20:59', 'left'],
                ['21:01', '22:20', 'left'],
                ['22:27', '22:44', 'left'],
                ['23:00', '23:27', 'left'],
                ['23:29', '23:44', 'left'],
                ['23:46', '23:59', 'left'],
            ]
        },
        {
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            run: [
                ['00:01', '00:23', 'left'],
                ['00:43', '01:14', 'left'],
                ['01:16', '01:37', 'left'],
                ['01:39', '02:01', 'left'],
                ['02:03', '02:14', 'left'],
                ['02:16', '02:39', 'left'],
                ['02:49', '03:17', 'left'],
                ['03:37', '04:53', 'right'],
                ['04:55', '06:07', 'right'], // to kyiv
                ['21:10', '22:04', 'left'], // from kyiv
                ['22:07', '23:30', 'left'],
                ['23:52', '23:59', 'right'],
            ]
        }
    ]
}

checkStation();
checkTrain();
checkPeriod();

setInterval(function() {
    checkStation();
    checkTrain();
    checkPeriod();
}, 5000);

function checkStation() {
    var selectedStation = false;
    $.each(stations, function(i, elem) {
        //console.log(i); //  населений пункт
        $.each(stations[i], function(y, elem) {
            if (isAvailable(stations[i][y]['time'][0], stations[i][y]['time'][1], stations[i][y]['days'])) {
                $("#station").attr("class", stations[i][y]['stationClass']);
                $("#game").attr('data-run', false); // фон не рухається
                $('#lights').attr("class", stations[i][y]['lightsClass']);
                selectedStation = true;
                return false;
            }
        });
        if (!selectedStation) {
            $("#station").attr("class", "");
            $("#game").attr('data-run', true); // фон рухається
            $('#lights').attr("class", "");
        }
    });
}

function checkTrain() {
    $("#train").attr("class", "train_chs4_kyiv");
    $.each(trains, function(i, elem) {
        //console.log(i); // потяг
        $.each(trains[i], function(y, elem) {
            $.each(trains[i][y]['run'], function(x, elem) {
                if (isAvailable(trains[i][y]['run'][x][0], trains[i][y]['run'][x][1], trains[i][y]['days'])) {
                    $("#train").attr("class", "train_chs4_kyiv runtrain");
                    $('#game').attr('data-direction', trains[i][y]['run'][x][2]);
                    //console.log('yes');
                    return false;
                }
            });
        });
    });
}

function isAvailable(opening, closing, days = []) {
    var timeFormat2 = "HH:mm";
    var timeNow = moment().format("HH:mm");
    var dayNow = +moment().format('D');
    var ifTime = moment(timeNow, timeFormat2).isBetween(moment(opening, timeFormat2), moment(closing, timeFormat2));
    var ifDays = days.includes(dayNow);
    if (ifTime && ifDays) {
        return true;
    } else {
        return false;
    }
}

function checkPeriod() {
    var timeNow = moment().format("H");
    if (timeNow <= 5) {
        $("#game").attr('data-period', 'night');
    } else if (timeNow > 5 && timeNow <= 7) {
        $("#game").attr('data-period', 'morning');
    } else if (timeNow > 7 && timeNow <= 20) {
        $("#game").attr('data-period', 'day');
    } else if (timeNow > 20 && timeNow <= 22) {
        $("#game").attr('data-period', 'evening');
    } else if (timeNow > 22) {
        $("#game").attr('data-period', 'night');
    }
}