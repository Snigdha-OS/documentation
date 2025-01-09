---
sidebar_position: 1
---

# Troubleshooting Wi-Fi Issues

If you're facing Wi-Fi connectivity issues on Snigdha OS, don’t worry! Follow this guide to resolve the problem. It covers common issues and solutions. Let's get your Wi-Fi back up and running! 😄



### 1. **Check Wi-Fi Adapter 🏠🔍**

#### **Is Your Wi-Fi Adapter Recognized?**
First, check if Snigdha OS recognizes your Wi-Fi adapter.

- Open a terminal and run:
  ```bash
  ip link
  ```
  Look for your Wi-Fi interface (usually named `wlan0`, `wlp2s0`, or similar). If it’s not listed, your adapter might not be recognized or the driver may be missing.

#### **Install Drivers 🚗💨**
If your Wi-Fi adapter is not detected, you may need to install additional drivers.

- Check for available Wi-Fi drivers:
  ```bash
  sudo pacman -Ss wifi
  ```
  Install the appropriate driver for your device:
  ```bash
  sudo pacman -S <driver-name>
  ```



### 2. **Check Wi-Fi Network Status 📶🔌**

#### **Make Sure Your Network is Active**
Ensure that the Wi-Fi network you're trying to connect to is functioning properly. Try connecting with another device to verify the network works.

#### **Restart Your Router 🔄**
If there are issues, try restarting your router by turning it off and on again.



### 3. **NetworkManager Issues ⚙️**

Snigdha OS uses **NetworkManager** to manage network connections. If it’s causing issues, try restarting it.

- Restart NetworkManager:
  ```bash
  sudo systemctl restart NetworkManager
  ```

Check the status of NetworkManager:
```bash
sudo systemctl status NetworkManager
```



### 4. **Verify Wireless Interface is Up 📡🆙**

Sometimes, the wireless interface might be down. Bring it up with this command:

```bash
sudo ip link set wlan0 up
```
Replace `wlan0` with your correct interface name if it’s different.



### 5. **Check Wi-Fi Configuration 🛠️**

#### **NetworkManager Configuration 🖧**
- Open **NetworkManager** and ensure your Wi-Fi network is listed. If it’s not, scan for networks again:
  ```bash
  nmcli dev wifi rescan
  ```

To connect to a network:
```bash
nmcli dev wifi connect <SSID> password <password>
```



### 6. **Check for Conflicting Software ⚠️🛑**

Sometimes, software like `netctl` or `wpa_supplicant` can conflict with NetworkManager.

- Disable `netctl`:
  ```bash
  sudo systemctl disable netctl
  sudo systemctl stop netctl
  ```

- Disable `wpa_supplicant`:
  ```bash
  sudo systemctl disable wpa_supplicant
  sudo systemctl stop wpa_supplicant
  ```



### 7. **Check for IP Address Issues 🌐🛠️**

If Wi-Fi is connected but you have no internet access, there may be an IP address issue.

- To release and renew your IP address:
  ```bash
  sudo dhclient -r
  sudo dhclient
  ```



### 8. **Check Logs for Errors 📝🔍**

If the issue persists, checking the system logs might help.

- View `dmesg` logs related to Wi-Fi:
  ```bash
  dmesg | grep wlan
  ```

Look for error messages related to your Wi-Fi device, such as missing firmware or drivers.



### 9. **Test Using a Different Network 🌍📶**

If your Wi-Fi issue persists, try connecting to a different Wi-Fi network, like a mobile hotspot or another router, to see if the issue is with your device or the original network.



### 10. **Reboot Your System 🔄💻**

Sometimes, a simple reboot can fix the problem:

```bash
sudo reboot
```



### Conclusion 🎉

Wi-Fi issues on Snigdha OS can usually be resolved by checking the adapter, ensuring drivers are installed, and troubleshooting with NetworkManager. If problems continue, check your hardware or consult the Snigdha OS or Arch community. 

Happy browsing! 🌐🚀