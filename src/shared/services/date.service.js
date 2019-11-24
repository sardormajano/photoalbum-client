export const DATE_FORMATS = {
  INPUT: 'YYYY-MM-DD'
};

export const dateService = {
  formatDate(date, format) {
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let day = date.getDate();

    month = month < 10 ? `0${month}` : `${month}`;
    day = day < 10 ? `0${day}` : `${day}`;

    switch (format) {
      case DATE_FORMATS.INPUT:
        return `${year}-${month}-${day}`;
      default:
        return `${month}-${day}-${year}`;
    }
  },

  parseDate(date, format) {
    if (!date) {
      return;
    }

    let year, month, day;

    switch (format) {
      case DATE_FORMATS.INPUT:
        [year, month, day] = date.split('-');
        break;
      default:
        [month, day, year] = date.split('-');
        break;
    }

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  },

  parseToIntDate(date, format) {
    if (!date) {
      return;
    }

    return this.parseDate(date, format).getTime();
  }
};
