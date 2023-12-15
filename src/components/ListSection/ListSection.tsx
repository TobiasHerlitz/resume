import s from './ListSection.module.css';

import { experiences, educations, Activity } from './text';

export function ListSection() {

  const renderActivities = (activities: Activity[]) => {
    return activities.map((experience) => (
      <li className={s.activity}>
        <div className={s.activityHeader}>
          <span>{experience.heading}</span>
          <span>{experience.years}</span>
        </div>
        {experience?.organization && <span>{experience.organization}</span>}
        {experience?.description && <p>{experience.description}</p>}
      </li>
    ))
  }

  return (
    <div className={s.root}>
      <section>
        <h3>Experience</h3>
        <ul className={s.activities}>{renderActivities(experiences)}</ul>
      </section>
      <section>
        <h3>Education</h3>
        <ul className={s.activities}>{renderActivities(educations)}</ul>
      </section>
    </div>
  )
}
