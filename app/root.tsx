import { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import tailwindStyles from '~/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
]

export const meta: MetaFunction = () => [{ title: 'Coders51 Blog' }]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="min-h-screen"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        background:
          '#272963; background-image: radial-gradient(at 75.0% 73.0%, #5148a3 0px, transparent 50%),radial-gradient(at 71.0% 97.0%, #108dcc 0px, transparent 50%),radial-gradient(at 4.0% 30.0%, hsl(29, 19%, 54%) 0px, transparent 50%),radial-gradient(at 66.0% 98.0%, #7e18f2 0px, transparent 50%),radial-gradient(at 66.0% 86.0%, #38158f 0px, transparent 50%)',
      }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
