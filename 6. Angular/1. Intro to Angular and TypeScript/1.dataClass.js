var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        // this.response = undefined;
        // this.fulfilled = false;
    }
    return Data;
}());
console.log(new Data('GET', 'http://google.com', 'HTTP:1.1', ''));
