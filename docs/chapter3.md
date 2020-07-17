# Http Services
## Create a test project
In Cmder, navigate back to your course directory and create a test folder and a new angular project
```
cd ..
mkdir tests
ng new httpServices
```
Follow the general demonstration

## General Information
[Angular - The RxJS library](https://angular.io/guide/rx-library)

[LearnRXJS](https://www.learnrxjs.io/)

[Angular - Communicating with backend services using HTTP](https://angular.io/guide/http)

## Summary
- Http Service  
A Service providing access to data online

- HttpClient  
Angular class, handling http requests to RestAPI interfaces

- Stub Service  
A Service simulationg another Service locally

- Provider  
Angular Feature which allows swapping classes


## Exercise:
Implement the [MovieService](../src/app/core/services/movie/movie.service.ts) and the [ScreeningsService](../src/app/core/services/schedule/screenings.service.ts) into the [ScheduleComponent](../src/app/areas/external/views/schedule/schedule.component.html)
