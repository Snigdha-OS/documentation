---
sidebar_position: 4
---

# Install Keyrings

### 🔑 Installing and Packaging Your Own Keyring on Arch Linux

When creating custom repositories or maintaining your own set of signed packages, you may need to create and package your own **GPG keyring** for secure verification. This guide walks you through the process of creating, installing, and packaging a custom keyring for Arch Linux.

---

### 1️⃣ **Generate Your GPG Key**

First, create a GPG key to sign packages or repositories if you don’t already have one.

```bash
gpg --full-generate-key
```

- Select the type: `RSA and RSA (default)`.
- Set the key size: `4096`.
- Set expiration: `0` (no expiration) or specify a validity period.
- Provide your name, email, and a strong passphrase.

To verify your key:

```bash
gpg --list-keys
```

You’ll see something like:

```plaintext
pub   rsa4096 2023-12-05 [SC]
      A41886F639658CA1A5519426E1415F19F21171F2
uid           [ultimate] Eshan Roy <eshanized@example.com>
sub   rsa4096 2023-12-05 [E]
```

---

### 2️⃣ **Export Your GPG Public Key**

Export your public key so it can be included in the keyring:

```bash
gpg --export --armor "Eshan Roy" > eshanized.gpg
```

This will create an ASCII-armored file, `eshanized.gpg`, containing your public key.

---

### 3️⃣ **Create a Keyring Directory**

Create a directory structure for the keyring:

```bash
mkdir -p eshanized-keyring
cd eshanized-keyring
```

Place the exported public key in the directory:

```bash
cp ../eshanized.gpg .
```

---

### 4️⃣ **Package the Keyring for Installation**

#### A. **Create a PKGBUILD**

Arch packages use a `PKGBUILD` script for building. Create a `PKGBUILD` file in the `eshanized-keyring` directory:

```bash
nano PKGBUILD
```

Here’s an example `PKGBUILD` for your keyring:

```bash
pkgname=eshanized-keyring
pkgver=1.0
pkgrel=1
pkgdesc="GPG keyring for Eshan Roy's repository"
arch=('any')
url="https://example.com"
license=('GPL')
source=('eshanized.gpg')
sha256sums=('SKIP')  # Replace SKIP with the actual SHA-256 checksum if desired

package() {
  install -Dm644 "$srcdir/eshanized.gpg" "$pkgdir/usr/share/pacman/keyrings/eshanized.gpg"
  install -Dm644 "$srcdir/eshanized.gpg" "$pkgdir/usr/share/pacman/keyrings/eshanized-trusted.gpg"
}
```

#### B. **Build the Package**

Run the following command to build the package:

```bash
makepkg -si
```

- **`makepkg`** creates the package (`.pkg.tar.zst`) file.
- **`-si`** installs the package after building.

This will install your keyring to `/usr/share/pacman/keyrings/`.

---

### 5️⃣ **Verify the Installed Keyring**

After installing the keyring package, check the directory to ensure your keyring files are correctly placed:

```bash
ls /usr/share/pacman/keyrings/
```

You should see:

```plaintext
eshanized.gpg
eshanized-trusted.gpg
```

---

### 6️⃣ **Use Your Keyring for Custom Repositories**

If you're hosting your own repository, update the `pacman.conf` file to use your keyring:

```bash
sudo nano /etc/pacman.conf
```

Add your repository:

```plaintext
[eshanized-repo]
SigLevel = Required
Server = https://example.com/$arch
```

Your keyring will now be used to verify packages from your custom repository.

---

### 7️⃣ **Testing Your Setup**

1. **Add a package to your repository**:  
   Sign your package using your private GPG key:

   ```bash
   gpg --detach-sign --armor your-package.pkg.tar.zst
   ```

   Place both the `.pkg.tar.zst` file and its `.sig` file in your repository.

2. **Test the repository with pacman**:

   ```bash
   sudo pacman -Syu
   sudo pacman -Ss your-package
   ```

   Ensure the signature is verified using your keyring.

---

### ✅ Tips and Best Practices

1. **Key Security**:  
   Keep your private key safe and secure. Avoid placing it on shared servers.

2. **Regular Updates**:  
   Update and repackage your keyring if you add new GPG keys.

3. **Checksum Validation**:  
   Use tools like `sha256sum` to ensure your `PKGBUILD` file includes valid checksums.

4. **Documentation**:  
   Document your keyring package details for users who may need to add your repository.

By following these steps, you'll have a fully functional custom keyring integrated into your Arch Linux setup. 🎉