/// <reference types="vite-plugin-svgr/client" />

import MailLogo from '@assets/mail.svg?react';
import PhoneLogo from '@assets/phone.svg?react';
import HomeLogo from '@assets/home.svg?react';

import s from './Footer.module.css'

export function Footer() {
  const emailAddress = "tobiasherlitz@gmail.com"

  return (
    <footer className={s.root}>
      <address className={s.iconWrapper}>
        <MailLogo />
        <a href={`mailto: ${emailAddress}`}>{emailAddress}</a>
      </address>
      <div className={s.iconWrapper}>
        <PhoneLogo />
        <address><p>+46 (0)73 524 7851</p></address>
      </div>
      <div className={s.iconWrapper}>
        <HomeLogo />
        <p>Uppsala</p>
      </div>
    </footer>
  )
}
