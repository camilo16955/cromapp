import { Component } from '@angular/core';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-camera-test',
  templateUrl: './camera-test.page.html',
  styleUrls: ['./camera-test.page.scss'],
})
export class CameraTestPage {
  image: string | null | undefined = null;

  constructor(private cameraService: CameraService) { }

  async takePicture() {
    try {
      this.image = await this.cameraService.takePicture();
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }
}
