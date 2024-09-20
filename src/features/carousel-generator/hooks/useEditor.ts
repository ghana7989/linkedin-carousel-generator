import { useContext } from 'react'
import { EditorContext } from '../context/EditorContext'

export const useEditor = () => {
	const context = useContext(EditorContext)
	if (context === undefined) {
		throw new Error('useEditor must be used within an EditorProvider')
	}
	return context
}
