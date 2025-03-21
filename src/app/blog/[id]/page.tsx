import { client } from '@/lib/microcms';
import dayjs from 'dayjs';
import styles from './page.module.css';

type Props = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: { name: string };
};

async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `blog/${id}`,
  });
  return data;
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);

  // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
  const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1> {/* タイトル */}
      <div className={styles.date}>{formattedDate}</div> {/* 日付 */}
      <div className={styles.category}>カテゴリー：{post.category && post.category.name}</div> {/* カテゴリー */}
      {/* post.bodyがundefinedの場合に備え、空文字列をフォールバック */}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body || '' }} /> {/* 記事本文 */}
    </main>
  );
}

export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'blog' });
  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}
