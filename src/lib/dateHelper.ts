import {
  add,
  differenceInCalendarDays,
  format,
  formatDistance,
  intlFormatDistance,
} from "date-fns";

const displayDate = () => {
  const today = new Date();
  const fdate = format(today, "dd-MM-yyyy");
  const newDate = add(today, {
    years: 5,
  });
  const result = differenceInCalendarDays(
    new Date(2012, 6, 2, 0, 0),
    new Date(2011, 6, 2, 23, 0)
  );

  console.log(result);
};

export default displayDate;
