// var House = function(sqFeet, bathrooms, bedrooms) {
//   this.sqFeet = sqFeet;
//   this.bathrooms = bathrooms;
//   this.bedrooms = bedrooms;
//   this.numberOfRooms = function() {
//     return(this.bathrooms + this.bedrooms);
//   }
// };

// var house1 = new House(1000, 3, 4);
// var house2 = new House(2000, 4, 5);

// console.log( house1.sqFeet );
// console.log( house2.bedrooms );

// console.log( house1.numberOfRooms() );
// console.log( house2.numberOfRooms() );

var Office = function(desks, meetingRooms) {
  this.desks = desks;
  this.meetingRooms = meetingRooms;

  this.averageDesksPerMeetingRoom = function() {
    return this.desks / this.meetingRooms;
  };
};

var office1 = new Office(100, 10);
var office2 = new Office(2, 2);

console.log(office1);
console.log(office1.averageDesksPerMeetingRoom());