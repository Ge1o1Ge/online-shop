import { useLang } from '@/hooks/useLang'
import { IProductListItem } from '@/types/modules'
import styles from '@/styles/product-list-item/index.module.scss'
import Link from 'next/link'

const ProductListItem = ({ item, title }: IProductListItem) => {
  const { lang, translations } = useLang()

  return (
    <>
      {item.characteristics.collection === 'line' && item.type == 't-shirts' ? (
        <li className={styles.list__item_ad}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_ad__inner}
          >
            <span className={`${styles.ad} ${styles.list__item_ad__ad}`}>
              {translations[lang].common.ad}
            </span>
          </Link>
        </li>
      ) : (
        <></>
      )}
    </>
  )
}

export default ProductListItem
