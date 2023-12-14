import { ReactNode } from 'react'
import s from './Layout.module.css'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}
