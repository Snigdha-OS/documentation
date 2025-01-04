### 📝 **Snigdha OS Documentation Repository**  

Welcome to the **Snigdha OS Documentation Repository**! 🚀  
This repository contains all official documentation, guides, and resources for **Snigdha OS**, a lightweight and customizable Linux distribution optimized for penetration testing, ethical hacking, and cybersecurity.  



### 📖 **Contents of the Repository**  

- **User Guides**: Step-by-step instructions to install, configure, and use Snigdha OS.  
- **Developer Documentation**: Guides for contributing to Snigdha OS development.  
- **Community Guidelines**: Rules and best practices for contributing and interacting within the Snigdha OS community.  
- **Translation Resources**: Tools and instructions for translating the documentation into other languages.  



### 🚀 **Getting Started**  

#### **1️⃣ Explore the Documentation**  
Visit the **[Snigdha OS Documentation Website](https://snigdha-os.github.io/documentation/)** to access:  
- Installation guides.  
- Troubleshooting tips.  
- Contribution guidelines.  

#### **2️⃣ Clone the Repository**  
If you want to contribute or make changes, clone the repository to your local machine:  
```bash
git clone https://github.com/Snigdha-OS/documentation.git
cd documentation
```

#### **3️⃣ Install Dependencies**  
To preview or edit the documentation locally, install the required dependencies:  
```bash
npm install
```

#### **4️⃣ Start the Local Development Server**  
Run the following command to preview changes in real-time:  
```bash
npm run start
```  



### 🌟 **How to Contribute**  

We welcome contributions from the community! Here’s how you can help:  

#### **1️⃣ Report Issues**  
If you find bugs, errors, or areas for improvement, open an issue in the [GitHub Issues Tracker](https://github.com/Snigdha-OS/documentation/issues).  

#### **2️⃣ Submit Changes**  
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b your-feature-name
   ```  
3. Make your changes.  
4. Commit and push your changes:  
   ```bash
   git commit -m "Description of changes"
   git push origin your-feature-name
   ```  
5. Open a pull request (PR).  

#### **3️⃣ Translate Documentation**  
Help make Snigdha OS accessible to a global audience by translating the documentation into your language. See the **[Translation Guide](https://github.com/Snigdha-OS/documentation/blob/main/TRANSLATION_GUIDE.md)** for details.  



### 🛠️ **Technologies Used**  

This repository is built using [Docusaurus](https://docusaurus.io/), a modern static site generator optimized for project documentation.  

Key technologies:  
- **React**  
- **Markdown**  
- **TypeScript**  



### 📬 **Contact & Support**  

For questions, suggestions, or help:  
- **Discussions**: [Join the Conversation](https://github.com/Snigdha-OS/documentation/discussions)  
- **Email**: hello@snigdhaos.org  



### ❤️ **Acknowledgments**  

We deeply appreciate all contributors, users, and community members who help make Snigdha OS better. Your feedback and support drive our success!  



### 📜 **License**  

This repository is licensed under the **[MIT License](LICENSE)**. By contributing, you agree that your contributions will be licensed under the same terms.  



**Let’s build Snigdha OS together! 🌍✨**

### 📝 **Translation Guide for Snigdha OS Documentation**  

Welcome to the **Translation Guide** for Snigdha OS documentation! 🌍  
Contributing translations helps make Snigdha OS more accessible to people worldwide. Follow this guide to start translating content into your preferred language.  



### 🚀 **Getting Started with Translation**

#### **1️⃣ Fork and Clone the Repository**  
1. Visit the [Snigdha OS Documentation Repository](https://github.com/Snigdha-OS/documentation).  
2. Click the **Fork** button to create your own copy of the repository.  
3. Clone your forked repository to your local machine:  
   ```bash
   git clone https://github.com/<your-username>/documentation.git
   cd documentation
   ```

#### **2️⃣ Create a New Branch**  
Create a branch for your translation work:  
```bash
git checkout -b translate/<language-code>
```  
For example, to translate into Hindi, create a branch `translate/hi`.  

#### **3️⃣ Add a Language Folder**  
Navigate to the `i18n` folder in the repository. If the folder for your language does not exist, create one. The folder name should match the language code (e.g., `hi` for Hindi, `fr` for French).  

**Structure Example**:  
```
i18n/
├── en/ (default English folder)
├── hi/ (new Hindi folder)
├── fr/ (French folder)
```

#### **4️⃣ Translate Strings**  
- **Docusaurus Strings**: Open the file at `i18n/<language-code>/docusaurus-theme.json` and replace English strings with your translations.  
- **Markdown Files**: Copy content from the `docs` folder into your language's folder (e.g., `i18n/hi/docs`) and translate the text inside each file.  



### 🔄 **Syncing Updates**

If the original documentation (in English) changes:  
1. Sync your fork with the upstream repository:  
   ```bash
   git fetch upstream
   git merge upstream/main
   ```  
2. Update translations to reflect the latest changes.  



### ✅ **Submit Your Translation**

1. **Stage and Commit Changes**:  
   ```bash
   git add .
   git commit -m "Add Hindi translations for Snigdha OS documentation"
   ```  
2. **Push Your Branch**:  
   ```bash
   git push origin translate/<language-code>
   ```  
3. **Open a Pull Request (PR)**:  
   - Go to your forked repository on GitHub.  
   - Click the **Compare & Pull Request** button.  
   - Provide a clear title and description for your PR, mentioning the language you translated.  



### 🌟 **Translation Best Practices**  

- **Consistency**: Use consistent terminology for technical terms.  
- **Context**: Understand the context before translating a term.  
- **Tone**: Maintain a professional yet approachable tone.  
- **Review**: Proofread your translations for accuracy and fluency.  



### 💬 **Need Help?**

- **Contact Us**: Reach out via [GitHub Discussions](https://github.com/Snigdha-OS/documentation/discussions).  
- **Ask for Review**: Tag maintainers for feedback on your translations.  



### ❤️ **Thank You for Contributing!**

Your efforts make Snigdha OS more inclusive and user-friendly for a global audience. Together, let’s make cybersecurity accessible for everyone. 🚀✨  