import {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import clsx from 'clsx'

import tailwindStyles from '~/tailwind.css?url'
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from '~/utils/theme-provider'
import { getThemeSession } from '~/utils/theme.server'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
]

export const meta: MetaFunction = () => [
  {
    title: 'Coders51 Blog',
  },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const themeSession = await getThemeSession(request)

  return json({
    theme: themeSession.getTheme(),
  })
}

function Layout() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html
      lang="en"
      className={clsx(
        theme ?? '',
        'min-h-screen bg-lightBg bg-gradientLight transition-colors duration-300 dark:bg-darkBg dark:bg-gradientDark',
      )}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ThemeBody ssrTheme={Boolean(data.theme)} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <Layout />
    </ThemeProvider>
  )
}
