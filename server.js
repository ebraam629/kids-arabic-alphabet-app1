// 1. استدعاء المكتبات المطلوبة
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const letterRoutes = require('./routes/letterArRoute'); // الراوت الجديد

// 2. إنشاء تطبيق Express
const app = express();

// 3. تفعيل cors علشان نسمح بالتواصل مع الفرونت
app.use(cors());

// 4. تفعيل قراءة JSON من الـ body
app.use(express.json());

// 5. الاتصال بقاعدة بيانات MongoDB
mongoose.connect('mongodb+srv://admin:Beroemiel1%40cluster0.x7ymww0.mongodb.net/arabic_kids_app?retryWrites=true&w=majority')
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


// 6. تقديم ملفات الصور والأصوات من فولدر public
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/audio', express.static(__dirname + '/public/audio'));
app.use('/sounds', express.static(__dirname + '/public/audio')); // alias إضافي

// 7. استخدام الراوت الخاص بالحروف العربية
app.use('/api/letters', letterRoutes);

// 8. تشغيل السيرفر
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

