---
sidebar_position: 5
---

# Online Installation

### 🌐 **How to Install Snigdha OS Online (With Internet Connection)**

Snigdha OS is a powerful and feature-packed distribution, and the **online installation** method provides the easiest and most efficient way to install Snigdha OS. This method requires an active internet connection to download the latest updates, packages, and additional software during the installation process.

Here's a detailed step-by-step guide to install **Snigdha OS** using the **online installation** method:



### 📥 **Step 1: Download Snigdha OS ISO**

1. **Go to the Official Snigdha OS Website**:  
   Visit the Snigdha OS download page:
   - [Snigdha OS Downloads](https://snigdhaos.org/downloads.html)

2. **Select Your Preferred Edition**:  
   Snigdha OS offers various desktop environments like KDE, GNOME, XFCE, and more. Choose the one that suits your preference.

3. **Download the ISO File**:  
   Click on the link for the desired edition to download the ISO file. The file will typically be named:
   - `snigdhaos-linux-YYYY.MM.DD-x86_64.iso`



### 💾 **Step 2: Create a Bootable USB Drive**

You’ll need to create a bootable USB to install Snigdha OS. You can use **Ventoy**, **Rufus** (for Windows), or **dd** (for Linux) to create the bootable USB.

#### **For Linux Users (Using `dd`)**

1. **Insert USB Drive**:  
   Plug in a USB drive with at least 4 GB capacity.

2. **Identify USB Drive**:  
   Use the `lsblk` command to identify the device (e.g., `/dev/sdX`):
   ```bash
   lsblk
   ```

3. **Create Bootable USB**:  
   Run the following `dd` command to copy the Snigdha OS ISO to your USB (replace `/dev/sdX` with your USB device path):
   ```bash
   sudo dd if=snigdhaos-linux-YYYY.MM.DD-x86_64.iso of=/dev/sdX bs=4M status=progress oflag=sync
   ```

4. **Eject USB**:  
   After the process is complete, safely eject the USB:
   ```bash
   sudo eject /dev/sdX
   ```

#### **For Windows Users (Using Rufus)**

1. **Download and Install Rufus**:  
   Download **Rufus** from [https://rufus.ie/](https://rufus.ie/) and install it.

2. **Open Rufus** and Select the USB Drive.

3. **Choose Snigdha OS ISO** and Select the Partition Scheme:  
   Choose **GPT** for UEFI-based systems and **MBR** for legacy BIOS systems.

4. **Start the Process**:  
   Click **Start** to create the bootable USB. Wait until it’s done.



### 🔌 **Step 3: Boot Into Snigdha OS Live Environment**

1. **Insert the Bootable USB** into the computer where you want to install Snigdha OS.

2. **Enter BIOS/UEFI**:  
   Restart the system and enter the BIOS/UEFI settings (usually by pressing a key like `F2`, `DEL`, or `ESC`).

3. **Set USB as the First Boot Device**:  
   In the BIOS/UEFI settings, set the USB drive as the first boot device.

4. **Save and Reboot**:  
   Save your settings and reboot the computer. It will boot into the Snigdha OS live environment.



### ⚙️ **Step 4: Start the Online Installation Process**

1. **Launch the Installer**:  
   Once the system boots into the Snigdha OS live environment, you’ll see a **Snigdha OS Installer** icon on the desktop. Click it to begin the installation.

2. **Select Language and Region**:  
   Choose your preferred language, region, and keyboard layout.

3. **Connect to the Internet**:  
   - **Wi-Fi**: Click on the network icon in the system tray and select your Wi-Fi network.
   - **Wired Connection**: If you’re using a wired connection, the system should automatically connect to the internet.

4. **Choose Installation Type**:  
   You’ll have two main options:
   - **Erase disk and install Snigdha OS**: Automatically partitions and installs Snigdha OS (use this if you want a clean install).
   - **Manual partitioning**: If you want more control over your partitions, select this option to manually create and set partitions.



### 💻 **Step 5: Partitioning and Disk Setup**

1. **Select the Disk**:  
   Choose the disk where you want to install Snigdha OS.

2. **Automatic Partitioning (Recommended)**:  
   - **Erase and Install**: Select this if you want to overwrite the entire disk with Snigdha OS.
   - **Manual Partitioning**: Select this if you want to set up partitions manually, allowing you to configure the disk layout.

3. **Filesystem Choices**:  
   - Snigdha OS uses **Btrfs** by default. You can also select **ext4** or **LVM** if preferred.

4. **Confirm and Continue**:  
   Confirm your partition settings and proceed. The installer will format the disk and prepare it for the installation.



### 🧑‍💻 **Step 6: User Configuration**

1. **Create Your User**:  
   Set up your **username** and **password**. You’ll also need to set the **root password**.

2. **Timezone and Locale**:  
   Choose your **timezone** and **locale**. The installer should detect your location automatically, but you can adjust it if needed.



### 🌐 **Step 7: Installing Snigdha OS**

1. **Download Updates and Packages**:  
   Since you’re installing online, the installer will fetch the latest updates and packages during the process. This requires an active internet connection. The installer will download:
   - **System updates**
   - **Additional packages** (drivers, codecs, utilities, etc.)

2. **Begin Installation**:  
   Click the **Install** button to start the installation process. Snigdha OS will now be installed on your disk. This process may take some time, depending on your internet speed and disk performance.



### 🔄 **Step 8: Finalize the Installation**

1. **Wait for Installation to Complete**:  
   The installation process will copy files, install software, and configure the system. This may take 15-30 minutes or more, depending on your system and internet speed.

2. **Reboot the System**:  
   Once the installation is complete, you’ll be prompted to reboot the system. Remove the installation USB stick and reboot into Snigdha OS.

3. **Boot into Snigdha OS**:  
   Your computer will now boot into Snigdha OS. If you installed it alongside another operating system, you will see the **GRUB bootloader** to select your OS.



### 🎉 **Step 9: Post-Installation Setup**

1. **Set Up Your System**:  
   After booting into Snigdha OS, you may need to:
   - **Install additional software** using the **Snigdha OS Assistant** or **Pacman**.
   - **Update the system** if needed:
     ```bash
     sudo pacman -Syu
     ```

2. **Enjoy Your New Snigdha OS System**:  
   Once everything is set up, you can start using Snigdha OS, explore the KDE Plasma desktop, install apps, and customize your system!



### 🎉 **Conclusion**

You’ve now successfully installed **Snigdha OS** using the **online installation** method! The online installation ensures you get the latest updates and packages during the installation process, making the system up-to-date as soon as it’s ready. Enjoy using Snigdha OS and all its powerful features! 😎🚀