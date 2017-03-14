(function() {
    function Button($uibButton) {
        function newChatRoom() {
            
            return {
                open_create_room_button: function() {
                    
                },
            };
            
            return $uibButton.open({
                templateUrl: '/templates/button.html',
                controller: function ($scope, $uibButtonInstance) {
                    $scope.cancel = function() {
                        $uibButtonInstance.dismiss('Cancel');
                    };
                },
                size: 'md'
            });
        }
        
        return newChatRoom();
    }
    
    angular
        .module('blocChat')
        .factory('Button', ['$uibButton', Button]);
})();