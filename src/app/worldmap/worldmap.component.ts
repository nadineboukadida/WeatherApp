import {
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import data from '../countries.json';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import worldLow from '@amcharts/amcharts5-geodata/worldLow';

import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
})
export class WorldmapComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  map: any;

  country;
  countries;
  cities: string[];
  private root: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {
    this.countries = JSON.parse(JSON.stringify(data));
  }

  getCountryCities(country: string) {
    this.cities = this.countries[country];
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit() {
    let root = am5.Root.new('chartdiv');
    var data;
    root.setThemes([am5themes_Animated.new(root)]);
    // Chart code goes in here
    this.browserOnly(() => {
      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: 'translateX',
          panY: 'translateY',
          projection: am5map.geoMercator(),
        })
      );

      // Create main polygon series for countries
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: worldLow,
          exclude: ['AQ'],
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: '{name}',
        toggleKey: 'active',
        interactive: true,
      });

      polygonSeries.mapPolygons.template.states.create('hover', {
        fill: root.interfaceColors.get('primaryButtonHover'),
      });

      polygonSeries.mapPolygons.template.states.create('active', {
        fill: root.interfaceColors.get('primaryButtonHover'),
      });

      let previousPolygon;
      let data;

      polygonSeries.mapPolygons.template.on(
        'active',
        function (active, target) {
          if (previousPolygon && previousPolygon != target) {
            previousPolygon.set('active', false);
          }
          if (target.get('active')) {
            polygonSeries.zoomToDataItem(
              target.dataItem as am5.DataItem<am5map.IMapPolygonSeriesDataItem>
            );
          } else {
            chart.goHome();
          }
          
          data=target.dataItem.dataContext.name
          previousPolygon = target;
        }
      );
      window.addEventListener("click", ()=> {
        this.changevalue(data);

      })
    
      // Add zoom control
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
      chart.set('zoomControl', am5map.ZoomControl.new(root, {}));

      // Set clicking on "water" to zoom out
      chart.chartContainer.get('background').events.on('click', function () {
        chart.goHome();
      });

      // Make stuff animate on load
      chart.appear(1000, 100);
    });
  }
  changevalue(value) {
    this.country=value
   }
}
