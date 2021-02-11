/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var sampleRoutes = require('../controllers/mainCtrl');

// ************************* library Dashboard start**********************************

//category start
router.post('/postcatData', sampleRoutes.postcatDataCtrl);
router.get('/getcatData', sampleRoutes.getcatDataCtrl);
router.get('/deletecatdata/:id', sampleRoutes.deletecatdataCtrl);
router.post('/updatecatData', sampleRoutes.updatecatDataCtrl);
//category start

//book start
router.post('/postbookData', sampleRoutes.postbookDataCtrl);
router.get('/getbookData', sampleRoutes.getbookDataCtrl);
router.get('/deletebookdata/:id', sampleRoutes.deletebookdataCtrl);
router.post('/updatebookData', sampleRoutes.updatebookDataCtrl);
router.get('/checkbookData/:itemname', sampleRoutes.checkbookDataCtrl);
//book end

//purches start
router.post('/postPurchesData', sampleRoutes.postPurchesDataCtrl);
router.get('/getPurchesData', sampleRoutes.getPurchesDataCtrl);
router.get('/getbookcodeData/:bookid', sampleRoutes.getbookcodeDataCtrl);
router.get('/deletepdata/:id', sampleRoutes.deletepdataCtrl);
router.post('/updateData', sampleRoutes.updateDataCtrl);
//purches end

//visitor start
router.post('/postvisitorData', sampleRoutes.postvisitorDataCtrl);
router.get('/getvisitorData', sampleRoutes.getvisitorDataCtrl);
router.get('/deletevisitordata/:id', sampleRoutes.deletevisitordataCtrl);
router.post('/updatevisitorData', sampleRoutes.updatevisitorDataCtrl);
//phno check start
router.get('/checknumData/:numcheck', sampleRoutes.checknumDataCtrl);
//phno check end
//visitor end

//take book start
router.post('/posttakeData', sampleRoutes.posttakeDataCtrl);
router.get('/gettakeData', sampleRoutes.gettakeDataCtrl);
router.get('/getquantityData/:bookid', sampleRoutes.getquantityDataCtrl);
router.get('/deletedata/:id', sampleRoutes.deletedataCtrl);
router.post('/updatetakeData', sampleRoutes.updatetakeDataCtrl);
router.get('/getcodeData/:bookid', sampleRoutes.getcodeDataCtrl);
//take book end

//return start
router.get('/getDetailsSearch/:id', sampleRoutes.getDetailsSearchCtrl);
router.get('/getSearch', sampleRoutes.getSearchCtrl);
router.get('/deleteredata/:id', sampleRoutes.deleteredataCtrl);
router.post('/updatreturnData', sampleRoutes.updatreturnDataCtrl);
//return start

//payment start
router.get('/getpayData', sampleRoutes.getpayDataCtrl);
//payment end

//pendding payment start
router.get('/getpanddingData', sampleRoutes.getpanddingDataCtrl);
router.get('/deletependdata/:id', sampleRoutes.deletependdataCtrl);
//pendding payment end

//missing book start
router.post('/postmissData', sampleRoutes.postmissDataCtrl);
router.get('/getmissData', sampleRoutes.getmissDataCtrl);
//missing book end

//login start
router.get('/getlogData', sampleRoutes.getlogDataCtrl);
//login end




// ************************* Interior Dashboard end**********************************


module.exports = router;

