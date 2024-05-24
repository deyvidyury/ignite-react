import styles from './App.module.css';
import './global.css';
import Post from './componets/Post';
import { Header } from './componets/Header';
import { Sidebar } from './componets/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/deyvidyury.png",
      name: "Deyvid Yury",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa{' '}👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉{' '} jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-08-30 00:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/deyvidyury.png",
      name: "Deyvid Yury",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa{' '}👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉{' '} jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-08-28 00:00:00")
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (<Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />);
          })}

        </main>
      </div>
    </div>
  );
}

