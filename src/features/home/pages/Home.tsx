import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, Gift, Layout } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PostGeniusLanding() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
									Automate Your LinkedIn Success with Post-Genius
								</h1>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
									Schedule, automate, and optimize your LinkedIn posts. Boost
									your professional presence effortlessly.
								</p>
							</div>
							<div className='space-x-4'>
								<Button>Get Started</Button>
								<Button variant='outline'>Learn More</Button>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
					<div className='container mx-auto px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
							Key Features
						</h2>
						<div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
							<div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
								<Calendar className='h-8 w-8 text-primary' />
								<h3 className='text-xl font-bold'>Smart Scheduling</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
									Optimize post timing for maximum engagement
								</p>
							</div>
							<div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
								<Clock className='h-8 w-8 text-primary' />
								<h3 className='text-xl font-bold'>Auto-Posting</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
									Set it and forget it - we'll post for you
								</p>
							</div>
							<div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
								<Layout className='h-8 w-8 text-primary' />
								<h3 className='text-xl font-bold'>Analytics Dashboard</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
									Track your post performance and grow your audience
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<Gift className='h-12 w-12 text-primary' />
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
								Free Tools
							</h2>
							<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
								Boost your LinkedIn game with our free carousel creator
							</p>
							<Button variant='outline' size='lg' asChild>
								<Link to='/create-carousel'>Create Free Carousel</Link>
							</Button>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
								Ready to Supercharge Your LinkedIn Presence?
							</h2>
							<p className='mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl'>
								Join thousands of professionals using Post-Genius to elevate
								their LinkedIn game.
							</p>
							<div className='w-full max-w-sm space-y-2'>
								<form className='flex space-x-2'>
									<Input
										className='max-w-lg flex-1 bg-primary-foreground text-primary'
										placeholder='Enter your email'
										type='email'
									/>
									<Button type='submit' variant='secondary'>
										Sign Up
									</Button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>
					© 2023 Post-Genius. All rights reserved.
				</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<Link className='text-xs hover:underline underline-offset-4' to='#'>
						Terms of Service
					</Link>
					<Link className='text-xs hover:underline underline-offset-4' to='#'>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}
