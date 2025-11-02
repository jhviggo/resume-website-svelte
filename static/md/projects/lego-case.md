# AUHack 2022 Lego Case

Back in 2022 I attended AUHack, the biggest Student Hackathon in Europe. At this event multiple companies show up and present cases for you to solve, so my friends and I decided to take on the Lego case of helping with working remote during the Corona lockdown. We designed a lego table with a character representing the employees at the company, and they would either face forward if the employee was at their desk, or face backwards if they were away from their keyboards.
This would help with visibility and show who currently available in case you needed help, knowing who was more likely to respond quickly.

Project can be found at [https://github.com/jhviggo/auhack2022](https://github.com/jhviggo/auhack2022)

## The Prototype

![Lego Case](/images/lego-case.jpg)

We made a small prototype using Lego pieces and an Arduino to spin them. The Arduino used another of my projects, the [Pyduino](/projects/pyduino) project I had created a few years before. The reason it used Python was because our Arduino didn't have a WI-FI shield, so we connected it to our computers to collect the data and send it to our database. To know if the employee was at their desk a distance sensor was used and collected data at a given interval.

The database used for the project was the Google Firebase, because it was simple to setup and work with, so at an interval we could store the data from the sensor in Firebase and then another device could read the data and spin the Lego figures depending on if the employee was there or not.

We ended up winning the Lego Case and got a tour of the Lego Headquarters in Billund, Denmark.

![Lego Case](/images/lego-case-won.jpg)
