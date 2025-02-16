import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type DateType = string | number | Date | dayjs.Dayjs | null;

export const initializeLocale = () => {
  dayjs.locale('ko');
};

export function format(date?: DateType, template?: string) {
  const formattedDate = typeof date === 'string' ? date.replace(/\.$/, '').replace(/\.\s*/g, '/') : date;

  return date ? dayjs(formattedDate).format(template) : '';
}

export function formatDate(date?: DateType) {
  return format(date, 'YYYY-MM-DD');
}

export function formatDateTime(date?: DateType) {
  return format(date, 'YYYY-MM-DD HH:mm');
}
