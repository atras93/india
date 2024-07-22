$(document).ready(function () {
    GetUruns();
});
/*Read Data*/
function GetUruns() {
    $.ajax({
        url: '/urun/GetUruns',
        type: 'get',
        datatype: 'json',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            if (response == null || response == undefined || response.length == 0) {
                var object = '';
                object += '<tr>';
                object += 'td colspan="5">' + 'Products not available' + '</td>';
                object += '</tr>';
                $('#tblBody').html(object);
            }
            else {
                var object = '';
                $.each(response, function (index, item) {
                    object += '<tr>';
                    object += '<td>' + item.id + '</td>';
                    object += '<td>' + item.urunAdi + '</td>';
                    object += '<td>' + item.urunFiyat + '</td>';
                    object += '<td>' + item.urunStok + '</td>';
                    object += '<td> <a href="#" class="btn btn-primary btn-sm" onclick="Edit(' + item.id + ')">Edit</a> <a href="#" class="btn btn-danger btn-sm" onclick="Delete(' + item.id + ')">Delete</a></td>'
                });
                $('#tblBody').html(object);
            }
        },
        error: function () {
            alert()
        }
    });
}
$('#btnAdd').click(function () {
    $('#UrunModal').modal('show');
    $('#modalTitle').text('Ürün Ekle')

});
function Insert() {
    var result = Validate();
    if (result == false) {
        return false;
    }
    var formData = new Object();
    formData.id = $('#Id').val();
    formData.urunAdi = $('#UrunAdi').val();
    formData.urunFiyat = $('#UrunFiyat').val();
    formData.urunStok = $('#UrunStok').val();

    $.ajax({
        url: '/urun/Insert',
        data: formData,
        type: 'post',
        
        success: function (response) {
            if (response == null || response == undefined || response.length == 0) {
                alert('Unable to save the data');
            }
            else {
                HideModal();
                GetUruns();
                alert(response);
            }
        },
        error: function () {
            alert('Unable to save the data.');
        }

    })
}

function HideModal() {
    ClearData();
    $('#UrunModal').modal('hide');
}

function ClearData() {
    $('#UrunAdi').val('');
    $('#UrunFiyat').val('');
    $('#UrunStok').val('');

    $('#UrunAdi').css('border-color', 'lightgrey');
    $('#UrunFiyat').css('border-color', 'lightgrey');
    $('#UrunStok').css('border-color', 'lightgrey');

}

function Validate() {
    var isValid = true;
    if ($('#UrunAdi').val().trim() == "") {
        $('#UrunAdi').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#UrunAdi').css('border-color', 'lightgrey');
    }
    if ($('#UrunFiyat').val().trim() == "") {
        $('#UrunFiyat').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#UrunFiyat').css('border-color', 'lightgrey');
    }
    if ($('#UrunStok').val().trim() == "") {
        $('#UrunStok').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#UrunStok').css('border-color', 'lightgrey');
    }
    return isValid; // Bu satırı ekleyin
}

$('#UrunAdi').change(function () {
    Validate();
})

$('#UrunFiyat').change(function () {
    Validate();
})

$('#UrunStok').change(function () {
    Validate();
})

function Edit(id) {
    $.ajax({
        url:'urun/Edit=' + id,
        type:'get',
        contentType:'application/json;charset=utf-8',
        datatype: 'json',
        success: function (response) {
            if (response == null || response == undefined) {
                alert('Unable to read the data');
            }
            else if (response.length == 0) {
                alert('Data not available with the id' + id);
            }
            else {
                $('#UrunModal').modal('show');
                $('#modalTitle').text('Ürünü Güncelle');
                $('#Save').css('display','none');
                $('#Update').css('display', 'block');
                $('#Id').val(response.id);
                $('#UrunAdi').val(response.id);
                $('#UrunFiyat').val(response.id);
                $('#UrunStok').val(response.id);
                //aaaa
            }
        }
        


    });
}
