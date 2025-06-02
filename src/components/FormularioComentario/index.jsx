import './style.css'

export default function FormularioComentario({getName, userName, getContent, commentText, sendFunc}) {
    return (
        <div className='comment-form'>
            <input
            className='input'
            type="text"
            placeholder="Nome do usuário"
            onChange={getName}
            value={userName}
            /> <br />

            <input
            className='input' 
            type="text" 
            placeholder="Escreva um comentário..." 
            onChange={getContent}
            value={commentText}
            /> <br />

            <button className='button' onClick={sendFunc}>Enviar</button>
        </div>
    )
}