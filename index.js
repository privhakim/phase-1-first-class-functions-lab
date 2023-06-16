// Code your solution in this file!
const returnFirstTwoDrivers = function() {
 return  drivers.slice(0, 1);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2, 3);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = function(Multiplier) {
    return function(fare) {mkjuj
    return fare* multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversSelector) {
    return driversSelector(drivers);
};
