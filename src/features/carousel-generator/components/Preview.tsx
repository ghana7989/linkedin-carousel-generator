import { useRef } from 'react'
import { useEditor } from '../hooks/useEditor'

export default function Preview() {
	const { slides, currentSlideIndex, currentTheme, userSettings } = useEditor()
	const previewRef = useRef<HTMLDivElement>(null)

	const currentSlide = slides[currentSlideIndex]
	const isFirstOrLastSlide =
		currentSlideIndex === 0 || currentSlideIndex === slides.length - 1

	const showUserInfo =
		userSettings.userImageUrl ||
		userSettings.userName ||
		userSettings.linkedInUsername

	return (
		<div className='relative w-full h-full max-w-[595px] max-h-[842px] overflow-hidden'>
			<div
				ref={previewRef}
				className={`rounded-lg shadow-lg mx-auto relative w-full h-full p-4 md:p-8 flex flex-col justify-between`}
				style={{ backgroundColor: currentTheme.background }}
			>
				<div className='flex flex-col justify-center h-full'>
					{!isFirstOrLastSlide && (
						<div
							className={`w-6 h-6 md:w-8 md:h-8 rounded-full text-white flex items-center justify-center text-xs md:text-sm font-bold mb-2 md:mb-4`}
							style={{ backgroundColor: currentTheme.title }}
						>
							{currentSlideIndex}
						</div>
					)}
					<h1
						className={`font-bold mb-2 md:mb-4 leading-tight text-left text-3xl md:text-5xl font-poppins`}
						style={{ color: currentTheme.title }}
					>
						{currentSlide.title}
					</h1>
					<p
						className={`text-left text-base md:text-xl font-roboto`}
						style={{ color: currentTheme.subtitle }}
					>
						{currentSlide.subtitle}
					</p>
				</div>
				{showUserInfo && (
					<div className='flex items-center mt-4 md:mt-8'>
						{userSettings.userImageUrl && (
							<img
								src={userSettings.userImageUrl}
								alt={userSettings.userName || 'User'}
								className='w-8 h-8 md:w-12 md:h-12 rounded-full mr-3'
							/>
						)}
						<div>
							{userSettings.userName && (
								<p
									className='text-xs md:text-sm font-bold'
									style={{ color: currentTheme.title }}
								>
									{userSettings.userName}
								</p>
							)}
							{userSettings.linkedInUsername && (
								<p className='text-xs' style={{ color: currentTheme.subtitle }}>
									@{userSettings.linkedInUsername}
								</p>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
