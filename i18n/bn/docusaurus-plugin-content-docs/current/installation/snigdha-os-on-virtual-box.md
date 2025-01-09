---
sidebar_position: 6
---
# VirtualBox ইনস্টলেশন

### 🖥️ **VirtualBox-এ Snigdha OS কিভাবে ইনস্টল করবেন**

**Snigdha OS** ইনস্টল করা **VirtualBox**-এ একটি দুর্দান্ত উপায়, যা আপনাকে Snigdha OS-কে ভার্চুয়াল পরিবেশে টেস্ট বা ব্যবহার করার সুযোগ দেয়, আপনার প্রধান সিস্টেমে প্রভাব না ফেলেই। এখানে Snigdha OS কে VirtualBox-এ চালানোর জন্য একটি বিস্তারিত পদক্ষেপ-দ্বারা-পদক্ষেপ গাইড দেওয়া হলো।



### 📥 **ধাপ ১: Snigdha OS ISO ডাউনলোড করুন**

1. **অফিশিয়াল Snigdha OS ওয়েবসাইটে যান**:  
   Snigdha OS ডাউনলোড পেজে যান:  
   - [Snigdha OS ডাউনলোড](https://snigdhaos.org/downloads.html)

2. **ISO ফাইল ডাউনলোড করুন**:  
   আপনার পছন্দের সংস্করণ (KDE, GNOME, XFCE, ইত্যাদি) নির্বাচন করুন এবং ISO ফাইলটি ডাউনলোড করুন। ফাইলটির নাম হবে something like:  
   - `snigdhaos-YYYY.MM.DD-x86_64.iso`



### 💾 **ধাপ ২: VirtualBox ইনস্টল এবং সেটআপ করুন**

1. **VirtualBox ডাউনলোড এবং ইনস্টল করুন**:
   - **Windows** এর জন্য: [VirtualBox ওয়েবসাইট](https://www.virtualbox.org/) থেকে ডাউনলোড করুন।
   - **macOS** এর জন্য: [VirtualBox ওয়েবসাইট](https://www.virtualbox.org/) থেকে ডাউনলোড করুন।
   - **Linux** এর জন্য: আপনার প্যাকেজ ম্যানেজার দিয়ে ইনস্টল করতে পারেন:
     ```bash
     sudo pacman -S virtualbox  # Arch Linux এবং ডেরিভেটিভসের জন্য
     sudo apt install virtualbox  # Ubuntu/Debian এর জন্য
     sudo dnf install virtualbox  # Fedora এর জন্য
     ```

2. **VirtualBox চালু করুন**:  
   ইনস্টলেশনের পর, **VirtualBox** অ্যাপ্লিকেশন মেনু থেকে চালু করুন。



### ⚙️ **ধাপ ৩: একটি নতুন ভার্চুয়াল মেশিন তৈরি করুন**

1. **"New" এ ক্লিক করুন**:  
   VirtualBox খুলুন এবং একটি নতুন ভার্চুয়াল মেশিন তৈরি করতে **New** বোতামে ক্লিক করুন।

2. **নাম এবং টাইপ সেট করুন**:
   - **নাম**: আপনার ভার্চুয়াল মেশিনের জন্য একটি নাম বেছে নিন (যেমন "Snigdha OS")।
   - **টাইপ**: **Linux** নির্বাচন করুন।
   - **ভার্সন**: **Linux 2.6 / 3.x / 4.x (64-bit)** নির্বাচন করুন (বা Snigdha OS-এর সংস্করণের উপর নির্ভর করে সাদৃশ্য অপশন নির্বাচন করুন)।

3. **মেমোরি বরাদ্দ করুন**:  
   - **কমপক্ষে 2 GB RAM বরাদ্দ করুন** (আপনার সিস্টেম যদি এটি সহ্য করতে পারে, তবে আরো বরাদ্দ করা ভালো)। ডিফল্ট সেটিংস সাধারণত ঠিক থাকে, তবে আপনি এটি বাড়াতে পারেন ভাল পারফরম্যান্সের জন্য।

4. **ভার্চুয়াল হার্ড ডিস্ক তৈরি করুন**:
   - **ভার্চুয়াল হার্ড ডিস্ক টাইপ**: **VDI** (VirtualBox ডিস্ক ইমেজ) নির্বাচন করুন।
   - **ফিজিক্যাল হার্ড ডিস্কে স্টোরেজ**: **Dynamically allocated** নির্বাচন করুন (এটি ভার্চুয়াল ডিস্কের আকার প্রয়োজন অনুযায়ী বাড়ানোর সুযোগ দেয়)।
   - **আকার**: **কমপক্ষে ২০ GB** ডিস্ক স্পেস বরাদ্দ করুন (আপনার প্রয়োজন অনুযায়ী আরো বরাদ্দ করা ভালো)。



### 💿 **ধাপ ৪: Snigdha OS ISO মাউন্ট করুন**

1. **সেটিংসে যান**:  
   ভার্চুয়াল মেশিন তৈরি করার পর, **Settings** বোতামে ক্লিক করুন।

2. **ISO মাউন্ট করুন**:
   - **Storage** ট্যাবে যান।
   - **Controller: IDE** এর অধীনে, খালি **ডিস্ক আইকনে** ক্লিক করুন এবং তারপর **Choose a disk file** ক্লিক করুন।
   - পূর্বে ডাউনলোড করা Snigdha OS ISO ফাইলটি নির্বাচন করুন।



### 🔄 **ধাপ ৫: ভার্চুয়াল মেশিনের সেটিংস কনফিগার করা (ঐচ্ছিক)**

1. **ডিসপ্লে সেটিংস সমন্বয়**:  
   - **Display** ট্যাবে যান এবং **Video Memory** কমপক্ষে 64 MB করুন, যাতে গ্রাফিক্স স্লুইডলি চলে।
   - যদি আপনার হার্ডওয়্যার এটি সাপোর্ট করে, তবে **3D Acceleration** চালু করুন ভাল পারফরম্যান্সের জন্য।

2. **নেটওয়ার্ক সেটিংস**:  
   - **Network** ট্যাবে, নিশ্চিত করুন যে অ্যাডাপ্টারটি **Attached to NAT** এ সেট করা আছে (এটি ভার্চুয়াল মেশিনকে ইন্টারনেট অ্যাক্সেস দিতে সাহায্য করবে)।



### 🔌 **ধাপ ৬: ভার্চুয়াল মেশিন চালু করুন এবং Snigdha OS ইনস্টল করুন**

1. **ভার্চুয়াল মেশিন চালু করুন**:  
   VirtualBox-এ **Start** বোতামে ক্লিক করুন।

2. **ISO থেকে বুট করুন**:  
   ভার্চুয়াল মেশিনটি Snigdha OS ISO থেকে বুট হবে এবং আপনি Snigdha OS **Live Session** স্ক্রীন দেখতে পাবেন। যদি এটি বুট না হয়, তবে নিশ্চিত করুন যে ISO ফাইলটি সঠিকভাবে **Storage** সেকশনে মাউন্ট করা আছে।

3. **ইনস্টলার চালু করুন**:  
   লাইভ পরিবেশে যাওয়ার পর, **Garuda Installer** আইকনে ক্লিক করুন ইনস্টলেশন প্রক্রিয়া শুরু করতে।



### ⚙️ **ধাপ ৭: Snigdha OS ইনস্টল করুন**

1. **ভাষা এবং অঞ্চল নির্বাচন করুন**:  
   আপনার **ভাষা**, **কীবোর্ড লেআউট** এবং **টাইমজোন** নির্বাচন করুন।

2. **পার্টিশনিং**:  
   - যদি আপনি একক ডিস্ক ব্যবহার করেন, তবে **Erase disk and install Garuda** নির্বাচন করুন স্বয়ংক্রিয় পার্টিশনিংয়ের জন্য।
   - অথবা, আপনি **Manual Partitioning** নির্বাচন করতে পারেন যদি কাস্টম পার্টিশন তৈরি করতে চান।

3. **ইউজার কনফিগারেশন**:  
   - আপনার **ইউজারনেম**, **পাসওয়ার্ড**, এবং **রুট পাসওয়ার্ড** সেট করুন।
   - **Btrfs** ফাইল সিস্টেম হিসাবে ডিফল্ট নির্বাচন করুন (অথবা যদি পছন্দ করেন তবে ext4 নির্বাচন করুন)।

4. **ইনস্টলেশন শুরু করুন**:  
   আপনার সেটিংস কনফিগার করার পর, **Install** বোতামে ক্লিক করুন ইনস্টলেশন প্রক্রিয়া শুরু করতে। ইনস্টলার ফাইলগুলি কপি করবে, প্যাকেজ ইনস্টল করবে এবং আপনার সিস্টেম সেটআপ করবে।



### 🔄 **ধাপ ৮: ইনস্টলেশন সম্পন্ন করুন এবং রিবুট করুন**

1. **ইনস্টলেশন শেষ হতে দিন**:  
   ইনস্টলেশন সম্পূর্ণ হতে কিছু সময় লাগতে পারে, আপনার সিস্টেমের গতি এবং ইনস্টল করা সফটওয়ারের পরিমাণের উপর নির্ভর করে। প্রক্রিয়াটি ইনস্টলার স্ক্রীনে প্রদর্শিত হবে।

2. **ভার্চুয়াল মেশিন রিবুট করুন**:  
   একবার ইনস্টলেশন সম্পূর্ণ হলে, ইনস্টলার আপনাকে সিস্টেমটি রিবুট করতে বলবে। **Reboot Now** ক্লিক করুন এবং ISO ফাইলটি ভার্চুয়াল ড্রাইভ থেকে সরিয়ে দিন।



### 🖥️ **ধাপ ৯: Snigdha OS-এ বুট করুন**

1. **রিবুট করুন**:  
   ইনস্টলেশন পরবর্তী, ভার্চুয়াল মেশিনটি রিবুট করুন। এটি আপনার নতুন **Snigdha OS** ইনস্টলেশন থেকে বুট হবে।

2. **লগইন করুন**:  
   আপনি যে **ইউজারনেম** এবং **পাসওয়ার্ড** ইনস্টলেশনের সময় সেট করেছেন তা দিয়ে Snigdha OS-এ লগইন করুন।



### 🎉 **ধাপ ১০: পোস্ট-ইনস্টলেশন স্টেপস**

1. **সিস্টেম আপডেট করুন**:  
   লগইন করার পর, একটি টার্মিনাল খুলুন এবং আপনার সিস্টেম আপডেট করুন:
   ```bash
   sudo pacman -Syu
   ```

2. **অতিরিক্ত সফটওয়্যার ইনস্টল করুন**:  
   আপনি **Garuda Assistant** অথবা **Pacman** প্যাকেজ ম্যানেজার ব্যবহার করে অতিরিক্ত সফটওয়্যার ইনস্টল করতে পারেন।

3. **Snigdha OS উপভোগ করুন**:  
   এখন যে আপনার Snigdha OS VirtualBox-এ ইনস্টল হয়ে গেছে, আপনি KDE Plasma ডেস্কটপ বা আপনি যে ডেস্কটপ পরিবেশ ইনস্টলেশনের সময় নির্বাচন করেছেন তা অন্বেষণ করতে পারবেন।



### 🎉 **উপসংহার**

আপনি সফলভাবে **Snigdha OS** ইনস্টল করেছেন **VirtualBox**-এ! এই পদ্ধতিটি আপনাকে Snigdha OS আপনার সিস্টেমে প্রভাব না ফেলে চালানোর সুযোগ দেয়। VirtualBox একটি বিচ্ছিন্ন পরিবেশ প্রদান করে যেখানে আপনি Snigdha OS পরীক্ষা করতে পারেন, সফটওয়্যার ইনস্টল করতে পারেন এবং কনফিগারেশন পরীক্ষা করতে পারেন।

Snigdha OS অন্বেষণ উপভোগ করুন! 😎🚀



# VMware এবং GNOME Boxes ইনস্টলেশন

### VMware

1. **VMware ডাউনলোড এবং ইনস্টল করুন**:  
   - **Windows/Mac**: [VMware ওয়েবসাইট](https://www.vmware.com/products/workstation-player.html) থেকে VMware Workstation Player ডাউনলোড করুন।
   - **Linux**: VMware Workstation আপনার প্যাকেজ ম্যানেজার থেকে ইনস্টল করুন অথবা VMware এর ওয়েবসাইট থেকে .bundle ফাইল ডাউনলোড করে টার্মিনালে চালান।

2. **নতুন ভার্চুয়াল মেশিন তৈরি করুন**:
   - VMware চালু করুন এবং **Create a New Virtual Machine**-এ ক্লিক করুন।
   - **Typical** ইনস্টলেশন নির্বাচন করুন।
   - **Installer disc image file (iso)** নির্বাচন করুন এবং Snigdha OS ISO ফাইলটি ব্রাউজ করে নির্বাচন করুন।
   - VM-এর রিসোর্স (RAM, ডিস্ক সাইজ ইত্যাদি) সেট করতে স্ক্রীনে প্রদত্ত নির্দেশাবলী অনুসরণ করুন।

3. **Snigdha OS ইনস্টল করুন**:  
   - ভার্চুয়াল মেশিন সেটআপ করার পর, **Power on** ক্লিক করুন।
   - VM Snigdha OS ISO থেকে বুট হবে, এবং আপনি পূর্বের মত ইনস্টলেশন শুরু করতে পারবেন।

4. **ইনস্টলেশন শেষ করুন**:  
   - একবার ইনস্টলেশন সম্পূর্ণ হলে, VM রিবুট করুন এবং ISO ফাইল ভার্চুয়াল ড্রাইভ থেকে সরিয়ে দিন।



### GNOME Boxes

1. **GNOME Boxes ইনস্টল করুন**:
   - **Linux** এর জন্য: আপনার প্যাকেজ ম্যানেজার দিয়ে ইনস্টল করুন।
     ```bash
     sudo apt install gnome-boxes  # Ubuntu/Debian এর জন্য
     sudo pacman -S gnome-boxes  # Arch Linux এর জন্য
     ```

2. **নতুন ভার্চুয়াল মেশিন তৈরি করুন**:
   - **GNOME Boxes** চালু করুন।
   - **+** ক্লিক করুন নতুন ভার্চুয়াল মেশিন তৈরি করতে।
   - ডাউনলোড করা **Snigdha OS ISO** নির্বাচন করুন।

3. **Snigdha OS ইনস্টল করুন**:  
   - স্ক্রীনে প্রদত্ত নির্দেশাবলী অনুসরণ করুন রিসোর্স কনফিগার করতে (যেমন RAM এবং ডিস্ক স্পেস)।
   - একবার কনফিগার হয়ে গেলে, VM শুরু করুন, এবং এটি ISO থেকে বুট করবে ইনস্টলেশন শুরু করতে।

4. **ইনস্টলেশন সম্পন্ন করুন**:  
   - ইনস্টলেশন পদক্ষেপগুলি অনুসরণ করুন এবং ইনস্টলেশনের পর রিবুট করুন নতুন Snigdha OS ইনস্টলেশনে বুট করতে।



Snigdha OS যেকোনো ভার্চুয়াল পরিবেশে ব্যবহার করার সময় উপভোগ করুন! 😄