export interface Theme {
	name: string
	colors: string[]
	background: string
	title: string
	subtitle: string
}

export interface Slide {
	id: number
	title: string
	subtitle: string
	checked: boolean
}
