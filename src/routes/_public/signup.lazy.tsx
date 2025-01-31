import { createLazyFileRoute } from '@tanstack/react-router'
import SignupPage from '@/app/auth/signup/page'

export const Route = createLazyFileRoute('/_public/signup')({
  component: SignupPage,
})
