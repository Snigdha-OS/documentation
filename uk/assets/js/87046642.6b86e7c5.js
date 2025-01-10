"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[790],{8271:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"installation/snigdha-os-offline-installation","title":"Offline Installation","description":"\ud83d\udda5\ufe0f How to Install Snigdha OS in Offline Mode","source":"@site/docs/installation/snigdha-os-offline-installation.md","sourceDirName":"installation","slug":"/installation/snigdha-os-offline-installation","permalink":"/documentation/uk/installation/snigdha-os-offline-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Snigdha-OS/documentation/tree/master/docs/installation/snigdha-os-offline-installation.md","tags":[],"version":"current","lastUpdatedAt":1735540368000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Live Environment","permalink":"/documentation/uk/installation/snigdha-os-live-environment"},"next":{"title":"Online Installation","permalink":"/documentation/uk/installation/snigdha-os-online-installation"}}');var t=s(6070),o=s(6599);const l={sidebar_position:4},r="Offline Installation",a={},d=[{value:"\ud83d\udda5\ufe0f <strong>How to Install Snigdha OS in Offline Mode</strong>",id:"\ufe0f-how-to-install-snigdha-os-in-offline-mode",level:3},{value:"\ud83d\udce5 <strong>Step 1: Download Snigdha OS ISO</strong>",id:"-step-1-download-snigdha-os-iso",level:3},{value:"\ud83d\udcbe <strong>Step 2: Create a Bootable USB Drive</strong>",id:"-step-2-create-a-bootable-usb-drive",level:3},{value:"<strong>For Linux Users (Using <code>dd</code>)</strong>",id:"for-linux-users-using-dd",level:4},{value:"<strong>For Windows Users (Using Rufus)</strong>",id:"for-windows-users-using-rufus",level:4},{value:"\ud83d\udd0c <strong>Step 3: Boot into Snigdha OS Live Environment</strong>",id:"-step-3-boot-into-snigdha-os-live-environment",level:3},{value:"\u2699\ufe0f <strong>Step 4: Install Snigdha OS Offline</strong>",id:"\ufe0f-step-4-install-snigdha-os-offline",level:3},{value:"\ud83d\udd04 <strong>Step 5: Install Pre-Downloaded Packages (Optional)</strong>",id:"-step-5-install-pre-downloaded-packages-optional",level:3},{value:"\u2699\ufe0f <strong>Step 6: Final Steps and Reboot</strong>",id:"\ufe0f-step-6-final-steps-and-reboot",level:3},{value:"\ud83c\udf89 <strong>Conclusion</strong>",id:"-conclusion",level:3}];function h(n){const e={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"offline-installation",children:"Offline Installation"})}),"\n",(0,t.jsxs)(e.h3,{id:"\ufe0f-how-to-install-snigdha-os-in-offline-mode",children:["\ud83d\udda5\ufe0f ",(0,t.jsx)(e.strong,{children:"How to Install Snigdha OS in Offline Mode"})]}),"\n",(0,t.jsxs)(e.p,{children:["Installing Snigdha OS in ",(0,t.jsx)(e.strong,{children:"offline mode"})," means performing the installation without an active internet connection. While Snigdha OS's installation typically requires an internet connection to fetch updates and additional packages, it\u2019s still possible to install it offline using the installation ISO and pre-downloaded packages. This method is especially useful if you're in an environment with limited or no internet access."]}),"\n",(0,t.jsxs)(e.p,{children:["Here's a step-by-step guide to install Snigdha OS in ",(0,t.jsx)(e.strong,{children:"offline mode"}),":"]}),"\n",(0,t.jsxs)(e.h3,{id:"-step-1-download-snigdha-os-iso",children:["\ud83d\udce5 ",(0,t.jsx)(e.strong,{children:"Step 1: Download Snigdha OS ISO"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Go to the Official Snigdha OS Website"}),":",(0,t.jsx)(e.br,{}),"\n","Visit the Snigdha OS download page:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://snigdhaos.org/downloads.html",children:"Snigdha OS Downloads"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Download the ISO File"}),":",(0,t.jsx)(e.br,{}),"\n","Select your preferred edition (KDE, GNOME, etc.) and download the ISO file. This will be used to create the bootable USB."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Optionally Download Extra Packages"}),":",(0,t.jsx)(e.br,{}),"\n","If you know you will need additional packages (like drivers or software that may not be included in the ISO), it\u2019s a good idea to download them beforehand using another system that has internet access. You can use a tool like ",(0,t.jsx)(e.strong,{children:"Pacman"})," to download packages:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo pacman -Sw package_name\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"-step-2-create-a-bootable-usb-drive",children:["\ud83d\udcbe ",(0,t.jsx)(e.strong,{children:"Step 2: Create a Bootable USB Drive"})]}),"\n",(0,t.jsxs)(e.p,{children:["You need a ",(0,t.jsx)(e.strong,{children:"bootable USB"})," to install Snigdha OS. Use ",(0,t.jsx)(e.strong,{children:"Ventoy"})," or ",(0,t.jsx)(e.strong,{children:"Rufus"})," (for Windows) or the ",(0,t.jsx)(e.code,{children:"dd"})," command (for Linux) to create a bootable USB drive."]}),"\n",(0,t.jsx)(e.h4,{id:"for-linux-users-using-dd",children:(0,t.jsxs)(e.strong,{children:["For Linux Users (Using ",(0,t.jsx)(e.code,{children:"dd"}),")"]})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Insert USB Drive"}),":\nPlug in a USB drive (at least 4 GB)."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Find USB Drive Location"}),":\nUse the ",(0,t.jsx)(e.code,{children:"lsblk"})," command to identify your USB drive:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"lsblk\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Create Bootable USB"}),":\nRun the ",(0,t.jsx)(e.code,{children:"dd"})," command to copy the Snigdha OS ISO to your USB drive (replace ",(0,t.jsx)(e.code,{children:"/dev/sdX"})," with your USB device path):"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo dd if=snigdhaos-YYYY.MM.DD-x86_64.iso of=/dev/sdX bs=4M status=progress oflag=sync\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Eject USB"}),":\nAfter the process finishes, safely eject the USB:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo eject /dev/sdX\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"for-windows-users-using-rufus",children:(0,t.jsx)(e.strong,{children:"For Windows Users (Using Rufus)"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Download and Install Rufus"}),":",(0,t.jsx)(e.br,{}),"\n","Download ",(0,t.jsx)(e.strong,{children:"Rufus"})," from ",(0,t.jsx)(e.a,{href:"https://rufus.ie/",children:"https://rufus.ie/"})," and install it."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Open Rufus"})," and Select the USB Drive."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Choose the Snigdha OS ISO"})," and select the appropriate ",(0,t.jsx)(e.strong,{children:"Partition Scheme"})," (usually ",(0,t.jsx)(e.strong,{children:"GPT"})," for modern systems)."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Start the Process"}),":",(0,t.jsx)(e.br,{}),"\n","Click ",(0,t.jsx)(e.strong,{children:"Start"})," to create a bootable USB. Wait for it to complete."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"-step-3-boot-into-snigdha-os-live-environment",children:["\ud83d\udd0c ",(0,t.jsx)(e.strong,{children:"Step 3: Boot into Snigdha OS Live Environment"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Insert the Bootable USB"})," into the target system."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Enter BIOS/UEFI"}),":",(0,t.jsx)(e.br,{}),"\n","Restart the system and press the appropriate key (often ",(0,t.jsx)(e.code,{children:"F2"}),", ",(0,t.jsx)(e.code,{children:"DEL"}),", or ",(0,t.jsx)(e.code,{children:"ESC"}),") to enter BIOS/UEFI."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Set USB as Primary Boot Device"}),":",(0,t.jsx)(e.br,{}),"\n","In the BIOS/UEFI settings, set the USB drive as the first boot device."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Save and Reboot"}),":",(0,t.jsx)(e.br,{}),"\n","Save the changes and reboot the system. It will boot into the Snigdha OS live environment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"\ufe0f-step-4-install-snigdha-os-offline",children:["\u2699\ufe0f ",(0,t.jsx)(e.strong,{children:"Step 4: Install Snigdha OS Offline"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Launch the Installer"}),":",(0,t.jsx)(e.br,{}),"\n","In the live environment, click on the ",(0,t.jsx)(e.strong,{children:"Snigdha OS Installer"})," icon on the desktop or in the application menu."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Select Language and Region"}),":",(0,t.jsx)(e.br,{}),"\n","Follow the prompts to select your language, region, and keyboard layout."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Partitioning"}),":",(0,t.jsx)(e.br,{}),"\n","Choose the disk where you want to install Snigdha OS. You can either let the installer automatically partition your disk or choose manual partitioning for more control."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Btrfs"})," is the default filesystem used by Snigdha OS."]}),"\n",(0,t.jsxs)(e.li,{children:["You can set up ",(0,t.jsx)(e.strong,{children:"LVM"})," or ",(0,t.jsx)(e.strong,{children:"ZFS"})," if you want advanced features."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Offline Mode Warning"}),":",(0,t.jsx)(e.br,{}),"\n","The installer will ask for an internet connection to fetch updates and additional software. ",(0,t.jsx)(e.strong,{children:"Ignore this step"})," since you are installing in offline mode. Proceed without an internet connection."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"User Configuration"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Set up your ",(0,t.jsx)(e.strong,{children:"username"})," and ",(0,t.jsx)(e.strong,{children:"password"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Configure ",(0,t.jsx)(e.strong,{children:"root password"})," if required."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Installation Location"}),":",(0,t.jsx)(e.br,{}),"\n","Confirm the partition where you want to install Snigdha OS. Double-check the partitions to avoid data loss."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Begin Installation"}),":",(0,t.jsx)(e.br,{}),"\n","Click on the ",(0,t.jsx)(e.strong,{children:"Install"})," button to start the installation. The system will copy files from the ISO to the target disk."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"-step-5-install-pre-downloaded-packages-optional",children:["\ud83d\udd04 ",(0,t.jsx)(e.strong,{children:"Step 5: Install Pre-Downloaded Packages (Optional)"})]}),"\n",(0,t.jsx)(e.p,{children:"If you have pre-downloaded additional packages or software (like drivers, codecs, or essential tools), you can install them during or after the installation process:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Mount the USB with Packages"}),":",(0,t.jsx)(e.br,{}),"\n","If the packages are on another USB or disk, you can mount it to the system during installation using the terminal."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Use Pacman to Install Packages"}),":\nOnce Snigdha OS is installed and you\u2019ve booted into the system, use the ",(0,t.jsx)(e.code,{children:"pacman"})," package manager to install any pre-downloaded packages:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo pacman -U /path/to/package_file.pkg.tar.zst\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Replace ",(0,t.jsx)(e.code,{children:"/path/to/package_file.pkg.tar.zst"})," with the actual path to the downloaded package."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"\ufe0f-step-6-final-steps-and-reboot",children:["\u2699\ufe0f ",(0,t.jsx)(e.strong,{children:"Step 6: Final Steps and Reboot"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Configure Your System"}),":",(0,t.jsx)(e.br,{}),"\n","Once the installation is complete, you may need to configure your system settings, such as display resolution, Wi-Fi (if available), and user preferences."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Reboot the System"}),":",(0,t.jsx)(e.br,{}),"\n","After installation, ",(0,t.jsx)(e.strong,{children:"reboot"})," your system and remove the USB drive."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Boot into Snigdha OS"}),":",(0,t.jsx)(e.br,{}),"\n","Your system should boot into Snigdha OS. If you set up a ",(0,t.jsx)(e.strong,{children:"dual-boot"})," with other operating systems, you\u2019ll see the bootloader menu to choose the OS."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Offline Setup"}),":",(0,t.jsx)(e.br,{}),"\n","If you have any additional software or updates that need to be installed, you can use the ",(0,t.jsx)(e.strong,{children:"offline package manager"})," to install them later when you have an internet connection."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"-conclusion",children:["\ud83c\udf89 ",(0,t.jsx)(e.strong,{children:"Conclusion"})]}),"\n",(0,t.jsxs)(e.p,{children:["You\u2019ve now installed Snigdha OS in ",(0,t.jsx)(e.strong,{children:"offline mode"}),"! While some post-installation updates and software installation may require an internet connection, this method allows you to set up and use Snigdha OS in environments with no or limited internet access. This installation method is ideal for areas with poor connectivity, or for advanced users who want to configure their system fully offline."]}),"\n",(0,t.jsx)(e.p,{children:"Enjoy your new Snigdha OS setup! \ud83d\ude0e\ud83d\ude80"})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},6599:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>r});var i=s(758);const t={},o=i.createContext(t);function l(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);