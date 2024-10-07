interface User {
  name: string;
  email: string;
}

type Session =
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
      user: null;
    };

const INITIAL_SESSION: Session = {
  isLoggedIn: false,
  user: null,
};

export function getSession() {
  const session: Session = Object.assign({}, INITIAL_SESSION);

  try {
    const toolbarElements = document.querySelectorAll('.menu_toolbar');

    Array.from(toolbarElements).forEach((toolbarElement) => {
      if (toolbarElement.querySelector('.screen_out')?.textContent === '개인정보') {
        const profileElement = toolbarElement.querySelector('.info_profile');

        if (profileElement) {
          session.isLoggedIn = true;
          session.user = {
            name: profileElement.querySelector('.txt_id')!.textContent || '',
            email: profileElement.querySelector('.txt_email')!.textContent || '',
          };
        }
      }
    });

    return session;
  } catch (error) {
    console.error(error);

    return INITIAL_SESSION;
  }
}
