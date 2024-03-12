export interface IProductSubtitle {
  subtitleClassName?: string
  subtitleRectClassName?: string
}

export interface IProductItemActionBtn {
  text: string
  callback?: VoidFunction
  iconClass: string
  withTooltip?: boolean
}

export interface IProductAvaliable {
  vendorCode: string
  inStock: number
}
