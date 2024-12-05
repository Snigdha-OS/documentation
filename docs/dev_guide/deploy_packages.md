---
sidebar_position: 5
---
# Upload & Deploy Packages

### 🚀 Uploading and Deploying an Arch Linux Package on GitHub

Hosting an Arch Linux package on GitHub is a great way to distribute it. Users can download and install your package directly or use your repository for easier management with `pacman`. Here's how to do it step-by-step.

---

### 1️⃣ **Prepare the Package**

Ensure you’ve created your Arch package using a `PKGBUILD` file.

1. **Build the package**:

   Navigate to your package directory containing the `PKGBUILD` and run:

   ```bash
   makepkg -si
   ```

   This will create a `.pkg.tar.zst` file (e.g., `mypackage-1.0-1-x86_64.pkg.tar.zst`).

2. **Sign the package (optional but recommended)**:

   If you’re distributing the package securely, sign it with your GPG key:

   ```bash
   gpg --detach-sign --armor mypackage-1.0-1-x86_64.pkg.tar.zst
   ```

   This creates a signature file `mypackage-1.0-1-x86_64.pkg.tar.zst.sig`.

---

### 2️⃣ **Create a GitHub Repository**

1. Go to [GitHub](https://github.com) and create a new repository.
2. Name the repository (e.g., `arch-packages`) and add a description.
3. Initialize it with a README file (optional).

---

### 3️⃣ **Upload the Package**

1. Clone the repository to your local system:

   ```bash
   git clone https://github.com/yourusername/arch-packages.git
   cd arch-packages
   ```

2. Copy your package files (`.pkg.tar.zst` and `.sig`) to the repository directory:

   ```bash
   cp ../mypackage-1.0-1-x86_64.pkg.tar.zst .
   cp ../mypackage-1.0-1-x86_64.pkg.tar.zst.sig .
   ```

3. Commit and push the files:

   ```bash
   git add mypackage-1.0-1-x86_64.pkg.tar.zst mypackage-1.0-1-x86_64.pkg.tar.zst.sig
   git commit -m "Add mypackage version 1.0"
   git push origin main
   ```

---

### 4️⃣ **Set Up a Repository for `pacman`**

To create a repository compatible with `pacman`, you need a database file (`.db`) and signature file (`.db.sig`).

1. **Generate the database**:

   Run `repo-add` to create a repository database for your packages:

   ```bash
   repo-add myrepo.db.tar.gz mypackage-1.0-1-x86_64.pkg.tar.zst
   ```

   This will generate files like:
   - `myrepo.db.tar.gz`
   - `myrepo.db.tar.gz.sig` (if signed)

   Rename `myrepo.db.tar.gz` to `myrepo.db` for convenience:

   ```bash
   mv myrepo.db.tar.gz myrepo.db
   mv myrepo.db.tar.gz.sig myrepo.db.sig
   ```

2. **Add repository files to GitHub**:

   Copy the `.db` and `.sig` files to the repository and push them:

   ```bash
   git add myrepo.db myrepo.db.sig
   git commit -m "Add repository database"
   git push origin main
   ```

---

### 5️⃣ **Serve the Repository on GitHub Pages**

1. Enable GitHub Pages for the repository:
   - Go to your repository’s **Settings** > **Pages**.
   - Under **Source**, select `main` (or the branch you’re using) and set the folder to `/root` or `/docs`.

2. Note the URL for your repository, which will be in the format:

   ```plaintext
   https://yourusername.github.io/arch-packages/
   ```

---

### 6️⃣ **Configure `pacman` to Use Your Repository**

1. Add your repository to `/etc/pacman.conf`:

   ```plaintext
   [myrepo]
   SigLevel = Required
   Server = https://yourusername.github.io/arch-packages
   ```

2. Update `pacman`:

   ```bash
   sudo pacman -Syu
   ```

3. Install your package:

   ```bash
   sudo pacman -S mypackage
   ```

---

### 🛠️ Automating Updates with GitHub Actions

To automate the deployment of new packages to GitHub, use **GitHub Actions**:

1. Create a `.github/workflows/deploy.yml` file in your repository:

   ```yaml
   name: Deploy Arch Linux Package

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v3

         - name: Install Arch tools
           run: |
             sudo apt update
             sudo apt install archlinux-keyring devscripts pacman

         - name: Generate repository database
           run: |
             repo-add myrepo.db.tar.gz *.pkg.tar.zst
             mv myrepo.db.tar.gz myrepo.db
             mv myrepo.db.tar.gz.sig myrepo.db.sig

         - name: Commit and push repository updates
           run: |
             git add myrepo.db myrepo.db.sig
             git commit -m "Update repository database"
             git push origin main
   ```

2. Push this file to your repository. The workflow will automatically run on every push to update the repository database.

---

### ✅ Final Testing

1. Clone your repository to verify it’s accessible:

   ```bash
   git clone https://yourusername.github.io/arch-packages
   ```

2. Test package installation from your custom repository as described in step 6.

---

By following these steps, you'll have a fully functional Arch Linux package repository hosted on GitHub, ready for others to use. 🎉