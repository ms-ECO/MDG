var wms_layers = [];

var format_Communes_Boeny_0 = new ol.format.GeoJSON();
var features_Communes_Boeny_0 = format_Communes_Boeny_0.readFeatures(json_Communes_Boeny_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_Boeny_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_Boeny_0.addFeatures(features_Communes_Boeny_0);
var lyr_Communes_Boeny_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_Boeny_0, 
                style: style_Communes_Boeny_0,
                popuplayertitle: "Communes_Boeny",
                interactive: false,
    title: 'Communes_Boeny<br />\
    <img src="styles/legend/Communes_Boeny_0_0.png" /> AMBATOBOENY<br />\
    <img src="styles/legend/Communes_Boeny_0_1.png" /> MAHAJANGA I<br />\
    <img src="styles/legend/Communes_Boeny_0_2.png" /> MAHAJANGA II<br />\
    <img src="styles/legend/Communes_Boeny_0_3.png" /> MAROVOAY<br />\
    <img src="styles/legend/Communes_Boeny_0_4.png" /> MITSINJO<br />\
    <img src="styles/legend/Communes_Boeny_0_5.png" /> SOALALA<br />\
    <img src="styles/legend/Communes_Boeny_0_6.png" /> <br />'
        });
var format_statut_foncier_1 = new ol.format.GeoJSON();
var features_statut_foncier_1 = format_statut_foncier_1.readFeatures(json_statut_foncier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_statut_foncier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_statut_foncier_1.addFeatures(features_statut_foncier_1);
var lyr_statut_foncier_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_statut_foncier_1, 
                style: style_statut_foncier_1,
                popuplayertitle: "statut_foncier",
                interactive: true,
                title: '<img src="styles/legend/statut_foncier_1.png" /> statut_foncier'
            });

lyr_Communes_Boeny_0.setVisible(true);lyr_statut_foncier_1.setVisible(true);
var layersList = [lyr_Communes_Boeny_0,lyr_statut_foncier_1];
lyr_Communes_Boeny_0.set('fieldAliases', {'id': 'id', 'nom_region': 'nom_region', 'nom_distri': 'nom_distri', 'nom_commun': 'nom_commun', });
lyr_statut_foncier_1.set('fieldAliases', {'fid': 'fid', 'numtitre': 'numtitre', 'cf°_______': 'cf°_______', 'datetitre': 'datetitre', 'statut_fon': 'statut_fon', 'superficie_ha': 'superficie_ha', 'region': 'region', 'district': 'district', 'commune': 'commune', 'source_data': 'source_data', });
lyr_Communes_Boeny_0.set('fieldImages', {'id': 'TextEdit', 'nom_region': 'TextEdit', 'nom_distri': 'TextEdit', 'nom_commun': 'TextEdit', });
lyr_statut_foncier_1.set('fieldImages', {'fid': '', 'numtitre': '', 'cf°_______': '', 'datetitre': '', 'statut_fon': '', 'superficie_ha': '', 'region': '', 'district': '', 'commune': '', 'source_data': '', });
lyr_Communes_Boeny_0.set('fieldLabels', {'id': 'no label', 'nom_region': 'no label', 'nom_distri': 'no label', 'nom_commun': 'no label', });
lyr_statut_foncier_1.set('fieldLabels', {'fid': 'hidden field', 'numtitre': 'inline label - visible with data', 'cf°_______': 'inline label - visible with data', 'datetitre': 'inline label - always visible', 'statut_fon': 'inline label - always visible', 'superficie_ha': 'inline label - always visible', 'region': 'inline label - always visible', 'district': 'inline label - always visible', 'commune': 'inline label - always visible', 'source_data': 'inline label - always visible', });
lyr_statut_foncier_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});