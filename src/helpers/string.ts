export function truncateWithPeriod(text: string, limit: number) {
  if (text.length <= limit) {
    return text;
  }

  const truncatedText = text.slice(0, limit);
  const lastPeriodIndex = truncatedText.lastIndexOf('.');

  if (lastPeriodIndex !== -1) {
    return truncatedText.slice(0, lastPeriodIndex + 1);
  }

  return truncatedText;
}
