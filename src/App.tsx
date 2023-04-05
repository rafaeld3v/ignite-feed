import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { IPostProps, Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: IPostProps[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      nome: "Diego Fernandes",
      role: "Desenvolvedor",
    },
    publishedAt: new Date("2022-10-12 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/maykbrito.png",
      nome: "Mayk Brito",
      role: "Developer",
    },
    publishedAt: new Date("2022-10-12 20:00:00"),
    content: [
      { type: "paragraph", content: "Olá pessoal!" },
      {
        type: "paragraph",
        content:
          "Eu acabei de lançar meu novo projeto de design, chamado Colorful. Dê uma olhada no meu portfólio para ver mais detalhes!",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
