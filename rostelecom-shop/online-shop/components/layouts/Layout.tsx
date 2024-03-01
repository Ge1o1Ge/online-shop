'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useUnit } from 'effector-react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header/Header'
import MobileNavBar from '../modules/MobileNavBar/MobileNavBar'
import SearchModal from '../modules/Header/SearchModal'
import { $SearchModal } from '@/context/modals'
import { handleCloseSearchModal } from '@/lib/utils/common'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($SearchModal)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavBar />}
      <div className='' />
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}
      />
    </>
  )
}

export default Layout
