function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
       
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/Amvt/forgotpassword.html",
            data: {
                pageTitle: 'forgotpassword',
                specialClass: 'page-header-fixed'
            }
        })
// rotary club dashboard start
.state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/Amvt/dashboard.html",
    data: {
        pageTitle: 'dashboard',
        specialClass: 'page-header-fixed'
    }
})


//add catbook state start
.state('cat', {
    url: "/cat",
    templateUrl: "views/Amvt/cat.html",
    data: {
        pageTitle: 'Add Category',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//add catbook state end

//book state start
.state('book', {
    url: "/book",
    templateUrl: "views/Amvt/book.html",
    data: {
        pageTitle: 'Add Book',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//book state end

//purches state start
.state('purches', {
    url: "/purches",
    templateUrl: "views/Amvt/purches.html",
    data: {
        pageTitle: 'Parches Items',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//purches state end

//visitor state start
.state('visitor', {
    url: "/visitor",
    templateUrl: "views/Amvt/visitor.html",
    data: {
        pageTitle: 'Visitor',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//visitor end

//take book state start
.state('take', {
    url: "/take",
    templateUrl: "views/Amvt/take.html",
    data: {
        pageTitle: 'Take Book',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//take book state end

//return state start
.state('return', {
    url: "/return",
    templateUrl: "views/Amvt/return.html",
    data: {
        pageTitle: 'Return',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//return state end

//payment state start
.state('payment', {
    url: "/payment",
    templateUrl: "views/Amvt/payment.html",
    data: {
        pageTitle: 'Payments',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//payment state end

//pendding payment state start
.state('pendding', {
    url: "/pendding",
    templateUrl: "views/Amvt/pendding.html",
    data: {
        pageTitle: 'Pendding Payments',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//pendding payment state end

//missingbook state start
.state('missing', {
    url: "/missing",
    templateUrl: "views/Amvt/missing.html",
    data: {
        pageTitle: 'Add Missing',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//missingbook state end


.state('login', {
    url: "/login",
    templateUrl: "views/Amvt/login.html",
    data: {
        pageTitle: 'login',
        specialClass: 'header-none sidebar-none footer-none green-bg  login'
    }
})


        


}
angular
    .module('adminbag')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });