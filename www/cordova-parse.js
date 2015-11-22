var CC;
(function (CC) {
    var CordovaParse = (function () {
        function CordovaParse() {
        }

        CordovaParse.prototype.getInstallationId = function(successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'CordovaParse',
                'getInstallationId',
                []
            );
        }

        CordovaParse.prototype.getSubscriptions = function(successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'CordovaParse',
                'getSubscriptions',
                []
            );
        }

        CordovaParse.prototype.subscribe = function(channel, successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'CordovaParse',
                'subscribe',
                [ channel ]
            );
        }

        CordovaParse.prototype.unsubscribe = function(channel, successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'CordovaParse',
                'unsubscribe',
                [ channel ]
            );
        }

        return CordovaParse;
    })();
    CC.CordovaParse = CordovaParse;
})(CC || (CC = {}));

module.exports = CC;
