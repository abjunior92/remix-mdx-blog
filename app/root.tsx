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
        'dark:bg-darkBg dark:bg-gradientDark bg-lightBg bg-gradientLight min-h-screen',
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
        <meta name="theme-color" content="black-translucent" />
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
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
