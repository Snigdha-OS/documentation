"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[5890],{5843:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(4848),a=i(8453);const s={sidebar_position:2},o="PKGBUILD Template",c={id:"dev_guide/pkgbuild",title:"PKGBUILD Template",description:"Snigdha OS has it's own PKGBUILD template for building packages. We follow the the template so that we can maintain the packages in a better way. If you are building packages for Snigdha OS, then it will be a good option to follow the PKGBUILD template.",source:"@site/docs/dev_guide/pkgbuild.md",sourceDirName:"dev_guide",slug:"/dev_guide/pkgbuild",permalink:"/documentation/dev_guide/pkgbuild",draft:!1,unlisted:!1,editUrl:"https://github.com/Snigdha-OS/documentation/tree/master/docs/dev_guide/pkgbuild.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Build From Source",permalink:"/documentation/dev_guide/build_source"},next:{title:"Generate GPG Key",permalink:"/documentation/dev_guide/gpg_key"}},r={},l=[{value:"What is PKGBUILD?",id:"what-is-pkgbuild",level:2},{value:"A simple PKGBUILD",id:"a-simple-pkgbuild",level:2},{value:"Snigdha OS PKGBUILD",id:"snigdha-os-pkgbuild",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pkgbuild-template",children:"PKGBUILD Template"}),"\n",(0,t.jsxs)(n.p,{children:["Snigdha OS has it's own ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," template for building packages. We follow the the template so that we can maintain the packages in a better way. If you are building packages for Snigdha OS, then it will be a good option to follow the ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," template."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-pkgbuild",children:"What is PKGBUILD?"}),"\n",(0,t.jsxs)(n.p,{children:["In Arch Linux or Snigdha OS, ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," is a script used to build packages. It contains metadata about the package as well as instructions on how to compile or otherwise obtain the necessary files to create a package. ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," scripts are used with the ",(0,t.jsx)(n.code,{children:"makepkg"})," utility to create packages in the Arch Linux package format (",(0,t.jsx)(n.code,{children:".pkg.tar.xz"}),"). But in ",(0,t.jsx)(n.strong,{children:"Snigdha OS"})," our package format will be ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:".pkg.tar.zst"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PKGBUILD"})," typically includes information such as the package name, version, dependencies, build instructions, and optional parameters. They allow users to easily create custom packages from source code or other files, which can then be installed using the package manager (",(0,t.jsx)(n.code,{children:"pacman"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," scripts provides a standardized and reproducible way to create packages, ensuring consistency across the Arch Linux ecosystem. Additionally, the Arch User Repository (AUR) relies heavily on ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," scripts submitted by users to build and distribute packages that are not available in the official repositories. Since ",(0,t.jsx)(n.strong,{children:"Snigdha OS"})," also comes in ",(0,t.jsx)(n.strong,{children:"Arch Linux"})," ecosystem, we also rely on Arch User Repository for packages."]}),"\n",(0,t.jsx)(n.h2,{id:"a-simple-pkgbuild",children:"A simple PKGBUILD"}),"\n",(0,t.jsxs)(n.p,{children:["Writing a ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," for Arch Linux and Snigdha OS involves several key steps. Below is a basic example of a ",(0,t.jsx)(n.code,{children:"PKGBUILD"}),' for a fictitious application called "exampleapp." This example assumes that "exampleapp" is a simple Python application with a ',(0,t.jsx)(n.code,{children:"setup.py"})," file for installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-PKGBUILD",children:'# Maintainer: Your Name <your_email@example.com>\npkgname=exampleapp\npkgver=1.0\npkgrel=1\npkgdesc="A simple example application"\narch=(\'any\')\nurl="https://example.com/exampleapp"\nlicense=(\'MIT\')\ndepends=(\'python\')\n\nsource=("https://example.com/exampleapp/exampleapp-${pkgver}.tar.gz")\n\nbuild() {\n    cd "${srcdir}/exampleapp-${pkgver}"\n    python setup.py build\n}\n\npackage() {\n    cd "${srcdir}/exampleapp-${pkgver}"\n    python setup.py install --root="${pkgdir}/" --optimize=1\n}\n\n# Checksums, uncomment these lines and provide the correct checksums:\n# sha256sums=(\'SKIP\')\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here's a breakdown of the sections:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Metadata"}),": This section defines metadata about the package, including its name (",(0,t.jsx)(n.code,{children:"pkgname"}),"), version (",(0,t.jsx)(n.code,{children:"pkgver"}),"), release number (",(0,t.jsx)(n.code,{children:"pkgrel"}),"), description (",(0,t.jsx)(n.code,{children:"pkgdesc"}),"), architecture (",(0,t.jsx)(n.code,{children:"arch"}),"), URL (",(0,t.jsx)(n.code,{children:"url"}),"), and license (",(0,t.jsx)(n.code,{children:"license"}),"). These fields are essential for identifying and describing the package."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dependencies"}),": The ",(0,t.jsx)(n.code,{children:"depends"})," array lists the runtime dependencies required for the package to function correctly. You should include any libraries or packages that your application relies on."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Source"}),": The ",(0,t.jsx)(n.code,{children:"source"})," array specifies where to download the source code for the application. In this example, the source is assumed to be a tarball available at a URL. You may need to adjust this section based on the source code's location and format."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Build() function"}),": This function contains the commands needed to build the package. It typically involves navigating to the source directory (",(0,t.jsx)(n.code,{children:"${srcdir}"}),") and running build commands specific to your application. In this example, we're assuming a Python application with a ",(0,t.jsx)(n.code,{children:"setup.py"})," file, so we use ",(0,t.jsx)(n.code,{children:"python setup.py build"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Package() function"}),": This function contains the commands needed to install the package into the package directory (",(0,t.jsx)(n.code,{children:"${pkgdir}"}),"). It typically involves navigating to the source directory and running installation commands. Here, we're assuming a Python application with a ",(0,t.jsx)(n.code,{children:"setup.py"})," file, so we use ",(0,t.jsx)(n.code,{children:"python setup.py install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Checksums"}),": Uncomment the ",(0,t.jsx)(n.code,{children:"sha256sums"})," array and provide the correct checksum for the source tarball. This ensures that the source hasn't been tampered with."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once you've written the ",(0,t.jsx)(n.code,{children:"PKGBUILD"}),", save it to a file named ",(0,t.jsx)(n.code,{children:"PKGBUILD"})," and place it in a directory with the same name as the package. You can then use the ",(0,t.jsx)(n.code,{children:"makepkg"})," command to build the package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ makepkg\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will generate a ",(0,t.jsx)(n.code,{children:".pkg.tar.zst"})," file containing the built package, which you can then install using ",(0,t.jsx)(n.code,{children:"pacman"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"snigdha-os-pkgbuild",children:"Snigdha OS PKGBUILD"}),"\n",(0,t.jsx)(n.p,{children:"Here is the PKGBUILD Template we follow specifically for Snigdha OS."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Maintainer: Your Name <your_email@provider.com>\npkgname=\norg=Snigdha-OS # The username/organization username where you upload the Source Code. \nbranch=master # Your GitHub/GitLab/Gitea repository branch. Possible values: master, main, devlopment\npkgver= # Initiate it with 1.\npkgrel= # Initiate it with 1.\npkgdesc='' # A short description of your package.\narch=('') # Possible options: any,x86_64, arm64 etc.\nurl=\"\" # Your package source code URL \nlicense=('') # Possible options: MIT, GPL, AGPL, custom\nmakedepends=('') # Dependency it install or run the package\nsource=(\"\") # The source of the package \nsha256sums=('') # checksums\ninstall=$pkgname.install # Further instuction after installing/building the package.\n\npkgver() {\n\tprintf \"r%s.%s\" \"$(git rev-list --count HEAD)\" \"$(git rev-parse --short HEAD)\"\n}\n\n# Since we maintain the package version with the github repository commit count an the last commit, we use pkgver() function.\n# It is a good option the maintain the package version. Somtimes I forgot to change the version.\n\npackage() {\n\t# Your package function goes here with instructions to build the package. \n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);