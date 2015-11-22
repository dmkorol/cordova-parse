#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface CordovaParse : CDVPlugin {

}

- (void)getInstallationId: (CDVInvokedUrlCommand*)command;
- (void)getSubscriptions: (CDVInvokedUrlCommand *)command;
- (void)subscribe: (CDVInvokedUrlCommand *)command;
- (void)unsubscribe: (CDVInvokedUrlCommand *)command;

@end
