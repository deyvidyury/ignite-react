import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/deyvidyury.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Deyvid Lopes</strong>
                            <time title="21 de agosto as 16:38" dateTime="2023-08-21 16:38:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabens!</p>
                </div>

                <footer>
                    <button>
                       <ThumbsUp size={24} />
                       Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}