---
sidebar_position: 2
---

# Aircrack-NG

### 🔐 **Aircrack-ng: A Complete Guide with Installation on Snigdha OS**

**Aircrack-ng** is a powerful suite of tools used for monitoring, testing, cracking, and securing Wi-Fi networks. This guide will cover how to install Aircrack-ng on Snigdha OS and explain its key tools. Let’s dive in! 🚀

---

### 🛠️ **How to Install Aircrack-ng on Snigdha OS**

1. **Update Your System**:
   Always ensure your system is up-to-date before installing new software:

   ```bash
   sudo pacman -Syu
   ```

2. **Install Aircrack-ng**:
   Aircrack-ng is available in the official Snigdha OS repositories:

   ```bash
   sudo pacman -S aircrack-ng
   ```

3. **Verify Installation**:
   Check that Aircrack-ng is installed correctly by running:

   ```bash
   aircrack-ng --help
   ```

   If installed successfully, you'll see a list of commands and options. ✅

---

### 🧰 **Aircrack-ng Tools Overview**

The Aircrack-ng suite includes several tools for various purposes:

1. **Airmon-ng (Monitor Mode Enabler) 🛰️**  
   Enables monitor mode on your wireless network interface.

   **Usage**:  
   ```bash
   sudo airmon-ng start wlan0
   ```
   This sets your `wlan0` device to monitor mode, allowing you to capture Wi-Fi traffic.

2. **Airodump-ng (Packet Capture) 📡**  
   Captures packets and displays information about nearby wireless networks.

   **Usage**:  
   ```bash
   sudo airodump-ng wlan0mon
   ```
   Replace `wlan0mon` with your monitor-enabled interface. It displays SSIDs, BSSIDs, channels, and more.

3. **Aireplay-ng (Packet Injection) 🎯**  
   Injects packets to test network security or deauthenticate clients.

   **Usage**:  
   Deauthenticate a client to capture a handshake:
   ```bash
   sudo aireplay-ng --deauth 10 -a <BSSID> -c <CLIENT_MAC> wlan0mon
   ```
   - `<BSSID>`: MAC address of the target access point.
   - `<CLIENT_MAC>`: MAC address of the client.

4. **Aircrack-ng (Password Cracker) 🔓**  
   Cracks WPA/WPA2 passwords using captured handshakes.

   **Usage**:  
   ```bash
   aircrack-ng -w wordlist.txt -b <BSSID> capture_file.cap
   ```
   - `wordlist.txt`: File containing potential passwords.
   - `capture_file.cap`: Packet capture file with the handshake.

5. **Airdecap-ng (Decrypt Packets) 🔐**  
   Decrypts WEP/WPA-encrypted packets after obtaining keys.

   **Usage**:  
   ```bash
   airdecap-ng -w <WPA_KEY> capture_file.cap
   ```

---

### 🔍 **Example Workflow: Cracking WPA/WPA2**

1. **Enable Monitor Mode**:  
   Start monitoring with Airmon-ng:

   ```bash
   sudo airmon-ng start wlan0
   ```

2. **Capture Packets**:  
   Use Airodump-ng to scan for networks:

   ```bash
   sudo airodump-ng wlan0mon
   ```

   Focus on a target by capturing packets on its channel:

   ```bash
   sudo airodump-ng --bssid <BSSID> --channel <CHANNEL> --write capture wlan0mon
   ```

3. **Deauthenticate a Client**:  
   Force a client to reconnect to capture the WPA handshake:

   ```bash
   sudo aireplay-ng --deauth 10 -a <BSSID> -c <CLIENT_MAC> wlan0mon
   ```

4. **Crack the Handshake**:  
   Use Aircrack-ng with a wordlist to crack the password:

   ```bash
   aircrack-ng -w wordlist.txt -b <BSSID> capture-01.cap
   ```

---

### ⚠️ **Important Notes**

1. **Ethical Use Only**:  
   Always obtain explicit permission before testing any network. Unauthorized use is illegal.

2. **Hardware Compatibility**:  
   Ensure your wireless card supports monitor mode and packet injection. Popular chipsets include **Atheros** and **Realtek**.

3. **Wordlist Quality**:  
   Cracking success depends on your wordlist. Use comprehensive wordlists like `rockyou.txt` or generate custom ones.

4. **Alternative Tools**:  
   Combine Aircrack-ng with tools like **hashcat** for advanced cracking.

---

### 🚀 **Resources and Further Learning**

- [Official Aircrack-ng Documentation](https://aircrack-ng.org/)
- Tutorials on ethical Wi-Fi testing and network security.

---

By following this guide, you’re equipped to install and use Aircrack-ng effectively. Remember to use these tools responsibly and ethically. Happy testing! 🎉