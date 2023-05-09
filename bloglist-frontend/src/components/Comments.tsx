import { blog } from '../interfaces'
import FormComment from './FormComment'

interface bloggo {
  blog: blog
}

const Comments = ({ blog }: bloggo) => {
  const commentsLength: number | undefined = blog?.comments?.length
  return (
    <div className="comments">
      <h3>Comments</h3>

      <FormComment id={blog?.id} />

      {commentsLength === 0 ? (
        <div></div>
      ) : (
        <>
          <ul>
            {blog.comments?.map((comment) => {
              return (
                <li key={comment.id}>
                  <span>{comment.comment}</span> |{' '}
                  <em>
                    <small>{comment.username}</small>
                  </em>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default Comments
