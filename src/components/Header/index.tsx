import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'
import Image from 'next/image'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" width={68} height={68}/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                    <a>Home</a>
                    </ActiveLink>
                    <ActiveLink  activeClassName={styles.active} href="/posts">
                    <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}