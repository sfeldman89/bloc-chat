(function() {
    function ButtonCtrl($uibButton) {
        this.newChatRoom = function() {
            
            var buttonInstance = $uibButton.open({
                templateUrl: '/templates/button.html',
                controller: function($scope, $uibButtonInstance) {
                    $scope.cancel = function() {
                        Button.dismiss('Cancel');
                    };
                    
                    $scope.create = function() {
                        Button.close();
                    };
                },
                size: 'sm'
            });
        }
    }
    
    
    angular
        .module('blocChat')
        .controller('ButtonCtrl', ['uibButton', ButtonCtrl]);
})();