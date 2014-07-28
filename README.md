AngularJS
=========
I. Khái quát về Angular JS 
1. Giới thiệu về Angular
- AngularJS là một full-stack Javascript framework, được phát triển bởi Google. Ban đầu mục tiêu của Angular là để xây dựng các ứng dụng dựa trên tiêu chuẩn MVC (Model - View - Controller), sau đó Angular dần phát triển và tiến gần hơn về với MVVM và MVP. Sau đó Google đã định nghĩa nó lại là MVW (Model-View-Whatever) để ám chỉ Angular là một framework có tính chất "whatever works for you".
2. Cài đặt
Angular được sử dụng bằng cách "import" file js vào HTML document.
VÍ dụ:
<!DOCTYPE html>
<html ng-app>
<head>
    <title>Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <h1>Hello angular</h1>
</body>
</html>

Trong đó:

- angular.min.js là file thư viện của angular
- script.js là file javascript chứa mã nguồn do chúng ta tự viết
- Thuộc tính ng-app của thẻ HTML sẽ đánh dấu đây là một bắt đầu document của AngularJS.

3. Model và data binding.
Một tính năng đơn giản và cực kỳ hữu ích của AngularJS chính là data-binding, Angular thực hiện điều này thông qua một thuộc tính ng-model trong html. Data-binding của Angular thực sự mạnh mẽ, việc sử dụng data-binding sẽ giúp tối ưu hoá mã nguồn và giúp giảm số lượng dòng code mà chúng ta phải viết. Sau đây là ví dụ về cách sử dụng data-binding:

<!DOCTYPE html>
<html ng-app>
<head>
    <title>Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <input ng-model="name">
    <h3>Hello, {{ name }}! Welcome to Angular.</h3>
</body>
</html>
Trong ví dụ trên chúng ta thấy:
- Một ng-model và nó có tên là "name"
- Ở phía dưới, chúng ta có một câu chào trong thẻ <h3>, và model "name" được bind vào đó thông qua cặp thẻ {{ và }}. Khi chúng ta thay đổi giá trị của model "name" đồng thời câu chào cũng sẽ thay đổi.

4. Controller
Ở phần 3, ta đã biết cách bind một dữ liệu như thế nào. Vấn đề là ta cần phải lấy dữ liệu và để xử lý trong script thì ta phải dùng đến controler. Dưới đây là một ví dụ mẫu về Angular Controller:

index.html
<!DOCTYPE html>
<html ng-app>
<head>
    <title>Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        <input ng-model="name">
        <button ng-click="raise()">Raise DATA</button>
    </div>
</body>
</html>

script.js
ExampleCtrl = function($scope) {
    $scope.raise = function() {
        alert('You have entered: ' + $scope.name);
    }
}

Trong ví dụ trên ta có:
ng-controller: Thuộc tính đánh dấu cho biết chúng ta sẽ bắt đầu một controller, với tên là ExampleCtrl
ExampleCtrl chính là một function được khai báo trong file script.js

Trong HTML chúng ta đã thực hiện 2 lần bind dữ liệu. Một lần cho model "name", và một lần cho sự kiện click.
ng-click sẽ bắt sự kiện khi người dùng bấm chuột vào đối tượng. Angular sẽ thực thi hàm được bind vào sự kiện này (ở đây là hàm raise).
$scope được truyền vào controller chính là một Injection, nó hỗ trợ cho Javascript có thể access vào value của model.
- Trong một số trường hợp, đôi khi ta cần phải gán giá trị mặc định của model thì ta có thể thực hiện trực tiếp thông qua biến $scope. Ví dụ như ta sẽ viết lại file script.js như sau:
ExampleCtrl = function($scope) {
    //Set default value for name
    $scope.name = 'Hyoka';
    $scope.raise = function() {
        alert('You have entered: ' + $scope.name);
    }
}

Vì vậy giá trị model "name" đã được gán mặc định, chúng ta có thể chạy lại ứng dụng để thấy sự thay đổi.

5. Objects & List data & ngRepeat
Trong AngularJS, dữ liệu được sử dụng là ở dạng nguyên bản của Javascript (array, objects), bạn không cần quan tâm quá nhiều đến các định nghĩa về đối tượng hay class. Với dữ liệu dạng list, angular cung cấp một công cụ hiệu quả để thực hiện lặp dữ liệu. Ví dụ:

index.html :
<!DOCTYPE html>
<html ng-app>
<head>
    <title>Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in list">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

script.js :
ExampleCtrl = function($scope) {
    $scope.list = [
        {id: 1, name: 'iPhone 5s', amount: 10},
        {id: 2, name: 'Nexus 5', amount: 12},
        {id: 3, name: 'Xperia Z1', amount: 13},
        {id: 4, name: 'Motorola X', amount: 8},
        {id: 5, name: 'Galaxy S4', amount: 21}
    ];
}

Trong file html, thuộc tính ng-repeat sẽ đánh dấu sự bắt đầu của vòng lặp ng-repeat sẽ lấy từng "item" từ "list" sau đó dựng lên html tương ứng. List được định nghĩa như một mảng các objects bình thường, như bạn thấy việc xử lý dữ liệu của AngularJS không khác gì với việc xử lý dữ liệu của Javascript cả.

II. HTTP & AJAX & Filter trong Angular JS
1. HTTP & AJAX
AJAX là một kỹ thuật rất quan trọng trong nền điện toán hiện đại, cũng như mọi Javascript framework khác AngularJS cung cấp cho người dùng công cụ để làm việc với AJAX thông qua một injector là $http.
Dưới đây là một ví dụ về xử lý ajax:

index.html

<!DOCTYPE html>
<html ng-app>
<head>
    <title>Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Tool</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in list">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td><input type="text" ng-model="item.amount"></td>
                    <td>
                        <button ng-click="doEdit(item)">Edit</button>
                        <button ng-click="doDelete(item)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Show the list data as Json, To debug -->
        <pre>{{ list |json }}</pre>
    </div>
 
</body>
</html>

script.js

ExampleCtrl = function($scope, $http) {
    $http.get('/get.json').success(function(data) {
        $scope.list = data;
    });
 
    $scope.doEdit = function(item) {
        var notice = "Item #" + item.id + " has been edited with amount: " + item.amount;
 
        $http.put('/update', item).success(function(data) {
            alert(notice);
        });
    }
 
    $scope.doDelete = function(item) {
        var notice = "Item #" + item.id + " has been deleted";
 
        //Remove item in list
        $scope.list.splice($scope.list.indexOf(item),1);
 
        //Delete at /delete/:id
        $http.delete('/delete/' + item.id).success(function(data) {
            alert(notice)
        });
    }
}

get.json (JSON for get data)

[
    {"id": 1, "name": "iPhone 5s", "amount": 10},
    {"id": 2, "name": "Nexus 5", "amount": 12},
    {"id": 3, "name": "Xperia Z1", "amount": 13},
    {"id": 4, "name": "Motorola X", "amount": 8},
    {"id": 5, "name": "Galaxy S4", "amount": 21}
]

$scope list sẽ được lấy từ ajax get request, sau đó bind vào html thông qua ng-repeat.
- Khi người dùng cập nhật dữ liệu, model sẽ được tự động thay đổi ( json debug dưới cùng file html)
- Khi thực hiện sự kiện click chuột thì $http sẽ được gọi và thực hiện các thao tác request tương ứng (PUT/DELETE)
- Quá trình ví dụ trên chỉ mới implements ở bên phía front-end, bạn cần viết thêm các mã nguồn cho backend (/update | /delete/:id)
- Tương tự, Angular cũng cung cấp $http.post để thực hiện xử lý ajax cho method POST

2. Filter
Trong ví dụ ở phía trên, trong phần document bạn có thể thấy chúng ta có cú pháp đề định dạng dữ liệu dạng JSON

{{ list | json}}

AngularJS cung cấp sẵn cho chúng ta một số các filter hữu ích, dùng để định dạng cũng như lọc dữ liệu, ví dụ về định dạng tiền tệ:

index.html
<!doctype html>
<html ng-app>
<head>
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="Ctrl">
        <input type="number" ng-model="amount"><br>
        default currency symbol ($):<span id="currency-default">{{amount | currency}}</span>
        custom currency identifier (USD$): <span>{{amount | currency:"USD$"}}</span>
    </div>
</body>
</html>

script.js

Ctrl = function($scope) {
    $scope.amount = 1234.56;
}
Kết quả sau khi định dạng của filter sẽ như sau:

default currency symbol ($): $1,244.00
custom currency identifier (USD$): USD$1,244.00

III. Module & Controller - Tổ chức thư mục ứng dụng.
1. Module.
Trong các ứng dụng thực tế, việc phân chia ứng dụng thành các thành phần khác nhau là điều cần thiết. Dưới đây là lợi ích của việc chia nhỏ ứng dụng:
- Dễ dàng hơn cho việc quản lý và khai báo ứng dụng cũng như kiểm tra lại sau này
- Khả năng tái sử dụng cũng như tận dụng các 3rd modules
- Nạp từng phần ứng dụng sẽ nhanh hơn là buộc phải nạp toàn bộ ứng dụng vào rồi mới chạy.

Trong AngularJS, module được hỗ trợ trong khai báo ng-app bên cạnh khai báo nó trong mã nguồn script của bạn, dưới đây là một template chuẩn của angular sử dụng modules.

index.html
<!doctype html>
<html ng-app="ExampleModule">
<head>
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div>
        Hello, Angular's Module!
    </div>
</body>
</html>

script.js
var app = angular.module('ExampleModule', []);

ng-app = "ExampleModule": Khai báo một angular app là module, sử dụng ExampleModule được khai báo trong script

Trong script, angular.module() là hàm khai báo cho module.
cặp dấu ngoặc [ ] chính là mảng các module sẽ được nạp chung vào để chạy chung với ứng dụng (module chính được khai báo trong ng-app) ví dụ:

var app = angular.module('ExampleModule', ['ngRoute', 'ngBootstrap']);


2. Controller trong module.
Trong ví dụ trên chúng ta đã thấy việc khai báo module như thế nào, vậy controller khi ứng dụng sẽ được khai báo như thế nào. Xem ví dụ duới đây

index.html
<!doctype html>
<html ng-app="ExampleModule">
<head>
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        Hello, {{ name }}!
    </div>
</body>
</html>

script.js
var app = angular.module('ExampleModule', []);
 
app.controller('ExampleController', function($scope) {
    $scope.name = 'World';
});

Method .controller của module sẽ đóng vai trò khai báo thêm một controller cho module.
Hàm đại diện cho controller được khai báo bình thường giống như controller khai báo bên ngoài module

3. Tổ chức của một ứng dụng thực tế
Thông thường thì tổ chức một ứng dụng thực tế sẽ được khởi tạo như sau:

├── index.html
├── css
│   └── style.css
└── scripts
    ├── module_1.js
    ├── module_2.js
    ├── module_3.js
    └── main.js

index.html chính là html documents
style.css chính là mã nguồn css cho document
main.js chính là mã nguồn cho module chính

Các files js khác là các modules được module chính sử dụng, như vậy template của chúng ta sẽ được khai báo lại như sau

index.html
<!doctype html>
<html ng-app="ExampleModule">
<head>
    <link rel="stylesheet" href="css/style.css">
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="scripts/module_01.js"></script>
    <script src="scripts/module_02.js"></script>
    <script src="scripts/module_03.js"></script>
    <script src="main.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        Hello, Angular's Module!
    </div>
</body>
</html>

main.js
var app = angular.module('ExampleModule', ['Module1', 'Module2', 'Module3']);
 
app.controller('ExampleController', function($scope) {
    $scope.name = 'World';
});

IV. Template & View & Route
1. Template
- Đôi lúc trong quá trình xây dựng hệ thống, file HTML trở nên phức tạp để giải quyết vấn đề này ta cần chia thành nhiều phần khác nhau, AngularJS cung cấp cho chúng ta một giải pháp hữu ích đó là template. Trong Angular, chúng ta có 2 cách để tạo một template.

Dùng file ngoài:
Chúng ta có thể dùng thêm một file html bên ngoài để làm template cho file chính, ví dụ:

message.html
<h3>Hello, {{name}}!</h3>

Dùng script
Chúng ta có thể tích hợp thẳng template vào file hiện hành thông qua thẻ script với type là 

text/ng-template
<script type="text/ng-template" id="message.html">
    <h3>Hello, {{name}}!</h3>
</script>

2. Cách sử dụng template
Có nhiều cách để sử dụng template, tuy nhiên trong AngularJS có 2 cách thông dụng nhất để dùng template đó là ng-include và ngRoute (sẽ nói ở phần sau), ví dụ:

index.html
<!doctype html>
<html ng-app="ExampleModule">
<head>
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-controller="ExampleCtrl">
        <input type="text" ng-model="name">
        <div ng-include src="template_name"></div>
    </div>
    <script type="text/ng-template" id="message.html">
        <h3>Hello, {{name}}!</h3>
    </script>
</body>
</html>
var app = angular.module('ExampleModule', []);
 
app.controller('ExampleCtrl', function($scope) { $scope.template_name = 'message.html'; $scope.name = 'World'; });

3. Views & Route
Đôi khi trong một trang, nhiều khi chúng ta chỉ muốn hiển thị một phần HTML ứng với mỗi chức năng cụ thể mà ta không cần chuyển đổi trang, Angular là một full-stack framework hiệu quả giúp chúng ta có thể làm được việc này nhanh chóng và dễ dàng. Để làm việc này thì bạn cần gọi và sử dụng một extends module của angular là ngRoute

index.html
<!doctype html>
<html ng-app="ExampleModule">
<head>
    <script src="http://code.angularjs.org/1.2.12/angular.min.js"></script>
    <script src="http://code.angularjs.org/1.2.12/angular-route.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div ng-view></div>
 
    <script type="text/ng-template" id="message.html">
        <input type="text" ng-model="name">
        <h3>Hello, {{ name }}!</h3>
    </script>
    <script type="text/ng-template" id="another.html">
        <input type="text" ng-model="name">
        <h3>Chào, {{ name }}</h3>
    </script>
</body>
</html>

script.js
var app = angular.module('ExampleModule', ['ngRoute']);
 
app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/message', {
        templateUrl: 'message.html',
        controller: 'MessageCtrl'
    });
 
    $routeProvider.when('/another', {
        templateUrl: 'another.html',
        controller: 'AnotherCtrl'
    });
 
    $routeProvider.otherwise({
        redirectTo: '/message'
    });
});
 
 
app.controller('MessageCtrl', function($scope) {
    $scope.name = 'World';
});
 
app.controller('AnotherCtrl', function($scope) {
    $scope.name = 'Sky';
});

ng-view đánh dấu vị trí view, nơi sẽ thể hiện template trọng document
ngRoute là module hỗ trợ routing url cho angular
app.config là method cho phép khai báo các Controller, View tương ứng với url
$routeProvider.otherwise xử lý cho route mặc định

V. Factory & Service
Với Javascript các bạn thấy rằng việc code hướng đối tượng, đóng gói và tái sử dụng ở nơi khác là vấn đề khá khó khăn, dưới đây sẽ trình bày cách thức tạo một factory/service/value để có thể tái sử dụng lẫn nhau hoặc trong một controller/directive, đây cũng là một đặc tính được hỗ trợ rất tốt với AngularJS

File main : nơi nắm giữ những Dependency Injector lấy từ các thư viện khác, chứa config route để định hướng view xuất hiện

var app = angular.module("WebApp", ["ngRoute", "ngResource"]).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', { controller: 'StockCtrl', templateUrl: 'AppView/home.html' }).
            when('/stock', { controller: 'StockCtrl', templateUrl: 'AppView/stock.html' }).
            when('/branch', { controller: 'BranchCtrl', templateUrl: 'AppView/Branch.html' }).
            when('/stockpro', { controller: 'stockPros', templateUrl: 'AppView/StockPro.html' }).
            otherwise({ redirectTo: '/' });
 
    });

Factory/Service : Xây dựng các đối tượng để tái sử dụng ở nơi khác
(function(ng) {
    'use strict';
    var serviceId = 'serviceApiHelper';
    ng.module('WebApp').factory(serviceId, ['$http', '$resource', serviceApiHelper]);
    function serviceApiHelper($http,$resource) {
        var factory = {
            getResource: getResource
        };
        return factory;
 
        function getResource(type) {
            return $resource('api/' + type + '/:id', { id: '@id' }, { 'update': { method: 'PUT' } }, { 'query': { method: 'GET',isArray:false } });
        }
    }
})(angular);

ViewModel/Controller tuỳ theo Pattern , tái sử dụng lại Factory vừa tạo

(function (ng) {
    'use strict';
    var controllerId = 'stockPros';
    ng.module('WebApp').controller(controllerId, ['serviceApiHelper', stockPros]);
    function stockPros(serviceApiHelper) {
        var vm = this;
        vm.stocks = [];
 
        initialize();
 
        /*Hiện thực*/
        function initialize() {
            getStocks();
        }
        function getStocks() {
            return serviceApiHelper.getResource('StockPro').query(function(data) {
                return vm.stocks = data;
            });
        }
    }
})(angular);

View : sẽ hiển thị và mapping thuộc tính của ViewModel

<h2>Đây là trang chủ</h2>
<div ng-controller="stockPros as vm" >
<table class="table table-striped table-condensed table-hover" >
    <thead>
        <th>Tên kho</th>
        <th>Mã kho</th>
 
    </thead>
    <tbody>
        <tr ng-repeat="todo in vm.stocks">
            <td>{{todo.StockName}}</td>
            <td>{{todo.StockCode}}</td>
        </tr>
    </tbody>
</table>
</div>


