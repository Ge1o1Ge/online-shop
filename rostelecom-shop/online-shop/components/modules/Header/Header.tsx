'use client'
import { useLang } from '@/hooks/useLang'
import React from 'react'

const Header = () => {
  const { lang, tarnslations } = useLang()

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {tarnslations[lang].header.menu_btn}
        </button>
      </div>
    </header>
  )
}

export default Header
