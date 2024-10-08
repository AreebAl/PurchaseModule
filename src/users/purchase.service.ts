import { Injectable } from '@nestjs/common';
import { PurchaseDto } from './dto/purchase.dto';
import * as fs from 'fs';
import { LivesCoveredDto } from './dto/lives-covered.dto';

@Injectable()
export class PurchaseService {
  private purchases = [];

  create(purchaseDto: PurchaseDto): any {
    // Handle the document upload and generate file response
   // const uploadedDocuments = this.handleDocumentUpload(files);
    console.log(purchaseDto);
    const livesCoveredWithAge = purchaseDto.livesCovered.map(livesCoveredData => {
      const livesCovered = Object.assign(new LivesCoveredDto(), livesCoveredData);
      return {
        ...livesCovered,
        age: livesCovered.getCurrentAge(),
      };
    });

    // Add documents to the purchase data
    const newPurchase = {
     // id: Date.now(),
      ...purchaseDto,
      livesCovered: livesCoveredWithAge,
    //  uploadedDocuments,  // Append the uploaded documents here
    };

    // Save the purchase with documents
    this.purchases.push(newPurchase);
    return newPurchase;
  }

  // private handleDocumentUpload(files: Express.Multer.File[]): any {
  //   if (!files || files.length === 0) {
  //     return [];
  //   }

  //   return files.map(file => ({
  //     documentName: file.originalname,
  //     documentType: file.mimetype,
  //     fileSize: file.size,
  //     fileUrl: file.path, // This is set by multer
  //   }));
  // }
}
