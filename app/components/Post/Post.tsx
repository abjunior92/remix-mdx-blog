import { Link } from '@remix-run/react'

import type { PostMeta } from '~/.server/posts'
import DateString from '~/components/DateString'

const Post = ({ slug, frontmatter }: PostMeta) => {
  return (
    <article className="space-y-2">
      <Link to={`/blog/${slug}`} unstable_viewTransition>
        <h3 className="line-clamp-2">{frontmatter.title}</h3>
      </Link>
      <p className="line-clamp-3">{frontmatter.description}</p>
      <div className="block text-sm text-cyan-200">
        <DateString dateString={frontmatter.published} />
        {' - '}
        <i>{frontmatter.author}</i>
      </div>
    </article>
  )
}

export default Post
