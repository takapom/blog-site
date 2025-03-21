// components/PostCard.tsx
import Link from "next/link";
import styles from "./BlogCard.module.css";

type BlogCardProps = {
    id: string;
    title: string;
    date: string;
    company: string;
    category: string;
    excerpt: string;
    image: string;
  };

export default function BlogCard({
  id,
  title,
  date,
  company,
  category,
  excerpt,
  image,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        {/* <img src={image} alt={title} className={styles.image} /> */}
        <div className={styles.content}>
          <span className={styles.company}>{company}</span>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <p className={styles.excerpt}>{excerpt}</p>
          <p className={styles.readMore}>続きを読む →</p>
        </div>
      </div>
    </Link>
  );
}
