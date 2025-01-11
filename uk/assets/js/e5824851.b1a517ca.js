"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[557],{8061:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"troubleshoot/troubleshoot-wifi-on-snigdha-os","title":"Troubleshooting Wi-Fi Issues","description":"If you\'re facing Wi-Fi connectivity issues on Snigdha OS, don\u2019t worry! Follow this guide to resolve the problem. It covers common issues and solutions. Let\'s get your Wi-Fi back up and running! \ud83d\ude04","source":"@site/i18n/uk/docusaurus-plugin-content-docs/current/troubleshoot/troubleshoot-wifi-on-snigdha-os.md","sourceDirName":"troubleshoot","slug":"/troubleshoot/troubleshoot-wifi-on-snigdha-os","permalink":"/documentation/uk/troubleshoot/troubleshoot-wifi-on-snigdha-os","draft":false,"unlisted":false,"editUrl":"https://github.com/Snigdha-OS/documentation/tree/master/docs/troubleshoot/troubleshoot-wifi-on-snigdha-os.md","tags":[],"version":"current","lastUpdatedAt":1736602694000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshoot","permalink":"/documentation/uk/category/troubleshoot"},"next":{"title":"Troubleshooting Display Issues","permalink":"/documentation/uk/troubleshoot/troubleshoot-display-problem-on-snigdha-os"}}');var i=n(6070),o=n(6599);const t={sidebar_position:1},l="Troubleshooting Wi-Fi Issues",a={},c=[{value:"1. <strong>Check Wi-Fi Adapter \ud83c\udfe0\ud83d\udd0d</strong>",id:"1-check-wi-fi-adapter-",level:3},{value:"<strong>Is Your Wi-Fi Adapter Recognized?</strong>",id:"is-your-wi-fi-adapter-recognized",level:4},{value:"<strong>Install Drivers \ud83d\ude97\ud83d\udca8</strong>",id:"install-drivers-",level:4},{value:"2. <strong>Check Wi-Fi Network Status \ud83d\udcf6\ud83d\udd0c</strong>",id:"2-check-wi-fi-network-status-",level:3},{value:"<strong>Make Sure Your Network is Active</strong>",id:"make-sure-your-network-is-active",level:4},{value:"<strong>Restart Your Router \ud83d\udd04</strong>",id:"restart-your-router-",level:4},{value:"3. <strong>NetworkManager Issues \u2699\ufe0f</strong>",id:"3-networkmanager-issues-\ufe0f",level:3},{value:"4. <strong>Verify Wireless Interface is Up \ud83d\udce1\ud83c\udd99</strong>",id:"4-verify-wireless-interface-is-up-",level:3},{value:"5. <strong>Check Wi-Fi Configuration \ud83d\udee0\ufe0f</strong>",id:"5-check-wi-fi-configuration-\ufe0f",level:3},{value:"<strong>NetworkManager Configuration \ud83d\udda7</strong>",id:"networkmanager-configuration-",level:4},{value:"6. <strong>Check for Conflicting Software \u26a0\ufe0f\ud83d\uded1</strong>",id:"6-check-for-conflicting-software-\ufe0f",level:3},{value:"7. <strong>Check for IP Address Issues \ud83c\udf10\ud83d\udee0\ufe0f</strong>",id:"7-check-for-ip-address-issues-\ufe0f",level:3},{value:"8. <strong>Check Logs for Errors \ud83d\udcdd\ud83d\udd0d</strong>",id:"8-check-logs-for-errors-",level:3},{value:"9. <strong>Test Using a Different Network \ud83c\udf0d\ud83d\udcf6</strong>",id:"9-test-using-a-different-network-",level:3},{value:"10. <strong>Reboot Your System \ud83d\udd04\ud83d\udcbb</strong>",id:"10-reboot-your-system-",level:3},{value:"Conclusion \ud83c\udf89",id:"conclusion-",level:3}];function d(e){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"troubleshooting-wi-fi-issues",children:"Troubleshooting Wi-Fi Issues"})}),"\n",(0,i.jsx)(s.p,{children:"If you're facing Wi-Fi connectivity issues on Snigdha OS, don\u2019t worry! Follow this guide to resolve the problem. It covers common issues and solutions. Let's get your Wi-Fi back up and running! \ud83d\ude04"}),"\n",(0,i.jsxs)(s.h3,{id:"1-check-wi-fi-adapter-",children:["1. ",(0,i.jsx)(s.strong,{children:"Check Wi-Fi Adapter \ud83c\udfe0\ud83d\udd0d"})]}),"\n",(0,i.jsx)(s.h4,{id:"is-your-wi-fi-adapter-recognized",children:(0,i.jsx)(s.strong,{children:"Is Your Wi-Fi Adapter Recognized?"})}),"\n",(0,i.jsx)(s.p,{children:"First, check if Snigdha OS recognizes your Wi-Fi adapter."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Open a terminal and run:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ip link\n"})}),"\n","Look for your Wi-Fi interface (usually named ",(0,i.jsx)(s.code,{children:"wlan0"}),", ",(0,i.jsx)(s.code,{children:"wlp2s0"}),", or similar). If it\u2019s not listed, your adapter might not be recognized or the driver may be missing."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"install-drivers-",children:(0,i.jsx)(s.strong,{children:"Install Drivers \ud83d\ude97\ud83d\udca8"})}),"\n",(0,i.jsx)(s.p,{children:"If your Wi-Fi adapter is not detected, you may need to install additional drivers."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Check for available Wi-Fi drivers:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo pacman -Ss wifi\n"})}),"\n","Install the appropriate driver for your device:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo pacman -S <driver-name>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"2-check-wi-fi-network-status-",children:["2. ",(0,i.jsx)(s.strong,{children:"Check Wi-Fi Network Status \ud83d\udcf6\ud83d\udd0c"})]}),"\n",(0,i.jsx)(s.h4,{id:"make-sure-your-network-is-active",children:(0,i.jsx)(s.strong,{children:"Make Sure Your Network is Active"})}),"\n",(0,i.jsx)(s.p,{children:"Ensure that the Wi-Fi network you're trying to connect to is functioning properly. Try connecting with another device to verify the network works."}),"\n",(0,i.jsx)(s.h4,{id:"restart-your-router-",children:(0,i.jsx)(s.strong,{children:"Restart Your Router \ud83d\udd04"})}),"\n",(0,i.jsx)(s.p,{children:"If there are issues, try restarting your router by turning it off and on again."}),"\n",(0,i.jsxs)(s.h3,{id:"3-networkmanager-issues-\ufe0f",children:["3. ",(0,i.jsx)(s.strong,{children:"NetworkManager Issues \u2699\ufe0f"})]}),"\n",(0,i.jsxs)(s.p,{children:["Snigdha OS uses ",(0,i.jsx)(s.strong,{children:"NetworkManager"})," to manage network connections. If it\u2019s causing issues, try restarting it."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Restart NetworkManager:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart NetworkManager\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Check the status of NetworkManager:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status NetworkManager\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"4-verify-wireless-interface-is-up-",children:["4. ",(0,i.jsx)(s.strong,{children:"Verify Wireless Interface is Up \ud83d\udce1\ud83c\udd99"})]}),"\n",(0,i.jsx)(s.p,{children:"Sometimes, the wireless interface might be down. Bring it up with this command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo ip link set wlan0 up\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"wlan0"})," with your correct interface name if it\u2019s different."]}),"\n",(0,i.jsxs)(s.h3,{id:"5-check-wi-fi-configuration-\ufe0f",children:["5. ",(0,i.jsx)(s.strong,{children:"Check Wi-Fi Configuration \ud83d\udee0\ufe0f"})]}),"\n",(0,i.jsx)(s.h4,{id:"networkmanager-configuration-",children:(0,i.jsx)(s.strong,{children:"NetworkManager Configuration \ud83d\udda7"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Open ",(0,i.jsx)(s.strong,{children:"NetworkManager"})," and ensure your Wi-Fi network is listed. If it\u2019s not, scan for networks again:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"nmcli dev wifi rescan\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"To connect to a network:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"nmcli dev wifi connect <SSID> password <password>\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"6-check-for-conflicting-software-\ufe0f",children:["6. ",(0,i.jsx)(s.strong,{children:"Check for Conflicting Software \u26a0\ufe0f\ud83d\uded1"})]}),"\n",(0,i.jsxs)(s.p,{children:["Sometimes, software like ",(0,i.jsx)(s.code,{children:"netctl"})," or ",(0,i.jsx)(s.code,{children:"wpa_supplicant"})," can conflict with NetworkManager."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Disable ",(0,i.jsx)(s.code,{children:"netctl"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo systemctl disable netctl\nsudo systemctl stop netctl\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Disable ",(0,i.jsx)(s.code,{children:"wpa_supplicant"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo systemctl disable wpa_supplicant\nsudo systemctl stop wpa_supplicant\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"7-check-for-ip-address-issues-\ufe0f",children:["7. ",(0,i.jsx)(s.strong,{children:"Check for IP Address Issues \ud83c\udf10\ud83d\udee0\ufe0f"})]}),"\n",(0,i.jsx)(s.p,{children:"If Wi-Fi is connected but you have no internet access, there may be an IP address issue."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["To release and renew your IP address:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo dhclient -r\nsudo dhclient\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"8-check-logs-for-errors-",children:["8. ",(0,i.jsx)(s.strong,{children:"Check Logs for Errors \ud83d\udcdd\ud83d\udd0d"})]}),"\n",(0,i.jsx)(s.p,{children:"If the issue persists, checking the system logs might help."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["View ",(0,i.jsx)(s.code,{children:"dmesg"})," logs related to Wi-Fi:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"dmesg | grep wlan\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Look for error messages related to your Wi-Fi device, such as missing firmware or drivers."}),"\n",(0,i.jsxs)(s.h3,{id:"9-test-using-a-different-network-",children:["9. ",(0,i.jsx)(s.strong,{children:"Test Using a Different Network \ud83c\udf0d\ud83d\udcf6"})]}),"\n",(0,i.jsx)(s.p,{children:"If your Wi-Fi issue persists, try connecting to a different Wi-Fi network, like a mobile hotspot or another router, to see if the issue is with your device or the original network."}),"\n",(0,i.jsxs)(s.h3,{id:"10-reboot-your-system-",children:["10. ",(0,i.jsx)(s.strong,{children:"Reboot Your System \ud83d\udd04\ud83d\udcbb"})]}),"\n",(0,i.jsx)(s.p,{children:"Sometimes, a simple reboot can fix the problem:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,i.jsx)(s.h3,{id:"conclusion-",children:"Conclusion \ud83c\udf89"}),"\n",(0,i.jsx)(s.p,{children:"Wi-Fi issues on Snigdha OS can usually be resolved by checking the adapter, ensuring drivers are installed, and troubleshooting with NetworkManager. If problems continue, check your hardware or consult the Snigdha OS or Arch community."}),"\n",(0,i.jsx)(s.p,{children:"Happy browsing! \ud83c\udf10\ud83d\ude80"})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6599:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var r=n(758);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);