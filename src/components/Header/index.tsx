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
                    <p>Home</p>
                    </ActiveLink>
                    <ActiveLink  activeClassName={styles.active} href="/posts">
                    <p>Posts</p>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}