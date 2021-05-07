import moment from 'moment';

export const dateFormatting = (date: string) => {
  return moment(date).format('DD.MM.YYYY');
};
