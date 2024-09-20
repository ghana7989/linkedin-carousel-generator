import axiosInstance from '../../../shared/api/axios'
import { generatePdfHtml } from '../utils/generatePdf'
import { useEditor } from './useEditor'
import { useCallback } from 'react'

export const useEditorApi = () => {
	const { slides, currentTheme, userSettings } = useEditor()
	const handleDownload = useCallback(async () => {
		const previewHtml = generatePdfHtml(slides, currentTheme, {
			userName: userSettings.userName,
			linkedInUsername: userSettings.linkedInUsername,
			userImageUrl: userSettings.userImageUrl,
		})

		try {
			const response = await axiosInstance.post(
				'/tools/generate-pdf',
				{ html: previewHtml },
				{
					responseType: 'blob',
				}
			)

			const blob = new Blob([response.data], { type: 'application/pdf' })
			const url = window.URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.style.display = 'none'
			a.href = url
			a.download = 'slides.pdf'
			document.body.appendChild(a)
			a.click()
			window.URL.revokeObjectURL(url)
		} catch (error) {
			console.error('Error downloading PDF:', error)
		}
	}, [slides, currentTheme, userSettings])

	return { handleDownload }
}
