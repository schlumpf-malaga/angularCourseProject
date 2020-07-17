# Pipes
## Create a test project
In Cmder, navigate back to your course directory and create a test folder and a new angular project
```
cd ..
mkdir tests
ng new pipes
```
Follow the general demonstration

## General Information
[Angular -  Transforming Data Using Pipes ](https://angular.io/guide/pipes)

## Summary
- Pipe  
A a custom Template Expression  
Example: {{value | myPipe}}


## Exercise:
Create a new module: `ng g m shared/pipes/reservations-to-string`

Create a pipe: `ng g p shared/pipes/reservations-to-string`

Make the transform function in [ReservationsToStringPipe](../src/app/shared/pipes/reservations-to-string.pipe.ts) work  
`transform(value: Reservation[]): string`

Example input:
```
[
  {
    screeningId: '1',
    rowId: 2,
    seatId: 4
  },
  {
    screeningId: '1',
    rowId: 2,
    seatId: 5
  },
  {
    screeningId: '1',
    rowId: 5,
    seatId: 8
  },
  {
    screeningId: '1',
    rowId: 2,
    seatId: 9
  },
,]
```

Example ouput:
```
B4, B5, E8, E9
```

Apply the pipe in [SelectionsComponnet](../src/app/shared/components/selections-summary/selections-summary.component.html)
