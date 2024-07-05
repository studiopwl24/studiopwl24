var geometry = 
    /* color: #ff0000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[104.90257660930924, -4.874026677212398],
          [104.90257660930924, -6.483769779738967],
          [105.99296967571549, -6.483769779738967],
          [105.99296967571549, -4.874026677212398]]], null, false);

var START = ee.Date('2023-01-01');
var END = ee.Date('2024-12-31');

var colFilter = ee.Filter.and(
    ee.Filter.bounds(geometry),
    ee.Filter.date(START, END));

var dwCol = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1').filter(colFilter);

print(dwCol.mode())

Map.addLayer(dwCol.mode().clip(geometry))

Export.image.toDrive({
  image: dwCol.mode().clip(geometry).select('label'),
  maxPixels: 1e13,
});
  
// EPSG:32748
// PIXEL: 10

