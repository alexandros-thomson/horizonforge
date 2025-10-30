# GitHub Commands for HorizonForge Video Scripts

## Quick Add & Commit (Single Command)
```bash
git add synthesia-script.md veedio-script.md && git commit -m "Add optimized video scripts for Synthesia and VEED.IO" && git push origin main
```

---

## Step-by-Step Commands (If You Prefer Separate Steps)

### 1. Add the files to staging
```bash
git add synthesia-script.md veedio-script.md
```

### 2. Commit with descriptive message
```bash
git commit -m "Add optimized video scripts for Synthesia and VEED.IO"
```

### 3. Push to your repository
```bash
git push origin main
```

**Note:** Replace `main` with `master` if your default branch is named `master`

---

## Alternative: If You Want to Check Status First
```bash
# Check what files are ready to commit
git status

# Add the scripts
git add synthesia-script.md veedio-script.md

# Verify they're staged
git status

# Commit and push
git commit -m "Add optimized video scripts for Synthesia and VEED.IO" && git push origin main
```

---

## For Creating a New Branch (Recommended for Clean Organization)
```bash
# Create and switch to new branch
git checkout -b video-scripts

# Add and commit
git add synthesia-script.md veedio-script.md && git commit -m "Add optimized video scripts for Synthesia and VEED.IO"

# Push to new branch
git push origin video-scripts

# Then merge to main later or keep separate
```

---

## If Files Already Exist (Update/Overwrite)
```bash
# This will overwrite existing files with same names
git add -f synthesia-script.md veedio-script.md && git commit -m "Update video scripts with optimizations" && git push origin main
```

---

## Grok Code Fast 1 Prompt (Copy-Paste This)

If you want Grok to help automate or review before pushing:

```
I have two markdown files ready: synthesia-script.md and veedio-script.md for HorizonForge video production. 

Files contain:
- Scene-by-scene breakdowns for Synthesia avatar videos
- Screenshot-driven scripts for VEED.IO editing
- Production notes, timing, visual overlays, CTAs

Help me:
1. Verify markdown formatting is GitHub-compatible
2. Check for any typos or inconsistencies
3. Suggest optimal folder structure (should these go in /docs, /scripts, or root?)
4. Generate a comprehensive README.md section to document these scripts

After review, I'll commit with: git add synthesia-script.md veedio-script.md && git commit -m "Add optimized video scripts" && git push origin main
```

---

## Recommended Folder Structure

If you want to organize better:

```bash
# Create scripts directory
mkdir -p docs/video-scripts

# Move files there
mv synthesia-script.md veedio-script.md docs/video-scripts/

# Commit with structure
git add docs/video-scripts/ && git commit -m "Add video production scripts in organized structure" && git push origin main
```

---

## Quick Verification Commands

### Before pushing, verify files locally:
```bash
# View file in terminal
cat synthesia-script.md

# Or use less for scrolling
less veedio-script.md

# Check file sizes
ls -lh synthesia-script.md veedio-script.md
```

---

## Emergency Undo (If You Push by Mistake)

### Undo last commit (keeps files locally):
```bash
git reset --soft HEAD~1
```

### Undo and remove files from staging:
```bash
git reset HEAD synthesia-script.md veedio-script.md
```

### Force push to remote (if already pushed and need to undo):
```bash
git reset --hard HEAD~1 && git push origin main --force
```

**Warning:** Only use `--force` if you're the only one working on the repo

---

## Best Practice for Tonight

Since you're about to sleep, use this safe approach:

```bash
# 1. Add files
git add synthesia-script.md veedio-script.md

# 2. Quick commit
git commit -m "Add video scripts - ready for production"

# 3. Push to main
git push origin main

# Done! Scripts are backed up on GitHub and ready for video production tomorrow
```

---

## Alternative: GitHub Web Upload (No Terminal Needed)

If you prefer not using terminal:

1. Go to https://github.com/alexandros-thomson/horizonforge
2. Click "Add file" → "Upload files"
3. Drag synthesia-script.md and veedio-script.md
4. Commit message: "Add optimized video scripts for Synthesia and VEED.IO"
5. Click "Commit changes"

---

## What to Tell Grok Code Fast 1

```
Just added two video production scripts to my HorizonForge repo:
- synthesia-script.md (avatar-driven, 70 seconds, 7 scenes)
- veedio-script.md (screenshot-driven, 75 seconds, motion graphics)

These are production-ready for creating demo videos. Can you:
1. Generate a matching thumbnail concepts file
2. Create YouTube description template with timestamps
3. Write DevPost video embed instructions

All optimized for Meta Horizon Creator Competition submission.
```

---

**Copy the quick command below and paste into your terminal:**

```bash
git add synthesia-script.md veedio-script.md && git commit -m "Add optimized video scripts for Synthesia and VEED.IO" && git push origin main
```

Sweet dreams! Your scripts will be safely in GitHub when you wake up. 🚀