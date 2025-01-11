export interface MenuItem {
  name: string; // 메뉴 이름
  path: string; // 메뉴 경로
  target?: React.HTMLAttributeAnchorTarget;
}

export function getMenu() {
  const elements = document.querySelectorAll('#menu a') as NodeListOf<HTMLAnchorElement>;

  return Array.from(elements).map(
    (element) =>
      ({
        name: element.textContent,
        path: element.href,
        target: element.target,
      }) as MenuItem,
  );
}
