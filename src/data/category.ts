export interface Category {
  name: string;
  postCount: number;
}

export function getCategories() {
  const element = document.getElementById('category')!;

  try {
    const categories: Category[] = [
      { name: '전체', postCount: Number(element.querySelector('.link_tit .c_cnt')!.textContent?.replace(/[\D]/g, '')) },
    ];

    const categoryElements = element.querySelectorAll('.category_list .link_item')!;

    Array.from(categoryElements).forEach((categoryElement) => {
      const text = categoryElement.textContent || '';
      const name = text.replace(/\(\d+\)/g, '').trim() || ''; // 증여세 (2) -> 증여세
      const matchedPostCountText = text.match(/\(\d+\)/g);

      categories.push({
        name,
        postCount: matchedPostCountText ? Number(matchedPostCountText[0].replace(/[\D]/g, '')) : 0, // (2) -> 2
      });
    });

    return categories;
  } catch {
    return [];
  }
}
