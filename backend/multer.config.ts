import multer from "multer";

export const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'public')
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, `public-${Date.now()}-${file.originalname}`);
  }
})
export const upload = multer({storage: storage});