// called by phases selection and phase - generates the phase's shapes or the shape selection's phase link

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
var getParam = window.location.href.substr(window.location.href.lastIndexOf("?")+1,window.location.href.length);
var getParamArrTemp = getParam.split("&");
var _GET = [];
var aux;

for (var i = 0; i < getParamArrTemp.length; i++) {
    aux = getParamArrTemp[i].split("=");
    if (aux[1] !== false) {
        _GET[aux[0]] = aux[1];
    } else {
        _GET.push(aux[0]);
    }
}

$(function() {
    var contentContainer;
    if (sPage == "phases-selection.html") {
        var body = $(document.body);
        for (phase in gamedata["phases"][_GET.d]) {
            body.append($('<a/>').attr({
                'class':'glossyBackground',
                'href':'phase.html?d='+_GET.d+'&n='+phase
            }).html(gamedata["phases"][_GET.d][phase]["name"]) );
        }
    }
    if (sPage == "phase.html") {
        var body = $('#shapeHolders');
        for (shape in gamedata["phases"][_GET.d][_GET.n]["shapes"]) {
            var attrs = gamedata["phases"][_GET.d][_GET.n]["shapes"][shape]["style"];
            body.append(
                $('<div/>').attr('class','container').append(
                    $('<div/>').attr('class','shape '+gamedata["phases"][_GET.d][_GET.n]["shapes"][shape]["name"]).css(attrs)
                )
            )
        }
        for (graph in gamedata["phases"][_GET.d][_GET.n]["graphs"]) {
            var attrs = gamedata["phases"][_GET.d][_GET.n]["graphs"][graph]["style"];
            body.append(
                $('<div/>').attr('class','container').append(
                    $('<div/>').attr('class','graph '+gamedata["phases"][_GET.d][_GET.n]["graphs"][graph]["name"]).css(attrs)
                )
            )
        }
    }
})
