export interface Category {
  articleCount: number;
  name: string;
}

export function getCategories() {
  const element = document.getElementById('category')!;

  try {
    const categories: Category[] = [
      {
        articleCount: Number(element.querySelector('.link_tit .c_cnt')!.textContent?.replace(/[\D]/g, '')),
        name: '전체',
      },
    ];

    const categoryElements = element.querySelectorAll('.category_list .link_item')!;

    Array.from(categoryElements).forEach((categoryElement) => {
      const text = categoryElement.textContent || '';
      const name = text.replace(/\(\d+\)/g, '').trim() || ''; // 증여세 (2) -> 증여세
      const matchedArticleCountText = text.match(/\(\d+\)/g);

      categories.push({
        articleCount: matchedArticleCountText ? Number(matchedArticleCountText[0].replace(/[\D]/g, '')) : 0, // (2) -> 2
        name,
      });
    });

    return categories;
  } catch {
    return [];
  }
}
