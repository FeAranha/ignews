import { GetStaticPaths, GetStaticProps } from "next"
import { getPrismicClient } from "../../../services/prismic"
import { RichText } from "prismic-dom"
import Head from "next/head"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { DataDocumentsPrismic } from "../index.page";

import styles from '../post.module.scss'
import { ActiveLink } from "../../../components/ActiveLink"

interface PostPreviewProps {
    post: {
        slug: string
        title: string
        content: string
        updatedAt: string
    }
}

export default function PostPreview({ post }: PostPreviewProps) {
    const session = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session.data?.activeSubscription) {
            router.push(`/posts/${post.slug}`)
        }
    }, [session, post.slug, router])

    return (
        <>
        <Head>
            <title>{post.title} | Ignews</title>
        </Head>

        <main className={styles.container}>
            <article className={styles.post}>
                <h1>{post.title}</h1>
                <time>{post.updatedAt}</time>
                <div 
                    className={`${styles.postContent} ${styles.previewContent}`}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.continueReading}>
                        <span>Wanna continue reading?</span>
                        <ActiveLink activeClassName={styles.active} href="/">
                             <p>Subscribe now 🤗</p>
                        </ActiveLink>
                    </div>
            </article>
        </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) =>{
    const { slug } = params

    const prismic = getPrismicClient()

    const response = await prismic.getByUID<DataDocumentsPrismic>('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    };

    return {
        props: {
            post,
        },
        redirect: 60 * 30, // 30 minutes
    }
}