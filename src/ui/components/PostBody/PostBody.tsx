import { IBlogPost } from '../../../data/@types/IBlogPost';
import styles from './PostBody.module.css';

export default function PostBody({ post }: { post: IBlogPost }) {
    return (
        <div className={styles['post-container']}>
            <h2 className={styles['post-title']}>{post.title}</h2>
            <img 
                className={styles['post-picture']} 
                src={post.picture} 
                alt={post.slug} />
            <div className={styles['post-content']}>
                <p>{post.content}</p>
            </div>
        </div>
    )
}