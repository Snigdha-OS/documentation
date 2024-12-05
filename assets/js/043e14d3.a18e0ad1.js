"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[8731],{7388:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=s(4848),i=s(8453);const a={sidebar_position:5},o="Upload & Deploy Packages",t={id:"dev_guide/deploy_packages",title:"Upload & Deploy Packages",description:"\ud83d\ude80 Uploading and Deploying an Arch Linux Package on GitHub",source:"@site/docs/dev_guide/deploy_packages.md",sourceDirName:"dev_guide",slug:"/dev_guide/deploy_packages",permalink:"/documentation/dev_guide/deploy_packages",draft:!1,unlisted:!1,editUrl:"https://github.com/Snigdha-OS/documentation/tree/master/docs/dev_guide/deploy_packages.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install Keyrings",permalink:"/documentation/dev_guide/install_keyring"},next:{title:"Writing Documentation",permalink:"/documentation/dev_guide/write"}},c={},d=[{value:"\ud83d\ude80 Uploading and Deploying an Arch Linux Package on GitHub",id:"-uploading-and-deploying-an-arch-linux-package-on-github",level:3},{value:"1\ufe0f\u20e3 <strong>Prepare the Package</strong>",id:"1\ufe0f\u20e3-prepare-the-package",level:3},{value:"2\ufe0f\u20e3 <strong>Create a GitHub Repository</strong>",id:"2\ufe0f\u20e3-create-a-github-repository",level:3},{value:"3\ufe0f\u20e3 <strong>Upload the Package</strong>",id:"3\ufe0f\u20e3-upload-the-package",level:3},{value:"4\ufe0f\u20e3 <strong>Set Up a Repository for <code>pacman</code></strong>",id:"4\ufe0f\u20e3-set-up-a-repository-for-pacman",level:3},{value:"5\ufe0f\u20e3 <strong>Serve the Repository on GitHub Pages</strong>",id:"5\ufe0f\u20e3-serve-the-repository-on-github-pages",level:3},{value:"6\ufe0f\u20e3 <strong>Configure <code>pacman</code> to Use Your Repository</strong>",id:"6\ufe0f\u20e3-configure-pacman-to-use-your-repository",level:3},{value:"\ud83d\udee0\ufe0f Automating Updates with GitHub Actions",id:"\ufe0f-automating-updates-with-github-actions",level:3},{value:"\u2705 Final Testing",id:"-final-testing",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"upload--deploy-packages",children:"Upload & Deploy Packages"}),"\n",(0,r.jsx)(n.h3,{id:"-uploading-and-deploying-an-arch-linux-package-on-github",children:"\ud83d\ude80 Uploading and Deploying an Arch Linux Package on GitHub"}),"\n",(0,r.jsxs)(n.p,{children:["Hosting an Arch Linux package on GitHub is a great way to distribute it. Users can download and install your package directly or use your repository for easier management with ",(0,r.jsx)(n.code,{children:"pacman"}),". Here's how to do it step-by-step."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"1\ufe0f\u20e3-prepare-the-package",children:["1\ufe0f\u20e3 ",(0,r.jsx)(n.strong,{children:"Prepare the Package"})]}),"\n",(0,r.jsxs)(n.p,{children:["Ensure you\u2019ve created your Arch package using a ",(0,r.jsx)(n.code,{children:"PKGBUILD"})," file."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build the package"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to your package directory containing the ",(0,r.jsx)(n.code,{children:"PKGBUILD"})," and run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"makepkg -si\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will create a ",(0,r.jsx)(n.code,{children:".pkg.tar.zst"})," file (e.g., ",(0,r.jsx)(n.code,{children:"mypackage-1.0-1-x86_64.pkg.tar.zst"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sign the package (optional but recommended)"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"If you\u2019re distributing the package securely, sign it with your GPG key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --detach-sign --armor mypackage-1.0-1-x86_64.pkg.tar.zst\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This creates a signature file ",(0,r.jsx)(n.code,{children:"mypackage-1.0-1-x86_64.pkg.tar.zst.sig"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"2\ufe0f\u20e3-create-a-github-repository",children:["2\ufe0f\u20e3 ",(0,r.jsx)(n.strong,{children:"Create a GitHub Repository"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://github.com",children:"GitHub"})," and create a new repository."]}),"\n",(0,r.jsxs)(n.li,{children:["Name the repository (e.g., ",(0,r.jsx)(n.code,{children:"arch-packages"}),") and add a description."]}),"\n",(0,r.jsx)(n.li,{children:"Initialize it with a README file (optional)."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"3\ufe0f\u20e3-upload-the-package",children:["3\ufe0f\u20e3 ",(0,r.jsx)(n.strong,{children:"Upload the Package"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository to your local system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/yourusername/arch-packages.git\ncd arch-packages\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy your package files (",(0,r.jsx)(n.code,{children:".pkg.tar.zst"})," and ",(0,r.jsx)(n.code,{children:".sig"}),") to the repository directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp ../mypackage-1.0-1-x86_64.pkg.tar.zst .\ncp ../mypackage-1.0-1-x86_64.pkg.tar.zst.sig .\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Commit and push the files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git add mypackage-1.0-1-x86_64.pkg.tar.zst mypackage-1.0-1-x86_64.pkg.tar.zst.sig\ngit commit -m "Add mypackage version 1.0"\ngit push origin main\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"4\ufe0f\u20e3-set-up-a-repository-for-pacman",children:["4\ufe0f\u20e3 ",(0,r.jsxs)(n.strong,{children:["Set Up a Repository for ",(0,r.jsx)(n.code,{children:"pacman"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["To create a repository compatible with ",(0,r.jsx)(n.code,{children:"pacman"}),", you need a database file (",(0,r.jsx)(n.code,{children:".db"}),") and signature file (",(0,r.jsx)(n.code,{children:".db.sig"}),")."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Generate the database"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"repo-add"})," to create a repository database for your packages:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"repo-add myrepo.db.tar.gz mypackage-1.0-1-x86_64.pkg.tar.zst\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will generate files like:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"myrepo.db.tar.gz"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"myrepo.db.tar.gz.sig"})," (if signed)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Rename ",(0,r.jsx)(n.code,{children:"myrepo.db.tar.gz"})," to ",(0,r.jsx)(n.code,{children:"myrepo.db"})," for convenience:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mv myrepo.db.tar.gz myrepo.db\nmv myrepo.db.tar.gz.sig myrepo.db.sig\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add repository files to GitHub"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:".db"})," and ",(0,r.jsx)(n.code,{children:".sig"})," files to the repository and push them:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git add myrepo.db myrepo.db.sig\ngit commit -m "Add repository database"\ngit push origin main\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"5\ufe0f\u20e3-serve-the-repository-on-github-pages",children:["5\ufe0f\u20e3 ",(0,r.jsx)(n.strong,{children:"Serve the Repository on GitHub Pages"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable GitHub Pages for the repository:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to your repository\u2019s ",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Pages"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Source"}),", select ",(0,r.jsx)(n.code,{children:"main"})," (or the branch you\u2019re using) and set the folder to ",(0,r.jsx)(n.code,{children:"/root"})," or ",(0,r.jsx)(n.code,{children:"/docs"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Note the URL for your repository, which will be in the format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"https://yourusername.github.io/arch-packages/\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"6\ufe0f\u20e3-configure-pacman-to-use-your-repository",children:["6\ufe0f\u20e3 ",(0,r.jsxs)(n.strong,{children:["Configure ",(0,r.jsx)(n.code,{children:"pacman"})," to Use Your Repository"]})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add your repository to ",(0,r.jsx)(n.code,{children:"/etc/pacman.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"[myrepo]\nSigLevel = Required\nServer = https://yourusername.github.io/arch-packages\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"pacman"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install your package:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S mypackage\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-automating-updates-with-github-actions",children:"\ud83d\udee0\ufe0f Automating Updates with GitHub Actions"}),"\n",(0,r.jsxs)(n.p,{children:["To automate the deployment of new packages to GitHub, use ",(0,r.jsx)(n.strong,{children:"GitHub Actions"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".github/workflows/deploy.yml"})," file in your repository:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'name: Deploy Arch Linux Package\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - name: Install Arch tools\n        run: |\n          sudo apt update\n          sudo apt install archlinux-keyring devscripts pacman\n\n      - name: Generate repository database\n        run: |\n          repo-add myrepo.db.tar.gz *.pkg.tar.zst\n          mv myrepo.db.tar.gz myrepo.db\n          mv myrepo.db.tar.gz.sig myrepo.db.sig\n\n      - name: Commit and push repository updates\n        run: |\n          git add myrepo.db myrepo.db.sig\n          git commit -m "Update repository database"\n          git push origin main\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Push this file to your repository. The workflow will automatically run on every push to update the repository database."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"-final-testing",children:"\u2705 Final Testing"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone your repository to verify it\u2019s accessible:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://yourusername.github.io/arch-packages\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test package installation from your custom repository as described in step 6."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"By following these steps, you'll have a fully functional Arch Linux package repository hosted on GitHub, ready for others to use. \ud83c\udf89"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(6540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);