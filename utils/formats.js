function formatDate(serial) {
  let utc_days = Math.floor(serial - 25569);
  //console.log(Math.floor(serial - 25569));
  let utc_value = utc_days * 86400;
  let date_info = new Date(utc_value * 1000);

  return date_info.toISOString().slice(0, 10);
}



function formatRun_Time(serial) {
  let hour = Math.floor(serial * 24);
  let minute = Math.floor(Math.abs(serial * 24 * 60) % 60);
  let second = Math.floor(Math.abs(serial * 24 * 60 * 60) % 60);
  hour > 12 ? (hour = hour - 12) : (hour = hour);
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  //console.log(`${hour}:${minute}:${second}`);
  return `${hour}:${minute}:${second}`;
}
formatRun_Time(0.0581481481481482);


function formatRun_Time_hour(serial) {
  let hour = Math.floor(serial * 24);
  let minute = Math.floor(Math.abs(serial * 24 * 60) % 60);
  let second = Math.floor(Math.abs(serial * 24 * 60 * 60) % 60);
  hour > 12 ? (hour = hour - 12) : (hour = hour);
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  //console.log(`${hour}:${minute}`);
  return `${hour}:${minute}`;
}
formatRun_Time_hour(0.0581481481481482);

module.exports = { formatDate, formatRun_Time,  formatRun_Time_hour };
