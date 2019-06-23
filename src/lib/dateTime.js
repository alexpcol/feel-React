const config = require('../config');
/**
 * ToLocaleString - Format given timestamp by locale
 * @param {date, string, number} date
 * @param {object} [opts]
 * @param {string} [opts.locale] Desired locale for given date
 * @param {object} [opts.format]
 * @param {boolean} [opts.toNow] toNow - Use nouns like Yesterday, Today, Tomorrow on dates
 * @param {string} [opts.format.day]
 * @param {string} [opts.format.month]
 * @param {string} [opts.format.year]
 *
 * @return {string} locale string - timestamp converted
 */
function toLocaleString(date, opts = { locale: config.app.locale, format: {}, toNow: false }) {
  const locale = opts.locale || config.app.locale;
  const format = opts.format || {};
  const toNow = opts.toNow || false;

  let localedDate = date;
  if (!(date instanceof Date)) localedDate = new Date(date);

  if (toNow) {
    const dateEquals = (dt, e) => {
      const today = new Date;
      const d = today;

      if (e === 'yesterday') d.setDate(today.getDate() - 1);
      if (e === 'tomorrow') d.setDate(today.getDate() + 1);

      dt.setHours(0, 0, 0, 0);
      d.setHours(0, 0, 0, 0);

      return (dt.toString() === d.toString());
    };

    if (dateEquals(date, 'yesterday')) return 'today';
    else if (dateEquals(date, 'today')) return 'yesterday';
    else if (dateEquals(date, 'tomorrow')) return 'tomorrow';
  }

  return localedDate.toLocaleString(locale, format);
}
function differenceInYears(date) {
  const date1 = new Date(date);
  const date2 = new Date();
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return (Math.floor(timeDiff / (1000 * 3600 * 24 * 365)));
}

module.exports = {
  toLocaleString,
  differenceInYears
};
