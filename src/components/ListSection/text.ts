export type Activity = {
  heading: string;
  years: string;
  organization?: string;
  description?: string;
}

export const experiences: Activity[] = [
  {
    heading: 'Full-stack Developer',
    years: '2024',
    organization: 'Dealy',
    description: 'Temporary employment on a self-hosted B2B platform providing e- commerce, ERP-integration and task management. As the sole developer this allowed me to further my skills over the entire stack+. Translating user needs into design, implementing and finally deploying.'
  },
  {
    heading: 'Full-stack Developer',
    years: '2021-2023',
    organization: 'Entire Group AB',
    description: 'Building features and providing support for various clients, each using differing stacks. This included a lead role for one of the longer running partnerships. In addition to development work, I was entrusted by management to set up and subsequently lead a staff forum.'
  },
  {
    heading: 'Receptionist and Night Porter',
    years: '2015-2019',
    organization: 'Clas på Hörnet',
  },
  {
    heading: 'Deputized Security Officer (ordningsvakt)',
    years: '2010-2014',
    organization: 'Disclosed on request',
  }
];

export const educations: Activity[] = [
  {
    heading: 'Self studies - Developer',
    years: '2019-2021',
    description: 'Online courses separated by personal projects to test stuff out. I started learning Python and later on the framework Django. I shifted focus after about a year to relational databases and finally to JavaScript and React'
  },
  {
    heading: 'Economics, Business & Administration (BSc)',
    years: '2010-2014',
    organization: 'Uppsala University',
    description: 'While studying I held the role of COO for the non-profit student organization Uppsalaekonomerna. An organization representing about 3000 members of which 250 are actively performing work and 45 are elected representatives. '
  },
  {
    heading: 'Infantry Squad Leader (conscription service)',
    years: '2009',
    organization: 'Helikopterflottiljen',
    description: 'A years practice in doing absolutely everything as a group and on time. I was awarded the highest final grade out of all 12 squad leaders in my platoon.'
  }
];
