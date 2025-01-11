---
sidebar_position: 4
---
# Install Packages

### 📦 **How to Install a Package on Snigdha OS**

Installing packages on Snigdha OS primarily involves using the **Pacman** package manager or an **AUR helper** for community-contributed software. Here's a step-by-step guide:



### 🛠️ **Step 1: Update Your System**
Before installing a package, ensure your system is up-to-date to avoid dependency issues:
```bash
sudo pacman -Syu
```



### 📂 **Step 2: Search for a Package**
To find the package you want to install, use the following command:
```bash
pacman -Ss package-name
```

#### Example:
Search for the Firefox browser:
```bash
pacman -Ss firefox
```
This command displays available packages with "firefox" in their name or description.



### ✅ **Step 3: Install the Package**
Once you know the exact package name, install it using:
```bash
sudo pacman -S package-name
```

#### Example:
Install Firefox:
```bash
sudo pacman -S firefox
```



### 📦 **Step 4: Verify Installation**
To check if a package is installed:
```bash
pacman -Q package-name
```

#### Example:
Verify Firefox installation:
```bash
pacman -Q firefox
```



### 🔍 **Step 5: Explore Package Details**
View information about an installed package:
```bash
pacman -Qi package-name
```

#### Example:
```bash
pacman -Qi firefox
```



### 🌐 **Installing AUR Packages**
If the package you want is not in the official repositories but is available in the **Arch User Repository (AUR)**, use an AUR helper like `yay` or `paru`.

#### Install a Package from AUR
```bash
yay -S package-name
```

#### Example:
Install Google Chrome from AUR:
```bash
yay -S google-chrome
```



### 🧹 **Clean Up After Installation**
After installing a package, clean up unused dependencies (optional):
```bash
sudo pacman -Rns $(pacman -Qdtq)
```


:::tip
:::
1. **Enable Parallel Downloads**: To speed up installation, enable parallel downloads in `/etc/pacman.conf` by adding:
   ```
   ParallelDownloads = 5
   ```
2. **Use Trusted Sources**: Only install AUR packages from trusted sources and review the `PKGBUILD` file before installation.



### 🎉 **Conclusion**
Installing packages on Snigdha OS is straightforward with `pacman`. For additional software, AUR helpers like `yay` expand the possibilities. With these tools, you can access a vast array of software tailored to your needs! 🚀