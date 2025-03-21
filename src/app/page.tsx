import { client } from '@/lib/microcms';
import styles from './page.module.css';
import BlogCard from './components/BlogCard';

// ブログ記事の型定義
type Post = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Post[]> {
  const data = await client.get({
    endpoint: 'blog', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title',  // idとtitleを取得
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>インターン・選考状況</h1>
        <div className={styles.cardList}>
          {posts.map((post) => (
            <BlogCard key={post.id} id={post.id} title={post.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
