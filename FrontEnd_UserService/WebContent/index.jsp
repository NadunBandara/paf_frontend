 <%@page import="com.user"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Service Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/user.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>User Service Management</h1>

 <br> User ID: 
 <input id="uid" name="uid" type="text" required
 class="form-control form-control-sm">


<form id="formuser" name="formuser">
 User Name: 
 <input id="uname" name="uname" type="text" required
 class="form-control form-control-sm">
 
 <br> User Email: 
 <input id="uemail" name="uemail" type="email" required
 class="form-control form-control-sm">
 
 <br> User Mobile: 
 <input type="tel" id="uphone" name="uphone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
  class="form-control form-control-sm">
 
 
 <br> User Password:
 <input id="upw" name="upw" type="password" 
 class="form-control form-control-sm">
 
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 
 <input type="hidden" id="hididSave" 
 name="hididSave" value="">
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="Userid">
 <%
 user userObj = new user(); 
 out.print(userObj.readuser()); 
 %>
</div>
</div> 
</div>
</div> 
</body>
</html>