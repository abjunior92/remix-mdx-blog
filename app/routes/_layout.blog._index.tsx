import { LoaderFunction, TypedResponse, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { PostMeta, getPosts } from '~/.server/posts'
import Post from '~/components/Post'

export const loader: LoaderFunction = async (): Promise<
  TypedResponse<PostMeta[]>
> => {
  return json(await getPosts())
}

export default function Blog() {
  const posts = useLoaderData() as PostMeta[]

  return (
    <div>
      <h1>C51 👽 Articles</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
