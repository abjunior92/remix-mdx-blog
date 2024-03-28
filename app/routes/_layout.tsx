import {
  ArrowLeftCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/16/solid'
import { Link, Outlet, useLocation } from '@remix-run/react'
import { FacebookIcon } from '~/icons/FacebookIcon'
import { LinkedinIcon } from '~/icons/LinkedinIcon'
import { TwitterIcon } from '~/icons/TwitterIcon'
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
    <div className="flex flex-col items-center justify-center">
      <div className="prose prose-indigo w-full pt-10 lg:prose-xl dark:prose-sky dark:prose-invert marker:text-black prose-a:underline-offset-2 prose-blockquote:border-l-coders51 prose-code:text-white dark:marker:text-white prose-blockquote:dark:border-l-white">
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
              className="flex w-fit items-center space-x-2 no-underline"
              unstable_viewTransition
            >
              <ArrowLeftCircleIcon className="h-6 w-6 transition duration-300 hover:scale-110" />{' '}
              <span>Articles</span>
            </Link>
          )}

          <Outlet />
        </div>
      </div>
      <div className="mx-auto flex items-center space-x-4 pb-10">
        <LinkedinIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
    </div>
  )
}
