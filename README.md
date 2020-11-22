## Description
Forked from [RonnyFalconeri's RF_Sniffer](https://github.com/RonnyFalconeri/RF_Sniffer),  
but with updated node module.  
I also changed the port to **8432**.

(Below is a copy of [RonnyFalconeri's RF_Sniffer](https://github.com/RonnyFalconeri/RF_Sniffer) README.)

# RF_Sniffer
A simple application which displays received 433MHz signals on a web UI and terminal using the RF-Modules.


## Software
This is a project made with **Node.js** so you will need it installed on your Pi.


### How to install WiringPi:

To get the application running you will first need to install WiringPi. 

More infos: https://projects.drogon.net/raspberry-pi/wiringpi/

``` $ git clone git://git.drogon.net/wiringPi ```

``` $ cd wiringPi/wiringPi ```

``` $ sudo su ```

``` $ ./build ```

### Getting started

To clone this repository just simply run:

``` $ git pull https://github.com/RonnyFalconeri/RF_Sniffer.git ```
  
To run the webserver open the RF_Sniffer directory and run:

``` $ node webserver.js ```

## Hardware
The hardware components which are used in this project are the standard RF 433MHz receiver. [Here](https://www.amazon.de/Empf%C3%A4nger-Wireless-Transmitter-Receiver-Arduino/dp/B00GMCK4G0 "Title") is an Amazon link to the parts (the longer one is the receiver).
[Here](https://www.instructables.com/id/Super-Simple-Raspberry-Pi-433MHz-Home-Automation/ "Title") is an explanation on how the components and it's pins work. The data pin of the receiver is connected to the physical pin 13.
