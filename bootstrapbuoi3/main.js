$(document).ready(() => {
    let dssv = [];
    let HienthiDSSV = () => {
        $("#tbody").html("");
        let data = "";
        dssv.forEach(sv => data += `<tr>
                                    <td>${sv.hoten}</td>
                                     <td>${sv.dtb}</td>
                                     </tr>`);
        $("#tbody").html(data);
    }
    HienthiDSSV();


    $("#btn").click(e => {
        e.preventDefault();
        let sv = {
            dtb: $("#DTB").val(),
            hoten: $("#ho_ten").val()
        };
        if (sv.hoten == Number(sv.hoten)) {
            alert("Vui lòng không nhập số vào tên");
            document.getElementById(ho_ten).focus();

        }
        if (sv.hoten == "" || sv.dtb == "") {
            alert("Vui lòng nhập đầy đủ thông tin ");
            return;
        }
        if (dssv.some(item => item.hoten == sv.hoten)) {
            alert("Tên sinh viên đã tồn tại ");
            document.getElementById(ho_ten).focus();
            return;
        }
    sv.dtb = Number(sv.dtb);
    if (isNaN(sv.dtb)){
        alert("Vui long nhập vào điểm là số ");
        return;
    }

    dssv.push(sv);    
    HienthiDSSV();
    $("#ho_ten").val(""),
    $("#DTB").val("")
   
    });
});