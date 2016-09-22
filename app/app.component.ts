import { Component } from '@angular/core';
import { Photo } from './photo';
import { PhotoService } from './phpto.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/photosList.html',
	providers: [PhotoService]
})
export class AppComponent {

	photos : Photo[];

	constructor(private photoService: PhotoService) { }

	getPhotos(): void {
		this.photoService.getPhotos().then(photos => this.photos = photos);
	}
	ngOnInit(): void {
		this.getPhotos();
	}

}
