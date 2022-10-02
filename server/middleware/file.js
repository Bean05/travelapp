const multer = require('multer');
// const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // cb(null, path.join(__dirname, 'public', 'images'));
    cb(null, 'public/');
  },
  filename(req, file, cb) {
    const unicName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    // cb(null, `${new Date().toISOString()}-${file.originalname}`);
    cb(null, `${file.fieldname}-${unicName}-${file.originalname.slice(file.originalname.lastIndexOf('.'))}`);
  },
});

// const types = ['image/png', 'image/jpeg', 'image/jpg'];

// const fileFilter = (req, file, cb) => {
//   if (types.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({ storage });

// module.exports = multer({ storage, fileFilter });
module.exports = upload;
