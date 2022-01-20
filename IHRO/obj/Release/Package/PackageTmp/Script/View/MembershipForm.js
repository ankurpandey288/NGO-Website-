$(document).ready(function () {
    $("#btnSave").click(function () {
        if (ValidateRegistrationForm() == true) {
            //InsAllocateConsumableItem()
        } else {
            return false;
        }
    });
    //$('#cbkTC').click(function () {
    //    if (!$(this).is(':checked')) {
    //        $(".agreebtn").show();
    //    }
    //});
    $('#cbkTC').click(function () {
        if ($(this).is(':checked')) {
            alert("Checked");
            $("#agreebtn").show();
        } else {
            $("#agreebtn").hide();
        }
    });
});
function Submit() {
    $("#popClose").click();
    if (ValidateRegistrationForm() == true) {
        //InsAllocateConsumableItem()
    } else {
        return false;
    }
};
function ValidateRegistrationForm() {
    var return_val = true;
    if ($('#txtName').val().trim() == "" || $('#txtName').val() == null) {
        $("#txtName").addClass("big-input required-error");
        return_val = false;
    } else {
        $("#txtName").removeClass("big-input required-error");
    }
    if ($('#txtfathername').val().trim() == "" || $('#txtfathername').val() == null) {
        $("#txtfathername").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtphone').val().trim() == "" || $('#txtphone').val() == null) {
        $("#txtphone").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtdob').val().trim() == "" || $('#txtdob').val() == null) {
        $("#txtdob").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtemail').val().trim() == "" || $('#txtemail').val() == null) {
        $("#txtemail").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtadd').val().trim() == "" || $('#txtadd').val() == null) {
        $("#txtadd").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtEmpPhone').val().trim() == "" || $('#txtEmpPhone').val() == null) {
        $("#txtEmpPhone").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtstate').val().trim() == "" || $('#txtstate').val() == null) {
        $("#txtstate").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#txtem').val().trim() == "" || $('#txtem').val() == null) {
        $("#txtem").addClass("big-input required-error");
        return_val = false;
    }
    if ($('#ddlGender option:selected').val() == 0) {
        $("#ddlGender").addClass("required-error");
    } else {
        $("#ddlGender").removeClass("big-input required-error");
    }
    if ($('input[name="RadioButton"]:checked').length == 0) {
        //alert("Please Choose Any One Option");
        return_val = false;
    } else {
        $('#SpnQty').hide();
    }
    return return_val;
};