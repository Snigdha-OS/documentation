---
sidebar_position: 3
---
# Download Snigdha OS

Here’s the updated **Markdown file** with Ventoy instructions added for creating bootable media:  


### 🌟 **Guide to Download Snigdha OS**

Snigdha OS is a beautiful Arch-based distribution that provides an intuitive and user-friendly experience, complete with eye-catching themes, performance enhancements, and pre-configured software. Here's a simple guide to help you download Snigdha OS and start using it on your system.



## 🔽 **Step 1: Visit the Official Snigdha OS Website**

1. **Go to the Official Snigdha OS Website**:  
   Open your browser and visit the official Snigdha OS website to download the ISO. The website is:
   - [Download Snigdha OS](https://snigdhaos.org/downloads.html)

2. **Choose Your Preferred Edition**:  
   Snigdha OS offers several editions based on desktop environments and use cases. Some of the most popular editions include:
   - **Snigdha OS KDE** (KDE Plasma desktop with customizations)
   - **Snigdha OS XFCE** (A lighter desktop environment)
   - **Snigdha OS GNOME** (GNOME desktop environment)
   - **Snigdha OS LXQt** (A very lightweight desktop environment)
   - **Snigdha OS i3WM** (A minimalist tiling window manager)

   Select the edition that best fits your preferences.



## 💻 **Step 2: Download the ISO File**

1. **Click on the Desired Edition**:  
   Once on the Snigdha OS download page, select the edition you want to install. The page will provide a direct download link or a mirror list for the ISO.

2. **Start the Download**:  
   After selecting your edition, click on the **Download** button. The file will typically be named something like:
   - `snigdhaos-YYYY.MM.DD-x86_64.iso`
   - Example: `snigdhaos-2024.12.01-x86_64.iso`

   Wait for the download to complete. The size is typically around 2-3 GB, depending on the edition.



## 🔍 **Step 3: Verify the Download (Optional)**

1. **Verify the Integrity of the ISO**:  
   To ensure that the ISO file has not been corrupted during download, it’s a good idea to verify its checksum (SHA256 or SHA1) to compare it with the official value.

   - **Check the provided checksum** on the Snigdha OS website.
   - **Run the following command** in the terminal (replace the filename with your downloaded ISO file):

     ```bash
     sha256sum snigdhaos-YYYY.MM.DD-x86_64.iso
     ```

   - Compare the output checksum with the one on the Snigdha OS website. If they match, your download is intact.



## 💿 **Step 4: Create Bootable Media (USB or DVD)**

### Option 1: Using Ventoy 🛠️

Ventoy is an excellent tool for creating multi-boot USB drives with minimal effort.  

1. **Download Ventoy**:  
   - Visit the [Ventoy website](https://www.ventoy.net/) and download the latest version for your operating system.

2. **Install Ventoy on Your USB Drive**:  
   - Extract the Ventoy zip file and run the installation script (e.g., `Ventoy2Disk.exe` for Windows or `./Ventoy2Disk.sh` for Linux).
   - Select your USB drive and click **Install**.

3. **Copy the Snigdha OS ISO**:  
   - Once Ventoy is installed on the USB drive, copy the downloaded Snigdha OS ISO file directly to the USB drive.

4. **Boot with Ventoy**:  
   - Restart your system and boot from the Ventoy USB drive. Select the Snigdha OS ISO from the Ventoy menu.



### Option 2: Using dd (Linux)

1. **Insert your USB Drive** and check its device name using the `lsblk` command:
   ```bash
   lsblk
   ```

2. **Write the ISO to the USB**:
   ```bash
   sudo dd if=snigdhaos-YYYY.MM.DD-x86_64.iso of=/dev/sdX bs=4M status=progress oflag=sync
   ```
   Replace `/dev/sdX` with your USB drive's actual device (e.g., `/dev/sdb`).



### Option 3: Using Rufus (Windows)

1. **Download Rufus**:  
   Download and install **Rufus** from [Rufus website](https://rufus.ie/).

2. **Create a Bootable USB Drive**:  
   - Insert your USB drive and launch Rufus.
   - Select the Snigdha OS ISO and choose the USB drive.
   - Click **Start** to create the bootable USB drive.



### Option 4: Burn to a DVD (Optional)

1. **Download ImgBurn or Brasero**:  
   - Windows: Use [ImgBurn](https://www.imgburn.com/).
   - Linux: Use Brasero.

2. **Burn the ISO to a DVD**:  
   Follow the application instructions to burn the ISO file to a blank DVD.



## 🚀 **Step 5: Boot from USB or DVD**

1. **Insert the Bootable USB or DVD** into the system where you want to install Snigdha OS.

2. **Enter BIOS/UEFI**:
   - Restart the computer and press the key to enter BIOS/UEFI (e.g., `F2`, `DEL`, or `ESC`).

3. **Set USB/DVD as Primary Boot Device**:
   - In BIOS/UEFI settings, set the USB drive or DVD as the primary boot device.

4. **Save and Reboot**:
   - Save the settings and reboot. Your system should boot into the Snigdha OS live environment.



## 🏁 **Conclusion**

Now that you’ve successfully downloaded and created bootable media for Snigdha OS, you’re ready to move forward with installation. You can use the **Calamares graphical installer** for a smooth installation experience or proceed with manual partitioning if you're an advanced user.  

For more detailed installation instructions, visit the [Snigdha OS Wiki](https://wiki.snigdhaos.org/).  

Enjoy the performance and beauty of Snigdha OS! 😎🚀  