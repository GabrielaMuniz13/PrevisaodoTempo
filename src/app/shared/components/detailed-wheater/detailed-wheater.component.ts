import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-wheater',
  templateUrl: './detailed-wheater.component.html',
  styleUrls: ['./detailed-wheater.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DetailedWheaterComponent  {

  @Input() weather: Weather;

  get weatherIcon(): string {
    return 'http://openweathermap.org/img/wn/${this.weather.icon}@2x.png';
  }
}