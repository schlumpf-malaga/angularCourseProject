# Input()
## Create a test project
In Cmder, navigate back to your course directory and create a test folder and a new angular project
```
cd ..
mkdir tests
ng new input
```
Follow the general demonstration

```
npm install
```

Follow the creation of the movie-card component

## General Information
[Angular Component](https://angular.io/api/core/Component)

## Summary
- changeDetection  
defines ChangeDetectionStrategy

- ChangeDetectionStrategy.OnPush  
only checks for changes when input reference changed, event fired in component or its child, or was manually triggered


## Exercise:
Create a movie-card component which takes a `movie` as input and uses ng-content, and use it in  [ScheduleComponent](../src/app/areas/external/views/schedule/schedule.component.html)
Create a movie-summary-line component which takes a `movie` as input and use it in  [ScheduleComponent](../src/app/areas/external/views/schedule/schedule.component.html)
