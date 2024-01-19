import React, { useEffect, useState } from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'
const SocialShare = () => {
  const [currentUrl, setCurrentUrl] = useState('')
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])
  return (
    <div className="flex gap-2 my-6">
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={32} className="rounded shadow-md" />
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl} title={'title'}>
        <XIcon size={32} className="rounded shadow-md" />
      </TwitterShareButton>
      <WhatsappShareButton url={currentUrl} title={'title'} separator=":: ">
        <WhatsappIcon size={32} className="rounded shadow-md" />
      </WhatsappShareButton>
      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon size={32} className="rounded shadow-md" />
      </LinkedinShareButton>
      <TelegramShareButton url={currentUrl} title={'title'}>
        <TelegramIcon size={32} className="rounded shadow-md" />
      </TelegramShareButton>
    </div>
  )
}

export default SocialShare
