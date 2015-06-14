describe("unit testing myapp", function(){

    beforeEach(angular.mock.module('myapp'));
    
    var controller, scope;

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('SimpleCtrl', { $scope: scope });
    }));

    describe("Test SimpleCtrl", function(){
      it("message should be Hello World", function(){
        expect(scope.message).toEqual("Hello World");
      });

      it("1 + 1 should be 2", function(){
        expect(scope.add(1,1)).toEqual(2);
      })
    });
    
});
