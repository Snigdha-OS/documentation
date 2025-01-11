---
sidebar_position: 3
---

# Installing with AUR


### 🌟 **Installing Packages with an AUR Helper on Snigdha OS**

Snigdha OS is known for its powerful **Arch User Repository (AUR)**, which provides access to user-contributed packages that are not included in the official repositories. To simplify the process of building and installing packages from the AUR, many users rely on **AUR helpers** like `yay`, `paru`, or `trizen`.



### 🔧 **Step 1: Install an AUR Helper**

#### **Popular AUR Helpers**

1. **Yay (Yet Another Yaourt)**  
   Lightweight and popular among Arch users.
   - Install:
     ```bash
     sudo pacman -S --needed git base-devel
     git clone https://aur.archlinux.org/yay.git
     cd yay
     makepkg -si
     ```

2. **Paru**  
   A modern AUR helper written in Rust, which offers fast operations and is actively maintained.
   - Install:
     ```bash
     sudo pacman -S --needed git base-devel
     git clone https://aur.archlinux.org/paru.git
     cd paru
     makepkg -si
     ```

3. **Trizen**  
   Another reliable AUR helper that integrates with pacman and supports clean builds.
   - Install:
     ```bash
     sudo pacman -S --needed git base-devel
     git clone https://aur.archlinux.org/trizen.git
     cd trizen
     makepkg -si
     ```



### 🌟 **Step 2: Search and Install AUR Packages**

Once your AUR helper is installed, you can easily search for and install AUR packages.

#### **Basic Commands**
| **Command**                     | **Description**                          |
|----------------------------------|------------------------------------------|
| `yay -S package-name`           | Install a package from AUR.             |
| `paru -S package-name`          | Install a package from AUR.             |
| `trizen -S package-name`        | Install a package from AUR.             |
| `yay -Ss package-name`          | Search for a package in AUR.            |
| `paru -Ss package-name`         | Search for a package in AUR.            |
| `trizen -Ss package-name`       | Search for a package in AUR.            |
| `yay -Syu`                      | Update all installed packages (including AUR). |
| `paru -Syu`                     | Update all installed packages (including AUR). |
| `trizen -Syu`                   | Update all installed packages (including AUR). |
| `yay -R package-name`           | Remove a package.                       |
| `paru -R package-name`          | Remove a package.                       |
| `trizen -R package-name`        | Remove a package.                       |



### 🌐 **Step 3: Example Installations**

1. **Install `visual-studio-code-bin` (AUR package)**:
   ```bash
   yay -S visual-studio-code-bin
   ```

2. **Search for a package (e.g., Brave Browser)**:
   ```bash
   paru -Ss brave
   ```

3. **Update All Packages**:
   ```bash
   yay -Syu
   ```

4. **Remove a Package (e.g., Discord)**:
   ```bash
   paru -R discord
   ```



### ⚠️ **Tips and Precautions**

1. **Enable Parallel Builds**: Speed up builds by editing `/etc/makepkg.conf` and setting:
   ```bash
   MAKEFLAGS="-j$(nproc)"
   ```
   This uses all available CPU cores for compiling.

2. **Check PKGBUILDs**: Always review the **PKGBUILD** file for security before installing a package:
   ```bash
   yay -G package-name
   cd package-name
   cat PKGBUILD
   ```

3. **Use Trusted Helpers**: Stick to widely-used and actively maintained AUR helpers to minimize risks.

4. **Update Regularly**: Keep your system updated, as outdated packages can lead to dependency issues:
   ```bash
   yay -Syu
   ```

---

### 🚀 **Conclusion**

Using an AUR helper like `yay`, `paru`, or `trizen` streamlines the process of installing and managing AUR packages, making Snigdha OS even more powerful and user-friendly. Happy exploring! 😄
