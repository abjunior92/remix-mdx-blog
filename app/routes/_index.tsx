import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Coders51 Blog' },
    { name: 'description', content: 'Welcome to Coders51 blog!' },
  ]
}

export default function Index() {
  return (
    <div>
      <Link to={'/blog'} unstable_viewTransition>
        <h1>Coders51 👽 Blog</h1>
      </Link>
    </div>
  )
}
