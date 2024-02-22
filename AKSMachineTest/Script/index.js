$(document).ready(function () {
    $("#btnsave").click(function () {
        AdminLogin();
    });
});

function AdminLogin() {
    try {
        $.post("/Machine/InsertLoginPage", {
            EmailId: $("#txtEmailId").val(),
            Password: $("#txtPassword").val(),
        },
            function (data) {
                if (data.Status == "1") {
                    alert(data.Message);
                    window.location.href = "/Machine/admin";
                }
                else {
                    alert(data.Message);

                }
                if (data.Focus != "") {
                    $("#" + data.Focus).focus();
                }
            });
    } catch {
        alert("Error in Controller : " + e.message)
    }
}