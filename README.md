<strong>I. Khái quát về Angular JS</strong>
<strong> 1. Giới thiệu về Angular</strong>
- AngularJS là một full-stack Javascript framework, được phát triển bởi Google. Ban đầu mục tiêu của Angular là để xây dựng các ứng dụng dựa trên tiêu chuẩn MVC (Model - View - Controller), sau đó Angular dần phát triển và tiến gần hơn về với MVVM và MVP. Sau đó Google đã định nghĩa nó lại là MVW (Model-View-Whatever) để ám chỉ Angular là một framework có tính chất "whatever works for you".
<strong>2. Cài đặt</strong>
Angular được sử dụng bằng cách "import" file js vào HTML document.
VÍ dụ:
<blockquote><i>&lt;!DOCTYPE html&gt;</i><i>
</i><i>&lt;html </i><i>ng-app</i><i>&gt;</i><i>
</i><i>&lt;head&gt;</i><i>
</i><i>    &lt;title&gt;Hello World&lt;/title&gt;</i><i>
</i><i>    &lt;script src="</i><i>https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js</i><i>"&gt;&lt;/script&gt;</i><i>
</i><i>    &lt;script src="</i><i>script.js</i><i>"&gt;&lt;/script&gt;</i><i>
</i><i>&lt;/head&gt;</i><i>
</i><i>&lt;body&gt;</i><i>
</i><i>    &lt;h1&gt;Hello angular&lt;/h1&gt;</i><i>
</i><i>&lt;/body&gt;</i><i>
</i><i>&lt;/html&gt;</i></blockquote>
Trong đó:
- angular.min.js là file thư viện của angular
- script.js là file javascript chứa mã nguồn do chúng ta tự viết
- Thuộc tính ng-app của thẻ HTML sẽ đánh dấu đây là một bắt đầu document của AngularJS.

<strong>3. Model và data binding.</strong>
Một tính năng đơn giản và cực kỳ hữu ích của AngularJS chính là data-binding, Angular thực hiện điều này thông qua một thuộc tính ng-model trong html. Data-binding của Angular thực sự mạnh mẽ, việc sử dụng data-binding sẽ giúp tối ưu hoá mã nguồn và giúp giảm số lượng dòng code mà chúng ta phải viết. Sau đây là ví dụ về cách sử dụng data-binding:
<blockquote><i>&lt;!DOCTYPE html&gt;</i>
<i>&lt;html ng-app&gt;</i>
<i>&lt;head&gt;</i>
<i>    </i><i>&lt;title&gt;Hello World&lt;/title&gt;</i>
<i>    </i><i>&lt;script src="</i><a href="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"><i>https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js</i></a><i>"&gt;&lt;/script&gt;</i>
<i>    </i><i>&lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    </i><i>&lt;input ng-model="name"&gt;</i>
<i>    </i><i>&lt;h3&gt;Hello, {{ name }}! Welcome to Angular.&lt;/h3&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
Trong ví dụ trên chúng ta thấy:
- Một ng-model và nó có tên là "name"
- Ở phía dưới, chúng ta có một câu chào trong thẻ h3, và model "name" được bind vào đó thông qua cặp thẻ {{ và }}. Khi chúng ta thay đổi giá trị của model "name" đồng thời câu chào cũng sẽ thay đổi.

<strong>4. Controller</strong>
Ở phần 3, ta đã biết cách bind một dữ liệu như thế nào. Vấn đề là ta cần phải lấy dữ liệu và để xử lý trong script thì ta phải dùng đến controler. Dưới đây là một ví dụ mẫu về Angular Controller:
<strong>index.html</strong>
<blockquote><i>&lt;!DOCTYPE html&gt;</i>
<i>&lt;html ng-app&gt;</i>
<i>&lt;head&gt;</i>
<i>    </i><i>&lt;title&gt;Hello World&lt;/title&gt;</i>
<i>    </i><i>&lt;script src="</i><a href="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"><i>https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js</i></a><i>"&gt;&lt;/script&gt;</i>
<i>    </i><i>&lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    </i><i>&lt;div ng-controller="ExampleCtrl"&gt;</i>
<i>        </i><i>&lt;input ng-model="name"&gt;</i>
<i>        </i><i>&lt;button ng-click="raise()"&gt;Raise DATA&lt;/button&gt;</i>
<i>    </i><i>&lt;/div&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
<b><i>script.js</i></b>
<blockquote><i>ExampleCtrl = function($scope) {</i><i>
</i><i>    $scope.raise = function() {</i><i>
</i><i>        alert('You have entered: ' + $scope.name);</i><i>
</i><i>    }</i><i>
</i><i>}</i></blockquote>
Trong ví dụ trên ta có:
<em>- ng-controller:</em> Thuộc tính đánh dấu cho biết chúng ta sẽ bắt đầu một controller, với tên là ExampleCtrl
ExampleCtrl chính là một function được khai báo trong file script.js
Trong HTML chúng ta đã thực hiện 2 lần bind dữ liệu. Một lần cho model "name", và một lần cho sự kiện click.
<em>- ng-click</em> sẽ bắt sự kiện khi người dùng bấm chuột vào đối tượng. Angular sẽ thực thi hàm được bind vào sự kiện này (ở đây là hàm raise).
<em>- $scope</em> được truyền vào controller chính là một Injection, nó hỗ trợ cho Javascript có thể access vào value của model.
Trong một số trường hợp, đôi khi ta cần phải gán giá trị mặc định của model thì ta có thể thực hiện trực tiếp thông qua biến $scope. Ví dụ như ta sẽ viết lại file script.js như sau:
<blockquote><i>ExampleCtrl = function($scope) {</i>
<i>    </i><i>//Set default value for name</i>
<i>    </i><i>$scope.name = 'Hyoka';</i>
<i>    </i><i>$scope.raise = function() {</i>
<i>        </i><i>alert('You have entered: ' + $scope.name);</i>
<i>    </i><i>}</i>
<i>}</i></blockquote>
Vì vậy giá trị model "name" đã được gán mặc định, chúng ta có thể chạy lại ứng dụng để thấy sự thay đổi.

<strong>5. Objects &amp; List data &amp; ngRepeat</strong>
Trong AngularJS, dữ liệu được sử dụng là ở dạng nguyên bản của Javascript (array, objects), bạn không cần quan tâm quá nhiều đến các định nghĩa về đối tượng hay class. Với dữ liệu dạng list, angular cung cấp một công cụ hiệu quả để thực hiện lặp dữ liệu. Ví dụ:
<strong>index.html :</strong>
<blockquote><i>&lt;!DOCTYPE html&gt;</i><i>
</i><i>&lt;html ng-app&gt;</i><i>
</i><i>&lt;head&gt;</i><i>
</i><i>    &lt;title&gt;Hello World&lt;/title&gt;</i><i>
</i><i>    &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i><i>
</i><i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i><i>
</i><i>&lt;/head&gt;</i><i>
</i><i>&lt;body&gt;</i><i>
</i><i>    &lt;div ng-controller="ExampleCtrl"&gt;</i><i>
</i><i>        &lt;table border="1" cellspacing="0"&gt;</i><i>
</i><i>            &lt;thead&gt;</i><i>
</i><i>                &lt;tr&gt;</i><i>
</i><i>                    &lt;th&gt;ID&lt;/th&gt;</i><i>
</i><i>                    &lt;th&gt;Name&lt;/th&gt;</i><i>
</i><i>                    &lt;th&gt;Amount&lt;/th&gt;</i><i>
</i><i>                &lt;/tr&gt;</i><i>
</i><i>            &lt;/thead&gt;</i><i>
</i><i>            &lt;tbody&gt;</i><i>
</i><i>                &lt;tr ng-repeat="item in list"&gt;</i><i>
</i><i>                    &lt;td&gt;{{ item.id }}&lt;/td&gt;</i><i>
</i><i>                    &lt;td&gt;{{ item.name }}&lt;/td&gt;</i><i>
</i><i>                    &lt;td&gt;{{ item.amount }}&lt;/td&gt;</i><i>
</i><i>                &lt;/tr&gt;</i><i>
</i><i>            &lt;/tbody&gt;</i><i>
</i><i>        &lt;/table&gt;</i><i>
</i><i>    &lt;/div&gt;</i>
<i>&lt;/body&gt;</i><i>
</i><i>&lt;/html&gt;</i></blockquote>
<strong>script.js :</strong>
<blockquote><i>ExampleCtrl = function($scope) {</i><i>
</i><i>    $scope.list = [</i><i>
</i><i>        {id: 1, name: 'iPhone 5s', amount: 10},</i><i>
</i><i>        {id: 2, name: 'Nexus 5', amount: 12},</i><i>
</i><i>        {id: 3, name: 'Xperia Z1', amount: 13},</i><i>
</i><i>        {id: 4, name: 'Motorola X', amount: 8},</i><i>
</i><i>        {id: 5, name: 'Galaxy S4', amount: 21}</i><i>
</i><i>    ];</i><i>
</i><i>}</i></blockquote>
Trong file html, thuộc tính ng-repeat sẽ đánh dấu sự bắt đầu của vòng lặp ng-repeat sẽ lấy từng "item" từ "list" sau đó dựng lên html tương ứng. List được định nghĩa như một mảng các objects bình thường, như bạn thấy việc xử lý dữ liệu của AngularJS không khác gì với việc xử lý dữ liệu của Javascript cả.

<strong>II. HTTP &amp; AJAX &amp; Filter trong Angular JS</strong>
<strong> 1. HTTP &amp; AJAX</strong>
AJAX là một kỹ thuật rất quan trọng trong nền điện toán hiện đại, cũng như mọi Javascript framework khác AngularJS cung cấp cho người dùng công cụ để làm việc với AJAX thông qua một injector là $http.
Dưới đây là một ví dụ về xử lý ajax:
<strong>index.html</strong>
<blockquote><i>&lt;!DOCTYPE html&gt;</i><i>
</i><i>&lt;html ng-app&gt;</i><i>
</i><i>&lt;head&gt;</i><i>
</i><i>    &lt;title&gt;Hello World&lt;/title&gt;</i><i>
</i><i>    &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i><i>
</i><i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i><i>
</i><i>&lt;/head&gt;</i><i>
</i><i>&lt;body&gt;</i><i>
</i><i>    &lt;div ng-controller="ExampleCtrl"&gt;</i><i>
</i><i>        &lt;table border="1" cellspacing="0"&gt;</i><i>
</i><i>            &lt;thead&gt;</i><i>
</i><i>                &lt;tr&gt;</i><i>
</i><i>                    &lt;th&gt;ID&lt;/th&gt;</i><i>
</i><i>                    &lt;th&gt;Name&lt;/th&gt;</i><i>
</i><i>                    &lt;th&gt;Amount&lt;/th&gt;</i><i>
</i><i>                    &lt;th&gt;Tool&lt;/th&gt;</i><i>
</i><i>                &lt;/tr&gt;</i><i>
</i><i>            &lt;/thead&gt;</i><i>
</i><i>            &lt;tbody&gt;</i><i>
</i><i>                &lt;tr ng-repeat="item in list"&gt;</i><i>
</i><i>                    &lt;td&gt;{{ item.id }}&lt;/td&gt;</i><i>
</i><i>                    &lt;td&gt;{{ item.name }}&lt;/td&gt;</i><i>
</i><i>                    &lt;td&gt;&lt;input type="text" ng-model="item.amount"&gt;&lt;/td&gt;</i><i>
</i><i>                    &lt;td&gt;</i><i>
</i><i>                        &lt;button ng-click="doEdit(item)"&gt;Edit&lt;/button&gt;</i><i>
</i><i>                        &lt;button ng-click="doDelete(item)"&gt;Delete&lt;/button&gt;</i><i>
</i><i>                    &lt;/td&gt;</i><i>
</i><i>                &lt;/tr&gt;</i><i>
</i><i>            &lt;/tbody&gt;</i><i>
</i><i>        &lt;/table&gt;</i><i>
</i><i>        &lt;!-- Show the list data as Json, To debug --&gt;</i><i>
</i><i>        &lt;pre&gt;{{ list |json }}&lt;/pre&gt;</i><i>
</i><i>    &lt;/div&gt;</i><i>
</i><i>
</i><i>&lt;/body&gt;</i><i>
</i><i>&lt;/html&gt;</i></blockquote>
<strong>script.js</strong>
<blockquote><i>ExampleCtrl = function($scope, $http) {</i><i>
</i><i>    $http.get('/get.json').success(function(data) {</i><i>
</i><i>        $scope.list = data;</i><i>
</i><i>    });</i><i>
</i><i>    $scope.doEdit = function(item) {</i><i>
</i><i>        var notice = "Item #" + item.id + " has been edited with amount: " + item.amount;</i><i>
</i><i>        $http.put('/update', item).success(function(data) {</i><i>
</i><i>            alert(notice);</i><i>
</i><i>        });</i><i>
</i><i>    }</i><i>
</i><i>    $scope.doDelete = function(item) {</i><i>
</i><i>        var notice = "Item #" + item.id + " has been deleted";</i><i>
</i><i>        //Remove item in list</i><i>
</i><i>        $scope.list.splice($scope.list.indexOf(item),1);</i><i>
</i><i>        //Delete at /delete/:id</i><i>
</i><i>        $http.delete('/delete/' + item.id).success(function(data) {</i><i>
</i><i>            alert(notice)</i><i>
</i><i>        });</i><i>
</i><i>    }</i><i>
</i><i>}</i></blockquote>
<strong>get.json (JSON for get data)</strong>
<blockquote><i>[</i><i>
</i><i>    {"id": 1, "name": "iPhone 5s", "amount": 10},</i><i>
</i><i>    {"id": 2, "name": "Nexus 5", "amount": 12},</i><i>
</i><i>    {"id": 3, "name": "Xperia Z1", "amount": 13},</i><i>
</i><i>    {"id": 4, "name": "Motorola X", "amount": 8},</i><i>
</i><i>    {"id": 5, "name": "Galaxy S4", "amount": 21}</i><i>
</i><i>]</i><i>
</i></blockquote>
<em>$scope list</em> sẽ được lấy từ ajax get request, sau đó bind vào html thông qua ng-repeat.
- Khi người dùng cập nhật dữ liệu, model sẽ được tự động thay đổi ( json debug dưới cùng file html)
- Khi thực hiện sự kiện click chuột thì $http sẽ được gọi và thực hiện các thao tác request tương ứng (PUT/DELETE)
- Quá trình ví dụ trên chỉ mới implements ở bên phía front-end, bạn cần viết thêm các mã nguồn cho backend (/update | /delete/:id)
- Tương tự, Angular cũng cung cấp $http.post để thực hiện xử lý ajax cho method POST

<strong>2. Filter</strong>
Trong ví dụ ở phía trên, trong phần document bạn có thể thấy chúng ta có cú pháp đề định dạng dữ liệu dạng JSON
<em>{{ list | json}}</em>
AngularJS cung cấp sẵn cho chúng ta một số các filter hữu ích, dùng để định dạng cũng như lọc dữ liệu, ví dụ về định dạng tiền tệ:
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i><i>
</i><i>&lt;html ng-app&gt;</i><i>
</i><i>&lt;head&gt;</i><i>
</i><i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i><i>
</i><i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i><i>
</i><i>&lt;/head&gt;</i><i>
</i><i>&lt;body&gt;</i><i>
</i><i>    &lt;div ng-controller="Ctrl"&gt;</i><i>
</i><i>        &lt;input type="number" ng-model="amount"&gt;&lt;br&gt;</i><i>
</i><i>        default currency symbol ($):&lt;span id="currency-default"&gt;{{amount | currency}}&lt;/span&gt;</i><i>
</i><i>        custom currency identifier (USD$): &lt;span&gt;{{amount | currency:"USD$"}}&lt;/span&gt;</i><i>
</i><i>    &lt;/div&gt;</i><i>
</i><i>&lt;/body&gt;</i><i>
</i><i>&lt;/html&gt;</i></blockquote>
<strong>script.js</strong>
<blockquote>Ctrl = function($scope) {
$scope.amount = 1234.56;
}</blockquote>
Kết quả sau khi định dạng của filter sẽ như sau:

default currency symbol ($): $1,244.00
custom currency identifier (USD$): USD$1,244.00

<strong>III. Module &amp; Controller - Tổ chức thư mục ứng dụng.
1. Module.</strong>
Trong các ứng dụng thực tế, việc phân chia ứng dụng thành các thành phần khác nhau là điều cần thiết. Dưới đây là lợi ích của việc chia nhỏ ứng dụng:
- Dễ dàng hơn cho việc quản lý và khai báo ứng dụng cũng như kiểm tra lại sau này
- Khả năng tái sử dụng cũng như tận dụng các 3rd modules
- Nạp từng phần ứng dụng sẽ nhanh hơn là buộc phải nạp toàn bộ ứng dụng vào rồi mới chạy.

Trong AngularJS, module được hỗ trợ trong khai báo ng-app bên cạnh khai báo nó trong mã nguồn script của bạn, dưới đây là một template chuẩn của angular sử dụng modules.
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i>
<i>&lt;html ng-app="ExampleModule"&gt;</i>
<i>&lt;head&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    &lt;div&gt;</i>
<i>        Hello, Angular's Module!</i>
<i>    &lt;/div&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
<strong>script.js</strong>
<blockquote>var app = angular.module('ExampleModule', []);</blockquote>
ng-app = "ExampleModule": Khai báo một angular app là module, sử dụng ExampleModule được khai báo trong script.

Trong script, angular.module() là hàm khai báo cho module. cặp dấu ngoặc [ ] chính là mảng các module sẽ được nạp chung vào để chạy chung với ứng dụng (module chính được khai báo trong ng-app) ví dụ:
<em>var app = angular.module('ExampleModule', ['ngRoute', 'ngBootstrap']);</em>

<strong>2. Controller trong module.</strong> Trong ví dụ trên chúng ta đã thấy việc khai báo module như thế nào, vậy controller khi ứng dụng sẽ được khai báo như thế nào. Xem ví dụ duới đây:
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i>
<i>&lt;html ng-app="ExampleModule"&gt;</i>
<i>&lt;head&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    &lt;div ng-controller="ExampleCtrl"&gt;</i>
<i>        Hello, {{ name }}!</i>
<i>    &lt;/div&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
<strong>script.js</strong>
<blockquote>var app = angular.module('ExampleModule', []); app.controller('ExampleController', function($scope) { $scope.name = 'World'; });</blockquote>
Method .controller của module sẽ đóng vai trò khai báo thêm một controller cho module. Hàm đại diện cho controller được khai báo bình thường giống như controller khai báo bên ngoài module
<strong>3. Tổ chức của một ứng dụng thực tế</strong>
Thông thường thì tổ chức một ứng dụng thực tế sẽ được khởi tạo như sau:
<blockquote>├── index.html
├── css
│ └── style.css
└── scripts
...├── module_1.js
...├── module_2.js
...├── module_3.js
...└── main.js</blockquote>
<em>index.html</em> chính là html documents
<em>style.css</em> chính là mã nguồn css cho document
<em>main.js</em> chính là mã nguồn cho module chính
Các files js khác là các modules được module chính sử dụng, như vậy template của chúng ta sẽ được khai báo lại như sau:
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i>
<i>&lt;html ng-app="ExampleModule"&gt;</i>
<i>&lt;head&gt;</i>
<i>    &lt;link rel="stylesheet" href="css/style.css"&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="</i><span style="color: #ff6600;"><i>scripts/module_01.js</i></span><i>"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="</i><span style="color: #ff6600;"><i>scripts/module_02.js</i></span><i>"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="</i><span style="color: #ff6600;"><i>scripts/module_03.js</i></span><i>"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="main.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    &lt;div ng-controller="ExampleCtrl"&gt;</i>
<i>        Hello, Angular's Module!</i>
<i>    &lt;/div&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
<strong>main.js</strong>
<blockquote><i>var app = angular.module('ExampleModule', ['Module1', 'Module2', 'Module3']);</i>
<i>app.controller('ExampleController', function($scope) {</i>
<i>    $scope.name = 'World';</i>
<i>});</i>
<i> </i></blockquote>
<strong>IV. Template &amp; View &amp; Route</strong>
<strong>1. Template</strong>
Đôi lúc trong quá trình xây dựng hệ thống, file HTML trở nên phức tạp để giải quyết vấn đề này ta cần chia thành nhiều phần khác nhau, AngularJS cung cấp cho chúng ta một giải pháp hữu ích đó là template. Trong Angular, chúng ta có 2 cách để tạo một template:
- Dùng file ngoài: Chúng ta có thể dùng thêm một file html bên ngoài để làm template cho file chính, ví dụ:
<strong>message.html</strong>
<i>&lt;h3&gt;Hello, {{name}}!&lt;/h3&gt;</i>

- Dùng script Chúng ta có thể tích hợp thẳng template vào file hiện hành thông qua thẻ script với type là text/ng-template
<blockquote><i>&lt;script type="text/ng-template" id="message.html"&gt;</i>
<i>    &lt;h3&gt;Hello, {{name}}!&lt;/h3&gt;</i>
<i>&lt;/script&gt;</i></blockquote>
<strong>2. Cách sử dụng template.</strong>
Có nhiều cách để sử dụng template, tuy nhiên trong AngularJS có 2 cách thông dụng nhất để dùng template đó là ng-include và ngRoute (sẽ nói ở phần sau), ví dụ:
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i>
<i>&lt;html ng-app="ExampleModule"&gt;</i>
<i>&lt;head&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    &lt;div ng-controller="ExampleCtrl"&gt;</i>
<i>        &lt;input type="text" ng-model="name"&gt;</i>
<i>        &lt;div ng-include src="template_name"&gt;&lt;/div&gt;</i>
<i>    &lt;/div&gt;</i>
<i>    &lt;script type="text/ng-template" id="message.html"&gt;</i>
<i>        &lt;h3&gt;Hello, {{name}}!&lt;/h3&gt;</i>
<i>    &lt;/script&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i>
<i>var app = angular.module('ExampleModule', []);</i>
<i>app.controller('ExampleCtrl', function($scope) { $scope.template_name = 'message.html'; $scope.name = 'World'; });</i></blockquote>
<strong>3. Views &amp; Route</strong>
Đôi khi trong một trang, nhiều khi chúng ta chỉ muốn hiển thị một phần HTML ứng với mỗi chức năng cụ thể mà ta không cần chuyển đổi trang, Angular là một full-stack framework hiệu quả giúp chúng ta có thể làm được việc này nhanh chóng và dễ dàng. Để làm việc này thì bạn cần gọi và sử dụng một extends module của angular là ngRoute
<strong>index.html</strong>
<blockquote><i>&lt;!doctype html&gt;</i>
<i>&lt;html ng-app="ExampleModule"&gt;</i>
<i>&lt;head&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="http://code.angularjs.org/1.2.12/angular-route.min.js"&gt;&lt;/script&gt;</i>
<i>    &lt;script src="script.js"&gt;&lt;/script&gt;</i>
<i>&lt;/head&gt;</i>
<i>&lt;body&gt;</i>
<i>    &lt;div ng-view&gt;&lt;/div&gt;</i>
<i>    &lt;script type="text/ng-template" id="message.html"&gt;</i>
<i>        &lt;input type="text" ng-model="name"&gt;</i>
<i>        &lt;h3&gt;Hello, {{ name }}!&lt;/h3&gt;</i>
<i>    &lt;/script&gt;</i>
<i>    &lt;script type="text/ng-template" id="another.html"&gt;</i>
<i>        &lt;input type="text" ng-model="name"&gt;</i>
<i>        &lt;h3&gt;Chào, {{ name }}&lt;/h3&gt;</i>
<i>    &lt;/script&gt;</i>
<i>&lt;/body&gt;</i>
<i>&lt;/html&gt;</i></blockquote>
<strong>script.js</strong>
<blockquote><i>var app = angular.module('ExampleModule', ['ngRoute']);</i>
<i>app.config(function($routeProvider, $locationProvider) {</i>
<i>    $routeProvider.when('/message', {</i>
<i>        templateUrl: 'message.html',</i>
<i>        controller: 'MessageCtrl'</i>
<i>    });</i>
<i>    $routeProvider.when('/another', {</i>
<i>        templateUrl: 'another.html',</i>
<i>        controller: 'AnotherCtrl'</i>
<i>    });</i>
<i>    $routeProvider.otherwise({</i>
<i>        redirectTo: '/message'</i>
<i>    });</i>
<i>});</i>
<i>app.controller('MessageCtrl', function($scope) {</i>
<i>    $scope.name = 'World';</i>
<i>});</i>
<i>app.controller('AnotherCtrl', function($scope) {</i>
<i>    $scope.name = 'Sky';</i>
<i>});</i>
app.controller('MessageCtrl', function($scope) {
$scope.name = 'World';
});
app.controller('AnotherCtrl', function($scope) {
$scope.name = 'Sky';
});</blockquote>
<em>ng-view</em> đánh dấu vị trí view, nơi sẽ thể hiện template trọng document
<em>ngRoute</em> là module hỗ trợ routing url cho angular
<em>app.config</em> là method cho phép khai báo các Controller, View tương ứng với url
<em>$routeProvider.otherwise</em> xử lý cho route mặc định

<strong>V. Factory &amp; Service</strong>
Với Javascript các bạn thấy rằng việc code hướng đối tượng, đóng gói và tái sử dụng ở nơi khác là vấn đề khá khó khăn, dưới đây sẽ trình bày cách thức tạo một factory/service/value để có thể tái sử dụng lẫn nhau hoặc trong một controller/directive, đây cũng là một đặc tính được hỗ trợ rất tốt với AngularJS

<strong>File main</strong> : nơi nắm giữ những Dependency Injector lấy từ các thư viện khác, chứa config route để định hướng view xuất hiện
<blockquote><i>var app = angular.module("WebApp", ["ngRoute", "ngResource"]).</i>
<i>    config(function ($routeProvider) {</i>
<i>        $routeProvider.</i>
<i>            when('/', { controller: 'StockCtrl', templateUrl: 'AppView/home.html' }).</i>
<i>            when('/stock', { controller: 'StockCtrl', templateUrl: 'AppView/stock.html' }).</i>
<i>            when('/branch', { controller: 'BranchCtrl', templateUrl: 'AppView/Branch.html' }).</i>
<i>            when('/stockpro', { controller: 'stockPros', templateUrl: 'AppView/StockPro.html' }).</i>
<i>            otherwise({ redirectTo: '/' });</i>
<i>    });</i></blockquote>
<strong>Factory/Service</strong> : Xây dựng các đối tượng để tái sử dụng ở nơi khác
<blockquote><i>(function(ng) {</i>
<i>    'use strict';</i>
<i>    var serviceId = 'serviceApiHelper';</i>
<i>    ng.module('WebApp').factory(serviceId, ['$http', '$resource', serviceApiHelper]);</i>
<i>    function serviceApiHelper($http,$resource) {</i>
<i>        var factory = {</i>
<i>            getResource: getResource</i>
<i>        };</i>
<i>        return factory;</i>
<i>        function getResource(type) {</i>
<i>            return $resource('api/' + type + '/:id', { id: '@id' }, { 'update': { method: 'PUT' } }, { 'query': { method: 'GET',isArray:false } });</i>
<i>        }</i>
<i>    }</i>
<i>})(angular);</i>
<i> </i></blockquote>
<strong>ViewModel/Controller</strong> tuỳ theo Pattern , tái sử dụng lại Factory vừa tạo
<blockquote><i>(function (ng) {</i>
<i>    'use strict';</i>
<i>    var controllerId = 'stockPros';</i>
<i>    ng.module('WebApp').controller(controllerId, ['serviceApiHelper', stockPros]);</i>
<i>    function stockPros(serviceApiHelper) {</i>
<i>        var vm = this;</i>
<i>        vm.stocks = [];</i>
<i>        initialize();</i>
<i>        /*Hiện thực*/</i>
<i>        function initialize() {</i>
<i>            getStocks();</i>
<i>        }</i>
<i>        function getStocks() {</i>
<i>            return serviceApiHelper.getResource('StockPro').query(function(data) {</i>
<i>                return vm.stocks = data;</i>
<i>            });</i>
<i>        }</i>
<i>    }</i>
<i>})(angular);</i>
<i> </i></blockquote>
<strong>View</strong> : sẽ hiển thị và mapping thuộc tính của ViewModel
<blockquote><i>&lt;h2&gt;Đây là trang chủ&lt;/h2&gt;</i>
<i>&lt;div ng-controller="stockPros as vm" &gt;</i>
<i>&lt;table class="table table-striped table-condensed table-hover" &gt;</i>
<i>    &lt;thead&gt;</i>
<i>        &lt;th&gt;Tên kho&lt;/th&gt;</i>
<i>        &lt;th&gt;Mã kho&lt;/th&gt;</i>
<i>    &lt;/thead&gt;</i>
<i>    &lt;tbody&gt;</i>
<i>        &lt;tr ng-repeat="todo in vm.stocks"&gt;</i>
<i>            &lt;td&gt;{{todo.StockName}}&lt;/td&gt;</i>
<i>            &lt;td&gt;{{todo.StockCode}}&lt;/td&gt;</i>
<i>        &lt;/tr&gt;</i>
<i>    &lt;/tbody&gt;</i>
<i>&lt;/table&gt;</i>
<i>&lt;/div&gt;</i></blockquote>
Tài liệu tham khảo:
https://github.com/shyamseshadri/angularjs-book
http://angularjs.org
http://docs.angularjs.org/tutorial
http://docs.angularjs.org/api
http://docs.angularjs.org/guide
