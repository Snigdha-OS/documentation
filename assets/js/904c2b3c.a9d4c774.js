"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[8989],{4389:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(4848),l=n(8453);const i={sidebar_position:4},t="Install Packages",r={id:"post_installation/install_packages",title:"Install Packages",description:"\ud83d\udce6 How to Install a Package on Snigdha OS",source:"@site/docs/post_installation/install_packages.md",sourceDirName:"post_installation",slug:"/post_installation/install_packages",permalink:"/documentation/post_installation/install_packages",draft:!1,unlisted:!1,editUrl:"https://github.com/Snigdha-OS/documentation/tree/master/docs/post_installation/install_packages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Customize Snigdha OS",permalink:"/documentation/post_installation/customization"},next:{title:"User Guide",permalink:"/documentation/category/user-guide"}},o={},c=[{value:"\ud83d\udce6 <strong>How to Install a Package on Snigdha OS</strong>",id:"-how-to-install-a-package-on-snigdha-os",level:3},{value:"\ud83d\udee0\ufe0f <strong>Step 1: Update Your System</strong>",id:"\ufe0f-step-1-update-your-system",level:3},{value:"\ud83d\udcc2 <strong>Step 2: Search for a Package</strong>",id:"-step-2-search-for-a-package",level:3},{value:"Example:",id:"example",level:4},{value:"\u2705 <strong>Step 3: Install the Package</strong>",id:"-step-3-install-the-package",level:3},{value:"Example:",id:"example-1",level:4},{value:"\ud83d\udce6 <strong>Step 4: Verify Installation</strong>",id:"-step-4-verify-installation",level:3},{value:"Example:",id:"example-2",level:4},{value:"\ud83d\udd0d <strong>Step 5: Explore Package Details</strong>",id:"-step-5-explore-package-details",level:3},{value:"Example:",id:"example-3",level:4},{value:"\ud83c\udf10 <strong>Installing AUR Packages</strong>",id:"-installing-aur-packages",level:3},{value:"Install a Package from AUR",id:"install-a-package-from-aur",level:4},{value:"Example:",id:"example-4",level:4},{value:"\ud83e\uddf9 <strong>Clean Up After Installation</strong>",id:"-clean-up-after-installation",level:3},{value:"\u26a0\ufe0f <strong>Tips</strong>",id:"\ufe0f-tips",level:3},{value:"\ud83c\udf89 <strong>Conclusion</strong>",id:"-conclusion",level:3}];function d(e){const a={code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"install-packages",children:"Install Packages"}),"\n",(0,s.jsxs)(a.h3,{id:"-how-to-install-a-package-on-snigdha-os",children:["\ud83d\udce6 ",(0,s.jsx)(a.strong,{children:"How to Install a Package on Snigdha OS"})]}),"\n",(0,s.jsxs)(a.p,{children:["Installing packages on Snigdha OS primarily involves using the ",(0,s.jsx)(a.strong,{children:"Pacman"})," package manager or an ",(0,s.jsx)(a.strong,{children:"AUR helper"})," for community-contributed software. Here's a step-by-step guide:"]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"\ufe0f-step-1-update-your-system",children:["\ud83d\udee0\ufe0f ",(0,s.jsx)(a.strong,{children:"Step 1: Update Your System"})]}),"\n",(0,s.jsx)(a.p,{children:"Before installing a package, ensure your system is up-to-date to avoid dependency issues:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo pacman -Syu\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-step-2-search-for-a-package",children:["\ud83d\udcc2 ",(0,s.jsx)(a.strong,{children:"Step 2: Search for a Package"})]}),"\n",(0,s.jsx)(a.p,{children:"To find the package you want to install, use the following command:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Ss package-name\n"})}),"\n",(0,s.jsx)(a.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(a.p,{children:"Search for the Firefox browser:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Ss firefox\n"})}),"\n",(0,s.jsx)(a.p,{children:'This command displays available packages with "firefox" in their name or description.'}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-step-3-install-the-package",children:["\u2705 ",(0,s.jsx)(a.strong,{children:"Step 3: Install the Package"})]}),"\n",(0,s.jsx)(a.p,{children:"Once you know the exact package name, install it using:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo pacman -S package-name\n"})}),"\n",(0,s.jsx)(a.h4,{id:"example-1",children:"Example:"}),"\n",(0,s.jsx)(a.p,{children:"Install Firefox:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo pacman -S firefox\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-step-4-verify-installation",children:["\ud83d\udce6 ",(0,s.jsx)(a.strong,{children:"Step 4: Verify Installation"})]}),"\n",(0,s.jsx)(a.p,{children:"To check if a package is installed:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Q package-name\n"})}),"\n",(0,s.jsx)(a.h4,{id:"example-2",children:"Example:"}),"\n",(0,s.jsx)(a.p,{children:"Verify Firefox installation:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Q firefox\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-step-5-explore-package-details",children:["\ud83d\udd0d ",(0,s.jsx)(a.strong,{children:"Step 5: Explore Package Details"})]}),"\n",(0,s.jsx)(a.p,{children:"View information about an installed package:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Qi package-name\n"})}),"\n",(0,s.jsx)(a.h4,{id:"example-3",children:"Example:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pacman -Qi firefox\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-installing-aur-packages",children:["\ud83c\udf10 ",(0,s.jsx)(a.strong,{children:"Installing AUR Packages"})]}),"\n",(0,s.jsxs)(a.p,{children:["If the package you want is not in the official repositories but is available in the ",(0,s.jsx)(a.strong,{children:"Arch User Repository (AUR)"}),", use an AUR helper like ",(0,s.jsx)(a.code,{children:"yay"})," or ",(0,s.jsx)(a.code,{children:"paru"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"install-a-package-from-aur",children:"Install a Package from AUR"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yay -S package-name\n"})}),"\n",(0,s.jsx)(a.h4,{id:"example-4",children:"Example:"}),"\n",(0,s.jsx)(a.p,{children:"Install Google Chrome from AUR:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yay -S google-chrome\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-clean-up-after-installation",children:["\ud83e\uddf9 ",(0,s.jsx)(a.strong,{children:"Clean Up After Installation"})]}),"\n",(0,s.jsx)(a.p,{children:"After installing a package, clean up unused dependencies (optional):"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo pacman -Rns $(pacman -Qdtq)\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"\ufe0f-tips",children:["\u26a0\ufe0f ",(0,s.jsx)(a.strong,{children:"Tips"})]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Enable Parallel Downloads"}),": To speed up installation, enable parallel downloads in ",(0,s.jsx)(a.code,{children:"/etc/pacman.conf"})," by adding:","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"ParallelDownloads = 5\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Use Trusted Sources"}),": Only install AUR packages from trusted sources and review the ",(0,s.jsx)(a.code,{children:"PKGBUILD"})," file before installation."]}),"\n"]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.h3,{id:"-conclusion",children:["\ud83c\udf89 ",(0,s.jsx)(a.strong,{children:"Conclusion"})]}),"\n",(0,s.jsxs)(a.p,{children:["Installing packages on Snigdha OS is straightforward with ",(0,s.jsx)(a.code,{children:"pacman"}),". For additional software, AUR helpers like ",(0,s.jsx)(a.code,{children:"yay"})," expand the possibilities. With these tools, you can access a vast array of software tailored to your needs! \ud83d\ude80"]})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>r});var s=n(6540);const l={},i=s.createContext(l);function t(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);