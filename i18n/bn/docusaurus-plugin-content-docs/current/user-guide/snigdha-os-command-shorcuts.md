---
sidebar_position: 2
---

# Shortcut for Developers

### Git Commands & Aliases
Here are your Git aliases with explanations and emojis for easy reference:


- **`alias gs="git status"`** 📜:  
  Show the current status of the Git repository (modified files, untracked files, etc.).

- **`alias ga="git add"`** ➕:  
  Stage changes for commit (adds a file to the staging area).

- **`alias gaa="git add --all"`** 📥:  
  Stage all modified, deleted, and untracked files for commit.

- **`alias gc="git commit"`** ✏️:  
  Commit the staged changes to the repository.

- **`alias gca="git commit --amend"`** 🔄✏️:  
  Amend the last commit (useful for correcting commit messages or adding more changes).

- **`alias gcm="git commit -m"`** 📝💬:  
  Commit changes with a specific commit message.

- **`alias gco="git checkout"`** 🔀:  
  Switch branches or restore working directory files.

- **`alias gbr="git branch"`** 🌿:  
  List, create, or delete Git branches.

- **`alias gb="git branch"`** 🌱:  
  List all branches in the repository.

- **`alias gl="git log"`** 📖:  
  View the commit history with details like author and message.

- **`alias glg="git log --oneline --graph --all"`** 🗂️📊:  
  View a visualized, condensed commit history (one-line format with a graph showing branching and merging).

- **`alias gst="git stash"`** 🗂️🔒:  
  Temporarily save changes that are not ready for commit.

- **`alias gpo="git push origin"`** 🚀🌍:  
  Push your local commits to the remote repository on the `origin` remote.

- **`alias gpl="git pull"`** 🔄🔃:  
  Pull changes from the remote repository (fetch and merge).

- **`alias gup="git pull --rebase"`** 🔄📅:  
  Pull changes from the remote repository but rebase your local commits on top of the remote branch.

- **`alias gd="git diff"`** 🔍📝:  
  Show changes between commits, working directory, and staged changes.

- **`alias gds="git diff --staged"`** 📑:  
  Show the differences between the staged changes and the last commit.

- **`alias gls="git ls-files"`** 🗃️:  
  List all files currently tracked by Git in the repository.

- **`alias gcl="git clone"`** 🛠️:  
  Clone a Git repository into a new directory.

- **`alias gtag="git tag"`** 🏷️:  
  Create, list, or delete tags in the Git repository.

These Git aliases provide quick access to common Git operations, making version control more efficient and saving you time while working with Git repositories.

Here are the explanations for your aliases across various tools, with some added emojis to make them more visually engaging:

### npm Aliases
- **`ni="npm install"`** 🛠️:  
  Install dependencies for the project.

- **`nis="npm install --save"`** 💾:  
  Install and save the package in the `dependencies` section of `package.json`.

- **`nisdev="npm install --save-dev"`** 🛠️🔧:  
  Install and save the package as a development dependency.

- **`nup="npm update"`** 🔄:  
  Update all installed npm packages to their latest versions.

- **`nstart="npm start"`** ▶️:  
  Start the application (runs the start script).

- **`nrun="npm run"`** ▶️💻:  
  Run any custom npm script defined in `package.json`.

- **`ntest="npm test"`** 🧪:  
  Run tests defined in the `test` script.

- **`nls="npm ls"`** 📜:  
  List all installed packages in the current project.

- **`nci="npm ci"`** ⚡:  
  Perform a clean install (faster and more predictable than `npm install`).

- **`nfund="npm fund"`** 💰:  
  Show the funding information for your project's dependencies.

- **`npublish="npm publish"`** 📦:  
  Publish your package to the npm registry.

- **`nversion="npm version"`** 🔢:  
  View and manage versioning for your project.

- **`nrm="npm run"`** 🔄:  
  Run a specific npm script.

- **`nout="npm outdated"`** ⏳:  
  Check for outdated packages in your project.

### pnpm Aliases
- **`pni="pnpm install"`** 🛠️:  
  Install dependencies using pnpm.

- **`pnis="pnpm install --save"`** 💾:  
  Install and save the package in `dependencies`.

- **`pnisdev="pnpm install --save-dev"`** 🛠️🔧:  
  Install and save the package as a development dependency.

- **`pnm="pnpm manager"`** ⚙️:  
  Use pnpm as the package manager.

- **`pnup="pnpm update"`** 🔄:  
  Update all installed pnpm packages.

- **`pnstart="pnpm start"`** ▶️:  
  Start the application with pnpm.

- **`pnrun="pnpm run"`** ▶️💻:  
  Run any script defined in `package.json` using pnpm.

- **`pntest="pnpm test"`** 🧪:  
  Run tests defined in the `test` script using pnpm.

- **`pnls="pnpm list"`** 📜:  
  List all installed pnpm packages.

- **`pnci="pnpm ci"`** ⚡:  
  Perform a clean install with pnpm.

- **`pnpublish="pnpm publish"`** 📦:  
  Publish a package to the pnpm registry.

- **`pnversion="pnpm version"`** 🔢:  
  View and manage versioning for your pnpm project.

- **`pnout="pnpm outdated"`** ⏳:  
  Check for outdated pnpm packages.

### Python Aliases
- **`py="python"`** 🐍:  
  Shortcut for the Python interpreter.

- **`py3="python3"`** 🐍3:  
  Shortcut for Python 3 interpreter.

- **`pip="pip3"`** 📦:  
  Use `pip3` to manage Python packages.

- **`pipup="pip install --upgrade"`** ⬆️📦:  
  Upgrade pip packages.

- **`pyvenv="python3 -m venv"`** 🐍🧳:  
  Create a Python virtual environment.

- **`pyactivate="source venv/bin/activate"`** 🔑:  
  Activate a Python virtual environment.

- **`pydeactivate="deactivate"`** ❌:  
  Deactivate the current Python virtual environment.

- **`pyrun="python"`** 🐍🏃‍♂️:  
  Run a Python script.

- **`pycheck="python -m py_compile"`** 🔍📝:  
  Check Python script syntax without running it.

- **`pytest="python -m pytest"`** 🧪:  
  Run tests with pytest.

- **`pydoc="python -m pydoc"`** 📚:  
  Launch Python documentation server.

- **`pylist="pip list"`** 📜:  
  List installed Python packages.

- **`pyfreeze="pip freeze"`** ❄️:  
  List installed packages in `requirements.txt` format.

- **`pyinstall="pip install"`** 📦:  
  Install Python packages.

- **`pyuninstall="pip uninstall"`** ❌📦:  
  Uninstall Python packages.

### C++ Aliases
- **`cpp-compile="g++ -std=c++17 -Wall -Wextra -o output"`** ⚙️📦:  
  Compile C++ code with standard C++17 features and output as `output`.

- **`cpp-run="g++ -std=c++17 -Wall -Wextra -o output && ./output"`** ▶️:  
  Compile and run a C++ program.

- **`cpp-compile-opt="g++ -std=c++17 -O2 -Wall -Wextra -o output"`** ⚙️🔧:  
  Compile C++ code with optimizations (`-O2`).

- **`cpp-clean="rm -f output"`** 🧹:  
  Remove the compiled output file.

- **`cpp-build-all="g++ -std=c++17 -Wall -Wextra *.cpp -o output"`** 🔨:  
  Compile all `.cpp` files in the directory.

- **`cpp-edit="nano"`** ✏️:  
  Open the code in the `nano` text editor.

- **`cpp-exec="./output"`** ▶️💻:  
  Execute the compiled output.

### C Aliases
- **`c-compile="gcc -std=c11 -Wall -Wextra -o output"`** ⚙️📦:  
  Compile C code with standard C11 features and output as `output`.

- **`c-run="gcc -std=c11 -Wall -Wextra -o output && ./output"`** ▶️:  
  Compile and run a C program.

- **`c-compile-opt="gcc -std=c11 -O2 -Wall -Wextra -o output"`** ⚙️🔧:  
  Compile C code with optimizations (`-O2`).

- **`c-clean="rm -f output"`** 🧹:  
  Remove the compiled output file.

- **`c-build-all="gcc -std=c11 -Wall -Wextra *.c -o output"`** 🔨:  
  Compile all `.c` files in the directory.

- **`c-edit="nano"`** ✏️:  
  Open the code in the `nano` text editor.

- **`c-exec="./output"`** ▶️💻:  
  Execute the compiled output.

### Rust Aliases
- **`rustc="rustc"`** ⚙️:  
  Compile Rust programs using the `rustc` compiler.

- **`rust-run="cargo run"`** ▶️📦:  
  Run the current Rust project.

- **`rust-build="cargo build"`** 🏗️:  
  Build the current Rust project.

- **`rust-build-rel="cargo build --release"`** 🏗️🚀:  
  Build the project in release mode for optimizations.

- **`rust-test="cargo test"`** 🧪:  
  Run tests for the current project.

- **`rust-clean="cargo clean"`** 🧹:  
  Clean the build directory.

- **`rust-fmt="cargo fmt"`** 🔧📐:  
  Format the Rust code.

- **`rust-clippy="cargo clippy"`** 🔍:  
  Run Clippy to check the code for potential issues.

- **`rust-doc="cargo doc --open"`** 📚:  
  Generate and open Rust documentation.

- **`rust-new="cargo new"`** 🛠️📦:  
  Create a new Rust project.

- **`rust-init="cargo init"`** ⚙️:  
  Initialize a new Rust project in an existing directory.

- **`rust-add="cargo add"`** ➕:  
  Add a dependency to the Rust project.

- **`rust-upd="rustup update"`** 🔄:  
  Update the Rust toolchain.

- **`rust-ver="rustc --version"`** 📅:  
  Display the version of `rustc`.

- **`rust-watch="cargo watch -x run"`** 👀:  
  Watch for changes in the Rust project and run automatically.

- **`rust-deps="cargo tree"`** 🗂️:  
  Show the dependency tree of the Rust project.

- **`rust-check="cargo check"`** ✅:  
  Check the code for errors without building it.

- **`rust-ls="ls -alh --color=auto"`** 📂:  
  List the project directory contents with detailed info.

These aliases will help streamline your workflow in a variety of languages and package managers!