import LoginPage from '@/app/auth/login/page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/login')({
  component: LoginPage,
})
