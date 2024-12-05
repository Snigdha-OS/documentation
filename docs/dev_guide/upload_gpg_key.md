---
sidebar_position: 3
---
# Upload Key => Server

### 🌐 Sending and Receiving GPG Keys Using a Key Server

Key servers are repositories for sharing and retrieving GPG public keys. They make it easy to distribute your public key and fetch others’ keys for verifying signatures or encrypted communications. Here's how to send and receive GPG keys to/from a key server.

---

### 1️⃣ **Send (Upload) Your Public Key to a Key Server**

#### A. **Export Your Key's Fingerprint**

First, identify your key by its fingerprint. List your GPG keys:

```bash
gpg --list-keys
```

Example output:

```plaintext
pub   rsa4096 2023-12-05 [SC]
      A41886F639658CA1A5519426E1415F19F21171F2
uid           [ultimate] Eshan Roy <eshanized@example.com>
sub   rsa4096 2023-12-05 [E]
```

Copy the key ID or fingerprint (e.g., `A41886F639658CA1A5519426E1415F19F21171F2`).

#### B. **Send the Key to a Key Server**

Use the following command to upload your public key to a key server:

```bash
gpg --keyserver hkp://keyserver.ubuntu.com --send-keys A41886F639658CA1A5519426E1415F19F21171F2
```

- Replace `hkp://keyserver.ubuntu.com` with your preferred key server (e.g., `keys.openpgp.org`).
- Replace the key ID with your actual key ID or fingerprint.

If successful, your public key is now available on the key server for others to retrieve.

---

### 2️⃣ **Receive (Download) a Public Key from a Key Server**

#### A. **Search for a Key by Email or Key ID**

If you know the email address or key ID of the person whose key you need, search for it:

```bash
gpg --keyserver hkp://keyserver.ubuntu.com --search-keys eshanized@example.com
```

You’ll see a list of matching keys. Example:

```plaintext
(1) Eshan Roy <eshanized@example.com>
      A41886F639658CA1A5519426E1415F19F21171F2
(2) John X. Doe <eshanized@otherdomain.com>
      1234EFGH5678IJKL9012MNOP3456QRST7890ABCD
```

Choose the appropriate key by typing its number (e.g., `1`) and pressing Enter.

#### B. **Receive the Key Directly by Key ID**

If you already know the key ID or fingerprint:

```bash
gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys A41886F639658CA1A5519426E1415F19F21171F2
```

The public key will be downloaded and added to your keyring.

---

### 3️⃣ **Verify the Downloaded Key**

After receiving a key, verify its details to ensure it belongs to the correct person:

```bash
gpg --list-keys
```

Check the `uid` (user ID) and ensure it matches the expected email or name.

---

### 4️⃣ **Sign a Received Key (Optional)**

If you trust the key’s owner, you can sign the key to indicate trust:

```bash
gpg --sign-key A41886F639658CA1A5519426E1415F19F21171F2
```

This adds your signature to their key and shows others you vouch for its authenticity.

---

### 5️⃣ **Synchronize Keys with a Key Server**

If the key is updated (e.g., new subkeys added), synchronize it with the server:

```bash
gpg --refresh-keys
```

This ensures you have the latest version of all keys in your keyring.

---

### 6️⃣ **Tips for Key Server Usage**

- **Choose a Reliable Key Server**: Common servers include:
  - `hkp://keyserver.ubuntu.com`
  - `hkp://keys.openpgp.org`
  - `hkp://pgp.mit.edu`
- **Use TLS for Security**:
  Some key servers support HTTPS for secure communication:
  ```bash
  gpg --keyserver hkps://keys.openpgp.org --send-keys A41886F639658CA1A5519426E1415F19F21171F2
  ```

- **Update Regularly**:
  Synchronize your keyring periodically to stay current with any changes or revocations.

---

By following these steps, you can efficiently share your GPG public key and fetch others' keys for secure communication and verification. 🎉