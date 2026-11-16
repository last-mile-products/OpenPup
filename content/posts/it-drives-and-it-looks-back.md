---
title: "OpenPup Part 2: It drives, and it looks back"
date: "2026-11-16"
summary: "Built, calibrated, and following faces. No AI yet."
authors: The Fletcher family
draft: false
tags:
  - hardware
  - driving
  - camera
---

Last time we had a Pi bolted to a chassis and a pile of parts on the kitchen table. Now the OpenPup is built, it's on our Wi-Fi, it drives, it talks, it hears, and it follows your face around the room with its camera. No AI yet. That's the next post.

It also fought me a little along the way, which is the fun part to write about.

## Finishing the build

We finished putting the kit together: the motors, the steering, and the camera on its pan-tilt bracket, with the Pi 5 riding on top. The kids and I did the servo wiring together, then tested the camera panning and tilting.

![Camera and ultrasonic sensor on the pan-tilt bracket](/media/20261116-head-camera-ultrasonic.jpg)

*Camera and ultrasonic sensor on the pan-tilt bracket*

![Wiring the servos](/media/20261116-wiring-servos-1.jpg)

*Wiring the servos*

![Wiring the servos](/media/20261116-wiring-servos-2.jpg)

*Wiring the servos*

## First boot: where is it?

I flashed Raspberry Pi OS onto the SD card with Raspberry Pi Imager, put it in the Pi 5, and waited for it to show up on my home network. It never did. The only Pi I could find was a different one that does something else on my network, so I left that one alone.

The fix was boring. I reflashed the card, retyped the Wi-Fi details, reseated the card, and a few minutes later `openpup.local` answered. If yours won't show up, check the Wi-Fi details in Imager first.

![Raspberry Pi 5 under the robot HAT](/media/20261116-pi-and-hat-closeup.jpg)

*Raspberry Pi 5 under the robot HAT*

## Installing SunFounder's software

Next came SunFounder's libraries: robot-hat, vilib and picar-x. The docs are a little out of date in places. Here's what tripped me up:

- The vilib branch the guide names doesn't exist anymore. Use the `picamera2` branch.
- picar-x version 2.0 has no `install.py`. Install it with pip instead.
- The calibration tool isn't where the guide says. It's in `example/calibration/`.

![Robot HAT wiring from above](/media/20261116-robot-hat-wiring-top.jpg)

*Robot HAT wiring from above*

## Power matters

At first the motors and servos did nothing, and I assumed something was broken. Turns out the car's own batteries and power switch have to be on. USB-C power to the Pi isn't enough to move anything.

The speaker had a similar trap. It stayed silent until I turned the amplifier on with one command, and it can need that again after a reboot.

## Calibration and the first drive

The calibration tool lets you center the steering and the camera servos and set which way each motor spins. After that, both motors went forward and the steering moved the way it should. Then I tried the keyboard driving demo.

It drives! Left turns worked well. Right turns were weird: the front wheels clearly turned right, but the car mostly kept going straight. I think it's either grip (the smooth front tires skid on a slick floor) or the steering needs more calibration. Carpet and a lower speed helped, but turning is still weird, and figuring it out is on the list.

Slowing it down gave me my favorite bug so far. I changed the speed in the code with one find-and-replace, and it also changed the "stop" command into "go slowly." So when you let go of the key, the car kept creeping forward on its own. Easy fix once I saw it, and a good lesson for the kids about checking what your change actually touched.

## It can hear and talk

I plugged in a small USB microphone, recorded five seconds, and played it back through the speaker. It's quiet, but it works. That matters because the whole plan is for the kids to talk to this thing.

## It looked back at us

The camera is the part that made it feel alive. SunFounder's video example streams what the robot sees to a browser, so you can drive from the robot's point of view.

Then I tried their "stare at you" demo. The camera finds a face and the pan-tilt servos move to keep it centered. Walk across the room and it turns its head to watch you. It's a simple demo, but it's the first time it felt like a puppy and not a remote control car.

<video controls playsinline muted src="/media/20261116-face-following.mp4" aria-label="The camera follows a face"></video>

*The camera follows a face*

## A little control panel

Running separate demo scripts over SSH got old fast, so I put together a small web app that runs on the Pi and starts by itself when it boots. I open it in a browser on my home Wi-Fi and get:

- The live camera feed
- Drive buttons (or W, A, S and D on the keyboard), with a speed limit so it can't take off
- Sliders to aim the camera
- A box to type something and have the robot say it out loud
- A face tracking button that turns the "stare at you" behavior on and off
- A box to send terminal commands to the Pi, which is handy for me (and password protected)

If you let go or the connection drops, it stops on its own. That was a must before I hand it to the kids.

## What's still rough

- Turning is still weird. It's either grip or more calibration, and I haven't figured out which yet.
- The mic is very quiet until you turn the level up.
- I haven't measured the camera and pan-tilt yet, which I need before we print the head.

## What's next

So far everything it does is something we told it to do. Post 3 is where that changes. We're putting OpenClaw, an AI agent, on top of it so we can talk to it and start giving it real skills. The kids are still hoping it'll fetch things for them. I'm still not sure how far we'll get, but that's the fun part.

This write-up is also on Substack: [OpenPup Part 2: It drives, and it looks back](https://jonlmp.substack.com/p/openpup-part-2-it-drives-and-it-looks).
