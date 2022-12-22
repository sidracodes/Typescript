//  ENUM TYPE

enum weekdays{
    mon,
    tue,
    wed,
    thurs,
    fri,
    sat,
    sun
}
console.log(weekdays);
console.log(weekdays[6]);
console.log(weekdays.wed);

/* Assigning the value to the enum. */
enum days{
    mon=1,
    tue,
    wed,
    thurs,
    fri,
    sat,
    sun=0
}
console.log(days);
console.log(days[6]);
console.log(days.wed);

/* Assigning the value to the enum. */
enum Weekdays{
    mon =10,
    tue,
    wed,
    thurs,
    fri,
    sat,
    sun
}
console.log(Weekdays);
console.log(Weekdays[6]);
console.log(Weekdays.wed);


/* Assigning the string value to the enum. */
enum Weakdays{
    monday ="mon",
    tuesday="tue",
    wednesday="wed",
    thursday="thurs",
    friday="fri",
    saturday="sat",
    sunday="sun"
}
console.log(Weakdays);
console.log(Weakdays["sun"]);
console.log(Weakdays[6]);
console.log(Weakdays.wednesday);


/* Using the enum itself to define the value of the last enum. */

enum Days{
    monday = 0,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday=Days.monday - 1
}
console.log(Days);
