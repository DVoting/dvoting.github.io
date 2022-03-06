export const BASE_URL = "https://dvoting-server.vercel.app/api";

// export const BASE_URL = "http://localhost:5000/api";

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};
