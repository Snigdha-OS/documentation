---
sidebar_position: 4
---

# Offline Installation

### 🖥️ **How to Install Snigdha OS in Offline Mode**

Installing Snigdha OS in **offline mode** means performing the installation without an active internet connection. While Snigdha OS's installation typically requires an internet connection to fetch updates and additional packages, it’s still possible to install it offline using the installation ISO and pre-downloaded packages. This method is especially useful if you're in an environment with limited or no internet access.

Here's a step-by-step guide to install Snigdha OS in **offline mode**:



### 📥 **Step 1: Download Snigdha OS ISO**

1. **Go to the Official Snigdha OS Website**:  
   Visit the Snigdha OS download page:  
   - [Snigdha OS Downloads](https://snigdhaos.org/downloads.html)

2. **Download the ISO File**:  
   Select your preferred edition (KDE, GNOME, etc.) and download the ISO file. This will be used to create the bootable USB.

3. **Optionally Download Extra Packages**:  
   If you know you will need additional packages (like drivers or software that may not be included in the ISO), it’s a good idea to download them beforehand using another system that has internet access. You can use a tool like **Pacman** to download packages:
   ```bash
   sudo pacman -Sw package_name
   ```



### 💾 **Step 2: Create a Bootable USB Drive**

You need a **bootable USB** to install Snigdha OS. Use **Ventoy** or **Rufus** (for Windows) or the `dd` command (for Linux) to create a bootable USB drive.

#### **For Linux Users (Using `dd`)**

1. **Insert USB Drive**:
   Plug in a USB drive (at least 4 GB).

2. **Find USB Drive Location**:
   Use the `lsblk` command to identify your USB drive:
   ```bash
   lsblk
   ```

3. **Create Bootable USB**:
   Run the `dd` command to copy the Snigdha OS ISO to your USB drive (replace `/dev/sdX` with your USB device path):
   ```bash
   sudo dd if=snigdhaos-YYYY.MM.DD-x86_64.iso of=/dev/sdX bs=4M status=progress oflag=sync
   ```

4. **Eject USB**:
   After the process finishes, safely eject the USB:
   ```bash
   sudo eject /dev/sdX
   ```

#### **For Windows Users (Using Rufus)**

1. **Download and Install Rufus**:  
   Download **Rufus** from [https://rufus.ie/](https://rufus.ie/) and install it.

2. **Open Rufus** and Select the USB Drive.
   
3. **Choose the Snigdha OS ISO** and select the appropriate **Partition Scheme** (usually **GPT** for modern systems).

4. **Start the Process**:  
   Click **Start** to create a bootable USB. Wait for it to complete.



### 🔌 **Step 3: Boot into Snigdha OS Live Environment**

1. **Insert the Bootable USB** into the target system.

2. **Enter BIOS/UEFI**:  
   Restart the system and press the appropriate key (often `F2`, `DEL`, or `ESC`) to enter BIOS/UEFI.

3. **Set USB as Primary Boot Device**:  
   In the BIOS/UEFI settings, set the USB drive as the first boot device.

4. **Save and Reboot**:  
   Save the changes and reboot the system. It will boot into the Snigdha OS live environment.



### ⚙️ **Step 4: Install Snigdha OS Offline**

1. **Launch the Installer**:  
   In the live environment, click on the **Snigdha OS Installer** icon on the desktop or in the application menu.

2. **Select Language and Region**:  
   Follow the prompts to select your language, region, and keyboard layout.

3. **Partitioning**:  
   Choose the disk where you want to install Snigdha OS. You can either let the installer automatically partition your disk or choose manual partitioning for more control.

   - **Btrfs** is the default filesystem used by Snigdha OS.
   - You can set up **LVM** or **ZFS** if you want advanced features.

4. **Offline Mode Warning**:  
   The installer will ask for an internet connection to fetch updates and additional software. **Ignore this step** since you are installing in offline mode. Proceed without an internet connection.

5. **User Configuration**:  
   - Set up your **username** and **password**.
   - Configure **root password** if required.

6. **Installation Location**:  
   Confirm the partition where you want to install Snigdha OS. Double-check the partitions to avoid data loss.

7. **Begin Installation**:  
   Click on the **Install** button to start the installation. The system will copy files from the ISO to the target disk.



### 🔄 **Step 5: Install Pre-Downloaded Packages (Optional)**

If you have pre-downloaded additional packages or software (like drivers, codecs, or essential tools), you can install them during or after the installation process:

1. **Mount the USB with Packages**:  
   If the packages are on another USB or disk, you can mount it to the system during installation using the terminal.

2. **Use Pacman to Install Packages**:
   Once Snigdha OS is installed and you’ve booted into the system, use the `pacman` package manager to install any pre-downloaded packages:
   ```bash
   sudo pacman -U /path/to/package_file.pkg.tar.zst
   ```

   Replace `/path/to/package_file.pkg.tar.zst` with the actual path to the downloaded package.



### ⚙️ **Step 6: Final Steps and Reboot**

1. **Configure Your System**:  
   Once the installation is complete, you may need to configure your system settings, such as display resolution, Wi-Fi (if available), and user preferences.

2. **Reboot the System**:  
   After installation, **reboot** your system and remove the USB drive.

3. **Boot into Snigdha OS**:  
   Your system should boot into Snigdha OS. If you set up a **dual-boot** with other operating systems, you’ll see the bootloader menu to choose the OS.

4. **Offline Setup**:  
   If you have any additional software or updates that need to be installed, you can use the **offline package manager** to install them later when you have an internet connection.



### 🎉 **Conclusion**

You’ve now installed Snigdha OS in **offline mode**! While some post-installation updates and software installation may require an internet connection, this method allows you to set up and use Snigdha OS in environments with no or limited internet access. This installation method is ideal for areas with poor connectivity, or for advanced users who want to configure their system fully offline.

Enjoy your new Snigdha OS setup! 😎🚀