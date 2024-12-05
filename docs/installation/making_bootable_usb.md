---
sidebar_position: 2
---
# Bootable USB With Ventoy

### 🔥 **How to Make Snigdha OS Bootable USB with Ventoy**

Ventoy is a tool that allows you to create a bootable USB drive where you can copy multiple ISO files, and it will boot them directly without needing to format the USB drive again. This is an excellent method for creating a multi-boot USB drive with various Linux distributions, including Snigdha OS.

Here's how to use **Ventoy** to create a bootable USB with Snigdha OS:

---

### 💿 **Step 1: Download Snigdha OS ISO**

1. **Go to the Official Snigdha OS Website**:  
   Visit the official Snigdha OS download page:
   - [https://snigdhaos.org/downloads.html](https://snigdhaos.org/downloads.html)

2. **Choose Your Desired Edition**:  
   Snigdha OS offers multiple desktop environments (KDE, GNOME, XFCE, etc.). Select the edition you prefer.

3. **Download the ISO**:  
   Click the download link for your chosen edition. The file will typically be named:
   - `snigdhaos-YYYY.MM.DD-x86_64.iso`

---

### 💾 **Step 2: Download and Install Ventoy**

1. **Download Ventoy**:  
   Visit the official Ventoy website:
   - [https://www.ventoy.net](https://www.ventoy.net)
   
2. **Download the Latest Version**:  
   Download the latest stable version of Ventoy for your operating system. You will get a compressed file.

3. **Extract the Compressed File**:  
   Extract the downloaded Ventoy archive to a folder.

---

### 💻 **Step 3: Create Bootable USB with Ventoy**

#### **For Linux Users**

1. **Insert Your USB Drive**:  
   Plug in your USB drive (at least 4 GB). Use the `lsblk` command to check the device name (e.g., `/dev/sdX`).

2. **Install Ventoy on the USB**:  
   Navigate to the Ventoy folder, open a terminal, and run the following command (replace `/dev/sdX` with your USB device):

   ```bash
   sudo ./Ventoy2Disk.sh -i /dev/sdX
   ```

   This will install Ventoy onto the USB drive. It will create a Ventoy partition and make the USB drive bootable.

3. **Wait for the Process to Complete**:  
   Once the process finishes, your USB drive is ready to use with Ventoy installed.

#### **For Windows Users**

1. **Insert the USB Drive**:  
   Plug in your USB drive (minimum 4 GB).

2. **Run Ventoy as Administrator**:  
   Extract the Ventoy zip file and run `Ventoy2Disk.exe` as Administrator.

3. **Select the USB Drive**:  
   In the Ventoy tool, select the USB drive you want to use.

4. **Install Ventoy on the USB Drive**:  
   Click **Install** to install Ventoy on the USB. Confirm that you want to overwrite any existing data on the USB drive.

---

### 🔄 **Step 4: Copy Snigdha OS ISO to the USB**

1. **Copy the Snigdha OS ISO**:  
   Once Ventoy is installed on your USB drive, simply copy the **Snigdha OS ISO** (e.g., `snigdhaos-YYYY.MM.DD-x86_64.iso`) to the USB drive. You can copy and paste it like any other file.

2. **You Can Add More ISOs**:  
   You can also copy additional ISOs to the USB drive to make a multi-boot USB drive with other Linux distributions.

---

### 🚀 **Step 5: Boot from USB Using Ventoy**

1. **Insert the USB Drive into the Target Computer**:  
   Plug the USB drive into the computer where you want to install Snigdha OS.

2. **Enter BIOS/UEFI**:  
   Restart the computer and enter the BIOS/UEFI by pressing the appropriate key (often `F2`, `DEL`, or `ESC`).

3. **Set USB as the Primary Boot Device**:  
   In BIOS/UEFI, set the USB drive as the first boot device.

4. **Save and Reboot**:  
   Save the settings and reboot. The system will boot into Ventoy’s boot menu.

5. **Select Snigdha OS**:  
   In the Ventoy boot menu, you’ll see a list of ISOs on the USB. Select **Snigdha OS** and press Enter to boot from it.

---

### 🎉 **Conclusion**

Congratulations! You've successfully created a Snigdha OS bootable USB drive using **Ventoy**. This method allows you to keep multiple Linux distributions on one USB stick, making it incredibly convenient for testing or installing multiple distros. 

Enjoy your experience with Snigdha OS! 😎🚀