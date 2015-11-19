cordova-parse
=============

A cordova plugin for Parse SDK (iOS &amp; Android)

First, follow the Parse installation steps at
https://parse.com/apps/quickstart

##Versions
We support only Cordova version > 3.0

For Android tested with Parse SDK 1.5.1

##Installing the plugin
To add this plugin just type:
```cordova plugin add https://github.com/kodiua/cordova-parse.git```

To remove this plugin type:
```cordova plugin remove com.ccsoft.plugin.CordovaParse_mod```

The plugin has the following methods:

##Usage
- (void)getInstallationId: (CDVInvokedUrlCommand*)command;
- (void)getSubscriptions: (CDVInvokedUrlCommand *)command;
- (void)subscribe: (CDVInvokedUrlCommand *)command;
- (void)unsubscribe: (CDVInvokedUrlCommand *)command;

*** 

