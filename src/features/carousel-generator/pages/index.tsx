import Editor from '../components/Editor'
import { EditorProvider } from '../context/EditorContext'

export default function CreateCarousel() {
	return (
		<EditorProvider>
			<Editor />
		</EditorProvider>
	)
}
