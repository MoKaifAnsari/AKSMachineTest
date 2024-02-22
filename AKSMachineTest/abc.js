//==========Add Discription=========//
$('#add').on('click', '.BtnAddDes', function () {
    addItem();
})
$(document).on('click', '.delete-btn', function () {
    $(this).parent('.form-raw').parent('.Description').parent('.item').remove();
});
//==========Add Discription=========//
//======Add Discription Event===//
function addItem() {
    var html = '';
    html += '<div class="item">';
    html += '<div class="row Description" id="AddDes">';
    html += '<div class="form-raw">';
    html += '<div class="form-name"> &nbsp;</div>';
    html += '<div class="form-txtfld">';
    html += '<input type="text" placeholder="Title" id="txtTitle" class="Title">';
    html += '</div>';
    html += '</div>';
    html += '<div class="form-raw">';
    html += '<div class="form-name">&nbsp;</div>';
    html += ' <div class="form-txtfld txtfld50"><input type="text" class="Heading" id="txtheading" placeholder="heading"></div>';
    html += '<div class="form-txtfld txtfld50"><input type="text" class="Description"  id="txtdesciption" placeholder="desciption"></div>';
    html += '<span class="delete-btn"><img src="../images/delete.gif" ></span>';
    html += '</div>';
    html += '<div class="form-raw">';
    html += '<div class="form-name">&nbsp;</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('#add').append(html);

}
//======Add Discription Event===//
//==========Add Upload=========//
$('#addUp').on('click', '.BtnAddUpl', function () {
    addUpload();
})
$(document).on('click', '.deelete-Upl', function () {
    $(this).parent('.form-txtfld').parent('.form-raw').parent('.addUpload').parent('.itemUpload').remove();
});
//==========Add Upload=========//
//======Add Uploade Event===//
function addUpload() {
    for (var i = eval($("#hfPDFTotalRowNo").val()) + 1; i <= eval($("#hfPDFTotalRowNo").val()) + 1; i++) {
        var html = '';
        html += '<div class="itemUpload">';
        html += '<div class="row addUpload" id="AddUp">';
        html += '<div class="form-raw">';
        html += '<div class="form-name"> &nbsp;</div>';
        html += '<div class="form-txtfld">';
        html += '<div class="form-txtfld txtfld50"><input type="text" class="PDFH" id="PDFheading" value="" placeholder="PDF heading"></div>';
        html += '<div class="form-txtfld txtfld50"><input type="file" class="PDFf" value="" id="pdfDescription" accept=".pdf" placeholder="desciption"></div>';
        html += '<button class="deelete-Upl"><img src="../images/delete.gif" alt=""></button>';
        html += '</div>';
        html += '<div class="form-raw">';
        html += '<div class="form-name">&nbsp;</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    $('#addUp').append(html);
    $("#hfPDFTotalRowNo").val(eval($("#hfPDFTotalRowNo").val()) + 1)
}
//===============//
<div class="wrap">
    <div class="row Description" id="wrapper">
        <div class="form-raw">
            <div class="form-name"> &nbsp;</div>
            <div class="form-txtfld">
                <input type="text" value="" id="1id1" hidden />
                <input type="text" placeholder="Title" id="txttitle1" placeholder="Title">
                    </div>
            </div>
            <div class="form-raw">
                <div class="form-name">&nbsp;</div>
                <div class="form-txtfld txtfld50"><input type="text" placeholder="heading" id="txtHeading1" class="Heading"></div>
                    <div class="form-txtfld txtfld50"><input type="text" placeholder="desciption" id="txtDescription1" class="Description"></div>
                        <button class="delete-btn" onclick="removeRow(this)"><img src="../images/delete.gif" alt=""></button>
                </div>
                        <span id="tblDescription"></span>
                        <div class="form-raw">
                            <div class="form-name">&nbsp;</div>
                            <div class="form-txtfld" style="width: 320px; text-align: right;"><button class="BtnAddDes" id="add" onclick="addMore()">Add More +</button></div>
                        </div>
                    </div>
                </div>