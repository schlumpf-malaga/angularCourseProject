# Output
## Create a test project
In Cmder, navigate back to your course directory and create a test folder and a new angular project
```
cd ..
mkdir tests
ng new output
```
Follow the general demonstration

## General Information
[Angular - Component interaction](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

## Summary
- Output() \<var-name> = new EventEmitter\<type>()  
Fires event at parent


## Exercise:
trigger _resetSelections() in [SeatSelections](../src/app/areas/external/views/seat-selection/seat-selection.component.ts) when "Reset Selection"-button is pressed in [SeatSelector](../src/app/shared/container/seat-selector/seat-selector.component.html)

trigger _toogleSelection(selection) in [SeatSelections](../src/app/areas/external/views/seat-selection/seat-selection.component.ts) when a seat is pressed in [SeatSelector](../src/app/shared/container/seat-selector/seat-selector.component.html)
