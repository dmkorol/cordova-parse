var CordovaParse = {};

CordovaParse.getInstallationId = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'CordovaParse',
        'getInstallationId',
        []
    );
};

CordovaParse.getSubscriptions = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'CordovaParse',
        'getSubscriptions',
        []
    );
};

CordovaParse.subscribe = function(channel, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'CordovaParse',
        'subscribe',
        [ channel ]
    );
};

CordovaParse.unsubscribe = function(channel, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'CordovaParse',
        'unsubscribe',
        [ channel ]
    );
};

CordovaParse.resetBadge = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'CordovaParse',
        'resetBadge'
    );
};

module.exports = CordovaParse;
