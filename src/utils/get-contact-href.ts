// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name.toLowerCase()) {
    case "twitter":
      href = `https://www.twitter.com/${contact}`;
      break;
    case "github":
      href = `https://github.com/${contact}`;
      break;
    case "vkontakte":
      href = `https://vk.com/${contact}`;
      break;
    case "telegram":
      href = `https://t.me/${contact}`;
      break;
    case "email":
      href = `mailto:${contact}`;
      break;
    case "linkedin":
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case "instagram":
      href = `https://www.instagram.com/${contact}`;
      break;
    case "line":
      href = `line://ti/p/${contact}`;
      break;
    case "facebook":
      href = `fb://facewebmodal/f?href=https://www.facebook.com/${contact}`;
      break;
    case "gitlab":
      href = `https://www.gitlab.com/${contact}`;
      break;
    case "weibo":
      href = `https://www.weibo.com/${contact}`;
      break;
    case "codepen":
      href = `https://www.codepen.io/${contact}`;
      break;
    case "youtube":
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    case "soundcloud":
      href = `https://soundcloud.com/${contact}`;
      break;
    case "medium":
      href = `https://medium.com/${contact}`;
      break;
    case "phone":
      href = `tel:${contact}`;
      break;
    case "mail":
      href = `mailto:${contact}`;
      break;
    case "momo":
      href = `https://me.momo.vn/${contact}`;
      break;
    case "tiktok":
      href = `https://www.tiktok.com/@${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export const getContactURL = (name: string) => {
  let href;

  switch (name) {
    case "Twitter":
      href = `https://www.twitter.com/`;
      break;
    case "Github":
      href = `https://github.com/`;
      break;
    case "Vkontakte":
      href = `https://vk.com/`;
      break;
    case "Telegram":
      href = `https://t.me/`;
      break;
    case "Linkedin":
      href = `https://www.linkedin.com/in/`;
      break;
    case "Instagram":
      href = `https://www.instagram.com/`;
      break;
    case "Facebook":
      href = `https://www.facebook.com/`;
      break;
    case "Gitlab":
      href = `https://www.gitlab.com/`;
      break;
    case "Weibo":
      href = `https://www.weibo.com/`;
      break;
    case "Codepen":
      href = `https://www.codepen.io/`;
      break;
    case "Youtube":
      href = `https://www.youtube.com/channel/`;
      break;
    case "Soundcloud":
      href = `https://soundcloud.com/`;
      break;
    case "Medium":
      href = `https://medium.com/`;
      break;
    case "Momo":
      href = `https://me.momo.vn/`;
      break;
    case "Tiktok":
      href = `https://www.tiktok.com/@`;
      break;
    default:
      href = "";
      break;
  }

  return href;
};

export default getContactHref;
