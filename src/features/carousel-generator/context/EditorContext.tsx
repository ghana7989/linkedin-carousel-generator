import React, { createContext, ReactNode, useState } from 'react'
import { Slide, Theme } from '../types'
import { initialSlides, themes } from './initial-data'

interface UserSettings {
	linkedInUrl: string
	userPhoto: string
	showUserPhoto: boolean
	userImageUrl: string
	userName: string
	linkedInUsername: string
}

interface EditorContextType {
	slides: Slide[]
	setSlides: React.Dispatch<React.SetStateAction<Slide[]>>
	currentSlideIndex: number
	setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>
	currentTheme: Theme
	setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>
	themes: Theme[]
	userSettings: UserSettings
	setUserSettings: React.Dispatch<React.SetStateAction<UserSettings>>
}

export const EditorContext = createContext<EditorContextType | undefined>(
	undefined
)

export const EditorProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [slides, setSlides] = useState<Slide[]>(initialSlides)
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const [currentTheme, setCurrentTheme] = useState(themes[0])
	const [userSettings, setUserSettings] = useState<UserSettings>({
		linkedInUrl: '',
		userPhoto: '',
		showUserPhoto: true,
		userImageUrl: '',
		userName: '',
		linkedInUsername: '',
	})

	return (
		<EditorContext.Provider
			value={{
				slides,
				setSlides,
				currentSlideIndex,
				setCurrentSlideIndex,
				currentTheme,
				setCurrentTheme,
				themes,
				userSettings,
				setUserSettings,
			}}
		>
			{children}
		</EditorContext.Provider>
	)
}
