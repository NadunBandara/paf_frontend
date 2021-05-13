$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertSuccess").hide();
});
// submit--------------------------------------------------
$(document).on("click", "#btnSave", function(event) {
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// validation on form-------------------
	var status = validateProductForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	//valid = Success------------------------
	var type = ($("#hidpIdSave").val() == "") ? "POST" : "PUT"; 
	$.ajax({
		url : "userAPI",
		type : type,
		data : $("#formuser").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onOrdSaveComplete(response.responseText, status);
		}
	});
});
function onuserSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
    if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divProductGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}	
	$("#hidOrdIDSave").val("");
	$("#formOrd")[0].reset();
}
// UPDATE----------------------------------------------------
$(document).on(	"click",".btnUpdate",function(event) {
	$("#hididSave").val($(this).data("pId")); 
	 $("#uid").val($(this).closest("tr").find('td:eq(0)').text()); 
	 $("#uname").val($(this).closest("tr").find('td:eq(1)').text()); 
	 $("#uemail").val($(this).closest("tr").find('td:eq(2)').text()); 
	 $("#uphone").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#upw").val($(this).closest("tr").find('td:eq(4)').text()); 
		});
	// REMOVE-------------------------------------------------------
$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "userAPI", 
		 type : "DELETE", 
		 data : "pId=" + $(this).data("pId"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onProductDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
function onOrduserComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divOrdGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}