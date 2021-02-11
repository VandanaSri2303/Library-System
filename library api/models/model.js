
var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

// ************************* library Dashboard start**********************************

//category data start
exports.postcatDataMdl = function (data, callback) {
  var cntxtDtls = "in postcatDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into cat (b_cat,i_ts) values('${data.b_cat}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getcatDataMdl = function (callback) {
  var cntxtDtls = "in getcatDataMdl";
  var QRY_TO_EXEC = `select * from cat where d_in='0' order by id desc;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.deletecatdataMdl = function (id,callback) {
  var cntxtDtls = "in deletecatdataMdl";
  var QRY_TO_EXEC = `update cat set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatecatDataMdl = function (id,callback) {
  var cntxtDtls = "in updatecatDataMdl";
  var QRY_TO_EXEC = `update cat set b_cat='${id.b_cat}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
//category end

//book data start
exports.postbookDataMdl = function (data, callback) {
  var cntxtDtls = "in postbookDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into addbook (b_cat,b_name,b_code,pd_cost,i_ts)
  values('${data.b_cat}','${data.b_name}','${data.b_code}','${data.pd_cost}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getbookDataMdl = function (callback) {
  var cntxtDtls = "in getbookDataMdl";
  var QRY_TO_EXEC = `select a.*,c.b_cat from addbook as a join cat as c on c.id=a.b_cat where a.d_in='0' order by id desc`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  

exports.checkbookDataMdl = function (itemname,callback) {
  var cntxtDtls = "in checkbookDataMdl";
  var QRY_TO_EXEC = `select count(id) as i from addbook where b_name='${itemname}' ;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 

exports.deletebookdataMdl = function (id,callback) {
  var cntxtDtls = "in deletebookdataMdl";
  var QRY_TO_EXEC = `update addbook set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatebookDataMdl = function (id,callback) {
  var cntxtDtls = "in updatebookDataMdl";
  var QRY_TO_EXEC = `update addbook set b_cat='${id.b_cat}',b_name='${id.b_name}',b_code='${id.b_code}',pd_cost='${id.pd_cost}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
//book data end

//purches data start
exports.postPurchesDataMdl = function (data, callback) {
  console.log('model')
  console.log(data)
  var cntxtDtls = "in postPurchesDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into purches (b_name,quantity,i_ts)
  values('${data.b_name}','${data.quantity}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getPurchesDataMdl = function (callback) {
  var cntxtDtls = "in getPurchesDataMdl";
  var QRY_TO_EXEC = `select p.*,a.b_name from purches as p join addbook as a on a.id = p.b_name where p.d_in='0' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.getbookcodeDataMdl = function (bookid,callback) {
  var cntxtDtls = "in getbookcodeDataMdl";
  var QRY_TO_EXEC = `select b_code from addbook where id = '${bookid}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.deletepdataMdl = function (id,callback) {
  var cntxtDtls = "in deletepdataMdl";
  var QRY_TO_EXEC = `update purches set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updateDataMdl = function (id,callback) {
  var cntxtDtls = "in updateDataMdl";
  var QRY_TO_EXEC = `update purches set quantity='${id.quantity}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 

//quantity plus start
exports.getbalnceQty = function (pd, callback) {
  var cntxtDtls = "in getbalnceQty";
  var QRY_TO_EXEC = `select b_quan from addbook where id='${pd.b_name}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updatebookQty = function (pd,balqty,callback) {
  var cntxtDtls = "in updatebookQty";
  var qty = (pd.quantity * 1) + (balqty * 1);
  var QRY_TO_EXEC = `update addbook set b_quan='${qty}' where id ='${pd.b_name}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//quantity plus end
//purches data end

//visitor data start
exports.postvisitorDataMdl = function (data, callback) {
  var cntxtDtls = "in postvisitorDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into visitor (v_name,v_phno,v_add,in_time,out_time)
  values('${data.v_name}','${data.v_phno}','${data.v_add}','${date}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getvisitorDataMdl = function (callback) {
  var cntxtDtls = "in getvisitorDataMdl";
  var QRY_TO_EXEC = `select * from visitor where d_in='0' order by id desc;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.deletevisitordataMdl = function (id,callback) {
  var cntxtDtls = "in deletevisitordataMdl";
  var QRY_TO_EXEC = `update visitor set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatevisitorDataMdl = function (id,callback) {
  var cntxtDtls = "in updatevisitorDataMdl";
  var QRY_TO_EXEC = `update visitor set v_name='${id.v_name}',v_phno='${id.v_phno}',
  v_add='${id.v_add}', out_time='${id.out_time}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.checknumDataMdl = function (numcheck,callback) {
  var cntxtDtls = "in checknumDataMdl";
  var QRY_TO_EXEC = `select count(id) as i from visitor where v_phno='${numcheck}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//visitor data end

//take book start
exports.posttakeDataMdl = function (data, callback) {
  console.log('model')
 console.log(data)
  var cntxtDtls = "in posttakeDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into issuebook (v_name,b_name,pd_cost,quantity,idate,rdate,payment,i_ts)
  values('${data.v_name}','${data.b_name}','${data.pd_cost}','${data.quantity}','${data.idate}',
  '${data.rdate}','${data.pay}','${date}')`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.gettakeDataMdl = function (callback) {
  var cntxtDtls = "in gettakeDataMdl";
  var QRY_TO_EXEC = `select t.*,a.b_name,v.v_name from issuebook as t join addbook as a on a.id = t.b_name 
  join visitor as v on v.id=t.v_name  where t.d_in='0' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.getquantityDataMdl = function (bookid,callback) {
  var cntxtDtls = "in getquantityDataMdl";
  var QRY_TO_EXEC = `select b_quan from addbook where id = '${bookid}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getcodeDataMdl = function (bookid,callback) {
  var cntxtDtls = "in getcodeDataMdl";
  var QRY_TO_EXEC = `select pd_cost from addbook where id = '${bookid}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.deletedataMdl = function (id,callback) {
  var cntxtDtls = "in deletedataMdl";
  var QRY_TO_EXEC = `update issuebook set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatetakeDataMdl = function (id,callback) {
  var cntxtDtls = "in updatetakeDataMdl";
  var QRY_TO_EXEC = `update issuebook set v_name='${id.v_name}',b_name='${id.b_name}',
  pd_cost='${id.pd_cost}',idate='${id.idate}', rdate='${id.rdate}',payment='${id.pay}',quantity='${id.quantity}' 
  where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 

//quantity minus start
exports.getbalQty = function (sd, callback) {
  var cntxtDtls = "in getbalQty";
  var QRY_TO_EXEC = `select b_quan from addbook where id='${sd.b_name}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updateblnQty = function (sd,balqty,callback) {
  var cntxtDtls = "in updateblnQty";
  var qty = (balqty * 1) - (sd.quantity * 1);
  var QRY_TO_EXEC = `update addbook set b_quan='${qty}' where id ='${sd.b_name}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//quantity minus end
//take book end

//return start
exports.getDetailsSearchMdl = function (id,callback) {

  var cntxtDtls = "in getDetailsSearchMdl";
  var QRY_TO_EXEC = `select t.*,a.b_name,v.v_name from issuebook as t join addbook as a on a.id = t.b_name 
  join visitor as v on v.id=t.v_name where t.id='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getSearchMdl = function (callback) {
  var cntxtDtls = "in getSearchMdl";
  var QRY_TO_EXEC = `select * from issuebook`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.deleteredataMdl = function (id,callback) {
  var cntxtDtls = "in deleteredataMdl";
  var QRY_TO_EXEC = `update issuebook set d_in='2' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatreturnDataMdl = function (id,callback) {
  var cntxtDtls = "in updatreturnDataMdl";
  var QRY_TO_EXEC = `update issuebook set  rdate='${id.rdate}',payment='${id.payment}',d_in='3' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
//return start

//payment start
exports.getpayDataMdl = function (callback) {
  var cntxtDtls = "in getpayDataMdl";
  var QRY_TO_EXEC = `select t.*,a.b_name,v.v_name from issuebook as t join addbook as a on a.id = t.b_name 
  join visitor as v on v.id=t.v_name  where t.d_in='2' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
//payment end

//pendding payment start
exports.getpanddingDataMdl = function (callback) {
  var cntxtDtls = "in getpanddingDataMdl";
  var QRY_TO_EXEC = `select t.*,a.b_name,v.v_name from issuebook as t join addbook as a on a.id = t.b_name 
  join visitor as v on v.id=t.v_name  where t.d_in='3' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.deletependdataMdl = function (id,callback) {
  var cntxtDtls = "in deletependdataMdl";
  var QRY_TO_EXEC = `update issuebook set d_in='2' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
//pendding payment end

//missing book start
exports.postmissDataMdl = function (data, callback) {
  console.log('model')
 console.log(data)
  var cntxtDtls = "in postmissDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into missing (v_name,b_name,quantity,idate,rdate,payment,i_ts)
  values('${data.v_name}','${data.b_name}','${data.quantity}','${data.idate}',
  '${data.rdate}','${data.payment}','${date}')`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updateDataMdl = function (id,callback) {
  var cntxtDtls = "in updateDataMdl";
  var QRY_TO_EXEC = `update issuebook set payment='${id.payment}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  

exports.getmissDataMdl = function (callback) {
  var cntxtDtls = "in getmissDataMdl";
  var QRY_TO_EXEC = `select t.*,a.b_name,v.v_name from missing as t join addbook as a on a.id = t.b_name 
  join visitor as v on v.id=t.v_name  where t.d_in='0' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
//missing book end

//login start
exports.getlogDataMdl = function (callback) {
  var cntxtDtls = "in getlogDataMdl";
  var QRY_TO_EXEC = `select * from login;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
 
// ************************* library Dashboard end**********************************
