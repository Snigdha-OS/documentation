"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[5766],{8521:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(4848),i=s(8453);const t={sidebar_position:2},l="Generate GPG Key",o={id:"dev_guide/gpg_key",title:"Generate GPG Key",description:"\ud83d\udd10 How to Generate a GPG Key on Snigdha OS",source:"@site/docs/dev_guide/gpg_key.md",sourceDirName:"dev_guide",slug:"/dev_guide/gpg_key",permalink:"/documentation/dev_guide/gpg_key",draft:!1,unlisted:!1,editUrl:"https://github.com/Snigdha-OS/documentation/tree/master/docs/dev_guide/gpg_key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Build From Source",permalink:"/documentation/dev_guide/build_source"},next:{title:"Upload Key => Server",permalink:"/documentation/dev_guide/upload_gog_key"}},c={},d=[{value:"\ud83d\udd10 How to Generate a GPG Key on Snigdha OS",id:"-how-to-generate-a-gpg-key-on-snigdha-os",level:3},{value:"\ud83d\udee0\ufe0f Step 1: Install GPG",id:"\ufe0f-step-1-install-gpg",level:3},{value:"\ud83d\udee0\ufe0f Step 2: Create a New GPG Key Pair",id:"\ufe0f-step-2-create-a-new-gpg-key-pair",level:3},{value:"\ud83d\udee0\ufe0f Step 3: Verify the Generated Key",id:"\ufe0f-step-3-verify-the-generated-key",level:3},{value:"\ud83d\udee0\ufe0f Step 4: Export Your Public Key",id:"\ufe0f-step-4-export-your-public-key",level:3},{value:"\ud83d\udee0\ufe0f Step 5: Test Encryption and Decryption",id:"\ufe0f-step-5-test-encryption-and-decryption",level:3},{value:"\ud83d\udee0\ufe0f Step 6: Back Up Your Keys",id:"\ufe0f-step-6-back-up-your-keys",level:3},{value:"\ud83d\ude80 Final Tips",id:"-final-tips",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"generate-gpg-key",children:"Generate GPG Key"}),"\n",(0,r.jsx)(n.h3,{id:"-how-to-generate-a-gpg-key-on-snigdha-os",children:"\ud83d\udd10 How to Generate a GPG Key on Snigdha OS"}),"\n",(0,r.jsx)(n.p,{children:"GPG (GNU Privacy Guard) is a tool for secure communication and data encryption. It allows you to create and manage public and private keys, encrypt files, and sign documents. Here\u2019s how you can generate a GPG key on Snigdha OS, step by step, with examples."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-1-install-gpg",children:"\ud83d\udee0\ufe0f Step 1: Install GPG"}),"\n",(0,r.jsx)(n.p,{children:"Most Snigdha OS installations come with GPG pre-installed. If it\u2019s not installed, use the following command to install it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S gnupg\n"})}),"\n",(0,r.jsx)(n.p,{children:"To verify the installation, check the version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --version\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-2-create-a-new-gpg-key-pair",children:"\ud83d\udee0\ufe0f Step 2: Create a New GPG Key Pair"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Start the key generation process"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --full-generate-key\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Select the key type"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"You\u2019ll see a prompt to choose the type of key. Options typically include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"(1) RSA and RSA (default)"})}),"\n",(0,r.jsx)(n.li,{children:"(2) DSA and Elgamal"}),"\n",(0,r.jsx)(n.li,{children:"(3) DSA (sign only)"}),"\n",(0,r.jsx)(n.li,{children:"(4) RSA (sign only)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.code,{children:"1"})," and hit Enter to select the default ",(0,r.jsx)(n.strong,{children:"RSA and RSA"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set the key length"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["You\u2019ll be prompted to specify the key size. A common recommendation is ",(0,r.jsx)(n.strong,{children:"4096 bits"})," for strong encryption. Type ",(0,r.jsx)(n.code,{children:"4096"})," and press Enter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set the expiration date"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"You can define how long the key should be valid. Options include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0"})," for no expiration"]}),"\n",(0,r.jsxs)(n.li,{children:["Specify a duration, e.g., ",(0,r.jsx)(n.code,{children:"1y"})," for one year, ",(0,r.jsx)(n.code,{children:"2y"})," for two years, or ",(0,r.jsx)(n.code,{children:"1m"})," for one month."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For this example, type ",(0,r.jsx)(n.code,{children:"0"})," (no expiration) and press Enter. When prompted, confirm your choice."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Enter your details"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"You\u2019ll be asked for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Your real name"}),": Enter your full name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Your email address"}),": Enter a valid email address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"A comment (optional)"}),": Add a description or leave it blank."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Real name: John Doe\nEmail address: johndoe@example.com\nComment: Snigdha OS User\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Review the details and confirm by typing ",(0,r.jsx)(n.code,{children:"O"})," (for OK)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set a passphrase"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Choose a strong passphrase to protect your private key. This passphrase will be required whenever you use your private key for encryption or signing."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-3-verify-the-generated-key",children:"\ud83d\udee0\ufe0f Step 3: Verify the Generated Key"}),"\n",(0,r.jsx)(n.p,{children:"Once the key is generated, you can list your keys with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/home/username/.gnupg/pubring.kbx\n---------------------------------\npub   rsa4096 2023-12-05 [SC] [expires: 2025-12-05]\n      ABCD1234EFGH5678IJKL9012MNOP3456QRST7890\nuid           [ultimate] John Doe <johndoe@example.com>\nsub   rsa4096 2023-12-05 [E] [expires: 2025-12-05]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pub"}),": Your primary key (for signing and certification)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sub"}),": Subkey (for encryption)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SC]"}),": Key capabilities: Sign and Certify."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[E]"}),": Encryption."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-4-export-your-public-key",children:"\ud83d\udee0\ufe0f Step 4: Export Your Public Key"}),"\n",(0,r.jsx)(n.p,{children:"To share your public key with others, export it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export johndoe@example.com > public_key.asc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This creates a file ",(0,r.jsx)(n.code,{children:"public_key.asc"})," with your public key in ASCII format."]}),"\n",(0,r.jsx)(n.p,{children:"To display the key in the terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export johndoe@example.com\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-5-test-encryption-and-decryption",children:"\ud83d\udee0\ufe0f Step 5: Test Encryption and Decryption"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Encrypt a file"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Create a sample file to encrypt:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo "Hello, this is a test message!" > message.txt\n'})}),"\n",(0,r.jsx)(n.p,{children:"Encrypt the file with your public key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --output message.txt.gpg --encrypt --recipient johndoe@example.com message.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This generates an encrypted file ",(0,r.jsx)(n.code,{children:"message.txt.gpg"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Decrypt the file"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Decrypt the file using your private key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --output decrypted_message.txt --decrypt message.txt.gpg\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Enter your passphrase when prompted. The decrypted content will be saved in ",(0,r.jsx)(n.code,{children:"decrypted_message.txt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-step-6-back-up-your-keys",children:"\ud83d\udee0\ufe0f Step 6: Back Up Your Keys"}),"\n",(0,r.jsx)(n.p,{children:"Always back up your keys to prevent losing access:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Export your private key"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export-secret-keys johndoe@example.com > private_key.asc\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Export your public key"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export johndoe@example.com > public_key.asc\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Store these files (",(0,r.jsx)(n.code,{children:"private_key.asc"})," and ",(0,r.jsx)(n.code,{children:"public_key.asc"}),") in a safe place."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"-final-tips",children:"\ud83d\ude80 Final Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keep your private key secure. Never share it."}),"\n",(0,r.jsx)(n.li,{children:"Regularly update your passphrase for added security."}),"\n",(0,r.jsxs)(n.li,{children:["Use tools like ",(0,r.jsx)(n.strong,{children:"gpg-agent"})," for easier key management."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"That\u2019s it! You now have a functional GPG key pair set up on Snigdha OS. \ud83c\udf89"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);