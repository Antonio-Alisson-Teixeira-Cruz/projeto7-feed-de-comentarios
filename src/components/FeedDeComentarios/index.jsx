import { useState } from "react"
import FormularioComentario from "../FormularioComentario"
import ListaComentarios from "../ListaComentarios"
import './style.css'

export default function FeedDeComentarios () {
    
    const [name, setName] = useState('')
    const [content, setContent] = useState('') 
    const [comments, setComments] = useState([])

    const sendComment = () => {
        setComments([...comments,{name: name,content: content}])
        setContent('')
        setName('')
    }

    const getName = (e) => {
        setName(e.target.value)
    }

    const getContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className="container">

            <h1 className="project-name">Projeto 3: Feed de Comentários</h1>

            <div className="content">
                <h2 className="title">Feed de Comentários</h2>
                    <FormularioComentario 
                        getName={getName}
                        userName={name}
                        getContent={getContent}
                        commentText={content} 
                        sendFunc={sendComment}
                    />


                    <ListaComentarios commentsList={comments} />
            </div>
        </div>
  )
}