interface Blog {
  title: string; // 블로그 제목
  description: string; // 블로그 설명
  blogger: string; // 블로그 소유자 이름
  imageURL: string; // 블로그 대표 이미지 주소
}

const INITIAL_BLOG: Blog = {
  title: '',
  description: '',
  blogger: '',
  imageURL: '',
};

export function getBlog() {
  const element = document.getElementById('blog')!;

  try {
    return JSON.parse(element.innerHTML) as Blog;
  } catch {
    return INITIAL_BLOG;
  }
}
