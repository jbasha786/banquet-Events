import { Component } from '@angular/core';
import { eventModel } from '../_models/events.model';
import { DefaultService } from '../services/default.service';
import { EventsCardComponent } from '../shared/components/events-card/events-card.component';
import { CustomCalenderComponent } from '../shared/components/custom-calender/custom-calender.component';
import { NgxImageCompressService } from 'ngx-image-compress';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventsCardComponent, CustomCalenderComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: eventModel[] = [];

  constructor(private defaultService: DefaultService, private imageCompress: NgxImageCompressService) { }
  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    // this.defaultService.getJSON().subscribe((result: any) => {
    //   this.events = result ?.events_arr;
    // })
    this.defaultService.getJSON().subscribe(async (result: any) => {
      if (result?.events_arr) {
        // Compress each image before assigning to `events`
        this.events = await Promise.all(
          result.events_arr.map(async (event: eventModel) => {
            event.src = await this.compressImage(event.src);
            return event;
          })
        );
      }
    });
  }

  // async compressImage(imagePath: string): Promise<string> {
  //   try {
  //     // Fetch the image and convert it to Base64
  //     const response = await fetch(imagePath);
  //     const blob = await response.blob();
  //     const reader = new FileReader();
      
  //     return new Promise((resolve) => {
  //       reader.onloadend = async () => {
  //         const base64Image = reader.result as string;

  //         // Compress the image (50% quality, 50% size)
  //         const compressedImage = await this.imageCompress.compressFile(base64Image, -1, 80, 50);
  //         resolve(compressedImage);
  //       };
  //       reader.readAsDataURL(blob);
  //     });
  //   } catch (error) {
  //     console.error('Error compressing image:', error);
  //     return imagePath; // Return original image if compression fails
  //   }
  // }


  async compressImage(imagePath: string): Promise<string> {
    try {
      // Fetch the image and convert it to a Blob
      const response = await fetch(imagePath);
      const blob = await response.blob();
      
      // Convert Blob to WebP base64 (Higher Quality)
      const webpBase64 = await this.convertToWebP(blob, 0.9); // 90% quality
  
      // Compress the WebP image (85% quality, 50% resize)
      const compressedImage = await this.imageCompress.compressFile(webpBase64, -1, 100, 50);
  
      return compressedImage;
    } catch (error) {
      console.error('Error compressing image:', error);
      return imagePath; // Return original image if compression fails
    }
  }
  
  async convertToWebP(blob: Blob, quality: number = 0.9): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();
      
      reader.onload = () => {
        img.src = reader.result as string;
      };
      reader.readAsDataURL(blob);
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Set max width & height (Adjust if needed)
        const maxWidth = 1200;
        const maxHeight = 800;
  
        let width = img.width;
        let height = img.height;
  
        // Scale while maintaining aspect ratio
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (maxHeight / height) * width;
          height = maxHeight;
        }
  
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);
  
        // Convert and export as WebP
        canvas.toBlob((webpBlob) => {
          if (webpBlob) {
            const webpReader = new FileReader();
            webpReader.onloadend = () => resolve(webpReader.result as string);
            webpReader.readAsDataURL(webpBlob);
          } else {
            resolve(reader.result as string); // Fallback to original format
          }
        }, 'image/webp', quality); // High quality (0.9)
      };
    });
  }
  
  
}
