import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type DateType = string | number | Date | dayjs.Dayjs | null;

export const initializeLocale = () => {
  dayjs.locale('ko');
};

export const format = (date?: DateType, template?: string): string => (date ? dayjs(date).format(template) : '');

export const formatDate = (date?: DateType): string => format(date, 'YYYY-MM-DD');

export const formatDateTime = (date?: DateType): string => format(date, 'YYYY-MM-DD HH:mm');
