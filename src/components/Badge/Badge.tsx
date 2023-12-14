import s from './Badge.module.css'

export function Badge({ children }) {
  return (
    <span className={s.root}>{children}</span>
  )
}