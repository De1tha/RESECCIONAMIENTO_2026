var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_0301_RESECCIONAMIENTOSECCION_1 = new ol.format.GeoJSON();
var features_0301_RESECCIONAMIENTOSECCION_1 = format_0301_RESECCIONAMIENTOSECCION_1.readFeatures(json_0301_RESECCIONAMIENTOSECCION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0301_RESECCIONAMIENTOSECCION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0301_RESECCIONAMIENTOSECCION_1.addFeatures(features_0301_RESECCIONAMIENTOSECCION_1);
var lyr_0301_RESECCIONAMIENTOSECCION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0301_RESECCIONAMIENTOSECCION_1, 
                style: style_0301_RESECCIONAMIENTOSECCION_1,
                popuplayertitle: '0301_RESECCIONAMIENTO — SECCION',
                interactive: false,
    title: '0301_RESECCIONAMIENTO — SECCION<br />\
    <img src="styles/legend/0301_RESECCIONAMIENTOSECCION_1_0.png" /> 0301<br />' });
var format_ST6_MANZANA_2 = new ol.format.GeoJSON();
var features_ST6_MANZANA_2 = format_ST6_MANZANA_2.readFeatures(json_ST6_MANZANA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST6_MANZANA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST6_MANZANA_2.addFeatures(features_ST6_MANZANA_2);
var lyr_ST6_MANZANA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST6_MANZANA_2, 
                style: style_ST6_MANZANA_2,
                popuplayertitle: 'ST6_MANZANA',
                interactive: true,
    title: 'ST6_MANZANA<br />\
    <img src="styles/legend/ST6_MANZANA_2_0.png" /> ST6<br />' });
var format_ST5_MANZANA_3 = new ol.format.GeoJSON();
var features_ST5_MANZANA_3 = format_ST5_MANZANA_3.readFeatures(json_ST5_MANZANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST5_MANZANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST5_MANZANA_3.addFeatures(features_ST5_MANZANA_3);
var lyr_ST5_MANZANA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST5_MANZANA_3, 
                style: style_ST5_MANZANA_3,
                popuplayertitle: 'ST5_MANZANA',
                interactive: true,
    title: 'ST5_MANZANA<br />\
    <img src="styles/legend/ST5_MANZANA_3_0.png" /> ST5<br />' });
var format_ST4_MANZANA_4 = new ol.format.GeoJSON();
var features_ST4_MANZANA_4 = format_ST4_MANZANA_4.readFeatures(json_ST4_MANZANA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST4_MANZANA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST4_MANZANA_4.addFeatures(features_ST4_MANZANA_4);
var lyr_ST4_MANZANA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST4_MANZANA_4, 
                style: style_ST4_MANZANA_4,
                popuplayertitle: 'ST4_MANZANA',
                interactive: true,
    title: 'ST4_MANZANA<br />\
    <img src="styles/legend/ST4_MANZANA_4_0.png" /> ST4<br />' });
var format_ST3_MANZANA_5 = new ol.format.GeoJSON();
var features_ST3_MANZANA_5 = format_ST3_MANZANA_5.readFeatures(json_ST3_MANZANA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST3_MANZANA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST3_MANZANA_5.addFeatures(features_ST3_MANZANA_5);
var lyr_ST3_MANZANA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST3_MANZANA_5, 
                style: style_ST3_MANZANA_5,
                popuplayertitle: 'ST3_MANZANA',
                interactive: true,
    title: 'ST3_MANZANA<br />\
    <img src="styles/legend/ST3_MANZANA_5_0.png" /> ST3<br />' });
var format_ST2_MANZANA_6 = new ol.format.GeoJSON();
var features_ST2_MANZANA_6 = format_ST2_MANZANA_6.readFeatures(json_ST2_MANZANA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST2_MANZANA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST2_MANZANA_6.addFeatures(features_ST2_MANZANA_6);
var lyr_ST2_MANZANA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST2_MANZANA_6, 
                style: style_ST2_MANZANA_6,
                popuplayertitle: 'ST2_MANZANA',
                interactive: true,
    title: 'ST2_MANZANA<br />\
    <img src="styles/legend/ST2_MANZANA_6_0.png" /> ST2<br />' });
var format_ST1_MANZANA_7 = new ol.format.GeoJSON();
var features_ST1_MANZANA_7 = format_ST1_MANZANA_7.readFeatures(json_ST1_MANZANA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST1_MANZANA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST1_MANZANA_7.addFeatures(features_ST1_MANZANA_7);
var lyr_ST1_MANZANA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST1_MANZANA_7, 
                style: style_ST1_MANZANA_7,
                popuplayertitle: 'ST1_MANZANA',
                interactive: true,
    title: 'ST1_MANZANA<br />\
    <img src="styles/legend/ST1_MANZANA_7_0.png" /> ST1<br />' });
var format_0301_reseccionamiento__hidrografia_l_8 = new ol.format.GeoJSON();
var features_0301_reseccionamiento__hidrografia_l_8 = format_0301_reseccionamiento__hidrografia_l_8.readFeatures(json_0301_reseccionamiento__hidrografia_l_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0301_reseccionamiento__hidrografia_l_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0301_reseccionamiento__hidrografia_l_8.addFeatures(features_0301_reseccionamiento__hidrografia_l_8);
var lyr_0301_reseccionamiento__hidrografia_l_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0301_reseccionamiento__hidrografia_l_8, 
                style: style_0301_reseccionamiento__hidrografia_l_8,
                popuplayertitle: '0301_reseccionamiento__hidrografia_l',
                interactive: true,
                title: '<img src="styles/legend/0301_reseccionamiento__hidrografia_l_8.png" /> 0301_reseccionamiento__hidrografia_l'
            });
var format_0301_reseccionamiento__rasgo_complementario_l_9 = new ol.format.GeoJSON();
var features_0301_reseccionamiento__rasgo_complementario_l_9 = format_0301_reseccionamiento__rasgo_complementario_l_9.readFeatures(json_0301_reseccionamiento__rasgo_complementario_l_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0301_reseccionamiento__rasgo_complementario_l_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0301_reseccionamiento__rasgo_complementario_l_9.addFeatures(features_0301_reseccionamiento__rasgo_complementario_l_9);
var lyr_0301_reseccionamiento__rasgo_complementario_l_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0301_reseccionamiento__rasgo_complementario_l_9, 
                style: style_0301_reseccionamiento__rasgo_complementario_l_9,
                popuplayertitle: '0301_reseccionamiento__rasgo_complementario_l',
                interactive: true,
                title: '<img src="styles/legend/0301_reseccionamiento__rasgo_complementario_l_9.png" /> 0301_reseccionamiento__rasgo_complementario_l'
            });
var format_0301_RESECCIONAMIENTO0301_vialidad_10 = new ol.format.GeoJSON();
var features_0301_RESECCIONAMIENTO0301_vialidad_10 = format_0301_RESECCIONAMIENTO0301_vialidad_10.readFeatures(json_0301_RESECCIONAMIENTO0301_vialidad_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0301_RESECCIONAMIENTO0301_vialidad_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0301_RESECCIONAMIENTO0301_vialidad_10.addFeatures(features_0301_RESECCIONAMIENTO0301_vialidad_10);
var lyr_0301_RESECCIONAMIENTO0301_vialidad_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0301_RESECCIONAMIENTO0301_vialidad_10, 
                style: style_0301_RESECCIONAMIENTO0301_vialidad_10,
                popuplayertitle: '0301_RESECCIONAMIENTO — 0301_vialidad',
                interactive: true,
                title: '<img src="styles/legend/0301_RESECCIONAMIENTO0301_vialidad_10.png" /> 0301_RESECCIONAMIENTO — 0301_vialidad'
            });
var format_ST6_ESCUELA_11 = new ol.format.GeoJSON();
var features_ST6_ESCUELA_11 = format_ST6_ESCUELA_11.readFeatures(json_ST6_ESCUELA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST6_ESCUELA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST6_ESCUELA_11.addFeatures(features_ST6_ESCUELA_11);
var lyr_ST6_ESCUELA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST6_ESCUELA_11, 
                style: style_ST6_ESCUELA_11,
                popuplayertitle: 'ST6_ESCUELA',
                interactive: true,
    title: 'ST6_ESCUELA<br />\
    <img src="styles/legend/ST6_ESCUELA_11_0.png" /> ST6<br />' });
var format_ST5_ESCUELA_12 = new ol.format.GeoJSON();
var features_ST5_ESCUELA_12 = format_ST5_ESCUELA_12.readFeatures(json_ST5_ESCUELA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST5_ESCUELA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST5_ESCUELA_12.addFeatures(features_ST5_ESCUELA_12);
var lyr_ST5_ESCUELA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST5_ESCUELA_12, 
                style: style_ST5_ESCUELA_12,
                popuplayertitle: 'ST5_ESCUELA',
                interactive: true,
    title: 'ST5_ESCUELA<br />\
    <img src="styles/legend/ST5_ESCUELA_12_0.png" /> ST5<br />' });
var format_ST4_ESCUELA_13 = new ol.format.GeoJSON();
var features_ST4_ESCUELA_13 = format_ST4_ESCUELA_13.readFeatures(json_ST4_ESCUELA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST4_ESCUELA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST4_ESCUELA_13.addFeatures(features_ST4_ESCUELA_13);
var lyr_ST4_ESCUELA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST4_ESCUELA_13, 
                style: style_ST4_ESCUELA_13,
                popuplayertitle: 'ST4_ESCUELA',
                interactive: true,
    title: 'ST4_ESCUELA<br />\
    <img src="styles/legend/ST4_ESCUELA_13_0.png" /> ST4<br />' });
var format_ST3_ESCUELA_14 = new ol.format.GeoJSON();
var features_ST3_ESCUELA_14 = format_ST3_ESCUELA_14.readFeatures(json_ST3_ESCUELA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST3_ESCUELA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST3_ESCUELA_14.addFeatures(features_ST3_ESCUELA_14);
var lyr_ST3_ESCUELA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST3_ESCUELA_14, 
                style: style_ST3_ESCUELA_14,
                popuplayertitle: 'ST3_ESCUELA',
                interactive: true,
    title: 'ST3_ESCUELA<br />\
    <img src="styles/legend/ST3_ESCUELA_14_0.png" /> ST3<br />' });
var format_ST2_ESCUELA_15 = new ol.format.GeoJSON();
var features_ST2_ESCUELA_15 = format_ST2_ESCUELA_15.readFeatures(json_ST2_ESCUELA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST2_ESCUELA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST2_ESCUELA_15.addFeatures(features_ST2_ESCUELA_15);
var lyr_ST2_ESCUELA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST2_ESCUELA_15, 
                style: style_ST2_ESCUELA_15,
                popuplayertitle: 'ST2_ESCUELA',
                interactive: true,
    title: 'ST2_ESCUELA<br />\
    <img src="styles/legend/ST2_ESCUELA_15_0.png" /> ST2<br />' });
var format_ST1_ESCUELA_16 = new ol.format.GeoJSON();
var features_ST1_ESCUELA_16 = format_ST1_ESCUELA_16.readFeatures(json_ST1_ESCUELA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST1_ESCUELA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST1_ESCUELA_16.addFeatures(features_ST1_ESCUELA_16);
var lyr_ST1_ESCUELA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ST1_ESCUELA_16, 
                style: style_ST1_ESCUELA_16,
                popuplayertitle: 'ST1_ESCUELA',
                interactive: true,
    title: 'ST1_ESCUELA<br />\
    <img src="styles/legend/ST1_ESCUELA_16_0.png" /> ST1<br />' });
var group_ESCUELAPORST = new ol.layer.Group({
                                layers: [lyr_ST6_ESCUELA_11,lyr_ST5_ESCUELA_12,lyr_ST4_ESCUELA_13,lyr_ST3_ESCUELA_14,lyr_ST2_ESCUELA_15,lyr_ST1_ESCUELA_16,],
                                fold: 'open',
                                title: 'ESCUELA POR ST'});
var group_MANZANAPORST = new ol.layer.Group({
                                layers: [lyr_ST6_MANZANA_2,lyr_ST5_MANZANA_3,lyr_ST4_MANZANA_4,lyr_ST3_MANZANA_5,lyr_ST2_MANZANA_6,lyr_ST1_MANZANA_7,],
                                fold: 'open',
                                title: 'MANZANA POR ST'});

lyr_GoogleSatellite_0.setVisible(true);lyr_0301_RESECCIONAMIENTOSECCION_1.setVisible(true);lyr_ST6_MANZANA_2.setVisible(true);lyr_ST5_MANZANA_3.setVisible(true);lyr_ST4_MANZANA_4.setVisible(true);lyr_ST3_MANZANA_5.setVisible(true);lyr_ST2_MANZANA_6.setVisible(true);lyr_ST1_MANZANA_7.setVisible(true);lyr_0301_reseccionamiento__hidrografia_l_8.setVisible(true);lyr_0301_reseccionamiento__rasgo_complementario_l_9.setVisible(true);lyr_0301_RESECCIONAMIENTO0301_vialidad_10.setVisible(true);lyr_ST6_ESCUELA_11.setVisible(true);lyr_ST5_ESCUELA_12.setVisible(true);lyr_ST4_ESCUELA_13.setVisible(true);lyr_ST3_ESCUELA_14.setVisible(true);lyr_ST2_ESCUELA_15.setVisible(true);lyr_ST1_ESCUELA_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_0301_RESECCIONAMIENTOSECCION_1,group_MANZANAPORST,lyr_0301_reseccionamiento__hidrografia_l_8,lyr_0301_reseccionamiento__rasgo_complementario_l_9,lyr_0301_RESECCIONAMIENTO0301_vialidad_10,group_ESCUELAPORST];
lyr_0301_RESECCIONAMIENTOSECCION_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'tipo': 'tipo', 'control': 'control', });
lyr_ST6_MANZANA_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST5_MANZANA_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST4_MANZANA_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST3_MANZANA_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST2_MANZANA_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_ST1_MANZANA_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'entidad': 'entidad', 'distrito': 'distrito', 'distrito_l': 'distrito_l', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'tipo_manza': 'tipo_manza', 'ST': 'ST', });
lyr_0301_reseccionamiento__hidrografia_l_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'status': 'status', 'control': 'control', });
lyr_0301_reseccionamiento__rasgo_complementario_l_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'descripcio': 'descripcio', 'control': 'control', });
lyr_0301_RESECCIONAMIENTO0301_vialidad_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'tipo': 'tipo', 'sentido': 'sentido', 'velocidad_promedio': 'velocidad_promedio', 'control': 'control', });
lyr_ST6_ESCUELA_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST5_ESCUELA_12.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST4_ESCUELA_13.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST3_ESCUELA_14.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST2_ESCUELA_15.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_ST1_ESCUELA_16.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nombre1': 'nombre1', 'tipo': 'tipo', 'entidad': 'entidad', 'distrito': 'distrito', 'seccion': 'seccion', 'gid': 'gid', 'id': 'id', 'ST': 'ST', });
lyr_0301_RESECCIONAMIENTOSECCION_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'tipo': 'TextEdit', 'control': 'TextEdit', });
lyr_ST6_MANZANA_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST5_MANZANA_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST4_MANZANA_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST3_MANZANA_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST2_MANZANA_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_ST1_MANZANA_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'tipo_manza': 'Range', 'ST': 'TextEdit', });
lyr_0301_reseccionamiento__hidrografia_l_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'status': 'TextEdit', 'control': 'TextEdit', });
lyr_0301_reseccionamiento__rasgo_complementario_l_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'descripcio': 'TextEdit', 'control': 'TextEdit', });
lyr_0301_RESECCIONAMIENTO0301_vialidad_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nombre': 'TextEdit', 'categoria': 'Range', 'tipo': 'Range', 'sentido': 'Range', 'velocidad_promedio': 'Range', 'control': 'Range', });
lyr_ST6_ESCUELA_11.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_ST5_ESCUELA_12.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_ST4_ESCUELA_13.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_ST3_ESCUELA_14.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_ST2_ESCUELA_15.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_ST1_ESCUELA_16.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nombre1': 'TextEdit', 'tipo': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'seccion': 'TextEdit', 'gid': 'TextEdit', 'id': 'TextEdit', 'ST': 'TextEdit', });
lyr_0301_RESECCIONAMIENTOSECCION_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'distrito_l': 'hidden field', 'municipio': 'hidden field', 'seccion': 'inline label - visible with data', 'tipo': 'hidden field', 'control': 'hidden field', });
lyr_ST6_MANZANA_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST5_MANZANA_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST4_MANZANA_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST3_MANZANA_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST2_MANZANA_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST1_MANZANA_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'hidden field', 'seccion': 'inline label - always visible', 'localidad': 'hidden field', 'manzana': 'inline label - always visible', 'status': 'hidden field', 'disperso': 'hidden field', 'control': 'hidden field', 'caso_captu': 'hidden field', 'tipo_manza': 'hidden field', 'ST': 'inline label - always visible', });
lyr_0301_reseccionamiento__hidrografia_l_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'hidden field', 'status': 'hidden field', 'control': 'hidden field', });
lyr_0301_reseccionamiento__rasgo_complementario_l_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'descripcio': 'inline label - always visible', 'control': 'hidden field', });
lyr_0301_RESECCIONAMIENTO0301_vialidad_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - always visible', 'categoria': 'inline label - always visible', 'tipo': 'inline label - always visible', 'sentido': 'hidden field', 'velocidad_promedio': 'hidden field', 'control': 'hidden field', });
lyr_ST6_ESCUELA_11.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST5_ESCUELA_12.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'nombre1': 'inline label - visible with data', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST4_ESCUELA_13.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST3_ESCUELA_14.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST2_ESCUELA_15.set('fieldLabels', {'fid': 'inline label - always visible', 'nombre': 'inline label - always visible', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST1_ESCUELA_16.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'nombre1': 'inline label - always visible', 'tipo': 'hidden field', 'entidad': 'hidden field', 'distrito': 'hidden field', 'seccion': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'ST': 'inline label - always visible', });
lyr_ST1_ESCUELA_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});