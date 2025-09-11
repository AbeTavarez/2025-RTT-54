# Cohort 2025-RTT-54 

## Description
Cohort repo for 2025-RTT-54



## Common Bash Commands

Bash commands are how you interact with the operating system and perform tasks.

Common commands:

ls - List directory contents
cd - Change the current directory
pwd - Print the current working directory
echo - Display a line of text
cat - Concatenate and display files
cp - Copy files and directories
mv - Move or rename files
rm - Delete files or folders
touch - Create an empty file or update its time
mkdir - Create a new folder

### Creating Aliases
To create an alias, use the syntax alias name='command', where name is the shortcut you want to use, and command is the full command you want to run.

Example: Simple Alias - List
alias ll='ls -la'

### Managing Aliases
To view all current aliases, use the alias command without arguments.

Example: Viewing Aliases
alias
alias ll='ls -l'
alias gs='git status'

To remove an alias, use unalias name.

Example: Removing an Alias
unalias gs

### Creating Permanent Aliases
To make an alias permanent, add it to your ~/.bashrc or ~/.bash_profile file.

Example: Adding Permanent Alias - Open Editor
nano ~/.bashrc
Example: Adding Permanent Alias - Add Alias
alias ll='ls -la'
Example: Adding Permanent Alias - Save and Apply
source ~/.bashrc