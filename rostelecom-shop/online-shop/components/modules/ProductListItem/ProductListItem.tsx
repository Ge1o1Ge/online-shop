import Link from 'next/link'
import Image from 'next/image'

import { useLang } from '@/hooks/useLang'
import { IProductListItem } from '@/types/modules'
import ProductSubtitle from '@/components/elements/ProductSubtitle'

import styles from '@/styles/product-list-item/index.module.scss'
import stylesForAd from '@/styles/ad/index.module.scss'
import { formatPrice } from '@/lib/utils/common'
import ProductLabel from './ProductLabel'

const ProductListItem = ({ item, title }: IProductListItem) => {
  const { lang, translations } = useLang()
  const isTitleForNew = title === translations[lang].main_page.new_title

  return (
    <>
      {item.characteristics.collection === 'line' && item.type == 't-shirts' ? (
        <li className={styles.list__item_ad}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_ad__inner}
          >
            <span className={`${stylesForAd.ad} ${styles.list__item_ad__ad}`}>
              {translations[lang].common.ad}
            </span>
            <ProductSubtitle
              subtitleClassName={styles.list__item_ad__subtitle}
              subtitleRectClassName={styles.list__item_ad__subtitle__rect}
            />
            <div className={styles.list__item_ad__img}>
              <Image src={item.images[0]} alt={item.name} />
            </div>
            <p className={styles.list__item_ad__title}>
              <span>
                {translations[lang].main_page.tShirt} line{' '}
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  translations[lang].main_page[
                    item.images[0].split('/img/').join('').split('-')[0]
                  ]
                }
              </span>
              <span>{formatPrice(+item.price)} Р</span>
            </p>
          </Link>
        </li>
      ) : (
        <li className={styles.list__item}>
          {title ? (
            <span
              className={`${styles.list__item__label}
               ${isTitleForNew ? styles.list__item__new : styles.list__item__bestseller}`}
            >
              {isTitleForNew
                ? translations[lang].main_page.is_new
                : translations[lang].main_page.is_bestseller}
            </span>
          ) : !item.isNew && !item.isBestseller ? (
            ''
          ) : (
            <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
          )}
        </li>
      )}
    </>
  )
}

export default ProductListItem
