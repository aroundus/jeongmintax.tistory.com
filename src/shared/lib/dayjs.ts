import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type DateType = string | number | Date | dayjs.Dayjs | null;

export const initializeLocale = () => {
  dayjs.locale('ko');
};

export function format(date?: DateType, template?: string) {
  if (typeof date === 'string') {
    // 2024. 10. 2. 22:43 -> ['2024', '10', '2', '22:43']
    const units = date.split('. ');

    if (units.length === 3) {
      return dayjs('1900-01-01 00:00:00')
        .set('year', Number(units[0]))
        .set('month', Number(units[1]))
        .set('day', Number(units[2]))
        .format(template);
    }

    if (units.length === 4) {
      return dayjs('1900-01-01 00:00:00')
        .set('year', Number(units[0]))
        .set('month', Number(units[1]))
        .set('day', Number(units[2]))
        .set('hour', Number(units[3].split(':')[0]))
        .set('minute', Number(units[3].split(':')[1]))
        .format(template);
    }
  }

  return date ? dayjs(date).format(template) : '';
}

export function formatDate(date?: DateType) {
  return format(date, 'YYYY-MM-DD');
}

export function formatDateTime(date?: DateType) {
  return format(date, 'YYYY-MM-DD HH:mm');
}
