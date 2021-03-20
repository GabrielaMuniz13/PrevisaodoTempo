import { ChangeDetectionStrategy, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection:  ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent  {

  @Input() cityWeather: CityWeather;
  @Output() toggleBookMark = new EventEmitter();

  get cityName(): string{
    return '${this.cityWeather.city.name} ${this.cityWeather.city.country}';
  }

  onToggleBookmark(){
    this.toggleBookMark.emit();
  }
}
