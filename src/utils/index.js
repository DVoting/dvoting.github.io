export const UTIL = "UTIL";

export const convertToUnixTimeStamp = (date) => {
  if (!date) return null;
  const timestamp = Math.floor(date.getTime() / 1000);

  return timestamp;
};
