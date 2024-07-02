var geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[102.9335574434633, -3.4551292540483085],
          [102.9335574434633, -6.944795991299321],
          [107.2951297090883, -6.944795991299321],
          [107.2951297090883, -3.4551292540483085]]], null, false);

var startDate = '2013-01-01';
var endDate = '2013-12-31';
var cloudCover = 100

var collection = ee.ImageCollection('LANDSAT/LC0/C02/T1_L2')
                  .filterBounds(geometry)
                  .filterDate(startDate, endDate)
                  .filterMetadata('CLOUD_COVER_LAND', 'less_than', cloudCover)


Map.addLayer(collection.mode().clip(geometry))

print(collection)

Export.image.toDrive(collection.mode().clip(geometry))
