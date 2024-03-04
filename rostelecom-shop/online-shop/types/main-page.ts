import { StaticImageData } from 'next/image'

export interface IHeroSlide {
  title: string
  image: StaticImageData
  id?: number
}

export type IHeroSlideTooltip = IHeroSlide
