$(function() {

    var ids = new Array();

    $("#datepicker-13").datepicker();
    $("#datepicker-13").datepicker("show");
    $("#add").click(function(e) {
        e.preventDefault();
        if ($('#id').val() == "") {
            alert('Please fill the id field');
        } else if ($('#name').val() == "") {
            alert('Please fill the name field');
        } else if ($('#datepicker-13').val() == "") {
            alert('Please select Date of Birth');
        } else if ($('#empDept').val() == "select") {
            alert('Please select the Department');
        } else {
            var eid = $("#id").val();
            var name = $("#name").val();
            var dob = $("#datepicker-13").val();
            var dept = $("#empDept").val();

            console.log(eid);
            console.log(name);
            console.log(dob);
            console.log(dept);

            var i;
            var flag = 0;
            console.log(ids.length);

            for (i = 0; i < ids.length; i++) {
                console.log(ids[i]);
            }

            for (i = 0; i < ids.length; i++) {
                if (eid === ids[i]) {
                    flag = 1;
                }
            }

            if (flag === 0) {
                $("#table").append('<tr><td>' + eid + '</td><td>' + name + '</td><td>' + dob + '</td><td>' + dept + '</td></tr>');
                ids.push(eid);

                
                $( "#dialog-message" ).dialog(
            {
              modal: true,
              buttons: {
                Ok: function() {
                  $( this ).dialog( "close" );
                }
              }
            });
            }
            if (flag === 1) {
                alert('Id already exist');
            }
        }
    });


});
