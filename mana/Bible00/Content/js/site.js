window.util = {};
window.util.Cookies = {
    set: function (name, value) {
        var argv = arguments;
        var argc = arguments.length;
        var expires = (argc > 2) ? argv[2] : null;
        var path = (argc > 3) ? argv[3] : '/';
        var domain = (argc > 4) ? argv[4] : null;
        var secure = (argc > 5) ? argv[5] : false;
        document.cookie = name + "=" + escape(value) + ((expires === null) ? "" : ("; expires=" + expires.toGMTString())) + ((path === null) ? "" : ("; path=" + path)) + ((domain === null) ? "" : ("; domain=" + domain)) + ((secure === true) ? "; secure" : "");
    },
    get: function (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        var j = 0;
        while (i < clen) {
            j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return Ext.util.Cookies.getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i === 0) {
                break;
            }
        }
        return null;
    },
    clear: function (name) {
        if (Ext.util.Cookies.get(name)) {
            document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    },
    getCookieVal: function (offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }
};

function changeLang(lang) {
    window.util.Cookies.set("lang", lang);
    window.location.reload(true);
    return false;
}
function changeVersion(appVersion) {
    window.util.Cookies.set("appVersion", appVersion);
    window.location.reload(true);
    return false;
}

function toggleFootnote(el) {
    var id = $(el).attr("id");
    $(el).parent().find("#f-" + id).toggle();
    var offset = $(el).offset().top - $(window).scrollTop();
    if (offset > window.innerHeight) {
        // Not in view so scroll to it
        $('html,body').animate({ scrollTop: offset }, 1000);
    }
}

function toggleSaint(el) {
    $(el).next().toggleClass("ui-collapsible-content-collapsed");
    //$("#saint").toggle();
}

function highlightVerse(id, changeColor) {
    var el = $(document.getElementById(id));
    if (el.length > 0) {
        var top = 60;
        if (changeColor !== false) {
            el.css("background-color", "yellow");
            top = 30;
        }
        var offset = $(el).offset().top - $(window).scrollTop() - top;
        if (offset > window.innerHeight) {
            // Not in view so scroll to it
            $('html,body').animate({ scrollTop: offset }, 1000);
        }
    }
}

function preparePlayer() {
    var toggle = $(".jp-toggles");
    if (toggle.length === 1) {
        var width = toggle.width();
        $(".jp-progress").css("right", width + "px");
        $(".jp-time-holder").css("right", width + "px");
    }
    window.setTimeout(function () {
        $(".jp-playlist-item-free").unbind("click").on('click', function (event) {
            event.stopPropagation();
        });
    }, 800);
}

function prepareOutlineToggle() {
    $("[data-role='flipswitch']").on('change', function () {
        $("[data-role='list-divider']").toggle();
    });
}


/** Site intialization **/

/** End-Site intialization **/
