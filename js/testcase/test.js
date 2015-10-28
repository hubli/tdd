
describe("A suite of basic functions", function() {
    var name;
        
    // 自定义匹配器
    this.addMatchers(
        toBeCapitalize: function(expected) {
            return /^[A-Z]/.test(this.actual);
        }
    );

    it("sayHello", function() {
        name = "Conan";
        var exp = "Hello Conan";
        expect(exp).toEqual(sayHello(name));
    });

    it("reverse word", function() {
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("Conan").toEqual(reverse("nanoC"));
    });

    it("custom matcher cpitalize", function() {
        expect("Aba").toBeCapitalize();
    });

    describe("Expectations", function(){
        it("Expectations",function(){
            expect("AAA").toEqual("AAA");
            expect(52.78).toMatch(/\d*.\d\d/);
            expect(null).toBeNull();
            expect("ABCD").toContain("B");
            expect(52,78).toBeLessThan(99);
            expect(52.78).toBeGreaterThan(18);

            var x = true;
            var y;
            expect(x).toBe(true);
            expect(x).toBeDefined();
            expect(y).toBeUndefined();
            expect(x).toBeTruthy();
            expect(!x).toBeFalsy();

            var fun = function() { return a + 1;};
            expect(fun).toThrow();
        });
    });
});

describe("Setup and Teardown",function(){
    var foo;
    beforeEach(function() {
        foo = 0;
        foo += 1;
        
    });
    afterEach(function() {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function() {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function() {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

xdescribe("Disabling Specs and Suites", function() {
    it("Disabling Specs and Suites",function(){
        expect("AAA").toEqual("AAA");
    });
});

xdescribe("Asynchronous Support",function(){
    var value, flag;
    it("Asynchronous Support", function() {
        runs(function() {
            flag = false;
            value = 0;
            setTimeout(function() {
                flag = true;
            }, 500);
        });
        waitsFor(function() {
            value++;
            return flag;
        }, "The Value should be incremented", 750);

        runs(function() {
            expect(value).toBeGreaterThan(0);
        });
    });
});



