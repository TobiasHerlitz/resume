import DocumentIcon from '@assets/document.svg?react';
import WebVersionQrCode from '@assets/webVersionQrCode.svg?react';
import LinkedInLogo from '@assets/linkedIn.svg?react';
import LinkedInQrCode from '@assets/linkedInQrCode.svg?react';
import GitHubLogo from '@assets/gitHub.svg?react';
import GitHubQrCode from '@assets/gitHubQrCode.svg?react';

import s from './LinkSection.module.css';

export function LinkSection() {
  return (
    <div className={s.root}>
      <div className={s.link}>
        <DocumentIcon className={s.icon}/>
        <a href="">Web version</a>
        <WebVersionQrCode className={s.qrCode} />
      </div>
      <div className={s.link}>
        <LinkedInLogo className={s.icon}/>
        <a href="https://www.linkedin.com/in/tobiasherlitz/">/tobiasherlitz</a>
        <LinkedInQrCode className={s.qrCode} />
      </div>
      <div className={s.link}>
        <GitHubLogo className={s.icon}/>
        <a href="https://github.com/TobiasHerlitz">/tobiasherlitz</a>
        <GitHubQrCode className={s.qrCode} />
      </div>
    </div>
  )
}
