import axiosInstance from '../../../shared/api/axios'
import { generatePdfHtml } from '../utils/generatePdf'
import { useEditor } from './useEditor'
import { useCallback, useState } from 'react'

export const useEditorApi = () => {
	const { slides, currentTheme, userSettings } = useEditor()
	const [isDownloading, setIsDownloading] = useState(false)

	const handleDownload = useCallback(async () => {
		if (isDownloading) return // Prevent multiple simultaneous downloads

		setIsDownloading(true)
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
		} finally {
			setIsDownloading(false)
		}
	}, [slides, currentTheme, userSettings, isDownloading])

	return { handleDownload, isDownloading }
}
