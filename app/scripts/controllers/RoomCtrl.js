(function() {
    function RoomsCtrl(Room, $uibButton) {
        this.chatRooms = Room.getRooms().all;
        var vm = this;
        vm.roomService = Room;
        
        this.openButton = function() {
            var Button_instance = $uib.Button.open ({
                templateUrl: '/templates/Button.html',
                controller: function($scope, $uibButtonInstance) {
                    $scope.newRoom = {name: ''};
                    $scope.cancel = function() {
                        $uibButtonInstance.dismiss('cancel');
                    };
                    
                    $scope.create = function() {
                        $uibButtonInstance.close($scope.newRoom);
                    };
                },
                size: 'md',
            });
            
            button_instance.result.then(function(data) {
                vm.roomService.addRoom(data);
            });
        };
        
    };
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', '$uibButton', RoomsCtrl]);
    
})();