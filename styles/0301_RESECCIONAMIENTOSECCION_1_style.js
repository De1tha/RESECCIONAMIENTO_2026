var size = 0;
var placement = 'point';

var style_0301_RESECCIONAMIENTOSECCION_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "19.5px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#e31a1c";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("seccion") !== null) {
        labelText = String(feature.get("seccion"));
    }
    
        function rules_0301_RESECCIONAMIENTOSECCION_1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_0301_RESECCIONAMIENTOSECCION_1rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_0301_RESECCIONAMIENTOSECCION_1(feature, value);
        ;

    return style;
};
