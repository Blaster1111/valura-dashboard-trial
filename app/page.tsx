// app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/dashboard')
  // This page component will not render because of the redirect
}