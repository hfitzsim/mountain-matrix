import { Mountain } from './mountain';

export const MOUNTAINS: Mountain[] = [
  { id: 11, name: 'Pats Peak', vertical: 710, address: '686 Flanders Rd, Henniker, NH 03242', skiableArea: 90, coordinates: {latitude: 43.1640, longitude: -71.7977},
   imgUrl: 'https://patspeak.com/getattachment/6b0acaa8-0e78-47cc-a156-f8c4b161156b/6b0acaa8-0e78-47cc-a156-f8c4b161156b.aspx', siteUrl: 'https://patspeak.com/', avgAnnualSnow: 100, totalTrails: 28, lifts: 11, snowmaking: '100%', terrainParks: 3, nightSkiing: 'yes', seasonpass: 'Indy'},
  { id: 12, name: 'Crotched', vertical: 1016, address: '615 Francestown Rd, Bennington, NH 03442', skiableArea: 100, coordinates: {latitude: 43.0120, longitude: -71.8789},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/CM-Hero-2?resMode=sharp2&wid=1425&fit=constrain,1&dpr=on,2', siteUrl: 'https://www.crotchedmtn.com/', avgAnnualSnow: 78, totalTrails: 25, lifts: 5, snowmaking: '100%', terrainParks: 3, nightSkiing: 'yes', seasonpass: 'Epic'},
  { id: 13, name: 'Killington', vertical: 3050, address: '3861 Killington Rd, Killington, VT 05751', skiableArea: 1509, coordinates: {latitude: 43.6263, longitude: -72.7968},
   imgUrl: 'https://cms.killington.com/sites/killington/files/styles/default/public/2020-02/spring-pass-hero-image.jpg?itok=P1w0e3LJ', siteUrl: 'https://www.killington.com/', avgAnnualSnow: 250, totalTrails: 140, lifts: 22, snowmaking: '80%', terrainParks: 6, nightSkiing: 'no', seasonpass: ''},
  { id: 14, name: 'Stowe', vertical: 2360, address: '7324 Mountain Rd, Stowe, VT 05672', skiableArea: 485, coordinates: {latitude: 44.5303, longitude: -72.7814},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/20200109_ST_SALVAS_010:Medium-Hero?resMode=sharp2&w=2880&h=750&wid=1425&fit=constrain,1&dpr=on,2', siteUrl: 'https://www.stowe.com/', avgAnnualSnow: 333, totalTrails: 116, lifts: 13, snowmaking: '80%', terrainParks: 3, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 15, name: 'Jay Peak', vertical: 2153, address: '830 Jay Peak Rd, Jay, VT 05859', skiableArea: 385, coordinates: {latitude: 44.9379, longitude: -72.5048},
   imgUrl: 'https://jaypeakresort.com/sites/default/files/media-images/2022-04/Apr28_Pano.jpg', siteUrl: 'https://jaypeakresort.com/', avgAnnualSnow: 379, totalTrails: 76, lifts: 8, snowmaking: '80%', terrainParks: 4, nightSkiing: 'no', seasonpass: 'Indy'},
  { id: 17, name: 'Bretton Woods', vertical: 1500, address: '99 Ski Area Rd, Bretton Woods, NH 03575', skiableArea: 464, coordinates: {latitude: 44.2593, longitude: -71.4602},
   imgUrl: 'https://www.brettonwoods.com/~/media/BrettonWoods/PhotoGalleryRelatedPhotos/04-10-22%20Skiing%20Misty%20Trees%20POD.jpg', siteUrl: 'https://www.brettonwoods.com/', avgAnnualSnow: 200, totalTrails: 63, lifts: 10, snowmaking: '92%', terrainParks: 1, nightSkiing: 'no', seasonpass: ''},
  { id: 18, name: 'Attitash', vertical: 1750, address: '775 US-302, Bartlett, NH 03812', skiableArea: 310, coordinates: {latitude: 44.0828, longitude: -71.2294},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/weather_HERO?resMode=sharp2&wid=1199&fit=constrain,1&dpr=on,1', siteUrl: 'https://www.attitash.com/', avgAnnualSnow: 142, totalTrails: 77, lifts: 11, snowmaking: '97%', terrainParks: 1, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 19, name: 'Wildcat', vertical: 2112, address: '542 NH-16, Jackson, NH 03846', skiableArea: 225, coordinates: {latitude: 44.2641, longitude: -71.2393},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/WC_Pow_Boarder_Hero?resMode=sharp2&wid=1425&fit=constrain,1&dpr=on,2', siteUrl: 'http://www.skiwildcat.com/', avgAnnualSnow: 200, totalTrails: 50, lifts: 8, snowmaking: '97%', terrainParks: 1, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 20, name: 'Cannon', vertical: 2180, address: '2650 Profile Rd, Fanconia, NH, 03580', skiableArea: 285, coordinates: {latitude: 44.1774, longitude: -71.7018},
   imgUrl: '/assets/images/0C1E16E6-90EA-4329-97C6-913F8D01EE34.png', siteUrl: 'http://www.cannonmt.com/', avgAnnualSnow: 264, totalTrails: 72, lifts: 9, snowmaking: '', terrainParks: 3, nightSkiing: '', seasonpass: 'Indy'},
  { id: 21, name: 'Whistler', vertical: 5020, address: '4545 Blackcomb way, Whistler, BC V0N 1B4, Canada', skiableArea: 4757, coordinates: {latitude: 50.1162, longitude: -122.9535},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/Scenic_20171220_WB_mccolm_001_2000x600?resMode=sharp2&wid=801&fit=constrain,1&dpr=on,1', siteUrl: 'http://www.whistlerblackcomb.com/', avgAnnualSnow: 462, totalTrails: 200, lifts: 37, snowmaking: '655 acres', terrainParks: 5, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 22, name: 'Mount Snow', vertical: 1700, address: '39 Mount Snow Rd, West Dover, VT 05356', skiableArea: 600, coordinates: {latitude: 42.9602, longitude: -72.9204},
   imgUrl: 'https://media.skigebiete-test.de/images/ecu/entity/e_skiresort/ski-resort_mount-snow_n4489-152532-1_l.jpg', siteUrl: 'https://www.mountsnow.com/', avgAnnualSnow: 156, totalTrails: 135, lifts: 19, snowmaking: '', terrainParks: 10, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 23, name: 'Okemo', vertical: 2200, address: '77 Okemo Ridge Rd, Ludlow, VT 05149', skiableArea: 677, coordinates: {latitude: 43.4018, longitude: -72.7170},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/Okemo2?resMode=sharp2&w=3840&h=1200&wid=1199&fit=constrain,1&dpr=on,1', siteUrl: 'http://www.okemo.com/', avgAnnualSnow: 200, totalTrails: 119, lifts: 19, snowmaking: '96%', terrainParks: 6, nightSkiing: '', seasonpass: 'Epic'},
   { id: 24, name: 'Blackcomb', vertical: 5280, address: '4545 Blackcomb way, Whistler, BC V0N 1B4, Canada', skiableArea: 3414, coordinates: {latitude: 50.1150, longitude: -122.9486},
   imgUrl: 'https://dam-assets.vailresorts.com/is/image/vailresorts/Scenic_201901_DMccolm_001_2000x800?resMode=sharp2&wid=1199&fit=constrain,1&dpr=on,1', siteUrl: 'http://www.whistlerblackcomb.com/', avgAnnualSnow: 462, totalTrails: 200, lifts: 37, snowmaking: '655 acres', terrainParks: 5, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 25, name: 'Cranmore', vertical: 1200, address: '239 Skimobile Rd, North Conway, NH 03860', skiableArea: 200, coordinates: {latitude: 44.0565, longitude: -71.1101},
   imgUrl: 'https://www.cranmore.com/portals/0/Winter%20Images/Subpage%20Header%20Images/Night.jpg?ver=V35NJE0cy0_EArVGajP11Q%3d%3d', siteUrl: 'http://www.cranmore.com/', avgAnnualSnow: 120, totalTrails: 54, lifts: 10, snowmaking: '100%', terrainParks: 3, nightSkiing: 'yes', seasonpass: ''},
  { id: 26, name: 'Sugarloaf', vertical: 2820, address: '5092 Sugarloaf, Access Rd, Carrabasset Valley, ME 04947', skiableArea: 1240, coordinates: {latitude: 45.0541, longitude: -70.3085},
   imgUrl: 'https://www.sugarloaf.com/images/Sugarloaf/Images/Images/Conditions/Recent%20Photos/sl_hero_aerial-superquad-in-snowstorm-MDI_2048x.jpg', siteUrl: 'http://www.sugarloaf.com/', avgAnnualSnow: 200, totalTrails: 153, lifts: 14, snowmaking: '618 acres', terrainParks: 3, nightSkiing: 'no', seasonpass: 'Ikon'},
  { id: 27, name: 'Gunstock', vertical: 1400, address: '719 Cherry Valley Rd, Gilford, NH 03249', skiableArea: 227, coordinates: {latitude: 43.5411, longitude: -71.3629},
   imgUrl: 'https://www.gunstock.com/upload/photos/blog_8.20-summit-ice-view.jpg', siteUrl: 'http://www.gunstock.com/', avgAnnualSnow: 100, totalTrails: 55, lifts: 8, snowmaking: '90%', terrainParks: 3, nightSkiing: 'yes', seasonpass: ''},
  { id: 28, name: 'Magic Mountain', vertical: 1500, address: '495 Magic Mountain Acc, Londonderry, VT 05148', skiableArea: 195, coordinates: {latitude: 43.2018, longitude: -72.7726},
   imgUrl: 'https://magicmtn.com/wp-content/uploads/2022/04/4.14.22-Magic-drone-shot.jpg', siteUrl: 'http://www.magicmtn.com/', avgAnnualSnow: 180, totalTrails: 40, lifts: 4, snowmaking: '75%', terrainParks: 1, nightSkiing: 'no', seasonpass: 'Indy'},
  { id: 29, name: 'Sunapee', vertical: 1510, address: '1398 New Hampshire Rte 103, Newbury, NH 03255', skiableArea: 233, coordinates: {latitude: 43.3314, longitude: -72.0805},
   imgUrl: 'https://www.skinh.com/assets/images/Header/_header/Kurt-Wehde-IMG_8845.jpg', siteUrl: 'http://www.mountsunapee.com/', avgAnnualSnow: 100, totalTrails: 66, lifts: 11, snowmaking: '97%', terrainParks: 1, nightSkiing: 'no', seasonpass: 'Epic'},
  { id: 30, name: 'Sunday River', vertical: 2340, address: '97 Summit Rd, Newry, ME 04261', skiableArea: 870, coordinates: {latitude: 44.4734, longitude: -70.8569},
   imgUrl: 'https://www.sundayriver.com/images/Sunday%20River/HEADERS/winter/snowboarding-woman-powder-excalibur-jordan-bowl.jpg', siteUrl: 'http://www.sundayriver.com/', avgAnnualSnow: 167, totalTrails: 132, lifts: 16, snowmaking: '616 acres', terrainParks: 5, nightSkiing: 'yes', seasonpass: 'Ikon'},
  { id: 31, name: 'Berkshire East', vertical: 1180, address: '66 Thunder Mountain Rd, Charlemont, MA 01339', skiableArea: 180, coordinates: {latitude: 42.6211, longitude: -72.8771},
   imgUrl: 'https://berkshireeast.com/sites/default/files/styles/scale_1024/public/2020-01/DSC00208.jpg?itok=vH0T8Ibu', siteUrl: 'http://www.berkshireeast.com/', avgAnnualSnow: 110, totalTrails: 45, lifts: 6, snowmaking: '100%', terrainParks: 1, nightSkiing: 'yes', seasonpass: 'Indy'},
  { id: 32, name: 'Bolton Valley', vertical: 1704, address: '4302 Bolton Access Rd, Richmond, VT 05477', skiableArea: 300, coordinates: {latitude: 44.4224, longitude: -72.8513},
   imgUrl: 'https://www.boltonvalley.com/wp-content/uploads/2021/03/adam-morse-mark-clement-mtb-winter-collision.jpg', siteUrl: 'http://www.boltonvalley.com/', avgAnnualSnow: 300, totalTrails: 70, lifts: 6, snowmaking: '60%', terrainParks: 1, nightSkiing: 'yes', seasonpass: 'Indy'},
  { id: 33, name: 'Wachusett', vertical: 1000, address: '41 Mile Hill Rd, Westminster, MA 01473', skiableArea: 110, coordinates: {latitude: 42.5109, longitude: -71.8883},
   imgUrl: 'https://www.wachusett.com/WachusettASPX/media/Wachusett2017/subpage-hero/2-Skiers-Hero_1.jpg', siteUrl: 'http://www.wachusett.com/', avgAnnualSnow: 100, totalTrails: 22, lifts: 8, snowmaking: '100%', terrainParks: 1, nightSkiing: 'yes', seasonpass: ''}, 
  { id: 34, name: 'Stratton', vertical: 2003, address: '5 Village Lodge Rd, Stratton Mountain, VT 05155', skiableArea: 670, coordinates: {latitude: 43.1134, longitude: -72.9081},
   imgUrl: 'https://blog.stratton.com/wp-content/uploads/2020/02/2020-1-29_-ST_HS_Big-Mountain-Shot-1536x923.jpg', siteUrl: 'http://www.stratton.com/', avgAnnualSnow: 180, totalTrails: 94, lifts: 11, snowmaking: '93%', terrainParks: 6, nightSkiing: 'no', seasonpass: 'Ikon'},
  { id: 35, name: 'Sugarbush', vertical: 2650, address: '102 Forest Dr, Warren, VT 05674', skiableArea: 581, coordinates: {latitude: 44.1359, longitude: -72.8944},
   imgUrl: 'https://www.sugarbush.com/-/media/widen/sugarbush/scenic/2018-01-01-su-jeb-scenicskierslift-0001-jpg.ashx?w=1024&hash=599FD5E3E7E893C5754DF2C9616CF2A6', siteUrl: 'http://www.sugarbush.com/', avgAnnualSnow: 269, totalTrails: 111, lifts: 16, snowmaking: '70%', terrainParks: 3, nightSkiing: 'no', seasonpass: 'Ikon'},
  { id: 36, name: 'Ski Sundown', vertical: 625, address: '126 Ratlum Rd, New Hartford, CT 06057', skiableArea: 65, coordinates: {latitude: 41.8847, longitude: -72.9467},
   imgUrl: 'https://skisundown.com/wp-content/uploads/2019/08/2019-ConditionsReport-100k-900x600.jpg', siteUrl: 'http://www.skisundown.com/', avgAnnualSnow: 60, totalTrails: 15, lifts: 5, snowmaking: '100%', terrainParks: 0, nightSkiing: 'no', seasonpass: ''},
   { id: 37, name: 'Loon', vertical: 2100, address: '60 Loon Mountain Rd, Lincoln, NH 03251', skiableArea: 370, coordinates: {latitude: 44.0563, longitude: -71.6336},
   imgUrl: 'https://www.loonmtn.com/images/Loon/Heroes_1440/products/NEP_1030.jpg?w=1920&quality=80', siteUrl: 'https://www.loonmtn.com/', avgAnnualSnow: 172, totalTrails: 61, lifts: 11, snowmaking: '99%', terrainParks: 6, nightSkiing: 'no', seasonpass: 'Ikon'},
   { id: 16, name: 'Blue Hills', vertical: 309, address: '4001 Washington St, Canton, MA 02021', skiableArea: 60, coordinates: {latitude: 42.2160, longitude: -71.1191},
   imgUrl: 'https://static.wixstatic.com/media/372dfb_ccd241183571416f8d41c38dfac32233.jpg/v1/fill/w_980,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/372dfb_ccd241183571416f8d41c38dfac32233.jpg', siteUrl: 'https://www.bluehillsboston.com/', avgAnnualSnow: 60, totalTrails: 12, lifts: 4, snowmaking: '80%', terrainParks: 1, nightSkiing: 'yes', seasonpass: ''},
 
];