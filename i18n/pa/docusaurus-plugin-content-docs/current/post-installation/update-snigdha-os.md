---
sidebar_position: 2
---

# Update Snigdha OS

### 🔄 **How to Update Snigdha OS**

Snigdha OS, based on Arch Linux, uses a **rolling release model**, meaning you always have access to the latest updates. Keeping your system up-to-date ensures stability, security, and access to the latest features.

Follow these steps to safely and effectively update your Snigdha OS system:



### 🔧 **Step 1: Open the Terminal**

Press `Ctrl + Alt + T` to open the terminal or use the **Konsole** or any terminal emulator installed on your system.



### 🔄 **Step 2: Update the System**

Run the following commands to update your Snigdha OS system:

#### **Basic Update Command**  
Use **Pacman** (the default package manager) to synchronize and upgrade packages:
```bash
sudo pacman -Syu
```

#### **Snigdha OS Assistant (Optional)**  
Snigdha OS provides a GUI tool called **Snigdha OS Assistant** for system management, including updates.  
- Open **Snigdha OS Assistant** from the application menu.
- Click on **Update System** and follow the prompts.

#### **With AUR Packages (Using an AUR Helper)**  
If you use AUR packages, update them alongside system packages with a tool like `yay` or `paru`:
```bash
yay -Syu
```



### 🛠️ **Step 3: Rebuild Outdated Configurations**

After major updates, especially those involving the kernel or critical system components, rebuild configurations to avoid issues. Snigdha OS makes this easy with:
```bash
sudo pacman -S linux-headers
```

If you use the **ZRAM** feature or **custom kernels**, ensure they're updated and aligned with the current system kernel.



### 🧹 **Step 4: Clean Up Unused Packages**

Remove unused or orphaned packages to free up space:
```bash
sudo pacman -Rns $(pacman -Qdtq)
```

Clear the package cache to save disk space (Snigdha OS already does this automatically with **paccache**):
```bash
sudo paccache -r
```



### 🚀 **Step 5: Reboot Your System**

If a kernel or other core system components were updated, reboot your system to apply the changes:
```bash
reboot
```



### 🌟 **Tips for Safe Updates**

1. **Use Snigdha OS's Snapshot Feature**:
   - Snigdha OS uses **Btrfs** snapshots via **Timeshift**. If something goes wrong during an update, you can roll back to a previous working state.
   - Before updating, create a manual snapshot:
     ```bash
     sudo timeshift --create
     ```

2. **Check for Arch News**:  
   Before major updates, check the **Arch Linux News** page for important announcements:
   - [Arch Linux News](https://archlinux.org/news/)

3. **Run Updates Regularly**:  
   Snigdha OS is a rolling release, so it's important to update frequently to avoid large, time-consuming updates and potential conflicts.



### 💻 **Example Commands**

Here’s a single command for a complete update, including AUR packages and cleaning up:
```bash
sudo pacman -Syu && yay -Syu && sudo pacman -Rns $(pacman -Qdtq)
```



### 🎉 **Conclusion**

Keeping Snigdha OS updated is straightforward and ensures you always have the latest features and security patches. With tools like **Snigdha OS Assistant**, **Pacman**, and **Timeshift**, managing updates is efficient and safe. 🚀