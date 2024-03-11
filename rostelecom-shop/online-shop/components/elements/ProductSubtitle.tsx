import { useLang } from '@/hooks/useLang'
import { IProductSubtitle } from '@/types/elements'

import styles from '@/styles/product-subtitle/index.module.scss'

const ProductSubtitle = ({
  subtitleClassName,
  subtitleRectClassName,
}: IProductSubtitle) => {
  const { lang, translations } = useLang()
  const descriptionsSlicePosition = lang === 'ru' ? 5 : 2

  return (
    <div
      className={`${styles.product_subtitle__subtitle} ${subtitleClassName}`}
    >
      <div
        className={`${styles.product_subtitle__subtitle__rect} ${subtitleRectClassName}`}
      />
      <span>
        {translations[lang].main_page.hero_description.slice(
          0,
          descriptionsSlicePosition
        )}
      </span>
      <br />
      <span>
        {translations[lang].main_page.hero_description.slice(
          descriptionsSlicePosition
        )}
      </span>
    </div>
  )
}

export default ProductSubtitle
