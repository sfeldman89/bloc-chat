(function() {
    function ButtonCtrl($uibBUtton) {
        this.newChatRoom = function() {
            
            var buttonInstance = $uibButton.open({
                templateUrl: '/templates/button.html',
                controller: function($scope, $uibButtonlInstance) {
                    $scope.cancel = function() {
                        Button.dismiss('Cancel');
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