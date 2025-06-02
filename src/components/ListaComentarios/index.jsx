import './style.css'

export default function ListaComentarios({commentsList}) {
    return(
        <div className='list-session'>
            <h2 className='session-name'>Comentários:</h2>
            {commentsList.map((comments, i) => (
                <div key={i} className='comment-session'>
                    <p className='comment'>{comments.name}: {comments.content}</p>
                </div>
            ))}
        </div>
    )
}