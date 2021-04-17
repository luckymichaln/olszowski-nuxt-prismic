export default (doc) => {
  console.log(doc, 'doc')
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'project') {
    return `/${doc.uid}`
  }

  return '/not-found'
};
