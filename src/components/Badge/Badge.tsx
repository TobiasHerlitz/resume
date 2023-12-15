import { ReactNode } from 'react'
import s from './Badge.module.css'

type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className={s.root}>{children}</span>
  )
}
