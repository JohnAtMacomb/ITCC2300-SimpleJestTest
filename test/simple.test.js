// Import the code that we want to test
import { add } from '../src/js/math'
// Here is where all of the tests will be written.
describe('*** This is my simple tests ****',()=>{

    // Test the 'add' function...
    test('This verifies the add function',()=>{

        // Test success...
        const four = add(2,2)
        expect(four).toEqual(4);
        // or this - either one will work.
        expect(four).toBe(4);

        // Test failure...
        const six = add(3,3)
        expect(six).not.toEqual(4);
    })
})