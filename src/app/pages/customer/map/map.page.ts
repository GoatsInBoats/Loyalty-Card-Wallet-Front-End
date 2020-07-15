import {Component, ElementRef, ViewChild} from '@angular/core';
import {Config} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {CompanyService} from '../../../providers/company.service';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage {

    map: any;

    @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

    infoWindows: any = [];
    markers: any = [];


    constructor(
        public config: Config,
        public companyService: CompanyService,
        private http: HttpClient
    ) {
    }


    ionViewDidEnter() {
        this.getCompanies();
    }

    addMarkersToMap() {
        for (let marker of this.markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.companyName,
                latitude: marker.latitude,
                longitude: marker.longitude,
                city: marker.city,
                street: marker.street,
                localNumber: marker.localNumber
            });
            mapMarker.setMap(this.map);
            this.addInfoWindowToMarker(mapMarker);
        }
    }

    addInfoWindowToMarker(marker) {
        var infoWindowContent = '<div id= "content"' +
            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
            '<h6> Address: ' + marker.city + ' ' + marker.street + ' ' + marker.localNumber + '</h6>' +
            '<h20> Latitude: ' + marker.latitude + ' Longitude: ' + marker.longitude + '</h20>' +
            '</div>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }

    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }

    showMap() {
        const location = new google.maps.LatLng(50.048428, 19.961411);
        const options = {
            center: location,
            zoom: 11,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarkersToMap();
    }

    getCompanies() {
        this.companyService.getCompanies().subscribe(
            response => {
                this.markers = response;
                this.showMap();
            });

    }

}
