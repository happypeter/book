export const getImgUrl = book => {
  return `https://raw.githubusercontent.com/${book.github}/${
    book.id
  }/master/img/cover.png`
}
