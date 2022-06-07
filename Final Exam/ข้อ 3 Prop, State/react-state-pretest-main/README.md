# State Test

## Install and Run

### npm

setup

```bash
> npm install
```

### yarn

```bash
> yarn
```

run

### npm

```bash
> npm run start
```

### yarn

```bash
> yarn start
```

## แบบทดสอบ

1. ให้แสดง component `Input` ก่อน `Success`

2. จากไฟล์ `src/components/input.js` สร้าง props ที่ component input เพื่อเพิ่มค่าให้กับ state `emails` เมื่อกดปุ่ม Save

3. เมื่อทำการ set ค่า email เรียบร้อย ให้เปลี่ยนค่า state `isSuccess` เป็น true และนำค่าจาก state `emails` ไปแสดงใน component ชื่อ `Success` ด้วย

4. เมื่อ click ปุ่ม `GO BACK` ทำการเปลี่ยนค่า state `emails` เป็น `[]` หรือ array เปล่า และ state `isSuccess` เป็น `false` เพื่อแสดงผล component  `Input` อีกครั้ง

## พิเศษ

* สามารถลบข้อมูลใน email ได้ใน component `Success`
