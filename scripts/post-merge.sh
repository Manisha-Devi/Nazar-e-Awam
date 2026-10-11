#!/bin/bash
set -e
corepack npm ci
corepack npm --workspace=@workspace/db run push
