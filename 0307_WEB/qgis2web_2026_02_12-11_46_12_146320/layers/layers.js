var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_0307_SECCION_1 = new ol.format.GeoJSON();
var features_0307_SECCION_1 = format_0307_SECCION_1.readFeatures(json_0307_SECCION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0307_SECCION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0307_SECCION_1.addFeatures(features_0307_SECCION_1);
var lyr_0307_SECCION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0307_SECCION_1, 
                style: style_0307_SECCION_1,
                popuplayertitle: '0307_SECCION',
                interactive: true,
                title: '<img src="styles/legend/0307_SECCION_1.png" /> 0307_SECCION'
            });
var format_ST1_MANZANA_2 = new ol.format.GeoJSON();
var features_ST1_MANZANA_2 = format_ST1_MANZANA_2.readFeatures(json_ST1_MANZANA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST1_MANZANA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST1_MANZANA_2.addFeatures(features_ST1_MANZANA_2);
var lyr_ST1_MANZANA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST1_MANZANA_2, 
                style: style_ST1_MANZANA_2,
                popuplayertitle: 'ST1_MANZANA',
                interactive: true,
                title: '<img src="styles/legend/ST1_MANZANA_2.png" /> ST1_MANZANA'
            });
var format_ST2_MANZANA_3 = new ol.format.GeoJSON();
var features_ST2_MANZANA_3 = format_ST2_MANZANA_3.readFeatures(json_ST2_MANZANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST2_MANZANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST2_MANZANA_3.addFeatures(features_ST2_MANZANA_3);
var lyr_ST2_MANZANA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST2_MANZANA_3, 
                style: style_ST2_MANZANA_3,
                popuplayertitle: 'ST2_MANZANA',
                interactive: true,
                title: '<img src="styles/legend/ST2_MANZANA_3.png" /> ST2_MANZANA'
            });
var format_ST3_MANZANA_4 = new ol.format.GeoJSON();
var features_ST3_MANZANA_4 = format_ST3_MANZANA_4.readFeatures(json_ST3_MANZANA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST3_MANZANA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST3_MANZANA_4.addFeatures(features_ST3_MANZANA_4);
var lyr_ST3_MANZANA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST3_MANZANA_4, 
                style: style_ST3_MANZANA_4,
                popuplayertitle: 'ST3_MANZANA',
                interactive: true,
                title: '<img src="styles/legend/ST3_MANZANA_4.png" /> ST3_MANZANA'
            });
var format_ST4_MANZANA_5 = new ol.format.GeoJSON();
var features_ST4_MANZANA_5 = format_ST4_MANZANA_5.readFeatures(json_ST4_MANZANA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST4_MANZANA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST4_MANZANA_5.addFeatures(features_ST4_MANZANA_5);
var lyr_ST4_MANZANA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST4_MANZANA_5, 
                style: style_ST4_MANZANA_5,
                popuplayertitle: 'ST4_MANZANA',
                interactive: true,
                title: '<img src="styles/legend/ST4_MANZANA_5.png" /> ST4_MANZANA'
            });
var format_0307_HIDROGRAFIA_L_6 = new ol.format.GeoJSON();
var features_0307_HIDROGRAFIA_L_6 = format_0307_HIDROGRAFIA_L_6.readFeatures(json_0307_HIDROGRAFIA_L_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0307_HIDROGRAFIA_L_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0307_HIDROGRAFIA_L_6.addFeatures(features_0307_HIDROGRAFIA_L_6);
var lyr_0307_HIDROGRAFIA_L_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0307_HIDROGRAFIA_L_6, 
                style: style_0307_HIDROGRAFIA_L_6,
                popuplayertitle: '0307_HIDROGRAFIA_L',
                interactive: true,
                title: '<img src="styles/legend/0307_HIDROGRAFIA_L_6.png" /> 0307_HIDROGRAFIA_L'
            });
var format_0307_RASGO_COMPLEMENTARIO_L_7 = new ol.format.GeoJSON();
var features_0307_RASGO_COMPLEMENTARIO_L_7 = format_0307_RASGO_COMPLEMENTARIO_L_7.readFeatures(json_0307_RASGO_COMPLEMENTARIO_L_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0307_RASGO_COMPLEMENTARIO_L_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0307_RASGO_COMPLEMENTARIO_L_7.addFeatures(features_0307_RASGO_COMPLEMENTARIO_L_7);
var lyr_0307_RASGO_COMPLEMENTARIO_L_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0307_RASGO_COMPLEMENTARIO_L_7, 
                style: style_0307_RASGO_COMPLEMENTARIO_L_7,
                popuplayertitle: '0307_RASGO_COMPLEMENTARIO_L',
                interactive: true,
                title: '<img src="styles/legend/0307_RASGO_COMPLEMENTARIO_L_7.png" /> 0307_RASGO_COMPLEMENTARIO_L'
            });
var format_0307_VIALIDAD_8 = new ol.format.GeoJSON();
var features_0307_VIALIDAD_8 = format_0307_VIALIDAD_8.readFeatures(json_0307_VIALIDAD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0307_VIALIDAD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0307_VIALIDAD_8.addFeatures(features_0307_VIALIDAD_8);
var lyr_0307_VIALIDAD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0307_VIALIDAD_8, 
                style: style_0307_VIALIDAD_8,
                popuplayertitle: '0307_VIALIDAD',
                interactive: true,
                title: '<img src="styles/legend/0307_VIALIDAD_8.png" /> 0307_VIALIDAD'
            });
var format_ST1_ESCUELA_9 = new ol.format.GeoJSON();
var features_ST1_ESCUELA_9 = format_ST1_ESCUELA_9.readFeatures(json_ST1_ESCUELA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST1_ESCUELA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST1_ESCUELA_9.addFeatures(features_ST1_ESCUELA_9);
var lyr_ST1_ESCUELA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST1_ESCUELA_9, 
                style: style_ST1_ESCUELA_9,
                popuplayertitle: 'ST1_ESCUELA',
                interactive: true,
                title: '<img src="styles/legend/ST1_ESCUELA_9.png" /> ST1_ESCUELA'
            });
var format_ST2_ESCUELA_10 = new ol.format.GeoJSON();
var features_ST2_ESCUELA_10 = format_ST2_ESCUELA_10.readFeatures(json_ST2_ESCUELA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST2_ESCUELA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST2_ESCUELA_10.addFeatures(features_ST2_ESCUELA_10);
var lyr_ST2_ESCUELA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST2_ESCUELA_10, 
                style: style_ST2_ESCUELA_10,
                popuplayertitle: 'ST2_ESCUELA',
                interactive: true,
                title: '<img src="styles/legend/ST2_ESCUELA_10.png" /> ST2_ESCUELA'
            });
var format_ST3_ESCUELA_11 = new ol.format.GeoJSON();
var features_ST3_ESCUELA_11 = format_ST3_ESCUELA_11.readFeatures(json_ST3_ESCUELA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST3_ESCUELA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST3_ESCUELA_11.addFeatures(features_ST3_ESCUELA_11);
var lyr_ST3_ESCUELA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST3_ESCUELA_11, 
                style: style_ST3_ESCUELA_11,
                popuplayertitle: 'ST3_ESCUELA',
                interactive: true,
                title: '<img src="styles/legend/ST3_ESCUELA_11.png" /> ST3_ESCUELA'
            });
var format_ST4_ESCUELA_12 = new ol.format.GeoJSON();
var features_ST4_ESCUELA_12 = format_ST4_ESCUELA_12.readFeatures(json_ST4_ESCUELA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST4_ESCUELA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST4_ESCUELA_12.addFeatures(features_ST4_ESCUELA_12);
var lyr_ST4_ESCUELA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST4_ESCUELA_12, 
                style: style_ST4_ESCUELA_12,
                popuplayertitle: 'ST4_ESCUELA',
                interactive: true,
                title: '<img src="styles/legend/ST4_ESCUELA_12.png" /> ST4_ESCUELA'
            });
var group_ESCUELAPORST = new ol.layer.Group({
                                layers: [lyr_ST1_ESCUELA_9,lyr_ST2_ESCUELA_10,lyr_ST3_ESCUELA_11,lyr_ST4_ESCUELA_12,],
                                fold: 'open',
                                title: 'ESCUELA POR ST'});
var group_MANZANAPORST = new ol.layer.Group({
                                layers: [lyr_ST1_MANZANA_2,lyr_ST2_MANZANA_3,lyr_ST3_MANZANA_4,lyr_ST4_MANZANA_5,],
                                fold: 'open',
                                title: 'MANZANA POR ST'});

lyr_GoogleSatellite_0.setVisible(true);lyr_0307_SECCION_1.setVisible(true);lyr_ST1_MANZANA_2.setVisible(true);lyr_ST2_MANZANA_3.setVisible(true);lyr_ST3_MANZANA_4.setVisible(true);lyr_ST4_MANZANA_5.setVisible(true);lyr_0307_HIDROGRAFIA_L_6.setVisible(true);lyr_0307_RASGO_COMPLEMENTARIO_L_7.setVisible(true);lyr_0307_VIALIDAD_8.setVisible(true);lyr_ST1_ESCUELA_9.setVisible(true);lyr_ST2_ESCUELA_10.setVisible(true);lyr_ST3_ESCUELA_11.setVisible(true);lyr_ST4_ESCUELA_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_0307_SECCION_1,group_MANZANAPORST,lyr_0307_HIDROGRAFIA_L_6,lyr_0307_RASGO_COMPLEMENTARIO_L_7,lyr_0307_VIALIDAD_8,group_ESCUELAPORST];
lyr_0307_SECCION_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'tipo': 'tipo', 'control': 'control', });
lyr_ST1_MANZANA_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST2_MANZANA_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST3_MANZANA_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST4_MANZANA_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_0307_HIDROGRAFIA_L_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'status': 'status', 'control': 'control', });
lyr_0307_RASGO_COMPLEMENTARIO_L_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'descripcio': 'descripcio', 'control': 'control', });
lyr_0307_VIALIDAD_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'tipo': 'tipo', 'sentido': 'sentido', 'velocidad_': 'velocidad_', 'control': 'control', });
lyr_ST1_ESCUELA_9.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST2_ESCUELA_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST3_ESCUELA_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST4_ESCUELA_12.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_0307_SECCION_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'tipo': 'TextEdit', 'control': 'TextEdit', });
lyr_ST1_MANZANA_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST2_MANZANA_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST3_MANZANA_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST4_MANZANA_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_0307_HIDROGRAFIA_L_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'status': 'TextEdit', 'control': 'TextEdit', });
lyr_0307_RASGO_COMPLEMENTARIO_L_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'descripcio': 'TextEdit', 'control': 'TextEdit', });
lyr_0307_VIALIDAD_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'tipo': 'TextEdit', 'sentido': 'TextEdit', 'velocidad_': 'TextEdit', 'control': 'TextEdit', });
lyr_ST1_ESCUELA_9.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': '', });
lyr_ST2_ESCUELA_10.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': '', });
lyr_ST3_ESCUELA_11.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': '', });
lyr_ST4_ESCUELA_12.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_0307_SECCION_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'distrito_l': 'hidden field', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'tipo': 'hidden field', 'control': 'hidden field', });
lyr_ST1_MANZANA_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'inline label - always visible', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST2_MANZANA_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'inline label - always visible', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST3_MANZANA_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'inline label - always visible', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST4_MANZANA_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'inline label - always visible', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_0307_HIDROGRAFIA_L_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'status': 'hidden field', 'control': 'hidden field', });
lyr_0307_RASGO_COMPLEMENTARIO_L_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'descripcio': 'inline label - always visible', 'control': 'hidden field', });
lyr_0307_VIALIDAD_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - always visible', 'categoria': 'inline label - always visible', 'tipo': 'hidden field', 'sentido': 'hidden field', 'velocidad_': 'hidden field', 'control': 'hidden field', });
lyr_ST1_ESCUELA_9.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'hidden field', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'inline label - always visible', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST2_ESCUELA_10.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'hidden field', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'inline label - always visible', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST3_ESCUELA_11.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'hidden field', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'inline label - always visible', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST4_ESCUELA_12.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'hidden field', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'inline label - always visible', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST4_ESCUELA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});