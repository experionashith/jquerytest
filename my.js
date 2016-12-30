$(function() {

var userdata=new Array();
var user = new Array();
var myObj={};
var myJSON={};
var refnum;
var date;
var time;
var acctype;
var city;
var district;
var noofveh;
var noofcas;
var repofname;
    $("#datepicker-13").datepicker();
    $("#datepicker-13").datepicker("show");

    $("#add").click(function(e) {
        e.preventDefault();
         var ids = new Array();
        if ($('#refnum').val() == "") {
            alert('Please fill the Reference Number');
        }
        else if ($('#datepicker-13').val() == "")
       {
           alert('Please select Date of Accident');
       }
         else if ($('#time').val() == "")
          {
            alert('Please fill the time field');
        }
        else if ($('#acctype').val() == "select")
        {
            alert('Please select the type of Accident');
        }
        else if ($('#city').val() == "")
         {
           alert('Please fill the city field');
       }
       else if ($('#district').val() == "select")
       {
           alert('Please select the District');
       }
       else if ($('#noofveh').val() == "")
        {
          alert('Please fill the Number of Vehicles');
      }
      else if ($('#noofcas').val() == "")
       {
         alert('Please fill the Number of Casuality');
     }

     else {
             refnum = $("#refnum").val();
             date = $("#datepicker-13").val();
             time = $("#time").val();
             acctype = $("#acctype").val();
             city = $("#city").val();
             district = $("#district").val();
             noofveh = $("#noofveh").val();
             noofcas = $("#noofcas").val();
             repofname = $("#repofname").val();



            console.log(refnum);
            console.log(date);
            console.log(time);
            console.log(acctype);

            console.log(city);
            console.log(district);
            console.log(noofveh);
            console.log(repofname);
//<div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>
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
                $("#table").append('<tr><td>' + refnum + '</td><td>' + date + '</td><td>' + time + '</td><td>' + acctype +  '</td></td>' + city + '</td><td>' + district + '</td><td>' + noofveh + '</td><td>' + noofcas +  '</td><td>' + repofname + '<td><tr>');
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
    $("#add1").click(function(e) {
        e.preventDefault();
    myObj = { "id":refnum, "date":date,"time":time, "acctype":acctype,"city":city,
     "district":district, "noofveh":noofveh,"noofcas":noofcas};
    userdata.push(myObj);
    myJSON = JSON.stringify(userdata);
    localStorage.setItem("user", myJSON);
    alert('Data successfully saved in localStorage');
});
});
