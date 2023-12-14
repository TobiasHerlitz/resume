import { Footer, RunningSection, ListSection, LinkSection } from '@components';

import s from './Resume.module.css'

export function Resume() {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <RunningSection />
        <div className={s.rightSide}>
          <ListSection />
          <LinkSection />
        </div>
      </div>
      <Footer />
    </div>  
  )
}
