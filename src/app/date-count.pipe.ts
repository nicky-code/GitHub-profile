import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDifferenceSeconds / secondsInDay;
    // console.log(dateCounter)
    if (dateCounter >= 1 ) {
      return Math.round(dateCounter);
    } else {
      return 0;
    }
  }
}
