import { Avatar } from './Avatar';
import styles from './Post.module.css'

export default function Post(props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/deyvidyury.png" alt="Imagem de perfil" />
                    <div className={styles.authorInfo}>
                        <strong>Deyvid Lopes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="21 de agosto as 16:38" dateTime="2023-08-21 16:38:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                Fala galeraa{' '}👋
                </p>
                <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                👉{' '} <a href=''>jane.design/doctorcare</a>
                </p>
                <p>
                <a href=''>#novoprojeto #nlw #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    );
}