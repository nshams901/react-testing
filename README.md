# react-testing

# Types of Testing 
by Tester-
1. Manual testing
1. Automation testing

by Developer-
1. Unit testing
1. Integrated testing
1. End-to-end testing

- React testing framework [Jest](https://jestjs.io/docs/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Commdand to run the test case `npm run test`

# Options to run test case.
- run only InputBoxTest.test.js: `npm run test InputBoxTest.test.js`
- watch mode - press 'w' : it only runs latest changed file.
- press 'f' : to run failed test case.
- press 'q': to quit watch mode.
- press 'p': to filter by file name using regex.
- press 't': to run specific test by the name.

# Test grouping by `describe`
- syntax:
```
    describe('test group name', () => {
        test('test case 1', () => {
            <!-- test case -->
        });
        test('test case 2', () => {
            <!-- test case -->
        })
    })
```

- To run specific group: describe.only
    describe.only('test group name' () => {
        <!-- test cases -->
    });