const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 6;
    } else if (day === 'wednesday') {
        return 12;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 10;
    } else if (day === 'saturday') {
        return 5;
    } else if (day === 'sunday') {
        return 3;
    }

    /* switch statement -
            switch (day) {
            case 'monday':
                return 8
                break;
            case 'tuesday':
                return 6
                break;
            case 'wednesday':
                return 12
                break;
            case 'thursday':
                return 5
                break;
            case 'friday':
                return 10
                break;
            case 'saturday':
                return 5
                break;
            case 'sunday':
                return 3
                break;
            default:
                return 'Error!'

        }

     */
};


const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours === idealSleepHours) {
        console.log("You have perfect amount of Sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You hve got more Sleep than needed!")
    } else {
        console.log("You got " + (idealSleepHours - actualSleepHours) +
            " hour(s) less sleep than you need this week. Get some rest!")
    }
}


calculateSleepDebt();