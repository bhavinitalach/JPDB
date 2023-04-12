/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var prjDBName = "COLLEGE-DB";
var prjRelationName = "PROJECT-TABLE";
var connToken = "90932844|-31949281866783285|90948317";
$("#prjId").focus();

function saveRecNo2LS(jsonObj){
  var lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno",lvData.rec_no);
}

function getPrjIdAsJsonObj(){
var prjId = $("#prjId").val();
var jsonStr = {
  id : prjId
};
return JSON.stringify(jsonStr);
}

function validateData() {
var prjId = $("#prjId").val();
if (prjId === "") {
alert("Project ID Required Value");
$("#prjId").focus();
return "";
}
var prjName = $("#prjName").val();
if (prjName === "") {
alert("Project Name is Required Value");
$("#prjName").focus();
return "";
}
var prjasgn = $("#prjasgn").val();
if (prjasgn === "") {
alert("Assigned To is Required Value");
$("#prjasgn").focus();
return "";
}

var prjDate = $("#prjDate").val();
if (prjDate === "") {
alert("Assignment Date Required Value");
$("#prjDate").focus();
return "";
}

var prjDed = $("#prjDed").val();
if (prjDed === "") {
alert("Deadline is Required Value");
$("#prjDed").focus();
return "";
}

var jsonStrObj = {
id: prjId,
Project_name: prjName,
assigned_to: prjasgn,
assignment_Date: prjDate,
deadline: prjDed
};
return JSON.stringify(jsonStrObj);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;

    $("#prjName").val(record.Project_name);
    $("#prjasgn").val(record.assigned_to);
    $("#prjDate").val(record.assignment_Date);
    $("#prjDed").val(record.deadline);
}


function resetData() {
$("#prjId").val("");
$("#prjName").val("");
$("#prjasgn").val("");
$("#prjDate").val("");
$("#prjDed").val("");
$("#prjId").prop("disabled",false);
$("#save").prop("disabled",true);
$("#change").prop("disabled",true);
$("#reset").prop("disabled",true);
$("#prjId").focus();
}

function getPrj(){
   var prjIDJsonObj= getPrjIdAsJsonObj();
   var getRequest = createGET_BY_KEYRequest(connToken,prjDBName,prjRelationName,prjIDJsonObj);
jQuery.ajaxSetup({async: false}); 
var resJsonObj = executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL );
jQuery.ajaxSetup({async: true});

if(resJsonObj.status ===400){
  $("#save").prop("disabled",false);  
  $("#reset").prop("disabled",false);
  $("#prjName").focus();
}

else if(resJsonObj.status ===200){
  $("#prjID").prop("disabled",true);  
  fillData(resJsonObj);
  
      $("#change").prop("disabled",false);
      $("#reset").prop("disabled",false);
  $("#prjName").focus();
}
}  

function saveData() {
var jsonStrObj = validateData();
if (jsonStrObj === "") {
return "";
}
var putReqStr = createPUTRequest(connToken,jsonStrObj, prjDBName, prjRelationName);
jQuery.ajaxSetup({async: false});
alert(putReqStr);
var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr,jpdbBaseURL,jpdbIML);
alert(JSON.stringify(resJsonObj));
jQuery.ajaxSetup({async: true});
resetData();
$("#prjId").focus();
}

function changeData(){
    $("#change").prop("disabled",true);

    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken,jsonChg,prjDBName, prjRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
jQuery.ajaxSetup({async: true});
console.log(resJsonObj);
alert("Data has been updated");
resetData();
$("#prjId").focus();
}
