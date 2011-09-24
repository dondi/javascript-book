$(document).ready(function () {

    module("Primes");

    test("Known primes", function () {
        ok(isPrime(2), "2 is prime");
        ok(isPrime(3), "3 is prime");
        ok(isPrime(5), "5 is prime");
        ok(isPrime(7), "7 is prime");
        ok(isPrime(11), "11 is prime");
        ok(isPrime(3571), "3571 is prime");
        ok(isPrime(433494437), "4334944371 is prime");
    });

    test("Known composites", function () {
        ok(!isPrime(2345346438), "A big even number is composite");
        ok(!isPrime(3553), "3553 is composite");
        ok(!isPrime(9901 * 9901), "9901^2 is composite");
    });

    test("Checking the cache", function () {
        ok(isPrime.cache[2345346438] === false, "2345346438 got cached");
        ok(isPrime.cache[3553] === false, "3553 got cached");
        ok(isPrime.cache[11] === true, "11 got cached");
        ok(isPrime.cache[13] === undefined, "13 wasn't cached");
    });
});
