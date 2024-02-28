'use client'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const MobileNavBar = () => {
  const { lang, translations } = useLang()

  return (
    <div className='mobile-navbar'>
      <Link href='/' className='mobile-navbar__btn'>
        {translations[lang].breadcrumbs.main}
      </Link>
      <button className='btn-reset mobile-navbar__btn'>
        {translations[lang].breadcrumbs.catalog}
      </button>
      <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
        {translations[lang].breadcrumbs.favorites}
      </Link>
      <Link href='/cart' className='btn-reset mobile-navbar__btn'>
        {translations[lang].breadcrumbs.cart}
      </Link>
      <button className='btn-reset mobile-navbar__btn'>
        {translations[lang].common.more}
      </button>
    </div>
  )
}

export default MobileNavBar
