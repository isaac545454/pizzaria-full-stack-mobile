

declare namespace Express {
  export interface Request{
    user_id: string;
    file: {
      fieldname: string;
      originalname:string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  }
}
//types para img multer com typescript


