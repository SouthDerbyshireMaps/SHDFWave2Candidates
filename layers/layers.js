var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DoesNotMeetBid2Conditions_1 = new ol.format.GeoJSON();
var features_DoesNotMeetBid2Conditions_1 = format_DoesNotMeetBid2Conditions_1.readFeatures(json_DoesNotMeetBid2Conditions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DoesNotMeetBid2Conditions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DoesNotMeetBid2Conditions_1.addFeatures(features_DoesNotMeetBid2Conditions_1);
var lyr_DoesNotMeetBid2Conditions_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DoesNotMeetBid2Conditions_1, 
                style: style_DoesNotMeetBid2Conditions_1,
                interactive: true,
                title: '<img src="styles/legend/DoesNotMeetBid2Conditions_1.png" /> Does Not Meet Bid 2 Conditions'
            });
var format_Bid1Properties_2 = new ol.format.GeoJSON();
var features_Bid1Properties_2 = format_Bid1Properties_2.readFeatures(json_Bid1Properties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bid1Properties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bid1Properties_2.addFeatures(features_Bid1Properties_2);
var lyr_Bid1Properties_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bid1Properties_2, 
                style: style_Bid1Properties_2,
                interactive: true,
                title: '<img src="styles/legend/Bid1Properties_2.png" /> Bid 1 Properties'
            });
var format_BiomassFuel_3 = new ol.format.GeoJSON();
var features_BiomassFuel_3 = format_BiomassFuel_3.readFeatures(json_BiomassFuel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomassFuel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiomassFuel_3.addFeatures(features_BiomassFuel_3);
var lyr_BiomassFuel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomassFuel_3, 
                style: style_BiomassFuel_3,
                interactive: true,
                title: '<img src="styles/legend/BiomassFuel_3.png" /> Biomass Fuel'
            });
var format_SolidFuel_4 = new ol.format.GeoJSON();
var features_SolidFuel_4 = format_SolidFuel_4.readFeatures(json_SolidFuel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolidFuel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidFuel_4.addFeatures(features_SolidFuel_4);
var lyr_SolidFuel_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolidFuel_4, 
                style: style_SolidFuel_4,
                interactive: true,
                title: '<img src="styles/legend/SolidFuel_4.png" /> Solid Fuel'
            });
var format_ShelteredBungalowNotinBid1_5 = new ol.format.GeoJSON();
var features_ShelteredBungalowNotinBid1_5 = format_ShelteredBungalowNotinBid1_5.readFeatures(json_ShelteredBungalowNotinBid1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShelteredBungalowNotinBid1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShelteredBungalowNotinBid1_5.addFeatures(features_ShelteredBungalowNotinBid1_5);
var lyr_ShelteredBungalowNotinBid1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShelteredBungalowNotinBid1_5, 
                style: style_ShelteredBungalowNotinBid1_5,
                interactive: true,
                title: '<img src="styles/legend/ShelteredBungalowNotinBid1_5.png" /> Sheltered Bungalow Not in Bid 1'
            });
var format_OilFuelledBoiler_6 = new ol.format.GeoJSON();
var features_OilFuelledBoiler_6 = format_OilFuelledBoiler_6.readFeatures(json_OilFuelledBoiler_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OilFuelledBoiler_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OilFuelledBoiler_6.addFeatures(features_OilFuelledBoiler_6);
var lyr_OilFuelledBoiler_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OilFuelledBoiler_6, 
                style: style_OilFuelledBoiler_6,
                interactive: true,
                title: '<img src="styles/legend/OilFuelledBoiler_6.png" /> Oil Fuelled Boiler'
            });
var format_GroundSourceSAPLessThanCorNoCertificate_7 = new ol.format.GeoJSON();
var features_GroundSourceSAPLessThanCorNoCertificate_7 = format_GroundSourceSAPLessThanCorNoCertificate_7.readFeatures(json_GroundSourceSAPLessThanCorNoCertificate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundSourceSAPLessThanCorNoCertificate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundSourceSAPLessThanCorNoCertificate_7.addFeatures(features_GroundSourceSAPLessThanCorNoCertificate_7);
var lyr_GroundSourceSAPLessThanCorNoCertificate_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundSourceSAPLessThanCorNoCertificate_7, 
                style: style_GroundSourceSAPLessThanCorNoCertificate_7,
                interactive: true,
                title: '<img src="styles/legend/GroundSourceSAPLessThanCorNoCertificate_7.png" /> Ground Source SAP Less Than C or No Certificate'
            });
var format_AirSourceSAPLessThanCandShelteredBungalow_8 = new ol.format.GeoJSON();
var features_AirSourceSAPLessThanCandShelteredBungalow_8 = format_AirSourceSAPLessThanCandShelteredBungalow_8.readFeatures(json_AirSourceSAPLessThanCandShelteredBungalow_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirSourceSAPLessThanCandShelteredBungalow_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirSourceSAPLessThanCandShelteredBungalow_8.addFeatures(features_AirSourceSAPLessThanCandShelteredBungalow_8);
var lyr_AirSourceSAPLessThanCandShelteredBungalow_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirSourceSAPLessThanCandShelteredBungalow_8, 
                style: style_AirSourceSAPLessThanCandShelteredBungalow_8,
                interactive: true,
                title: '<img src="styles/legend/AirSourceSAPLessThanCandShelteredBungalow_8.png" /> Air Source SAP Less Than C and Sheltered Bungalow'
            });
var format_AirSourceSAPLessThanC_9 = new ol.format.GeoJSON();
var features_AirSourceSAPLessThanC_9 = format_AirSourceSAPLessThanC_9.readFeatures(json_AirSourceSAPLessThanC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirSourceSAPLessThanC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirSourceSAPLessThanC_9.addFeatures(features_AirSourceSAPLessThanC_9);
var lyr_AirSourceSAPLessThanC_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirSourceSAPLessThanC_9, 
                style: style_AirSourceSAPLessThanC_9,
                interactive: true,
                title: '<img src="styles/legend/AirSourceSAPLessThanC_9.png" /> Air Source SAP Less Than C'
            });
var format_SouthDerbyshireWards_10 = new ol.format.GeoJSON();
var features_SouthDerbyshireWards_10 = format_SouthDerbyshireWards_10.readFeatures(json_SouthDerbyshireWards_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthDerbyshireWards_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthDerbyshireWards_10.addFeatures(features_SouthDerbyshireWards_10);
var lyr_SouthDerbyshireWards_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthDerbyshireWards_10, 
                style: style_SouthDerbyshireWards_10,
                interactive: false,
                title: '<img src="styles/legend/SouthDerbyshireWards_10.png" /> SouthDerbyshireWards'
            });

lyr_OSM_0.setVisible(true);lyr_DoesNotMeetBid2Conditions_1.setVisible(true);lyr_Bid1Properties_2.setVisible(true);lyr_BiomassFuel_3.setVisible(true);lyr_SolidFuel_4.setVisible(true);lyr_ShelteredBungalowNotinBid1_5.setVisible(true);lyr_OilFuelledBoiler_6.setVisible(true);lyr_GroundSourceSAPLessThanCorNoCertificate_7.setVisible(true);lyr_AirSourceSAPLessThanCandShelteredBungalow_8.setVisible(true);lyr_AirSourceSAPLessThanC_9.setVisible(true);lyr_SouthDerbyshireWards_10.setVisible(true);
var layersList = [lyr_OSM_0,lyr_DoesNotMeetBid2Conditions_1,lyr_Bid1Properties_2,lyr_BiomassFuel_3,lyr_SolidFuel_4,lyr_ShelteredBungalowNotinBid1_5,lyr_OilFuelledBoiler_6,lyr_GroundSourceSAPLessThanCorNoCertificate_7,lyr_AirSourceSAPLessThanCandShelteredBungalow_8,lyr_AirSourceSAPLessThanC_9,lyr_SouthDerbyshireWards_10];
lyr_DoesNotMeetBid2Conditions_1.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_Bid1Properties_2.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_BiomassFuel_3.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_SolidFuel_4.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_ShelteredBungalowNotinBid1_5.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_OilFuelledBoiler_6.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_GroundSourceSAPLessThanCorNoCertificate_7.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_AirSourceSAPLessThanCandShelteredBungalow_8.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_AirSourceSAPLessThanC_9.set('fieldAliases', {'fid': 'fid', 'UPRN': 'UPRN', 'Address': 'Address', 'Unique Street Reference Number': 'Unique Street Reference Number', 'Property Type': 'Property Type', 'Internal UPRN': 'Internal UPRN', 'Year Built': 'Year Built', 'Construction Type': 'Construction Type', 'SC_ARCHETYPE': 'SC_ARCHETYPE', 'Further Property Type': 'Further Property Type', 'Storeys': 'Storeys', 'Bedroom Count': 'Bedroom Count', 'Appliance Name': 'Appliance Name', 'Fuel Type': 'Fuel Type', 'EI band': 'EI band', 'EI Rating': 'EI Rating', 'SAP Band': 'SAP Band', 'SAP Rating': 'SAP Rating', 'EPC Band': 'EPC Band', 'EPC Rating': 'EPC Rating', 'Bid Number': 'Bid Number', 'Bid 2 Condition Met': 'Bid 2 Condition Met', 'Combined Energy Rating': 'Combined Energy Rating', 'Guess of Energy Rating': 'Guess of Energy Rating', 'Note': 'Note', });
lyr_SouthDerbyshireWards_10.set('fieldAliases', {'NAME': 'NAME', 'AREA_CODE': 'AREA_CODE', 'DESCRIPTIO': 'DESCRIPTIO', 'FILE_NAME': 'FILE_NAME', 'NUMBER': 'NUMBER', 'NUMBER0': 'NUMBER0', 'POLYGON_ID': 'POLYGON_ID', 'UNIT_ID': 'UNIT_ID', 'CODE': 'CODE', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'TYPE_CODE': 'TYPE_CODE', 'DESCRIPT0': 'DESCRIPT0', 'TYPE_COD0': 'TYPE_COD0', 'DESCRIPT1': 'DESCRIPT1', });
lyr_DoesNotMeetBid2Conditions_1.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_Bid1Properties_2.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_BiomassFuel_3.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_SolidFuel_4.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_ShelteredBungalowNotinBid1_5.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_OilFuelledBoiler_6.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_GroundSourceSAPLessThanCorNoCertificate_7.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_AirSourceSAPLessThanCandShelteredBungalow_8.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_AirSourceSAPLessThanC_9.set('fieldImages', {'fid': '', 'UPRN': '', 'Address': '', 'Unique Street Reference Number': '', 'Property Type': '', 'Internal UPRN': '', 'Year Built': '', 'Construction Type': '', 'SC_ARCHETYPE': '', 'Further Property Type': '', 'Storeys': '', 'Bedroom Count': '', 'Appliance Name': '', 'Fuel Type': '', 'EI band': '', 'EI Rating': '', 'SAP Band': '', 'SAP Rating': '', 'EPC Band': '', 'EPC Rating': '', 'Bid Number': '', 'Bid 2 Condition Met': '', 'Combined Energy Rating': '', 'Guess of Energy Rating': '', 'Note': '', });
lyr_SouthDerbyshireWards_10.set('fieldImages', {'NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'FILE_NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'NUMBER0': 'TextEdit', 'POLYGON_ID': 'TextEdit', 'UNIT_ID': 'TextEdit', 'CODE': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'TYPE_CODE': 'TextEdit', 'DESCRIPT0': 'TextEdit', 'TYPE_COD0': 'TextEdit', 'DESCRIPT1': 'TextEdit', });
lyr_DoesNotMeetBid2Conditions_1.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_Bid1Properties_2.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_BiomassFuel_3.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_SolidFuel_4.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_ShelteredBungalowNotinBid1_5.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_OilFuelledBoiler_6.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_GroundSourceSAPLessThanCorNoCertificate_7.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_AirSourceSAPLessThanCandShelteredBungalow_8.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_AirSourceSAPLessThanC_9.set('fieldLabels', {'fid': 'inline label', 'UPRN': 'inline label', 'Address': 'inline label', 'Unique Street Reference Number': 'inline label', 'Property Type': 'inline label', 'Internal UPRN': 'inline label', 'Year Built': 'inline label', 'Construction Type': 'inline label', 'SC_ARCHETYPE': 'inline label', 'Further Property Type': 'inline label', 'Storeys': 'inline label', 'Bedroom Count': 'inline label', 'Appliance Name': 'inline label', 'Fuel Type': 'inline label', 'EI band': 'inline label', 'EI Rating': 'inline label', 'SAP Band': 'inline label', 'SAP Rating': 'inline label', 'EPC Band': 'inline label', 'EPC Rating': 'inline label', 'Bid Number': 'inline label', 'Bid 2 Condition Met': 'inline label', 'Combined Energy Rating': 'inline label', 'Guess of Energy Rating': 'inline label', 'Note': 'inline label', });
lyr_SouthDerbyshireWards_10.set('fieldLabels', {'NAME': 'no label', 'AREA_CODE': 'no label', 'DESCRIPTIO': 'no label', 'FILE_NAME': 'no label', 'NUMBER': 'no label', 'NUMBER0': 'no label', 'POLYGON_ID': 'no label', 'UNIT_ID': 'no label', 'CODE': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'TYPE_CODE': 'no label', 'DESCRIPT0': 'no label', 'TYPE_COD0': 'no label', 'DESCRIPT1': 'no label', });
lyr_SouthDerbyshireWards_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});