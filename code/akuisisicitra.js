var geometry = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[103.08934596742121, -3.2818853922385323],
          [103.08934596742121, -5.931748179707984],
          [106.90160182679621, -5.931748179707984],
          [106.90160182679621, -3.2818853922385323]]], null, false);

var startDate = '2013-01-01';
var endDate = '2013-12-31';
var cloudCover = 10

var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
                  .filterBounds(geometry)
                  .filterDate(startDate, endDate)
                  .filterMetadata('CLOUD_COVER_LAND', 'less_than', cloudCover)


Map.addLayer(collection.mode().clip(geometry))

print(collection)

Export.image.toDrive(collection.mode().clip(geometry))