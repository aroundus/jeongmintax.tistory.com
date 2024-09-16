import symbolmarkIcon from '@/assets/images/icons/symbol-mark.svg';

interface SymbolMark {
  darkModeURL: string;
  lightModeURL: string;
}

export function getSymbolMarkURL(isDarkMode: boolean) {
  const element = document.getElementById('symbolMark')!;

  try {
    const { darkModeURL, lightModeURL } = JSON.parse(element.innerHTML) as SymbolMark;

    return isDarkMode ? darkModeURL : lightModeURL;
  } catch {
    return symbolmarkIcon;
  }
}
