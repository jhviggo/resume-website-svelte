# Drone Stabilization Kit (DSK)

Bachelor project at VIA University College

by Jannik Schwarz-Wolf and Viggo Petersen

## Purpose
This project is about developing a hardware device to attach to drones, which will allow the user to visualize the drones flying in a browser. There are three parts to the project:

1. The hardware will be an ESP32-WROOM-32U microcontroller.
2. The API used to collect data from the hardware and display on the website.
3. The website using TreeJS to render a 3D model of a drone.

A short demo of this Kit can be found here [https://www.youtube.com/watch?v=TtA2yLlV1VE](https://www.youtube.com/watch?v=TtA2yLlV1VE)

## Hardware and Embedded software
[https://github.com/jhviggo/drone-stabilization-kit](https://github.com/jhviggo/drone-stabilization-kit)

![Drone Kit Hardware](/images/drone-kit-hardware.jpg)

The Hardware as mentioned is an ESP32 and a few additional components such as a GPS module and Gyro/accelerometer. The software was programmed using AVR-C and the Espressif Framework based on FREE-RTOS. This allowed us to easily create multiple async tasks for gathering data from the sensors, progress it and send it to the API, without blocking.

## Backend API
[https://github.com/jhviggo/drone-stabilization-api](https://github.com/jhviggo/drone-stabilization-api)

The API was be coded in JavaScript for simplicity, since both developers are familiar with the language and common libraries such as ExpressJS and Morgan. The database, used to store users and the collected data, was a Google Firebase and the API itself was hosted in GCP Cloud Run using a Docker image built using Github Actions.

## Frontend
[https://github.com/jhviggo/drone-stabilization-frontend](https://github.com/jhviggo/drone-stabilization-frontend)

![Drone Kit Frontend](/images/drone-kit-frontend.jpg)

The Frontend was programmed using Javascript and the Svelte framework and used the TreeJS library to render a 3D model of a drone, which represented the current or past state of the collected data from the hardware. You could either get live data from the hardware, which was sampled at a set rate, or you could show previously collected data.
