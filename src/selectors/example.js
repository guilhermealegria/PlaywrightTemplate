export const loginSelectors = {
  heading: (page) => page.getByRole('heading', { name: 'Example Domain' }),
  moreInfoLink: (page) => page.getByRole('link', { name: 'Learn more' })
};
