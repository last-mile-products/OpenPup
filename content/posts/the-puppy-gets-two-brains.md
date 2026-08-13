---
title: The puppy gets two brains
date: 2026-08-13
summary: "A Raspberry Pi rides in the puppy. A house computer does the heavy thinking. OpenClaw is the software that ties them together."
authors: The Fletcher family
draft: true
tags:
  - architecture
  - raspberry-pi
  - openclaw
---

A robot puppy cannot carry a giant computer on its back. Batteries are small. Wires should stay short. So OpenPup is designed with **two brains**.

## Brain 1 — the one in the puppy

This is a **Raspberry Pi**. It lives in the body.

It should be good at the things a pet has to do *right now*:

- Hear a name or a clap
- See a person with the camera
- Wag, look, or roll a little
- Speak a short answer
- Stay awake without melting

**OpenClaw** runs on this Pi. Think of OpenClaw as the puppy’s nervous system: it connects ears, eyes, voice, and tools so the robot can actually *do* something instead of just sitting there with a blinking light.

## Brain 2 — the one in the house

This is a computer that stays plugged into the wall. It can be a Mac mini, a small PC, or whatever we already leave on at home.

It should be good at **hard tasks**:

- Long answers and planning
- Remembering family facts over weeks
- Looking things up
- Running a bigger language model so the Pi does not have to

The puppy asks this computer over our **home Wi-Fi**. If we ever want to reach it from somewhere else, we can add Tailscale later. First we keep it local.

## Who does what?

| Job | Puppy Pi | House server |
| --- | --- | --- |
| “Come here” / look at me | Yes | No |
| Short hello | Yes | Maybe |
| “Help plan our weekend” | Asks the house | Yes |
| Remember a long story | Asks the house | Yes |
| Move motors | Yes | No |

If the house computer is asleep, the puppy should still be a puppy: see, hear, say something simple. It just will not be a genius until the house brain wakes up.

## Why this is a good kid project

We can build in layers. First a Pi that talks on the table. Then eyes. Then the house hookup. Then a body that moves. Nobody has to wait for a perfect quadruped robot before the fun starts.

Next up: pick parts, and make a “desk puppy” that can say hello.
