import { Link, Outlet, useLocation } from '@remix-run/react'

export default function BlogLayout() {
  const location = useLocation()
  return (
    <div className="flex justify-center">
      <div className="prose prose-invert w-full pt-10 lg:prose-xl prose-code:text-white prose-blockquote:dark:border-l-white">
        <div className="px-10 pb-10">
          {location.pathname !== '/blog' && <Link to={'/blog'}>Articles</Link>}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
