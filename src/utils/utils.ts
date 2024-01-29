import dayJS from "dayjs";

export const dateFormatter = ({ seconds, nanoseconds }: any) => {
  const dateObj = new Date(seconds * 1000 + nanoseconds / 1000000);
  const date = dayJS(dateObj);
  return date.format("MMM DD, YYYY");
};
