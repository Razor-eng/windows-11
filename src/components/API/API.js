// menuIcons
import searchIcon from '../Images/windows-icon/search.svg';
import cromeIcon from '../Images/windows-icon/cromeIcon.png';
import mailIcon from '../Images/windows-icon/mailIcon.png';
import explorerIcon from '../Images/windows-icon/explorerIcon.png';
import msedgeIcon from '../Images/windows-icon/msedgeIcon.png';
import msstoreIcon from '../Images/windows-icon/storeIcon.png';
import skypeicon from '../Images/windows-icon/skypeicon.png';
import msoffice from '../Images/windows-icon/msoffice.png';

// Pinned Items
import clendar from '../Images/windows-icon/calender.png';
import outlook from '../Images/windows-icon/Outlook.png';
import phone from '../Images/windows-icon/phoneIcon.png';
import todoIcon from '../Images/windows-icon/todoIcon.png';
import cortanaIcon from '../Images/windows-icon/cortanaIcon.png';
import spotify from '../Images/windows-icon/spotify.png';
import pinterest from '../Images/windows-icon/pinterest.png';
import picsart from '../Images/windows-icon/picsart.png';
import tiktok from '../Images/windows-icon/tiktok.png';
import netflix from '../Images/windows-icon/netflix.png';
import opera from '../Images/windows-icon/opera.png';
import photoshop from '../Images/windows-icon/photoshop.webp';
import vscodeIcon from '../Images/windows-icon/vscodeIcon.png';
import nodejsIcon from '../Images/windows-icon/nodejsIcon.png';
import ubuntu from '../Images/windows-icon/ubuntu.png';
import weather from '../Images/windows-icon/weather.png';
import itunes from '../Images/windows-icon/itunes.png';
import camera from '../Images/windows-icon/camera.png';

// Recomended Icons
import msOnedrive from '../Images/windows-icon/msOnedrive.png';
import msword from '../Images/windows-icon/msword.png';
import settingIcon from '../Images/windows-icon/settingIcon.png';
import powerpoint from '../Images/windows-icon/powerpoint.png';
import gethelp from '../Images/windows-icon/gethelp.png';

// statusIcon
import wifiIcon from '../Images/windows-icon/wifi.svg';
import volumeIcon from '../Images/windows-icon/volume.svg';
import drpdwnIcon from '../Images/windows-icon/expand-arrow.svg';

export const IconMenuAPI = [
    { mIcon: searchIcon },{ mIcon: mailIcon},
    { mIcon: msedgeIcon },{ mIcon: msstoreIcon },{ mIcon: skypeicon },
    { mIcon: msoffice },{ mIcon: cromeIcon },{ mIcon: explorerIcon }
];

export const StatusIconAPI = [
    { stIcon: drpdwnIcon },{ stIcon: wifiIcon },{ stIcon: volumeIcon } 
];

export const PinAPIOne = [
    { pIcon: clendar, text: "Calender" },{ pIcon: outlook, text: "Outlook" },{ pIcon: phone, text: "Your Phone" },
    { pIcon: todoIcon, text: "Todo" },{ pIcon: cortanaIcon, text: "Cortana" }, { pIcon: camera, text: "Camera" }
];

export const PinAPITwo = [
    { pIcon: spotify, text: "Spotify" },{ pIcon: pinterest, text: "Pinterest" },{ pIcon: picsart, text: "PicsArt" },
    { pIcon: netflix, text: "Netflix" },{ pIcon: tiktok, text: "TikTok" },{ pIcon: itunes, text: "ITunes" }
];

export const PinAPIThree = [
    { pIcon: opera, text: "Opera" },{ pIcon: photoshop, text: "Photoshop" },{ pIcon: vscodeIcon, text: "VSCode" },
    { pIcon: nodejsIcon, text: "Node JS" },{ pIcon: ubuntu, text: "Ubuntu" },{ pIcon: weather, text: "Weather" }
];

export const RecAPIOne = [
    { rIcon:  msOnedrive, text:"Onedrive - UptoDate YourSelf Always"},{ rIcon:  msword, text: "MS Word - Final project"}
];

export const RecAPITwo = [
    { rIcon:  settingIcon, text: "Settings"},{ rIcon:  powerpoint, text: "PowerPoint - JS Stack YouTube Work"}
];

export const RecAPIThree = [
    { rIcon: gethelp, text: "Get Hepl or Send Feedback - Regarding Issues" }
];