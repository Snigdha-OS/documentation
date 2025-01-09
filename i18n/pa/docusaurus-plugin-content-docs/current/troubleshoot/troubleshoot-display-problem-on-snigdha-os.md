---
sidebar_position: 2
---

# Troubleshooting Display Issues

If you're facing display issues like screen resolution problems, black screens, or no display output on Snigdha OS, follow this guide to get everything back to normal. Let’s fix it step by step! 🔧



### 1. **Check Display Cable and Connection 🖥️🔌**

#### **Is Your Display Properly Connected?**
- Make sure your monitor or laptop screen is properly connected to the system.
- If using an external monitor, ensure that the display cable (HDMI, VGA, DisplayPort, etc.) is firmly connected.
- If applicable, check if the monitor is set to the correct input (HDMI1, HDMI2, etc.).



### 2. **Check for External Display Detection 📺📱**

If you’re using multiple displays, your external monitor might not be recognized automatically.

- Open the terminal and run:
  ```bash
  xrandr
  ```
  This will list all connected displays. If your external monitor isn't showing, you might need to force detection.

- To detect the monitor manually:
  ```bash
  xrandr --auto
  ```

- If the external monitor is still not detected, try to restart your system or use a different cable.



### 3. **Set the Correct Display Resolution 🎨💻**

Sometimes, the wrong resolution can cause display issues. Use `xrandr` to set the correct resolution.

- List available display modes:
  ```bash
  xrandr
  ```

- To change the resolution:
  ```bash
  xrandr --output <DISPLAY_NAME> --mode <RESOLUTION>
  ```
  Example:
  ```bash
  xrandr --output HDMI-1 --mode 1920x1080
  ```

Replace `<DISPLAY_NAME>` and `<RESOLUTION>` with your actual display name and resolution.



### 4. **Check Graphics Driver 🔧🖥️**

#### **Is Your Graphics Driver Installed?**
Make sure you have the correct drivers installed for your graphics card.

- For **Intel graphics**:
  ```bash
  sudo pacman -S xf86-video-intel
  ```

- For **NVIDIA graphics**:
  ```bash
  sudo pacman -S nvidia nvidia-utils
  ```

- For **AMD graphics**:
  ```bash
  sudo pacman -S xf86-video-amdgpu
  ```

After installing the necessary driver, restart your system:
```bash
sudo reboot
```



### 5. **Reconfigure Xorg 🎨🛠️**

Sometimes, Xorg (the display server) configuration might cause issues.

- Reconfigure Xorg by regenerating the configuration file:
  ```bash
  sudo Xorg -configure
  ```

- Then restart the system:
  ```bash
  sudo reboot
  ```



### 6. **Check Logs for Errors 📝🔍**

Check the system logs to find any errors related to the display.

- View Xorg logs:
  ```bash
  cat /var/log/Xorg.0.log
  ```

Look for error messages related to your graphics driver or display hardware.



### 7. **Check Display Manager 🌐⚙️**

If you’re getting a black screen after logging in, it could be a problem with your display manager.

- If using **LightDM**, restart it:
  ```bash
  sudo systemctl restart lightdm
  ```

- If using **GDM** (GNOME Display Manager), restart it:
  ```bash
  sudo systemctl restart gdm
  ```



### 8. **Update System 💻🔄**

Make sure your system is up to date, as outdated packages may cause display issues.

- Update your system:
  ```bash
  sudo pacman -Syu
  ```

This ensures all packages, including graphics drivers, are up to date.



### 9. **Try Using a Different Display Server (Wayland vs Xorg) 🌙⚙️**

If you are facing issues with **Xorg**, try using **Wayland** instead, which is another display server protocol.

- On GNOME, you can choose Wayland or Xorg from the login screen (click the gear icon after selecting your user).



### 10. **Reboot Your System 🔄💻**

Sometimes, a simple reboot can fix display issues:

```bash
sudo reboot
```



### Conclusion 🎉

Display issues on Snigdha OS can usually be fixed by ensuring proper cables, checking drivers, and configuring the display settings. If problems continue, check for hardware faults or consult the Snigdha OS or Arch community for further assistance. 

Enjoy your display! 🖥️🎨