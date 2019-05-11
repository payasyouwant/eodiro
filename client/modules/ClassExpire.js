
export default class ExpireCounter{
    constructor(classOfFloar){
        this.classOfFloar = classOfFloar;
    }

    /**
     * 
     * @param {number} roomId 
     * @param {Date} atDate 
     */
    run(roomId, atDate){
        var roomState = new Object;
        var classOfRoom;
        var classOfRoomOnDay = new Array;
        var atDateByValue;

        // get class array in room
        classOfFloar.forEach(function(item,index){
            if(item['num'] == roomId)
                classOfRoom = item['lectures'];
        });

        // get class array on the day
        var day = atDate.getDay().freeze({"Sun":0,"Mon":1,"Tue":2,"Wed":3,"Thu":4,"Fri":5,"Sat":6});
        classOfRoom.forEach(function(item,index){
            if(item['time']['day'] == day){
               classOfRoomOnDay.push(item);
            }
        });

        // sort classOfRoom
        classOfRoomOnDay.sort(function(classA,classB){
            var valueOfA = parseClassTimeToValue(classA['time']['start']);
            var valueOfB = parseClassTimeToValue(classB['time']['start']);
            return valueOfA-valueOfB;
        });

        // make atTime hour-minute-second to second
        atDateByValue = atDate.getHours()*3600 + atDate.getMinutes()*60 + atDate.getSeconds;
 
        // get next class and assign roomState property
        classOfRoomOnDay.forEach(function(item,index){
            if( atDateByValue < parseClassTimeToValue(item['time']['start'])){
                roomState.nextClassName = item['name'];
                roomState.expireTime = (parseClassTimeToValue(item['time']['start']) - atDateByValue)/60;
                roomState.expireTimeLevel = roomState.expireTime%1800;
            }
        });

        return roomState;
    }

    /**
     * classTime's form is "##:##"
     * return time to second
     * @param {String} classTime 
     */
    parseClassTimeToValue(classTime){
        return parseInt(classTime.substr(0,2))*3600 + parseInt(classTime.substr(3,2)*60);
    }

}