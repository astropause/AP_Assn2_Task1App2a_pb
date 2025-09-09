/* add the webmap to the portal */
require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "topo"
  });


 /************************************************************
       * Set the WebMap instance to the map property in a MapView. Use St. Louis coordinates for center of portal. 
       ************************************************************/
 const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-90.1994, 38.6270], 
   /* St. Louis coordinates */
    zoom: 10 /* Zoom level */
  });

 const featureLayer_2 = new FeatureLayer({url: "https://services7.arcgis.com/ZodPOMBKsdAsTqF4/arcgis/rest/services/St_Louis_City_Neighborhoods/FeatureServer/0"});
                                 
                                  const featureLayer_1 = new FeatureLayer({url: "https://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/st_louis_mo_boundary/FeatureServer/0"});      
                                              map.addMany([featureLayer_1, featureLayer_2]);
});
