const express = require("express");

//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors");

//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require("multer");

const port = 4000;
const app = express();


//localhost front-end
var corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("Welcome to Express App test");
});


//storage to uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "pictures");
	},

	//providing date and original name extension tp file
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}_${file.originalname}`);
	},
});


const upload = multer({ storage });


//file it going to upload a single file and  single file return to json
app.post("/file", upload.single("file"), (req, res) => {

	const file = req.file;

	if (file) {
		res.json(file);
	} else {
		throw new Error("File upload unsuccessful");
	}
});


app.listen(port, () => {
	console.log("Express App is running on localhost :" + port);
});


//HTTP Method แต่ละตัวมีหน้าที่ที่ชัดเจนเพื่อตอบแนวคิดการให้บริการ Resource ต่าง ๆ ให้กับ Client โดย วัตถุประสงค์ของและ Method คือ

// GET — ใช้เพื่อรับข้อมูลสถานะของ Resource นั้น ๆ
// HEAD — ใช้เพื่อรับ Metadata ซึ่งเกี่ยวข้องกับ Resource นั้น ๆ
// PUT — อาจจะใช้สำหรับการสร้าง Resource เข้าไปใน Resource ประเภท Store หรือ ปรับปรุงข้อมูลของ Resource
// DELETE — ใช้ลบ Resource ออกจากแม่ของมัน
// POST — ใช้สร้าง Resource ใหม่เข้าไปใน Resource ประเภท Collection และใช้การสั่งให้ตัวควบคุม Resource ทำงานอื่น ๆ ที่ไม่ใช้ CRUD (Create — Read — Update — Delete)

