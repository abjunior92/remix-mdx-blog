import { Link } from '@remix-run/react'

import type { PostMeta } from '~/.server/posts'
import AuthorString from '~/components/AuthorString'
import DateString from '~/components/DateString'

const Post = ({ slug, frontmatter }: PostMeta) => {
  return (
    <article className="space-y-2">
      <Link to={`/blog/${slug}`} unstable_viewTransition>
        <h3 className="line-clamp-2 transition duration-300 hover:text-indigo-600 dark:hover:text-sky-500">
          {frontmatter.title}
        </h3>
      </Link>
      <p className="line-clamp-3">{frontmatter.description}</p>
      <div className="block text-sm text-coders51">
        <DateString dateString={frontmatter.published} />
        {' - '}
        <AuthorString author={frontmatter.author} />
      </div>
    </article>
  )
}

export default Post
