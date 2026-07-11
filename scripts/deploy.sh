#!/bin/bash
# Zelo Flooring nightly rebuild script.
#
# Trigger this from Hostinger hPanel -> Advanced -> Cron Jobs with a command like:
#   bash /home/USERNAME/domains/zeloflooring.com/app/scripts/deploy.sh >> /home/USERNAME/domains/zeloflooring.com/app/tmp/deploy.log 2>&1
# (replace the path with the app's actual directory, confirm it in hPanel's Node.js app settings)
#
# What it does: reinstalls dependencies, rebuilds the Next.js app from source,
# and restarts the app so any newly-dated blog post (see SCHEDULING.md's
# publish-date-gate) or other committed change goes live automatically.
#
# Prerequisite: the server must have the full project SOURCE uploaded
# (app/, lib/, components/, public/, package.json, etc, NOT node_modules/
# or .next/), not just a pre-built .next/ output. See SCHEDULING.md for
# the one-time migration steps if the server currently only has built output.

set -e

cd "$(dirname "$0")/.."

echo "[$(date)] Starting rebuild"

npm ci
npm run build

mkdir -p tmp
touch tmp/restart.txt

echo "[$(date)] Rebuild complete, restart triggered"
