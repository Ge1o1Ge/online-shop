'use client'
import Logo from '@/components/elements/Logo'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import Menu from './Menu'
import { openMenu } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'

const Header = () => {
  const { lang, tarnslations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {tarnslations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
