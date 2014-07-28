angular.module('shopping',[])
      .value('shopping_cart_operations',{
        items : [
          {Name: "Soap", Price: "25", Quantity: "10"},
          {Name: "Shaving cream", Price: "50", Quantity: "15"},
          {Name: "Shampoo", Price: "100", Quantity: "5"}
          ],
        addItem: function(item){
          this.items.push(item);
        },
        totalPrice: function(){
          var total = 0;
          for(count=0;count<this.items.length;count++){
            total += this.items[count].Price*this.items[count].Quantity;
          }
          return total;
        },
        removeItem: function(index){
          this.items.splice(index,1);
        }
        
      })
      .filter('rupee',function(){
        return function(item){
          return "Rs. "+item;
        }
      })
      .directive('validPrice',function(){
        return{
          require: "ngModel",
          link: function(scope, elm, attrs, ctrl){
            
            var regex=/^\d{2,4}(\.\d{1,2})?$/;
            ctrl.$parsers.unshift(function(viewValue){
              var floatValue = parseFloat(viewValue);
              if( floatValue >= 50 && floatValue <=5000 && regex.test(viewValue)){
                ctrl.$setValidity('validPrice',true);
                //return viewValue;
              }
                            else{
                  ctrl.$setValidity('validPrice',false);
                            }
              return viewValue;
            });
          }
        };
      });
  
  function ShoppingCartCtrl($scope,shopping_cart_operations)  {
    $scope.items = shopping_cart_operations.items;
    $scope.item = {};

    $scope.addItem = function(item) {
      shopping_cart_operations.addItem(item);
      $scope.item = {}; 
      $scope.itemForm.$setPristine();
    };
    
    $scope.totalPrice = shopping_cart_operations.totalPrice;
    
    $scope.removeItem = function(index){
      shopping_cart_operations.removeItem(index);
    };
    
    $scope.mySortFunction = function(item) {
      if(isNaN(item[$scope.sortExpression]))
        return item[$scope.sortExpression];
      return parseInt(item[$scope.sortExpression]);
    };
    
    $scope.name=/^[a-zA-Z ]*$/;
    
        $scope.integerval=/^\d*$/;
  }