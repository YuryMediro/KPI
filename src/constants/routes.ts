export const ROUTES = {
  HOME: "/",
  BOOKS: "/books",
  ABOUT: "/about",
  API: "/api/data",
  RENDER_PROPS: "/render-props",
};

export const ROTES_LABEL = {
  [ROUTES.HOME]: "Home",
  [ROUTES.BOOKS]: "Books (SSR)",
  [ROUTES.ABOUT]: "About (SSG)",
  [ROUTES.API]: "Test API",
  [ROUTES.RENDER_PROPS]: "Render Props",
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
  {
    path: ROUTES.RENDER_PROPS,
    label: ROTES_LABEL[ROUTES.RENDER_PROPS],
  },
];
