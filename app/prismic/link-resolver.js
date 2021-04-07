export default (doc) => {
  if (doc.isBroken) {
    return '/not-found/'
  }

  if (doc.type === 'home_page') {
    return '/'
  }

  if (doc.type === 'project_page') {
    return `/${doc.uid}/`
  }

  return '/not-found/'
};