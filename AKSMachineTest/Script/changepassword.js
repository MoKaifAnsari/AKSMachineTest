
var RegId;
$(document).ready(function () {
    $("#btnChangePassword").click(function () {
        var Cpassword = $("#txtCurrentPassword").val();
        if (Cpassword == "") {
            $("#showerror").html('This Field Required');
            $("#showerror").css('color', 'red');
            return false;
        }

        var Newpassword = $("#txtNewPassword").val();
        if (Newpassword == "") {
            $("#showepseror").html('This Field Required');
            $("#showepseror").css('color', 'red');
            return false;
        }
        var Confirm = $("#txtConfirmPassword").val();
        if (Confirm == "") {
            $("#showcoform").html('This Field Required');
            $("#showcoform").css('color', 'red');
            return false;
        }
        if (Confirm != Newpassword) {
            $("#showcoform").html('password are not matchig');
            $("#showcoform").css('color', 'red');
            return false;
        }

        UpdatebtnChangePassword();
        return false;
    });
});
function UpdatebtnChangePassword() {
    try {
        $.post("/Machine/UpdatebtnChangePassword",
            {
                RegId: RegId,
                CurrentPassword: $("#txtCurrentPassword").val(),
                NewPassword: $("#txtNewPassword").val(),
            },
            function (data) {
                if (data.Message != "") {
                    alert(data.Message);
                   
                }
                if (data.Status == "1") {
                 /*   window.location.href = "/Machine/index";*/
                    ClearForm();
                }
                if (data.Focus != "") {
                    
                }

            });
    }
    catch (e) {
        alert("error in InsertUpdateAddSubCategory :" + e.message);
    }
}
function ClearForm() {
    RegId = 0;
    $("#txtCurrentPassword").val("");
    $("#txtNewPassword").val("");
    $("#txtConfirmPassword").val("");
}
