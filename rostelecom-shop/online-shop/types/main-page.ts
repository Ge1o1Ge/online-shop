import { StaticImageData } from 'next/image'
import { IProduct } from './common'

export interface IHeroSlide {
  title: string
  image: StaticImageData
  id?: number
}

export interface IMainPageSectionProps {
  title: string
  goods: IProduct[]
  spinner: boolean
}

export type IHeroSlideTooltip = IHeroSlide
