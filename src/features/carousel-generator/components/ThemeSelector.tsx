import { useEditor } from '../hooks/useEditor'

export default function ThemeSelector() {
	const { themes, currentTheme, setCurrentTheme } = useEditor()

	return (
		<div className='mt-6'>
			<h3 className='text-lg font-semibold mb-2'>Select Theme</h3>
			<div className='grid grid-cols-3 md:grid-cols-4 gap-2'>
				{themes.map((theme) => (
					<button
						key={theme.name}
						onClick={() => setCurrentTheme(theme)}
						className={`p-1 rounded ${
							currentTheme.name === theme.name ? 'ring-2 ring-blue-500' : ''
						}`}
						title={theme.name}
					>
						<div className='flex h-4 md:h-6 w-full rounded overflow-hidden'>
							{theme.colors.map((color, index) => (
								<div
									key={index}
									className='flex-1'
									style={{ backgroundColor: color }}
								/>
							))}
						</div>
					</button>
				))}
			</div>
		</div>
	)
}
