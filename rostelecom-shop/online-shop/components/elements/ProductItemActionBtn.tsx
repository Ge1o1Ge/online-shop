import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/product-item-actions-btn/index.module.scss'
import tooltipStyles from '@/styles/tooltip/index.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Toolitip from './Toolitip'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { IProductItemActionBtn } from '@/types/elements'

const ProductItemActionBtn = ({
  text,
  callback,
  iconClass,
  withTooltip = true,
  marginBottom,
}: IProductItemActionBtn) => {
  const [open, setOpen] = useState(false)
  const [tooltipLeft, setTooltipLeft] = useState(0)
  const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>

  const showTooltip = () => setOpen(true)
  const hideTooltip = () => setOpen(false)

  useEffect(() => {
    if (open && withTooltip) {
      setTooltipLeft(tooltipRef.current.clientWidth)
    }
  }, [open, withTooltip])

  return (
    <div className={styles.actions}>
      <button
        className={`btn-reset ${styles.actions__btn} ${styles[iconClass]}`}
        onClick={callback}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ marginBottom: marginBottom || 16 }}
      />
      {withTooltip && (
        <AnimatePresence>
          {open && (
            <motion.div
              className={tooltipStyles.tooltip}
              style={{ left: `-${tooltipLeft + 13}px` }}
              ref={tooltipRef}
              {...basePropsForMotion}
            >
              <Toolitip text={text} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export default ProductItemActionBtn
