(function () {
    var _bkvisit = {
        track: function () {
            var request = this.createRequest(),
                payload = this.getPayload();
            this.send(request, payload);
        },

        createRequest: function () {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            return new ActiveXObject("Microsoft.XMLHTTP");
        },

        getPayload: function () {
            var p = [
                'siteRef=' + encodeURIComponent(App.session.get('siteRef')),
                'timestamp=' + encodeURIComponent(Math.floor(this.getTimestamp() / 1000)),
                'path=' + encodeURIComponent(window.location.pathname),
                'referrer=' + encodeURIComponent(document.referrer),
                'userAgent=' + encodeURIComponent(navigator.userAgent)
            ];
            return p.join('&');
        },

        getTimestamp: function () {
            if (!Date.now) {
                return new Date().getTime();
            }
            return Date.now();
        },

        send: function (request, payload) {
            request.open('POST', '/_bk/track', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(payload);
        }
    };
    _bkvisit.track();
})();
