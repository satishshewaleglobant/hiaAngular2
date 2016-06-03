import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/home/home.html?v=<%= VERSION %>',
    directives: [RouterLink]
})
export class Home {

  addName() {
    console.log("I'm here dude......" + jQuery("#first").text());

    var panZoomInstance : any = svgPanZoom('#SvgjsSvg1000', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.1
      });

      // zoom out
      panZoomInstance.zoom(1)
  }

}
