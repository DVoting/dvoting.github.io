export const UTIL = "UTIL";

export const convertToUnixTimeStamp = (date) => {
  if (!date) return null;
  const timestamp = Math.floor(date.getTime() / 1000);

  return timestamp;
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const transformDataForPie = (data) => {
  let transformedData = [];

  if (!data) return transformedData;

  data?.forEach(({ id, name, nVote }) => {
    let element = {
      title: name,
      value: +nVote,
      id,
      color: getRandomColor(),
    };

    transformedData.push(element);
  });

  return transformedData;
};
