export interface ObjectType {
  [key: string]: any  // eslint-disable-line
}

export interface Class<T> {
  new(...args: any): T  // eslint-disable-line
}

export interface OptionsType {
  htmlTag?: string
  hlClass?: string
  matchAll?: boolean
  caseSensitive?: boolean
}

export interface UtilsType {
  validate: {
    highlight(text: string, query: string, option?: OptionsType): void
    options(options: OptionsType): void
  }
  getOptions(options: OptionsType): OptionsType
}

export interface SearchTextHLType {
  highlight: (text: string, query: string, options?: OptionsType) => string
}