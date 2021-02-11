var appmdl = require('../models/model');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';
var moment = require('moment');

var fs = require('fs');

// ************************* library Dashboard start **********************************

//category data start
exports.postcatDataCtrl = function (req, res) {
    var cn = req.body;
    appmdl.postcatDataMdl(cn, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getcatDataCtrl = function (req, res) {

    appmdl.getcatDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.deletecatdataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletecatdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updatecatDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updatecatDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//category end

//book data start
exports.postbookDataCtrl = function (req, res) {
    var itm = req.body;
    appmdl.postbookDataMdl(itm, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getbookDataCtrl = function (req, res) {

    appmdl.getbookDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.checkbookDataCtrl = function (req, res) {
    var itemname = req.params.itemname;
    appmdl.checkbookDataMdl(itemname, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deletebookdataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletebookdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updatebookDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updatebookDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//book data end

//purches data start
exports.postPurchesDataCtrl = function (req, res) {
    var pd = req.body;
    appmdl.postPurchesDataMdl(pd, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getbalnceQty(pd, function (err, balresults) {
            if (err) {
                console.log(err);
                res.send({ 'status': 500, 'data': balresults });
                return;
            }
            var balqty = balresults[0].b_quan;
            appmdl.updatebookQty(pd, balqty, function (err, upresults) {
                if (err) {
                    res.send({ 'status': 500, 'data': upresults });
                    return;
                }
                res.send({ 'status': 200, 'data': upresults });
            });
        });

    });
}
exports.getPurchesDataCtrl = function (req, res) {

    appmdl.getPurchesDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getbookcodeDataCtrl = function (req, res) {
    var bookid = req.params.bookid;
    appmdl.getbookcodeDataMdl(bookid, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deletepdataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletepdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updateDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updateDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//purches data end


//visitor data start
exports.postvisitorDataCtrl = function (req, res) {
    var cn = req.body;
    appmdl.postvisitorDataMdl(cn, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getvisitorDataCtrl = function (req, res) {

    appmdl.getvisitorDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.deletevisitordataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletevisitordataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updatevisitorDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updatevisitorDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.checknumDataCtrl = function (req, res) {
    var numcheck = req.params.numcheck;
    appmdl.checknumDataMdl(numcheck, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//visitor data end

//takebook data start
exports.posttakeDataCtrl = function (req, res) {
    var sd = req.body;
    appmdl.posttakeDataMdl(sd, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getbalQty(sd, function (err, balresults) {
            if (err) {
                console.log(err);
                res.send({ 'status': 500, 'data': balresults });
                return;
            }
            var balqty = balresults[0].b_quan;
            appmdl.updateblnQty(sd, balqty, function (err, upresults) {
                if (err) {
                    res.send({ 'status': 500, 'data': upresults });
                    return;
                }
                res.send({ 'status': 200, 'data': upresults });
            });
        });
    });
}
exports.gettakeDataCtrl = function (req, res) {

    appmdl.gettakeDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getquantityDataCtrl = function (req, res) {
    var bookid = req.params.bookid;
    appmdl.getquantityDataMdl(bookid, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deletedataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletedataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updatetakeDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updatetakeDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getcodeDataCtrl = function (req, res) {
    var bookid = req.params.bookid;
    appmdl.getcodeDataMdl(bookid, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//takebook data end

//return start
exports.getDetailsSearchCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.getDetailsSearchMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    })
}
exports.getSearchCtrl = function (req, res) {

    appmdl.getSearchMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    })
}
exports.deleteredataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deleteredataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.updatreturnDataCtrl = function (req, res) {
    var id = req.body;
    appmdl.updatreturnDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//return start

//payment start
exports.getpayDataCtrl = function (req, res) {

    appmdl.getpayDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    })
}
//payment end

//pendding payment start
exports.getpanddingDataCtrl = function (req, res) {

    appmdl.getpanddingDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    })
}
exports.deletependdataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.deletependdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//pendding payment end

//missing book start
exports.postmissDataCtrl = function (req, res) {
    var cn = req.body;
    appmdl.postmissDataMdl(cn, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.updateDataMdl(cn, function (err, results) {
            if (err) {
                res.send({ 'status': 500, 'data': results });
                return;
            }
            res.send({ 'status': 200, 'data': results });
        });
    })
}
exports.getmissDataCtrl = function (req, res) {

    appmdl.getmissDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//missing book end

//login start
exports.getlogDataCtrl = function (req, res) {

    appmdl.getlogDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}























// //about data start
// exports.postaboutDataCtrl = function (req, res) {
//     var std = req.body;   
//     appmdl.postaboutDataMdl(std, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// exports.getaboutDataCtrl = function (req, res) {

//     appmdl.getaboutDataMdl( function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// //about data end

// //contact start
// exports.postcontactDataCtrl = function (req, res) {
//     var td = req.body;   
//     appmdl.postcontactDataMdl(td, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// exports.getcontactDataCtrl = function (req, res) {

//     appmdl.getcontactDataMdl( function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// //contact end

// //registraion data start
// exports.postRegDataCtrl = function (req, res) {
//     var reg = req.body;   
//     console.log(reg)
//     appmdl.postRegDataMdl(reg, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// exports.getRegDataCtrl = function (req, res) {

//     appmdl.getRegDataMdl( function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// exports.deletevendataCtrl = function (req, res) {
//     var id = req.params.id;
//    appmdl.deletevendataMdl(id, function (err, results) {
//        if (err) {
//            res.send({ 'status': 500, 'data': results });
//            return;
//        }
//        res.send({ 'status': 200, 'data': results });
//    });
// }
// exports.getEdDataCtrl = function (req, res) {
//     var id =req.body;
//    appmdl.getEdDataMdl(id, function (err, results) {
//        if (err) {
//            res.send({ 'status': 500, 'data': results });
//            return;
//        }
//        res.send({ 'status': 200, 'data': results });
//    });
// }
// exports.checkphDataCtrl = function (req, res) {
//     var phcheck = req.params.phcheck;     
//     appmdl.checkphDataMdl(phcheck, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }
// //registraion data end


// //sales data start

// exports.getSalesDataCtrl = function (req, res) {

//     appmdl.getSalesDataMdl( function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

// exports.getcustphnoDataCtrl = function (req, res) {
//     var cphn = req.params.cphn;     
//     console.log(cphn)
//     appmdl.getcustphnoDataMdl(cphn, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

// //sales end
// exports.getlogDataCtrl = function (req, res) {

//     appmdl.getlogDataMdl( function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

// ************************* Rotary Dashboard end **********************************
