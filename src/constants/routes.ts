export const ROUTES = {
  HOME: "/",
  BOOKS: "/books",
  ABOUT: "/about",
  API: "/api/data",
};

export const ROTES_LABEL = {
  [ROUTES.HOME]: "Home",
  [ROUTES.BOOKS]: "Books (SSR)",
  [ROUTES.ABOUT]: "About (SSG)",
  [ROUTES.API]: "Test API",
};

export const NAV_ITEMS = [
  {
    path: ROUTES.HOME,
    label: ROTES_LABEL[ROUTES.HOME],
  },
  {
    path: ROUTES.BOOKS,
    label: ROTES_LABEL[ROUTES.BOOKS],
  },
  {
    path: ROUTES.ABOUT,
    label: ROTES_LABEL[ROUTES.ABOUT],
  },
  {
    path: ROUTES.API,
    label: ROTES_LABEL[ROUTES.API],
  },
];
