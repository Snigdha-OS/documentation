---
sidebar_position: 7
---
# Virtualbox

### 🖥️ **How to Install Snigdha OS in VirtualBox**

Installing **Snigdha OS** in **VirtualBox** is a great way to test or use Snigdha OS in a virtual environment without affecting your main system. Here's a detailed step-by-step guide to help you get Snigdha OS running in VirtualBox.

---

### 📥 **Step 1: Download Snigdha OS ISO**

1. **Go to the Official Snigdha OS Website**:  
   Visit the official Snigdha OS download page:  
   - [Snigdha OS Downloads](https://snigdhaos.org/downloads.html)

2. **Download the ISO File**:  
   Choose the edition (KDE, GNOME, XFCE, etc.) and download the ISO file. The file will be something like:  
   - `snigdhaos-YYYY.MM.DD-x86_64.iso`

---

### 💾 **Step 2: Install and Set Up VirtualBox**

1. **Download and Install VirtualBox**:
   - **For Windows**: Download from [VirtualBox Website](https://www.virtualbox.org/).
   - **For macOS**: Download from [VirtualBox Website](https://www.virtualbox.org/).
   - **For Linux**: You can install it via your package manager:
     ```bash
     sudo pacman -S virtualbox  # For Arch Linux and derivatives
     sudo apt install virtualbox  # For Ubuntu/Debian
     sudo dnf install virtualbox  # For Fedora
     ```

2. **Launch VirtualBox**:  
   After installation, launch **VirtualBox** from your applications menu.

---

### ⚙️ **Step 3: Create a New Virtual Machine**

1. **Click on "New"**:  
   Open VirtualBox and click on the **New** button to create a new virtual machine.

2. **Set the Name and Type**:
   - **Name**: Choose a name for your virtual machine (e.g., "Snigdha OS").
   - **Type**: Select **Linux**.
   - **Version**: Select **Linux 2.6 / 3.x / 4.x (64-bit)** (or a similar option depending on the version of Snigdha OS).

3. **Allocate Memory**:  
   - Assign **at least 2 GB of RAM** (more is recommended if your system can handle it). The default setting is usually fine, but you can increase it if you want better performance.

4. **Create a Virtual Hard Disk**:
   - **Virtual Hard Disk Type**: Choose **VDI** (VirtualBox Disk Image).
   - **Storage on Physical Hard Disk**: Choose **Dynamically allocated** (this will allow the virtual disk to grow as needed).
   - **Size**: Allocate **at least 20 GB** of disk space (the more the better, depending on your needs).

---

### 💿 **Step 4: Mount the Snigdha OS ISO**

1. **Go to Settings**:  
   After creating the virtual machine, click on the **Settings** button.

2. **Mount the ISO**:
   - Go to the **Storage** tab.
   - Under **Controller: IDE**, click the empty **disk icon** and then click **Choose a disk file**.
   - Select the Snigdha OS ISO file you downloaded earlier.

---

### 🔄 **Step 5: Configure Virtual Machine Settings (Optional)**

1. **Adjust Display Settings**:  
   - Go to the **Display** tab in the settings and increase the **Video Memory** to at least 64 MB to ensure smooth graphics.
   - Enable **3D Acceleration** (if your hardware supports it) for better performance.

2. **Network Settings**:  
   - In the **Network** tab, ensure that the adapter is set to **Attached to NAT** (this allows the virtual machine to access the internet).

---

### 🔌 **Step 6: Start the Virtual Machine and Install Snigdha OS**

1. **Start the Virtual Machine**:  
   Click the **Start** button in VirtualBox.

2. **Boot from the ISO**:  
   The virtual machine will boot from the Snigdha OS ISO. You’ll see the Snigdha OS **Live Session** screen. If it doesn't boot, make sure the ISO is properly mounted in the **Storage** section.

3. **Launch the Installer**:  
   Once in the live environment, click on the **Garuda Installer** icon on the desktop to start the installation process.

---

### ⚙️ **Step 7: Install Snigdha OS**

1. **Select Language and Region**:  
   Choose your **language**, **keyboard layout**, and **timezone**.

2. **Partitioning**:  
   - If you're using a single disk, you can choose **Erase disk and install Garuda** for automatic partitioning.
   - Alternatively, select **Manual Partitioning** if you need to create custom partitions.

3. **User Configuration**:  
   - Set your **username**, **password**, and **root password**.
   - Choose **Btrfs** as the default filesystem for Garuda (or ext4 if preferred).

4. **Start the Installation**:  
   After configuring your settings, click **Install** to begin the installation process. The installer will copy files, install packages, and set up your system.

---

### 🔄 **Step 8: Complete the Installation and Reboot**

1. **Wait for Installation to Finish**:  
   The installation may take a while, depending on the speed of your system and the amount of software being installed. The progress will be shown in the installer.

2. **Reboot the Virtual Machine**:  
   Once the installation is complete, the installer will prompt you to reboot the system. Click **Reboot Now** and remove the ISO file from the virtual drive in VirtualBox.

---

### 🖥️ **Step 9: Boot into Snigdha OS**

1. **Reboot**:  
   After the installation, reboot the virtual machine. It will boot into your new **Snigdha OS** installation.

2. **Login**:  
   Enter the **username** and **password** you set during the installation to log into Snigdha OS.

---

### 🎉 **Step 10: Post-Installation Steps**

1. **Update the System**:  
   After logging in, open a terminal and update your system:
   ```bash
   sudo pacman -Syu
   ```

2. **Install Additional Software**:  
   You can install additional software using the **Garuda Assistant** or the **Pacman** package manager.

3. **Enjoy Snigdha OS**:  
   Now that your Snigdha OS is installed and running in VirtualBox, you can explore the KDE Plasma desktop or the desktop environment you chose during the installation.

---

### 🎉 **Conclusion**

You’ve successfully installed **Snigdha OS** in **VirtualBox**! This method allows you to run Snigdha OS on your system without affecting your main operating system. VirtualBox provides an isolated environment where you can experiment with Snigdha OS, install software, and test configurations.

Enjoy exploring Snigdha OS! 😎🚀