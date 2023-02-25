$(document).ready(function() {
var max_fields      = 10; //maximum input boxes allowed
var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
var add_button      = $(".add_field_button"); //Add button ID

var x = 1; //initlal text box count
$(add_button).click(function(e){ //on add input button click
e.preventDefault();
    if(x < max_fields){ //max input box allowed
        x++; //text box increment
        $(wrapper).append('<div class="input-group mb-3"><input placeholder="Enter Skill" type="text" name="skill" class="form-control"><div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'); //add input box
    }
});

$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
    e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});


// for certification

$(document).ready(function() {
var max_fields2      = 10; //maximum input boxes allowed
var wrapper2   		= $(".input_fields_wrap2"); //Fields wrapper
var add_button2      = $(".add_field_button2"); //Add button ID

var y = 1; //initlal text box count
$(add_button2).click(function(e){ //on add input button click
e.preventDefault();
    if(y < max_fields2){ //max input box allowed
        y++; //text box increment
        $(wrapper2).append('<div class="input-group mb-3"><input placeholder="Enter certification" type="text" name="certification" class="form-control"><div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'); //add input box
    }
});

$(wrapper2).on("click",".remove_field", function(e){ //user click on remove text
    e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});


// education


$(document).ready(function() {
    var max_fields3      = 10; //maximum input boxes allowed
    var wrapper3   		= $(".input_fields_wrap3"); //Fields wrapper
    var add_button3      = $(".add_field_button3"); //Add button ID
    
    var z = 1; //initlal text box count
    $(add_button3).click(function(e){ //on add input button click
    e.preventDefault();
        if(z < max_fields3){ //max input box allowed
            z++; //text box increment
            $(wrapper3).append('<div class="input-group mb-3"> <input placeholder="Enter School" type="text" name="school" class="form-control"> <input placeholder="Enter Degree" type="text" name="degree" class="form-control"> <div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'); //add input box
        }
    });
    
    $(wrapper3).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
        })
    });




// projects


$(document).ready(function() {
    var max_fields4      = 10; //maximum input boxes allowed
    var wrapper4   		= $(".input_fields_wrap4"); //Fields wrapper
    var add_button4      = $(".add_field_button4"); //Add button ID
    
    var z = 1; //initlal text box count
    $(add_button4).click(function(e){ //on add input button click
    e.preventDefault();
        if(z < max_fields4){ //max input box allowed
            z++; //text box increment
            $(wrapper4).append('<div class="input-group mb-3"> <input placeholder="Enter Title" type="text" name="title" class="form-control"> <textarea name="desc" placeholder="Enter Description" id="" cols="30" rows="10"></textarea> <div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'); //add input box
        }
    });
    
    $(wrapper4).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
        })
    });



