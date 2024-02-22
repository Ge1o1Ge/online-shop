'use client'
import { useUnit } from 'effector-react'
import { $lang } from '@/context/lang'
import translationsJSON from '@/public/translations/translations.json'

export const useLang = () => {
  const lang = useUnit($lang)
  const tarnslations = translationsJSON
  return { lang, tarnslations }
}
