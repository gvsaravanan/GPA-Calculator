document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementById('button1')){
        document.getElementById('button1').addEventListener('click', display1, false);
    }

    if(document.getElementById('button2')){
        document.getElementById('button2').addEventListener('click', display2, false);
    }

    $(document).on('click','#button3', calculate1);

    $(document).on('click','#button4', calculate2);
    
    function display1() {
        if(document.getElementById('button1') && document.getElementById('button2')){
            document.getElementById('button1').disabled=true; 
            document.getElementById('button2').disabled=false;
        }
        $.myjQuery1();
    };
    
    $.myjQuery1 = function() {
        $("#six").remove();
        $(".calculator").append(`
            <div id="sem">
                <b>
                    <h3>If you are in a double-blocked class, enter it below as one class.
                        <br><hr class="line">
                    </h3>
            
                    <p>Six Weeks Grades in Class 1:
                        <input type="number" id="class1_0" maxlength="3" min="40" max="100" required>
                        <input type="number" id="class1_1" maxlength="3" min="40" max="100" required>
                        <input type="number" id="class1_2" maxlength="3" min="40" max="100" required>
                    </p>
    
                    <p>Semester Exam Grade for Class 1:
                        <input type="number" id="class1_3" maxlength="3" min="40" max="100" required>
                    </p>
                    
                    <form id="group1">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_1.2" name="ques" value="Yes">
                            <label for="class_1.2">Yes</label>
                            <input type="radio" id="class_1.3" name="ques" value="No">
                            <label for="class_1.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 2:
                        <input type="number" id="class2_0" maxlength="3" min="40" max="100" required>
                        <input type="number" id="class2_1" maxlength="3" min="40" max="100" required>
                        <input type="number" id="class2_2" maxlength="3" min="40" max="100" required>
                    </p>
    
                    <p>Semester Exam Grade for Class 2:
                        <input type="number" id="class2_3" maxlength="3" min="40" max="100" required>
                    </p>
                    
                    <form id="group2">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_2.2" name="ques" value="Yes">
                            <label for="class_2.2">Yes</label>
                            <input type="radio" id="class_2.3" name="ques" value="No">
                            <label for="class_2.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 3:
                        <input type="number" id="class3_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class3_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class3_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 3:
                        <input type="number" id="class3_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group3">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_3.2" name="ques" value="Yes">
                            <label for="class_3.2">Yes</label>
                            <input type="radio" id="class_3.3" name="ques" value="No">
                            <label for="class_3.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 4:
                        <input type="number" id="class4_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class4_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class4_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 4:
                        <input type="number" id="class4_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group4">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_4.2" name="ques" value="Yes">
                            <label for="class_4.2">Yes</label>
                            <input type="radio" id="class_4.3" name="ques" value="No">
                            <label for="class_4.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 5:
                        <input type="number" id="class5_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class5_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class5_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 5:
                        <input type="number" id="class5_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group5">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_5.2" name="ques" value="Yes">
                            <label for="class_5.2">Yes</label>
                            <input type="radio" id="class_5.3" name="ques" value="No">
                            <label for="class_5.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 6:
                        <input type="number" id="class6_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class6_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class6_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 6:
                        <input type="number" id="class6_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group6">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_6.2" name="ques" value="Yes">
                            <label for="class_6.2">Yes</label>
                            <input type="radio" id="class_6.3" name="ques" value="No">
                            <label for="class_6.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 7:
                        <input type="number" id="class7_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class7_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class7_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 7:
                        <input type="number" id="class7_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group7">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_7.2" name="ques" value="Yes">
                            <label for="class_7.2">Yes</label>
                            <input type="radio" id="class_7.3" name="ques" value="No">
                            <label for="class_7.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Six Weeks Grades in Class 8:
                        <input type="number" id="class8_0" maxlength="3" min="40" max="100">
                        <input type="number" id="class8_1" maxlength="3" min="40" max="100">
                        <input type="number" id="class8_2" maxlength="3" min="40" max="100">
                    </p>
    
                    <p>Semester Exam Grade for Class 8:
                        <input type="number" id="class8_3" maxlength="3" min="40" max="100">
                    </p>
                    
                    <form id="group8">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_8.2" name="ques" value="Yes">
                            <label for="class_8.2">Yes</label>
                            <input type="radio" id="class_8.3" name="ques" value="No">
                            <label for="class_8.3">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <input type="button" class="calc" id="button3" value="Calculate GPA">
                    <br>
                    <br>
                </b>
            </div>
            `
        );
    };
    
    function calculate1() {
        var gpa = 0.000;
        var counter = 0;
    
        if (document.getElementById("final1")) {
            document.getElementById("sem").removeChild(document.getElementById("final1"));
        }
        if (document.getElementById("input1")) {
            document.getElementById("sem").removeChild(document.getElementById("input1"));
        }
        if (document.getElementById("input2")) {
            document.getElementById("sem").removeChild(document.getElementById("input2"));
        }
    
        var input1 = $(`
            <div id="input1">
                <h3>Please check that all grades are entered accurately.</h3>
            </div>`
        );  
    
        var input2 = $(`
            <div id="input2">
                <h3>Please enter whether or not your classes are Pre-AP/AP.</h3>
            </div>`
        );
    
        loop1:
        for(i = 1; i < 9; i++) {
            if (!document.getElementById("class_" + i + ".2").checked && !document.getElementById("class_" + i + ".3").checked && document.getElementById("class" + i + "_" + 0).value.length == 0 && document.getElementById("class" + i + "_" + 1).value.length == 0 && document.getElementById("class" + i + "_" + 2).value.length == 0 && document.getElementById("class" + i + "_" + 3).value.length == 0) {
                counter += 1;
            } else {
                loop2:
                for(v = 0; v < 4; v++) {
                    if (document.getElementById("class" + i + "_" + v).value.length == 0 || (40> document.getElementById("class" + i + "_" + v).value || document.getElementById("class" + i + "_" + v).value >100)) {
                        $('#sem').append(input1);
                        break loop1;
                    }
                }
                if (!document.getElementById("class_" + i + ".2").checked && !document.getElementById("class_" + i + ".3").checked) {
                    $('#sem').append(input2);
                    break loop1;
                }
            }
            
        }
    
        for(i = 1; i < 9; i++) {
            if (!document.getElementById("class_" + i + ".2").checked && !document.getElementById("class_" + i + ".3").checked && document.getElementById("class" + i + "_" + 0).value.length == 0 && document.getElementById("class" + i + "_" + 1).value.length == 0 && document.getElementById("class" + i + "_" + 2).value.length == 0 && document.getElementById("class" + i + "_" + 3).value.length == 0) {
                gpa += 0;
            } else {
                if (document.getElementById("class_" + i + ".2").checked) {
                    var add1 = (document.getElementById("class" + i + "_" + 0).value)*2 + (document.getElementById("class" + i + "_" + 1).value)*2 + (document.getElementById("class" + i + "_" + 2).value)*2 + (document.getElementById("class" + i + "_" + 3).value)*1;
                    var g = Math.round(add1/7);

                    gpa += (6 - (100 - g)/10);
                } else {
                    var add2 = (document.getElementById("class" + i + "_" + 0).value)*2 + (document.getElementById("class" + i + "_" + 1).value)*2 + (document.getElementById("class" + i + "_" + 2).value)*2 + (document.getElementById("class" + i + "_" + 3).value)*1;
                    var g = Math.round(add2/7);
                    gpa += (5 - (100 - g)/10);
                }
            } 
        }
        
        gpa /= 8 - counter;
    
        if (!gpa) {
            gpa = 0;
        }
    
        var final1 = $(`
            <div id="final1">
                <h2>Your Semester GPA is: ` + gpa.toFixed(3) + `</h2>
            </div>`
        ); 
    
        if (!document.getElementById("input1") && !document.getElementById("input2")) {
            $('#sem').append(final1);
        }
    };
    
    function display2() {
        $.myjQuery2();
    };
    
    $.myjQuery2 = function() {
        $("#sem").remove();
        $(".calculator").append(`
            <div id="six">
                <b>
                    <h3>If you are in a double-blocked class, enter it below as one class.
                        <br><hr class="line">
                    </h3>
                    
                    <p>Grade for Class 1:
                        <input type="number" id="class1" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_1">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_1.0" name="ques" value="Yes" required>
                            <label for="class_1.0">Yes</label>
                            <input type="radio" id="class_1.1" name="ques" value="No" required>
                            <label for="class_1.1">No</label> 
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Grade for Class 2:
                        <input type="number" id="class2" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_2">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_2.0" name="ques" value="Yes">
                            <label for="class_2.0">Yes</label>
                            <input type="radio" id="class_2.1" name="ques" value="No">
                            <label for="class_2.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Grade for Class 3:
                        <input type="number" id="class3" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_3">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_3.0" name="ques" value="Yes">
                            <label for="class_3.0">Yes</label>
                            <input type="radio" id="class_3.1" name="ques" value="No">
                            <label for="class_3.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Grade for Class 4:
                        <input type="number" id="class4" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_4">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_4.0" name="ques" value="Yes">
                            <label for="class_4.0">Yes</label>
                            <input type="radio" id="class_4.1" name="ques" value="No">
                            <label for="class_4.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Grade for Class 5:
                        <input type="number" id="class5" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_5">
                    <p>Is this class Pre-AP/AP?
                        <input type="radio" id="class_5.0" name="ques" value="Yes">
                        <label for="class_5.0">Yes</label>
                        <input type="radio" id="class_5.1" name="ques" value="No">
                        <label for="class_5.1">No</label>
                        <br><hr class="line">
                    </p>
                    </form>
    
                    <p>Grade for Class 6:
                        <input type="number" id="class6" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_6">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_6.0" name="ques" value="Yes">
                            <label for="class_6.0">Yes</label>
                            <input type="radio" id="class_6.1" name="ques" value="No">
                            <label for="class_6.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p><b>Grade for Class 7:</b>
                        <input type="number" id="class7" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_7">
                        <p>Is this class Pre-AP/AP?
                            <input type="radio" id="class_7.0" name="ques" value="Yes">
                            <label for="class_7.0">Yes</label>
                            <input type="radio" id="class_7.1" name="ques" value="No">
                            <label for="class_7.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <p>Grade for Class 8:
                        <input type="number" id="class8" maxlength="3" min="40" max="100" required>
                        <br>
                    </p>
    
                    <form id="group_8">
                        <p><b>Is this class Pre-AP/AP?</b>
                            <input type="radio" id="class_8.0" name="ques" value="Yes">
                            <label for="class_8.0">Yes</label>
                            <input type="radio" id="class_8.1" name="ques" value="No">
                            <label for="class_8.1">No</label>
                            <br><hr class="line">
                        </p>
                    </form>
    
                    <input type="button" class="calc" id="button4" value="Calculate GPA">
                    <br>
                    <br>
                </b>
            </div>
            `
        );
    };
    
    function calculate2() {
        var gpa = 0.000;
        var counter = 0;
    
        if (document.getElementById("final2")) {
            document.getElementById("six").removeChild(document.getElementById("final2"));
        }
        if (document.getElementById("input3")) {
            document.getElementById("six").removeChild(document.getElementById("input3"));
        }
        if (document.getElementById("input4")) {
            document.getElementById("six").removeChild(document.getElementById("input4"));
        }

        var input3 = $(`
            <div id="input3">
                <h3>Please check that all grades are entered accurately.</h3>
            </div>`
        );  
    
        var input4 = $(`
            <div id="input4">
                <h3>Please enter whether or not your classes are Pre-AP/AP.</h3>
            </div>`
        );
    
        loop1:
        for(i = 1; i < 9; i++) {
            if (!document.getElementById("class_" + i + ".0").checked && !document.getElementById("class_" + i + ".1").checked && document.getElementById("class" + i).value.length == 0) {
                counter += 1;
            } else {
                if (document.getElementById("class" + i).value.length == 0 || (40> document.getElementById("class" + i).value || document.getElementById("class" + i).value >100)) {
                    $('#six').append(input3);
                    break loop1;
                }
                if (!document.getElementById("class_" + i + ".0").checked && !document.getElementById("class_" + i + ".1").checked) {
                    $('#six').append(input4);
                    break loop1;
                }
            }
            
        }

        for(i = 1; i < 9; i++) {
            if (!document.getElementById("class_" + i + ".0").checked && !document.getElementById("class_" + i + ".1").checked && document.getElementById("class" + i).value.length == 0) {
                gpa += 0;
            } else {
                if (document.getElementById("class_" + i + ".0").checked) {
                    var add1 = (6 - (100 - (document.getElementById("class" + i).value))/10);
                    gpa += add1
                } else {
                    var add2 = (5 - (100 - (document.getElementById("class" + i).value))/10);
                    gpa += add2
                }
            } 
        }
        gpa /= 8 - counter;
        
        if (!gpa) {
            gpa = 0;
        }

        var final2 = $(`
            <div id="final2">
                <h2>Your Six Weeks GPA is: ` + gpa.toFixed(3) + `</h2>
            </div>`
        );
    
        if (!document.getElementById("input3") && !document.getElementById("input4")) {
            $('#six').append(final2); 
        }
    };
}, false);

