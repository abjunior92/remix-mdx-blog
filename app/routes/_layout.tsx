import {
  ArrowLeftCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/16/solid'
import { Link, Outlet, useLocation } from '@remix-run/react'
import { Theme, useTheme } from '~/utils/theme-provider'

export default function BlogLayout() {
  const location = useLocation()
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    )
  }
  return (
    <div className="flex justify-center">
      <div className="prose-blockquote:border-l-coders51 prose prose-indigo w-full pt-10 lg:prose-xl dark:prose-sky dark:prose-invert marker:text-black prose-code:text-white dark:marker:text-white prose-blockquote:dark:border-l-white">
        <div className="absolute right-10">
          <button
            onClick={toggleTheme}
            className="transition duration-300 hover:scale-110"
          >
            {theme === Theme.DARK ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="px-10 pb-10">
          {location.pathname !== '/blog' && (
            <Link
              to={'/blog'}
              className="flex items-center space-x-2 no-underline"
            >
              <ArrowLeftCircleIcon className="h-6 w-6" /> <span>Articles</span>
            </Link>
          )}

          <Outlet />
        </div>
      </div>
    </div>
  )
}
