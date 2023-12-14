import { Badge } from '@components';
import {
  technologies,
  developerStatements,
  developerReasons
} from './text.ts'

import s from './RunningSection.module.css'

export function RunningSection() {
  return (
    <div className={s.root}>
      <hgroup className={s.headerGroup}>
        <h1>Tobias Herlitz</h1>
        <span>Web Developer</span>
      </hgroup>
      <section className={s.topic}>
        <h2>About me</h2>
        <div className={s.sectionBody}>
          <p>
            I am trained in business and economics and I thought I wanted to work with numbers.
            It turns out I wanted to work with words more. It is still fairly easy to get me
            excited about KPIs, balance sheets and excel but I am probably going to try to
            make you excited about code instead.
          </p>
          <p>
            After all, both fields offer creativity within a set of well defined bounds.
            (Insert joke about creative bookkeeping here)
          </p>
          <p>
            Then why developer? Apart from the reason mentioned above
          </p>
          <ul>{developerReasons.map((reason) => <li>{reason}</li>)}</ul>
        </div>
      </section>
      <section className={s.topic}>
        <h2>As a developer</h2>
        <div className={s.sectionBody}>
          <p>Some statements I feel represent me as a developer</p>
          <ul>{developerStatements.map((statement) => <li>{statement}</li>)}</ul>
        </div>
      </section>
      <section className={s.topic}>
        <h2>Tech</h2>
        <div className={`${s.sectionBody} ${s.technologies}`}>
          {technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
        </div>
      </section>
    </div>
  )
}
