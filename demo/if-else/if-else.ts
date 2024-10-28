const hasTheSkills = true;
const day = "Tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

function approveWork() {
  if (!hasTheSkills) {
    return;
  }

  if (!hasOverTimeHours(hoursWorked, totalOvertime)) {
    return;
  }

  if (isBusyDay(day, holidaySeason)) {
    //
  } else {
    //
  }
}

function isBusyDay(day: string, holidaySeason: boolean): boolean {
  return holidaySeason || day === "Tuesday";
}

function hasOverTimeHours(hoursWorked: number, totalOvertime: number): boolean {
  const hasHours = hoursWorked > 8 && totalOvertime < 1;
  return hasHours;
}
