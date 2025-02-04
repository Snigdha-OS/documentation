---
sidebar_position: 4
---

# অফলাইন ইনস্টলেশন

### 🖥️ **কিভাবে অফলাইন মোডে Snigdha OS ইনস্টল করবেন**

**অফলাইন মোডে** Snigdha OS ইনস্টল করার মানে হল একটি সক্রিয় ইন্টারনেট কানেকশন ছাড়া ইনস্টলেশন সম্পন্ন করা। যদিও সাধারণত Snigdha OS ইনস্টল করার জন্য ইন্টারনেট কানেকশন প্রয়োজন হয় আপডেট এবং অতিরিক্ত প্যাকেজ ডাউনলোড করতে, তবুও ইনস্টলেশন ISO এবং পূর্বে ডাউনলোড করা প্যাকেজ ব্যবহার করে অফলাইন মোডে ইনস্টল করা সম্ভব। এই পদ্ধতি বিশেষভাবে কার্যকর যখন আপনি এমন পরিবেশে আছেন যেখানে ইন্টারনেট অ্যাক্সেস সীমিত বা নেই।

এখানে **অফলাইন মোডে Snigdha OS ইনস্টল করার** জন্য একটি ধাপে ধাপে গাইড:

### 📥 **Step 1: Snigdha OS ISO ডাউনলোড করুন**

1. **Snigdha OS অফিসিয়াল ওয়েবসাইটে যান**:  
   Snigdha OS ডাউনলোড পেজে যান:  
   - [Snigdha OS Downloads](https://snigdhaos.org/downloads.html)

2. **ISO ফাইল ডাউনলোড করুন**:  
   আপনার পছন্দসই সংস্করণ (KDE, GNOME, ইত্যাদি) নির্বাচন করুন এবং ISO ফাইল ডাউনলোড করুন। এটি বুটেবল USB তৈরি করতে ব্যবহার করা হবে।

3. **অতিরিক্ত প্যাকেজ ডাউনলোড করুন (ঐচ্ছিক)**:  
   যদি আপনি জানেন যে আপনার অতিরিক্ত প্যাকেজ (যেমন ড্রাইভার বা সফটওয়্যার যা ISO তে অন্তর্ভুক্ত নয়) প্রয়োজন হবে, তবে তা পূর্বে অন্য একটি সিস্টেম থেকে ডাউনলোড করা ভালো। আপনি **Pacman** ব্যবহার করে প্যাকেজ ডাউনলোড করতে পারেন:
   ```bash
   sudo pacman -Sw package_name
   ```

### 💾 **Step 2: বুটেবল USB ড্রাইভ তৈরি করুন**

আপনার একটি **বুটেবল USB** প্রয়োজন হবে Snigdha OS ইনস্টল করার জন্য। **Ventoy** অথবা **Rufus** (Windows এর জন্য) অথবা `dd` কমান্ড (Linux এর জন্য) ব্যবহার করে বুটেবল USB তৈরি করুন।

#### **Linux ব্যবহারকারীদের জন্য (Using `dd`)**

1. **USB ড্রাইভ ইনসার্ট করুন**:  
   একটি USB ড্রাইভ (অন্তত 4 GB) প্লাগ ইন করুন।

2. **USB ড্রাইভের অবস্থান খুঁজুন**:  
   `lsblk` কমান্ড ব্যবহার করে আপনার USB ড্রাইভ চিহ্নিত করুন:
   ```bash
   lsblk
   ```

3. **বুটেবল USB তৈরি করুন**:  
   `dd` কমান্ড ব্যবহার করে Snigdha OS ISO USB ড্রাইভে কপি করুন (এখানে `/dev/sdX` আপনার USB ডিভাইস পাথ হবে):
   ```bash
   sudo dd if=snigdhaos-YYYY.MM.DD-x86_64.iso of=/dev/sdX bs=4M status=progress oflag=sync
   ```

4. **USB ইজেক্ট করুন**:  
   প্রক্রিয়া শেষ হওয়ার পর, USB ড্রাইভ সুরক্ষিতভাবে ইজেক্ট করুন:
   ```bash
   sudo eject /dev/sdX
   ```

#### **Windows ব্যবহারকারীদের জন্য (Using Rufus)**

1. **Rufus ডাউনলোড এবং ইনস্টল করুন**:  
   **Rufus** ডাউনলোড করুন [https://rufus.ie/](https://rufus.ie/) এবং ইনস্টল করুন।

2. **Rufus খুলুন** এবং USB ড্রাইভ নির্বাচন করুন।

3. **Snigdha OS ISO নির্বাচন করুন** এবং সঠিক **পার্টিশন স্কিম** নির্বাচন করুন (সাধারণত **GPT** আধুনিক সিস্টেমের জন্য)।

4. **প্রক্রিয়া শুরু করুন**:  
   **Start** বাটনে ক্লিক করুন এবং বুটেবল USB তৈরি করতে অপেক্ষা করুন।

### 🔌 **Step 3: Snigdha OS লাইভ পরিবেশে বুট করুন**

1. **বুটেবল USB ড্রাইভ** টার্গেট সিস্টেমে ইনসার্ট করুন।

2. **BIOS/UEFI তে প্রবেশ করুন**:  
   সিস্টেম রিস্টার্ট করুন এবং BIOS/UEFI তে প্রবেশ করতে উপযুক্ত কী প্রেস করুন (সাধারণত `F2`, `DEL`, অথবা `ESC`)।

3. **USB কে প্রাথমিক বুট ডিভাইস হিসেবে সেট করুন**:  
   BIOS/UEFI সেটিংসে USB ড্রাইভকে প্রথম বুট ডিভাইস হিসেবে সেট করুন।

4. **পরিবর্তন সেভ এবং রিস্টার্ট করুন**:  
   পরিবর্তনগুলি সেভ করুন এবং সিস্টেম রিস্টার্ট করুন। এটি Snigdha OS লাইভ পরিবেশে বুট করবে।

### ⚙️ **Step 4: Snigdha OS অফলাইন মোডে ইনস্টল করুন**

1. **ইনস্টলার চালু করুন**:  
   লাইভ পরিবেশে, ডেস্কটপ বা অ্যাপ্লিকেশন মেনু থেকে **Snigdha OS Installer** আইকনে ক্লিক করুন।

2. **ভাষা এবং অঞ্চল নির্বাচন করুন**:  
   ভাষা, অঞ্চল এবং কীবোর্ড লেআউট নির্বাচন করার জন্য নির্দেশনা অনুসরণ করুন।

3. **পার্টিশনিং**:  
   যে ডিস্কে Snigdha OS ইনস্টল করতে চান তা নির্বাচন করুন। আপনি ইনস্টলারকে ডিস্ক স্বয়ংক্রিয়ভাবে পার্টিশন করতে দিতে পারেন অথবা আরও নিয়ন্ত্রণ পেতে ম্যানুয়াল পার্টিশনিং নির্বাচন করতে পারেন।

   - **Btrfs** ডিফল্ট ফাইল সিস্টেম হিসেবে ব্যবহৃত হয় Snigdha OS এ।
   - আপনি চাইলে **LVM** বা **ZFS** সেটআপ করতে পারেন উন্নত ফিচারের জন্য।

4. **অফলাইন মোড সতর্কতা**:  
   ইনস্টলার আপডেট এবং অতিরিক্ত সফটওয়্যার ডাউনলোডের জন্য ইন্টারনেট কানেকশন চাবে। **এই পদক্ষেপটি উপেক্ষা করুন** যেহেতু আপনি অফলাইন মোডে ইনস্টল করছেন। ইন্টারনেট কানেকশন ছাড়া পরবর্তী পদক্ষেপে এগিয়ে যান।

5. **ব্যবহারকারী কনফিগারেশন**:  
   - **ব্যবহারকারী নাম** এবং **পাসওয়ার্ড** সেট করুন।
   - প্রয়োজনে **root পাসওয়ার্ড** কনফিগার করুন।

6. **ইনস্টলেশন স্থান**:  
   আপনি যেই পার্টিশনে Snigdha OS ইনস্টল করতে চান তা নিশ্চিত করুন। ডেটা হারানোর হাত থেকে বাঁচতে পার্টিশনগুলো ভালভাবে চেক করুন।

7. **ইনস্টলেশন শুরু করুন**:  
   **Install** বাটনে ক্লিক করুন এবং ইনস্টলেশন প্রক্রিয়া শুরু করুন। সিস্টেমটি ISO থেকে ফাইলগুলি লক্ষ্য ড্রাইভে কপি করবে।

### 🔄 **Step 5: পূর্বে ডাউনলোড করা প্যাকেজ ইনস্টল করা (ঐচ্ছিক)**

যদি আপনি পূর্বে অতিরিক্ত প্যাকেজ বা সফটওয়্যার (যেমন ড্রাইভার, কোডেকস, অথবা প্রয়োজনীয় টুলস) ডাউনলোড করে থাকেন, তাহলে ইনস্টলেশন প্রক্রিয়া চলাকালে বা পরে সেগুলি ইনস্টল করতে পারেন:

1. **USB প্যাকেজগুলো মাউন্ট করুন**:  
   যদি প্যাকেজগুলো অন্য USB অথবা ডিস্কে থাকে, তাহলে ইনস্টলেশন চলাকালে টার্মিনাল ব্যবহার করে তা মাউন্ট করতে পারেন।

2. **Pacman দিয়ে প্যাকেজ ইনস্টল করুন**:  
   একবার Snigdha OS ইনস্টল হয়ে গেলে এবং সিস্টেমে বুট করলে, আপনি **pacman** প্যাকেজ ম্যানেজার ব্যবহার করে পূর্বে ডাউনলোড করা প্যাকেজগুলো ইনস্টল করতে পারেন:
   ```bash
   sudo pacman -U /path/to/package_file.pkg.tar.zst
   ```

   `/path/to/package_file.pkg.tar.zst` এর জায়গায় আসল প্যাকেজের পাথ দিন।

### ⚙️ **Step 6: চূড়ান্ত পদক্ষেপ এবং রিস্টার্ট**

1. **আপনার সিস্টেম কনফিগার করুন**:  
   ইনস্টলেশন শেষ হওয়ার পর, আপনি ডিসপ্লে রেজোলিউশন, Wi-Fi (যদি উপলব্ধ থাকে), এবং ব্যবহারকারী পছন্দসমূহ কনফিগার করতে পারেন।

2. **সিস্টেম রিস্টার্ট করুন**:  
   ইনস্টলেশন শেষ হওয়ার পর, **রিস্টার্ট** করুন এবং USB ড্রাইভটি সরিয়ে ফেলুন।

3. **Snigdha OS এ বুট করুন**:  
   আপনার সিস্টেমটি Snigdha OS তে বুট করবে। যদি আপনি **ডুয়াল-বুট** কনফিগার করে থাকেন, তাহলে আপনি OS নির্বাচন করার জন্য বুটলোডার মেনু দেখতে পাবেন।

4. **অফলাইন সেটআপ**:  
   যদি কোনো অতিরিক্ত সফটওয়্যার বা আপডেট ইনস্টল করতে হয়, আপনি **অফলাইন প্যাকেজ ম্যানেজার** ব্যবহার করে সেগুলি পরে ইনস্টল করতে পারেন, যখন আপনার ইন্টারনেট কানেকশন থাকবে।

### 🎉 **উপসংহার**

এখন আপনি **অফলাইন মোডে** Snigdha OS ইনস্টল করেছেন! যদিও কিছু পোস্ট-ইনস্টলেশন আপডেট এবং সফটওয়্যার ইনস্টলেশন ইন্টারনেট কানেকশন প্রয়োজন করতে পারে, এই পদ্ধতি আপনাকে সীমিত বা কোনো ইন্টারনেট অ্যাক্সেস না থাকলে Snigdha OS সেটআপ করতে সহায়তা করবে। এই ইনস্টলেশন পদ্ধতি এমন এলাকাগুলোর জন্য আদর্শ যেখানে ইন্টারনেট কানেকশন কম, অথবা অ্যাডভান্সড ব্যবহারকারীরা যারা পুরো সিস্টেম অফলাইন কনফিগার করতে চান।

আপনার নতুন Snigdha OS সেটআপ উপভোগ করুন! 😎🚀