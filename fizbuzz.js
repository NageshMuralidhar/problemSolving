var fizbuz = () => {
    for (let i = 0; i < 100; i++) {
        if (i == 0) {
            console.log(i);
        }
        else {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log('FizzBIzz\n')
                continue;
            }
            else if (i % 3 == 0) {
                console.log('Fizz\n');
            }
            else if (i % 5 == 0) {
                console.log('Buzz\n')
            }
            else {

                console.log(i)
            }
        }
    }
}
fizbuz()