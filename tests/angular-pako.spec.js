describe( 'angular-pako.spec.js', function() {

    var pako = null;

    beforeEach( module('ngPako') );

    beforeEach(inject(function($injector) {
        pako = $injector.get('pako');
    }));

    it('should be able to load the pako angular service from the injector', function() {
        expect(pako).toBeTruthy();
    });

    it('should be able to deflate a string', function() {
        var test = 'Compress me.';
        var result = pako.deflate(test, {to: 'string'});
        expect(result).toEqual("xsÎÏ-(J-.VÈMÕ\u0003\u0000\u001e*\u0004m");
    });

    it('should be able to inflate a string', function() {
        var test = 'Compress me.';
        var result = pako.deflate(test,{to: 'string'});

        var inflated = pako.inflate(result,{to: 'string'});

        expect(inflated).toEqual(test);
    });
});
