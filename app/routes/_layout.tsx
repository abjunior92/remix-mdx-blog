import { Outlet } from '@remix-run/react'

export default function BlogLayout() {
  return (
    <div className="flex justify-center">
      <div className="prose prose-invert lg:prose-xl lg:pt-10">
        <div className="px-36 pb-10 lg:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
