const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

dotenv.config();

const authRouter = require('./Router/authRouter');
const userRouter = require('./Router/userRouter');
const uploadRouter = require('./Router/uploadRouter');
const systemRouter = require('./Router/systemRouter');
const staffRouter = require('./Router/staffRouter');
const topicRouter = require('./Router/topicRouter');
const serviceRouter = require('./Router/serviceRouter');
const blogRouter = require('./Router/blogRouter');
const customerRouter = require('./Router/customerRouter');
const homecontentRouter = require('./Router/homecontentRouter');
const contactRouter = require('./Router/contactRouter');
const bannerImageRouter = require('./Router/bannerImageRouter');
const contactfromCustomerRouter = require('./Router/contactfromCustomerRouter');
const homecontentimageRouter = require('./Router/homecontentimageRouter');



const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
console.log(PORT, 'PORT');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/uploads', uploadRouter);
app.use('/api/v1/system', systemRouter);
app.use('/api/v1/staff', staffRouter);
app.use('/api/v1/topic', topicRouter);
app.use('/api/v1/service', serviceRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/customer', customerRouter);
app.use('/api/v1/homecontentRouter', homecontentRouter);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/bannerImage', bannerImageRouter);
app.use('/api/v1/contactfromCustomer', contactfromCustomerRouter);
app.use('/api/v1/homecontentimage', homecontentimageRouter);




app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error(`Error starting the server: ${err.message}`);
});
