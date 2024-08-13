import { Injectable } from '@nestjs/common';
import { ParentDto } from './dto/parent.dto';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: ParentDto, files: Express.Multer.File[]): any {
    // Handle the document upload and generate file response
    const documents = this.handleDocumentUpload(files);
      console.log(createUserDto);
    // Add documents to the user's data
    const newUser = {
      id: Date.now(),
      ...createUserDto,
      uploadDocuments: documents,  // Append the uploaded documents here
    };

    // Save the user with documents
    this.users.push(newUser);
    return newUser;
  }

  private handleDocumentUpload(files: Express.Multer.File[]): any {

    if (!files || files.length === 0) {
      return [];
    }
  
    return files.map(file => ({
      documentName: file.originalname,
      documentType: file.mimetype,
      fileSize: file.size,
      fileUrl: file.path, // This is set by multer
    }));
  }
}
