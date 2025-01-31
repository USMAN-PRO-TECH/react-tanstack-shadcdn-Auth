import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '@/app/_pages/home/page'
export const Route = createLazyFileRoute('/_private/')({
  component: HomePage,
})
