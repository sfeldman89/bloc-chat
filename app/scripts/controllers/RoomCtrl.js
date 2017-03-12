(function() {
    function RoomsCtrl(Room) {
        this.chatRooms = Room.all;
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl]);
    
})();