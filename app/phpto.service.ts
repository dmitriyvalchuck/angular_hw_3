import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { PHOTOS } from './mock-photos';
@Injectable()
export class PhotoService {
	getPhotos(): Promise<Photo[]> {
		return Promise.resolve(PHOTOS);
	}
}