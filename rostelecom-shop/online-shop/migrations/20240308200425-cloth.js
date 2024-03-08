/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const collections = ['street', 'black', 'casual', 'orange', 'line']
const colors = ['purpure', 'yellow', 'orange', 'black', 'white']
const compositions = ['cotton', 'synthetics', 'polyester']
const clothTypes = ['t-shirts', 'long-sleeves', 'hoodie', 'outerwear']
const images = [
  '/img/clothes/cloth-hoodie-1.png',
  '/img/clothes/cloth-long-sleeves-1.png',
  '/img/clothes/cloth-long-sleeves-2.png',
  '/img/clothes/cloth-outerwear-1.png',
  '/img/clothes/cloth-outerwear-2.png',
  '/img/clothes/cloth-t-shirts-1.png',
  '/img/clothes/cloth-t-shirts-2.png',
]
const lineImages = [
  '/img/black-t.png',
  '/img/violet-t.png',
  '/img/orange-t.png',
]
const fabricTypes = [
  'natural',
  'non-natural',
  'mixed',
  'non-woven',
  'stockinette',
]
const features = [
  'breathable material, knitwear',
  'contrasting color',
  'soft fabric',
  'hood, pockets',
]
const collars = [
  'polo',
  'shirt-rack',
  'apache',
  'tangerine',
  'golf',
  'round neck',
]
const sleeves = ['long', 'short']
const seasons = ['demi-season', 'all season']
const upperMaterials = [
  'synthetic material',
  'quilted jacket fabric',
  'eco leather',
  'denim',
]
const liningMaterials = ['taffeta', 'viscose', 'polyester', 'chiffon', 'satin']

module.exports = {
  async up(db, client) {
    return db.collection('cloth').insertMany([
      ...Array(50).map(() => {
        const type = clothTypes[Math.floor(Math.random() * clothTypes.length)]
        const characteristics = {
          type: 't-shirts',
        }
      }),
    ])
  },

  async down(db) {
    return db.collection('cloth').updateMany([])
  },
}
