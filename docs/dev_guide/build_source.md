---
sidebar_position: 1
---
# Build Snigdha OS

## Overview
Building **Snigdha OS** from the source code is very easy. In this documentation, I am going to guide you on how to build **Snigdha OS** from the source. And customizing it.

:::danger Caution
Before running or customizing any script, first examine. Remember, you are running all the scripts produced by **Snigdha OS** at your own risk!
:::

## Prerequisites
To build **Snigdha OS** from the source, we need some packages which are hosted on [SNIGDHA OS CORE](https://github.com/snosmirror/snigdhaos-core) repository and [SNIGDHA OS EXTRA](https://github.com/snosmirror/snigdhaos-extra) repository. [SNIGDHA OS TESTING](https://github.com/snosmirror/snigdhaos-testing) is an optional repository. You also need **Chaotic-AUR** because some packages come from the chaotic-aur. e.g : github-desktop.

:::info NOTE
- Make sure you have internet connection.
- If you are on **Snigdha OS**, you need not add any repository! By default all the repositories are added and enabled.
:::



## Adding Repository
First of all we will add **Snigdha OS Core** and **Snigdha OS Extra** repository in our pacman configuration. to edit `pacman.conf`, execute the following on your terminal. [I am using nano, you are free to use anything]

```bash
sudo nano /etc/pacman.conf
```

:::tip Archlinux
If you are using **Arch Linux** then you can copy and paste the following.

```bash
#
# /etc/pacman.conf
#
# See the pacman.conf(5) manpage for option and repository directives

#
# GENERAL OPTIONS
#
[options]
# The following paths are commented out with their default values listed.
# If you wish to use different paths, uncomment and update the paths.
#RootDir     = /
#DBPath      = /var/lib/pacman/
#CacheDir    = /var/cache/pacman/pkg/
#LogFile     = /var/log/pacman.log
#GPGDir      = /etc/pacman.d/gnupg/
#HookDir     = /etc/pacman.d/hooks/
HoldPkg     = pacman glibc
#XferCommand = /usr/bin/curl -L -C - -f -o %o %u
#XferCommand = /usr/bin/wget --passive-ftp -c -O %o %u
#CleanMethod = KeepInstalled
Architecture = auto

# Pacman won't upgrade packages listed in IgnorePkg and members of IgnoreGroup
#IgnorePkg   =
#IgnoreGroup =

#NoUpgrade   =
#NoExtract   =

# Misc options
#UseSyslog
#Color
#NoProgressBar
CheckSpace
#VerbosePkgLists
#ParallelDownloads = 5

# By default, pacman accepts packages signed by keys that its local keyring
# trusts (see pacman-key and its man page), as well as unsigned packages.
SigLevel    = Required DatabaseOptional
LocalFileSigLevel = Optional
#RemoteFileSigLevel = Required

# NOTE: You must run `pacman-key --init` before first using pacman; the local
# keyring can then be populated with the keys of all official Arch Linux
# packagers with `pacman-key --populate archlinux`.

#
# REPOSITORIES
#   - can be defined here or included from another file
#   - pacman will search repositories in the order defined here
#   - local/custom mirrors can be added here or in separate files
#   - repositories listed first will take precedence when packages
#     have identical names, regardless of version number
#   - URLs will have $repo replaced by the name of the current repo
#   - URLs will have $arch replaced by the name of the architecture
#
# Repository entries are of the format:
#       [repo-name]
#       Server = ServerName
#       Include = IncludePath
#
# The header [repo-name] is crucial - it must be present and
# uncommented to enable the repo.
#

# The testing repositories are disabled by default. To enable, uncomment the
# repo name header and Include lines. You can add preferred servers immediately
# after the header, and they will be used before the default mirrors.

#[core-testing]
#Include = /etc/pacman.d/mirrorlist

[core]
Include = /etc/pacman.d/mirrorlist

[snigdhaos-core]
SigLevel = Never
Server = https://snosmirror.github.io/$repo/$arch

#[extra-testing]
#Include = /etc/pacman.d/mirrorlist

[extra]
Include = /etc/pacman.d/mirrorlist

[snigdhaos-extra]
Siglevel = Never
Server = https://snosmirror.github.io/$repo/$arch

# If you want to run 32 bit applications on your x86_64 system,
# enable the multilib repositories as required here.

#[multilib-testing]
#Include = /etc/pacman.d/mirrorlist

[multilib]
Include = /etc/pacman.d/mirrorlist

# An example of a custom package repository.  See the pacman manpage for
# tips on creating your own repositories.
#[custom]
#SigLevel = Optional TrustAll
#Server = file:///home/custompkgs
```
:::

After executing, paste the following at the end of the file
```bash

[snigdhaos-core]
SigLevel = Never
Server = https://snosmirror.github.io/$repo/$arch

[snigdhaos-extra]
Siglevel = Never
Server = https://snosmirror.github.io/$repo/$arch
```
:::info SigLevel
If you have `SnigdhaOS-keyring` installed on the machine or you want to [install](/install_keyring) then you can set the **SigLevel = Required DatabaseOptional**.
:::

You are ready to build Snigdha OS!

## Cloning Source from GitHub
Now, clone the `snigdhaos-arctic` github repository. In addition, you can make a separate directory to do that. Go to your specified/choosen directory, execute the following on terminal.
```bash
git clone https://github.com/Snigdha-OS/snigdhaos-arctic.git
```
then,
```bash
cd snigdhaos-arctic/scripts
```
:::info SET EXECUTABLE
```bash
chmod +x ./01-online-build
```
:::
Now run the script by executing,
```bash
./01-online-build
```
The script will start building **Snigdha OS Arctic**. You can have a coffee break while building. The building depends on **Internet Connection** and machine's **Performance**.

After completing, you will find a directory with name **Output** containing the iso file.
