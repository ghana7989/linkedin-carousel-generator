import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Session } from '@supabase/supabase-js'
import { LinkedinIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import supabase from '../../../shared/supabase'

export default function Login() {
	const [session, setSession] = useState<Session | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])
	const handleLinkedInLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: 'linkedin_oidc',
			options: {
				redirectTo: 'http://localhost:5173/',
			},
		})
	}

	useEffect(() => {
		if (session) {
			window.location.href = '/home'
		}
	}, [session])

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<Card className='w-[350px]'>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Choose your login method</CardDescription>
				</CardHeader>
				{/* <CardContent>
				</CardContent> */}
				<CardFooter>
					<Button
						variant='outline'
						className='w-full'
						onClick={handleLinkedInLogin}
					>
						<LinkedinIcon className='mr-2 h-4 w-4' />
						Login with LinkedIn
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
