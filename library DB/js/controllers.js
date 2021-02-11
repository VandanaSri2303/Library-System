angular.module('adminbag')

    .controller('loginCtrl', function ($http, $scope, $rootScope, $state) {
        $scope.getLoggedIn = function (l) {

            $http.get('http://localhost:3333/nodeapp/getlogData/')
                .success(function (resdata, status) {
                    $scope.login_details = resdata.data[0];
                    console.log($scope.login_details)
                    if (l.username == $scope.login_details.username && l.password == $scope.login_details.password) {
                        $state.go('dashboard');
                    }
                    else {
                        alert("Invalid Details..!")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
    })
    .controller('MainCtrl', function ($http, $scope, $state, $filter, $rootScope) {
        var club_id = localStorage.getItem("club_id");
        ////console.log(club_id);
        if (club_id == null) {
            club_id = 0;
        }
        if (club_id) {
            $rootScope.checkusr = true;
            ////console.log($rootScope.checkusr)
        } else {
            $rootScope.checkusr = false;
            ////console.log($rootScope.checkusr)
        }

        $scope.logout = function () {
            ////console.log("fdfdfsdf");
            localStorage.removeItem('club_id');
            $state.go('login')

        }
    })
    // ******************************************** library Dashboard start *******************************************  

    //category start
    .controller('catCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        $scope.catdata = function (s) {
            $http.post('http://localhost:3333/nodeapp/postcatData', s)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.s = {};
                        $scope.getcat();
                    } else {
                        alert('failed..')
                        $scope.s = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getcat = function () {
            $http.get('http://localhost:3333/nodeapp/getcatData/')
                .success(function (resdata, status) {
                    $scope.cat = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getcat();
        //update data
        $scope.Editcat = function (c) {
            $scope.ed = c;
        }
        $scope.updatebook = function (ed) {
            $http.post('http://localhost:3333/nodeapp/updatecatData', ed)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("sucessfully updated...")
                        $scope.getcat();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update end
        //delete start
        $scope.deletecat = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletecatdata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Deleted...!');
                        $scope.getcat();
                    }
                    else {
                        alert('Failed...!');
                    }

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //delete end
        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //category end

    //add book start
    .controller('bookCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        $scope.bookdata = function (b) {
            $http.get('http://localhost:3333/nodeapp/checkbookData/' + b.b_name)
                .success(function (resdata, status) {
                    $scope.bookcount = resdata.data[0].i;
                    if ($scope.bookcount == 0) {
                        $http.post('http://localhost:3333/nodeapp/postbookData', b)
                            .success(function (resdata, status) {
                                if (resdata.status == 200) {
                                    alert('sucess..');
                                    $scope.b = {};
                                    $scope.getbook();
                                } else {
                                    alert('failed..')
                                    $scope.b = {};
                                }
                            })
                            .error(function (data, status, headers, config) {
                                if (status == 500) { }
                            })
                    } else {
                        alert('Already Addedd....!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getbook = function () {
            $http.get('http://localhost:3333/nodeapp/getbookData/')
                .success(function (resdata, status) {
                    $scope.books = resdata.data;

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getbook();
        //dropdown start
        $http.get('http://localhost:3333/nodeapp/getcatData/')
            .success(function (resdata, status) {
                $scope.cat = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        // dropdown end
        //update data
        $scope.Editbook = function (i) {
            $scope.editbook = i;
        }
        $scope.updatebook = function (editbook) {
            $http.post('http://localhost:3333/nodeapp/updatebookData', editbook)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("sucessfully updated...")
                        $scope.getbook();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update end
        //delete start
        $scope.deletebook = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletebookdata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Deleted...!');
                        $scope.getbook();
                    }
                    else {
                        alert('Failed...!');
                    }

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //delete end 
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //add book end

    //purches book start
    .controller('purchesCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        $scope.purchesdata = function (p) {
            $http.post('http://localhost:3333/nodeapp/postPurchesData', p)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.p = {};
                        $scope.getpur();
                    } else {
                        alert('failed..')
                        $scope.p = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getpur = function () {
            $http.get('http://localhost:3333/nodeapp/getPurchesData/')
                .success(function (resdata, status) {
                    $scope.purches = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getpur();
        //dropdown start

        $http.get('http://localhost:3333/nodeapp/getbookData/')
            .success(function (resdata, status) {
                $scope.books = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        // dropdown end

        //code end
        //book code start
        $scope.getbookcode = function (bookid) {
            $http.get('http://localhost:3333/nodeapp/getbookcodeData/' + bookid)
                .success(function (resdata, status) {
                    $scope.p.code = resdata.data[0].b_code;

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        //book code end
        //delete start
        $scope.deletepur = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletepdata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Deleted...!');
                        $scope.getpur();
                    }
                    else {
                        alert('Failed...!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update data
        $scope.Editpurdata = function (q) {
            $scope.editpur = q;

        }
        $scope.updatepurches = function (editpur) {
            $http.post('http://localhost:3333/nodeapp/updateData', editpur)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("sucessfully updated...")
                        $scope.getpur();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update end

        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //purches book end

    //visitor start
    .controller('visitorCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        $scope.visitordata = function (c) {

            $http.get('http://localhost:3333/nodeapp/checknumData/' + c.v_phno)
                .success(function (resdata, status) {
                    $scope.numcheck = resdata.data[0].i;
                    console.log($scope.numcheck)
                    if ($scope.numcheck == 0) {
                        $http.post('http://localhost:3333/nodeapp/postvisitorData', c)
                            .success(function (resdata, status) {
                                if (resdata.status == 200) {
                                    alert('sucess..');
                                    $scope.c = {};
                                    $scope.getvisitor();
                                } else {
                                    alert('failed..')
                                    $scope.c = {};
                                }
                            })
                    }
                    else {
                        alert('Existed PhNumber....!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getvisitor = function () {
            $http.get('http://localhost:3333/nodeapp/getvisitorData/')
                .success(function (resdata, status) {
                    $scope.vdata = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getvisitor();
        //delete start
        $scope.deletevisitor = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletevisitordata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Deleted...!');
                        $scope.getvisitor();
                    }
                    else {
                        alert('Failed...!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update start
        $scope.Editdata = function (n) {
            $scope.editvisitor = n;

        }
        $scope.updatevisitordata = function (editvisitor) {

            $http.post('http://localhost:3333/nodeapp/updatevisitorData', editvisitor)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("sucessfully updated...")
                        $scope.getvisitor();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //visitor end

    //take book start
    .controller('takeCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        $scope.takedata = function (s, pay) {
            var data = {
                "v_name": s.v_name,
                "b_name": s.b_name,
                "pd_cost": s.pd_cost,
                "idate": s.idate,
                "rdate": s.rdate,
                "quantity": s.quantity,
                "pay": pay
            }
            $http.post('http://localhost:3333/nodeapp/posttakeData', data)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.data = {};
                        $scope.gettake();
                    } else {
                        alert('failed..')
                        $scope.data = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.gettake = function () {
            $http.get('http://localhost:3333/nodeapp/gettakeData/')
                .success(function (resdata, status) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.gettake();
        //dropdown start

        $http.get('http://localhost:3333/nodeapp/getbookData/')
            .success(function (resdata, status) {
                $scope.books = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        $http.get('http://localhost:3333/nodeapp/getvisitorData/')
            .success(function (resdata, status) {
                $scope.vdata = resdata.data;

            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        // dropdown end

        //code end
        //book code start
        $scope.getquantity = function (bookid) {
            $http.get('http://localhost:3333/nodeapp/getquantityData/' + bookid)
                .success(function (resdata, status) {
                    $scope.s.eq = resdata.data[0].b_quan;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.getcost = function (bookid) {
            $http.get('http://localhost:3333/nodeapp/getcodeData/' + bookid)
                .success(function (resdata, status) {
                    $scope.s.pd_cost = resdata.data[0].pd_cost;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        //book code end
        //delete start
        $scope.deletetake = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletedata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Deleted...!');
                        $scope.gettake();
                    }
                    else {
                        alert('Failed...!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update data
        $scope.Edittake = function (x) {
            $scope.edit = x;

        }
        $scope.updatetakebook = function (edit) {
            $http.post('http://localhost:3333/nodeapp/updatetakeData', edit)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("sucessfully updated...")
                        $scope.gettake();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }

        $scope.moddate = function (d) {
            console.log(d);
            var date = new Date(d),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            $scope.idate = [date.getFullYear(), mnth, day].join("-");
            console.log($scope.idate)
        }
        $scope.caldate = function (r, pd_cost) {
            console.log(pd_cost);
            var date = new Date(r),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            $scope.rdate = [date.getFullYear(), mnth, day].join("-");
            console.log($scope.rdate);
            var i = moment($scope.idate, 'YYYY-MM-DD');
            var r = moment($scope.rdate, 'YYYY-MM-DD');
            $scope.days = r.diff(i, 'days') + 1;
            console.log($scope.days);

            $scope.pay = $scope.days * pd_cost;
            console.log($scope.pay)


        }
        //update end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //take book end end

    //return  start
    .controller('returnCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        $scope.gettake = function () {
            $http.get('http://localhost:3333/nodeapp/gettakeData/')
                .success(function (resdata, status) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.gettake();
        //search start
        $scope.update = function (id) {

            console.log(id)
            $http.get('http://localhost:3333/nodeapp/getDetailsSearch/' + id)
                .success(function (resdata) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $http.get('http://localhost:3333/nodeapp/getSearch/')
            .success(function (resdata) {
                $scope.search = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        //search end
        //delete start
        $scope.deletereturn = function (id) {
            $http.get('http://localhost:3333/nodeapp/deleteredata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('successfully Payment Paid...!');
                        $scope.gettake();
                    }
                    else {
                        alert('Failed...!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update start
        $scope.Editreturn = function (x) {
            $scope.editr = x;

        }
        $scope.updatereturn = function (editr) {
            $http.post('http://localhost:3333/nodeapp/updatreturnData', editr)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert("Payment Unpaid...")
                        $scope.gettake();
                    }
                    else {
                        alert("failed...")
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //update end
        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //return end

    //payment start
    .controller('paymentCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        $scope.get = function () {
            $http.get('http://localhost:3333/nodeapp/getpayData/')
                .success(function (resdata, status) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.get()

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //payment end

    // pendding payment start
    .controller('penddingCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        $scope.getpen = function () {
            $http.get('http://localhost:3333/nodeapp/getpanddingData/')
                .success(function (resdata, status) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getpen()
        //paid start
        $scope.deletepend = function (id) {
            $http.get('http://localhost:3333/nodeapp/deletependdata/' + id)
                .success(function (resdata, status) {
                    if (resdata.status == '200') {
                        alert('Successfully Paid...!');
                        $scope.getpen();
                    }
                    else {
                        alert('Failed...!');
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //pendding payment end

    //missing start
    .controller('missingCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        $scope.gettake = function () {
            $http.get('http://localhost:3333/nodeapp/gettakeData/')
                .success(function (resdata, status) {
                    $scope.take = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.gettake();

        $scope.missdata = function (s) {

                $http.post('http://localhost:3333/nodeapp/postmissData', s)
                    .success(function (resdata, status) {
                        if (resdata.status == 200) {
                            alert('sucess..');
                            $scope.s = {};
                            $scope.getmissing()
                        } else {
                            alert('failed..')
                            $scope.s = {};
                        }
                    })
                    .error(function (data, status, headers, config) {
                        if (status == 500) { }
                    })
            }

            $scope.getmissing = function () {
                $http.get('http://localhost:3333/nodeapp/getmissData/')
                    .success(function (resdata, status) {
                        $scope.miss = resdata.data;
                    })
                    .error(function (data, status, headers, config) {
                        if (status == 500) { }
                    })
            }
            $scope.getmissing()

            //code end
            //dt options start
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withOption('responsive', true)
                .withDisplayLength(10)

                .withButtons([{
                    extend: 'copy'
                },
                {
                    extend: 'csv'
                },
                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');
                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
                ]);
            //dt options end

        });
//missing end


    // ******************************************** library Dashboard end *******************************************//  



