import styles from './App.module.css'
import './global.css';
import Post from './componets/Post'
import { Header } from './componets/Header'
import { Sidebar } from './componets/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Deyvid" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque ab eaque sapiente beatae architecto autem ut dignissimos, illo consectetur veritatis exercitationem hic dolores ducimus explicabo iste ipsam iure fuga?"/>

        </main>
      </div>
    </div>
  )
}

