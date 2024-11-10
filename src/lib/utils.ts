export function getDayAsString(date: Date) {
	let weekday: String;

	switch (date.getDay()) {
		case 0:
			weekday = "Sun"
			break;
		case 1:
			weekday = "Mon"
			break;
		case 2:
			weekday = "Tue"
			break;
		case 3:
			weekday = "Wed"
			break;
		case 4:
			weekday = "Thu"
			break;
		case 5:
			weekday = "Fri"
			break;
		case 6:
			weekday = "Sat"
			break;
		default:
			weekday = "???"
	}

	return weekday;
}

export function getMonthAsString(date: Date) {
	let month: String;

	switch(date.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
		default:
			month = "???";
	}

	return month;
}

export function dateToString(date: Date) {
	return `${getDayAsString(date)} ${date.getDate()} ${getMonthAsString(date)} ${date.getFullYear()}`
}