import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const name = 'Paulo Gabriel'
export const siteTitle = 'Paulo Gabriel | Software Developer' 

export default function Layout({ home, children }) {
    return(
        <div className={styles.container}>
            <Head>
                <meta 
                    name="description"
                    content="Paulo Gabriel | Software Developer"
                />
                <meta name="title" content={siteTitle} />
            </Head>

            <header className={styles.header}>
                {home ? (
                        <>
                            <img
                                src="/images/profile.jpg"
                                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
                                alt={name}
                            />
                            <h1 className={styles.heading2XL}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                            <img
                                src="/images/profile.jpg"
                                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
                                alt={name}
                            />
                            </Link>
                            <h2 className={styles.headingLg}>
                                <Link href="/" className={styles.colorLink}>
                                    {name}
                                </Link>
                            </h2>    
                        </>
                    )
                }
            </header>
 
            <main>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                    ⬅️ Voltar para a página inicial  
                    </Link>
                </div>
            )}
        </div>
    )
}