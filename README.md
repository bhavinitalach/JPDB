# Project Management Form using JsonPowerDB


### About Project:
1. The form stores data in the [JsonPowerDB](http://api.login2explore.com:5577/user/index.html) .
2. There are three control buttons [**Save**], [**Update**] and [**Reset**] at the bottom of the form. On page load or any control button click, an empty form will be displayed and the cursor will remain at the first input field in the form which will have the primary key in the relation. All other fields and buttons will be disabled at this time.
3. User will enter data in the field having primary key and
    - If the primary key value does NOT exist in the database, [Save] and [Reset] buttons will get enabled and the cursor moves to the next field and allow the user to enter data in the form.
        + Check that the data should be valid i.e. no empty fields.
        + Complete the data entry form and click the [Save] button to store the data in the database and go to step-2.
     - If the primary key value is present in the database, display that data in the form. Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. Keep the primary key field disabled and allow users to change other form fields.
         + Check that the data should be valid i.e. no empty fields.
         + Click on [Update] button to update the data in the database and go to step-2.
         + Click [Reset] to reset the form as per the step-2.
### About JsonPowerDB:
- JsonPowerDB is a **Database Server** with Developer friendly REST API services. It's a High Performance, Light Weight, Ajax Enabled, Serverless, Simple to Use, Real-time Database.
- Easy and fast to develop database applications **without using** any server side programming / scripting or without installing any kind of database.
- Whether it's a Dynamic Website or a Mobile App or some Data Analytics Portal, **the development is real fun and fast**. What all you need is a basic understanding of HTML, CSS, Bootstrap, and Javascript.
- **Note:** Using JsonPowerDB is equally Easy and Fast when used with Server Side programming like Java, .NET, Python or PHP etc.
### Benefits of using JsonPowerDB
- Simplest way to retrieve data in a JSON format.
- Schema-free, Simple to use, Nimble and In-Memory database.
- It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX.
- It is low level (raw) form of data and is also human readable.
- It helps developers in faster coding, in-turn reduces development cost.
### Illustrations
  1. **JPDB Dashboard**

![Dashboard](https://github.com/bhavinitalach/JPDB/blob/main/Images/dashboard.png)

2.**Database Records**

![Records](https://github.com/bhavinitalach/JPDB/blob/main/Images/records.png)

3. **Project Management Form**

![Form](https://github.com/bhavinitalach/JPDB/blob/main/Images/Form.png)

### Form functionalities:
1. Saving data in JPDB.
2. Updating the records already existing in database.
3. Resetting the form fields.

### Languages Used:
 - HTML
 - CSS
 - JavaScript
 - jQuery
 
 ### Database Used: 
 - JsonPowerDB

### Examples of use:

- **Save Data**

![Save](https://github.com/bhavinitalach/JPDB/blob/main/Images/Save.png)

- **Update Data**

![Update](https://github.com/bhavinitalach/JPDB/blob/main/Images/Update.png)

### Project status: Completed

### Sources: 
- [Documentation Link](https://login2explore.com/jpdb/docs.html)
- [YouTube](https://www.youtube.com/@jsonpowerdb9811)


