---
sidebar_position: 4
---

# Troubleshooting NVIDIA Issues

If you're facing issues with NVIDIA graphics or the proprietary NVIDIA driver on Snigdha OS, follow these steps to properly install, configure, and troubleshoot your NVIDIA driver setup.



### 1. **Ensure Your System is Updated 🖥️🔄**

Before installing or troubleshooting drivers, make sure your system is fully updated to avoid compatibility issues.

- Update your system:
  ```bash
  sudo pacman -Syu
  ```

- Reboot your system after the update:
  ```bash
  sudo reboot
  ```



### 2. **Check for Existing NVIDIA Drivers 🕵️‍♂️**

First, verify if the NVIDIA driver is already installed or partially installed.

- Check for the installed NVIDIA package:
  ```bash
  pacman -Qs nvidia
  ```

- If you see packages like `nvidia`, `nvidia-utils`, or `nvidia-dkms`, it indicates the driver is installed.



### 3. **Install the Proprietary NVIDIA Driver 🖱️🖥️**

#### **Install NVIDIA Drivers on Snigdha OS**
Snigdha OS, being based on Arch Linux, supports the **proprietary NVIDIA drivers** provided by **nvidia** package, which provides full support for gaming, rendering, and GPU acceleration.

1. **For NVIDIA 390xx Legacy Cards** (older models):
   ```bash
   sudo pacman -S nvidia-390xx
   ```

2. **For Latest NVIDIA Drivers (most common)**:
   ```bash
   sudo pacman -S nvidia nvidia-utils
   ```

3. **For the NVIDIA Optimus (Hybrid Graphics)**:
   If you have a laptop with both Intel and NVIDIA graphics (Optimus), you may want to install the `bumblebee` or `nvidia-prime` package:
   
   - For **Bumblebee** (for better battery life and automatic switching):
     ```bash
     sudo pacman -S bumblebee primus
     sudo systemctl enable bumblebeed
     sudo systemctl start bumblebeed
     ```

   - For **NVIDIA Prime** (useful for newer systems):
     ```bash
     sudo pacman -S nvidia-prime
     ```



### 4. **Configure Xorg for NVIDIA 🖥️⚙️**

Snigdha OS should automatically configure Xorg to use the NVIDIA driver upon installation. If it doesn’t work, you can manually configure it by creating or modifying the Xorg configuration.

- Create the NVIDIA configuration file:
  ```bash
  sudo nvidia-xconfig
  ```

- Restart the Xorg server or reboot the system:
  ```bash
  sudo reboot
  ```



### 5. **Verify the Installation ✅**

After installing or reconfiguring the NVIDIA drivers, verify the installation using the following commands:

- Check if NVIDIA modules are loaded correctly:
  ```bash
  lsmod | grep nvidia
  ```

- Check the NVIDIA driver version:
  ```bash
  nvidia-smi
  ```

This will show you information about the installed NVIDIA driver, including the GPU model, driver version, and usage statistics.



### 6. **Troubleshooting Common Issues 🛠️**

#### **No Display / Blank Screen 💻❌**

1. Ensure that the driver is properly loaded by checking the Xorg log:
   ```bash
   cat /var/log/Xorg.0.log | grep nvidia
   ```

2. If you still have no display, try booting into **recovery mode** and reinstall the drivers.

#### **Optimizing Hybrid Graphics (Optimus) 🖥️🔋**

If you're using an Optimus laptop with both Intel and NVIDIA, ensure that you're using either **Bumblebee** or **nvidia-prime** to manage the GPU switching.

- Test if Bumblebee is working with the `optirun` command:
  ```bash
  optirun glxgears
  ```

- For **NVIDIA Prime**, you can switch between the Intel GPU and the NVIDIA GPU using:
  ```bash
  sudo prime-select nvidia  # To use the NVIDIA GPU
  sudo prime-select intel   # To switch back to the Intel GPU
  ```

#### **Black Screen After Boot 💻❌**

1. If the system boots into a black screen, try the following:
   - Boot into a terminal or recovery mode and check the **Xorg logs** for errors.
   - Check the logs at `/var/log/Xorg.0.log` or `dmesg` for NVIDIA driver-related errors.

2. If needed, you can remove the NVIDIA drivers:
   ```bash
   sudo pacman -Rns nvidia nvidia-utils
   ```

   And then reinstall or switch to **nouveau** (open-source NVIDIA driver):
   ```bash
   sudo pacman -S xf86-video-nouveau
   ```



### 7. **Reinstall or Update NVIDIA Drivers 🔄**

If you encounter persistent issues, try reinstalling the drivers:

- Uninstall the NVIDIA drivers:
  ```bash
  sudo pacman -Rns nvidia nvidia-utils
  ```

- Reinstall the drivers:
  ```bash
  sudo pacman -S nvidia nvidia-utils
  ```



### 8. **Check for Kernel Compatibility 🐧🛠️**

The NVIDIA driver requires a compatible kernel. If you recently updated your kernel or switched to a custom one, you may need to install the correct kernel modules.

- For the **Zen Kernel** (often used in Snigdha OS):
  ```bash
  sudo pacman -S linux-zen
  ```

- For other kernel versions, such as **linux-lts** (Long Term Support):
  ```bash
  sudo pacman -S linux-lts
  ```

- After installing a new kernel, you will need to rebuild or reinstall the NVIDIA kernel module:
  ```bash
  sudo pacman -S nvidia-dkms
  ```



### Conclusion 🚀

By following these steps, you should be able to install, configure, and troubleshoot NVIDIA drivers on Snigdha OS. If you continue to experience issues, checking the **NVIDIA** and **Arch Wiki** documentation, as well as visiting Snigdha OS community forums, might help. Happy computing! 😄🎮