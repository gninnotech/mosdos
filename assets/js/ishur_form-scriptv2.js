function fathernone() {
    var fatheremailcontainer = document.getElementById('fatheremailinfo');
    var fatheremailinput = document.getElementById('femail');
    fatheremailcontainer.classList.add("hidden");
    fatheremailcontainer.classList.remove("show");
    fatheremailinput.removeAttribute("required");
}

function fatheraccess() {
    var fatheremailcontainer = document.getElementById('fatheremailinfo');
    var fatheremailinput = document.getElementById('femail');
    fatheremailcontainer.classList.add("show");
    fatheremailcontainer.classList.remove("hidden");
    fatheremailinput.setAttribute("required", "required");
}

function mothernone() {
    var motheremailcontainer = document.getElementById('motheremailinfo');
    var motheremailinput = document.getElementById('memail');
    motheremailcontainer.classList.add("hidden");
    motheremailcontainer.classList.remove("show");
    motheremailinput.removeAttribute("required");
}

function motheraccess() {
    var motheremailcontainer = document.getElementById('motheremailinfo');
    var motheremailinput = document.getElementById('memail');
    motheremailcontainer.classList.add("show");
    motheremailcontainer.classList.remove("hidden");
    motheremailinput.setAttribute("required", "required");
}

//adding contact
var addmoreemailButton = document.getElementById('addmoreemail');
var addemailcloneElement = document.getElementById('addemailclone');
var moreemailcontainerElement = document.getElementById('moreemailcontainer');
var cloneEmailCount = 0;
function addMoreEmail() {
    event.preventDefault();
    cloneEmailCount++;
    var clonedElement = addemailcloneElement.cloneNode(true);
    clonedElement.classList.add("show");
    clonedElement.classList.remove("hidden");
    var clonedInput = clonedElement.querySelector('input[name="mCinfo[]"]');
    clonedInput.required = true;
    clonedInput.id = "mCinfo-" + cloneEmailCount;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
    var clonedSpan = clonedElement.querySelector('#spanemaildel');
    clonedSpan.appendChild(deleteButton);
    moreemailcontainerElement.appendChild(clonedElement);
    deleteButton.addEventListener('click', function () {
        clonedElement.remove();
    });
}
// Add event listeners for both click and touchstart events
addmoreemailButton.addEventListener('click', addMoreEmail);
addmoreemailButton.addEventListener('touchstart', addMoreEmail);

var addmoreemailButton = document.getElementById('addmoreemail');
var addemailcloneElement = document.getElementById('addemailclone');
var moreemailcontainerElement = document.getElementById('moreemailcontainer');
var cloneEmailCount = 0;

function addMoreEmail() {
    event.preventDefault();

    cloneEmailCount++;
    var clonedElement = addemailcloneElement.cloneNode(true);
    clonedElement.classList.add("show");
    clonedElement.classList.remove("hidden");
    var clonedInput = clonedElement.querySelector('input[name="mCinfo[]"]');
    clonedInput.required = true;
    clonedInput.id = "mCinfo-" + cloneEmailCount;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
    var clonedSpan = clonedElement.querySelector('#spanemaildel');
    clonedSpan.appendChild(deleteButton);
    moreemailcontainerElement.appendChild(clonedElement);
    deleteButton.addEventListener('click', function () {
        clonedElement.remove();
    });
}

// Add event listeners for both click and touchstart events
addmoreemailButton.addEventListener('click', addMoreEmail);
addmoreemailButton.addEventListener('touchstart', addMoreEmail);

        function homephonenone() {
            var homephonecontainer = document.getElementById('homephonecontainer');
            var homephonedetails = document.getElementById('homephonedetails');
            homephonecontainer.classList.add("hidden");
            homephonecontainer.classList.remove("show");
            homephonedetails.removeAttribute("required");
        }

        function homephoneadd() {
            var homephonecontainer = document.getElementById('homephonecontainer');
            var homephonedetails = document.getElementById('homephonedetails');
            homephonecontainer.classList.add("show");
            homephonecontainer.classList.remove("hidden");
            homephonedetails.setAttribute("required", "required");
        }  
    
        function fathermobilenone() {
            var fathermobcontainer = document.getElementById('fathermobcontainer');
            var fmobile = document.getElementById('fmobile');
            fathermobcontainer.classList.add("hidden");
            fathermobcontainer.classList.remove("show");
            fmobile.removeAttribute("required");
        }

        function fathermobileadd() {
            var fathermobcontainer = document.getElementById('fathermobcontainer');
            var fmobile = document.getElementById('fmobile');
            fathermobcontainer.classList.add("show");
            fathermobcontainer.classList.remove("hidden");
            fmobile.setAttribute("required", "required");
        } 
    
        function mothermobilenone() {
            var mothermobilecontainer = document.getElementById('mothermobilecontainer');
            var mmobile = document.getElementById('mmobile');
            mothermobilecontainer.classList.add("hidden");
            mothermobilecontainer.classList.remove("show");
            mmobile.removeAttribute("required");
        }

        function mothermobileadd() {
            var mothermobilecontainer = document.getElementById('mothermobilecontainer');
            var mmobile = document.getElementById('mmobile');
            mothermobilecontainer.classList.add("show");
            mothermobilecontainer.classList.remove("hidden");
            mmobile.setAttribute("required", "required");
        }


var addmoremobileButton = document.getElementById('addmoremobile');
var addmobilecloneElement = document.getElementById('addmobileclone');
var moremobilecontainerElement = document.getElementById('moremobilecontainer');
var cloneMobileCount = 0;
function addMoreNumber() {
    event.preventDefault();
    cloneMobileCount++;
    var clonedElement = addmobilecloneElement.cloneNode(true);
    clonedElement.classList.add("show");
    clonedElement.classList.remove("hidden");
    var clonedInput = clonedElement.querySelector('input[name="mmCinfo[]"]');
    clonedInput.required = true;
    clonedInput.id = "mmCinfo-" + cloneMobileCount;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
    var clonedSpan = clonedElement.querySelector('#spanmobiledel');
    clonedSpan.appendChild(deleteButton);
    moremobilecontainerElement.appendChild(clonedElement);
    deleteButton.addEventListener('click', function () {
        clonedElement.remove();
    });
}
addmoremobileButton.addEventListener('click', addMoreNumber);
addmoremobileButton.addEventListener('touchstart', addMoreNumber);
   
    
    
        var addmoremobileButton = document.getElementById('addmoremobile');
        var addmobilecloneElement = document.getElementById('addmobileclone');
        var moremobilecontainerElement = document.getElementById('moremobilecontainer');
        var cloneMobileCount = 0;

        function addMoreNumber() {
            event.preventDefault();
            cloneMobileCount++;
            var clonedElement = addmobilecloneElement.cloneNode(true);
            clonedElement.classList.add("show");
            clonedElement.classList.remove("hidden");
            var clonedInput = clonedElement.querySelector('input[name="mmCinfo[]"]');
            clonedInput.required = true;
            clonedInput.id = "mmCinfo-" + cloneMobileCount;
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
            var clonedSpan = clonedElement.querySelector('#spanmobiledel');
            clonedSpan.appendChild(deleteButton);
            moremobilecontainerElement.appendChild(clonedElement);
            deleteButton.addEventListener('click', function () {
                clonedElement.remove();
            });
        }

        addmoremobileButton.addEventListener('click', addMoreNumber);
        addmoremobileButton.addEventListener('touchstart', addMoreNumber);
   
        function mEmailAccount() {
            var mEmails = document.getElementById('mEmails');
            var mPreferred = document.getElementById('mPreferred');
            var fnone = document.getElementById('fnone');
            var mnone = document.getElementById('mnone');
            var homephoneno = document.getElementById('homephoneno');
            var mpfno = document.getElementById('mpfno');
            var mpmno = document.getElementById('mpmno');
            var fatheremailinput = document.getElementById('femail').value;
            var motheremailinput = document.getElementById('memail').value;
            var homephonedetails = document.getElementById('homephonedetails').value;
            var fmobile = document.getElementById('fmobile').value;
            var mmobile = document.getElementById('mmobile').value;
            if (!fnone.checked) {
                mEmails.value = fatheremailinput;
                mPreferred.value = "Email Access: Yes";
            } else if (!mnone.checked) {
                mEmails.value = motheremailinput;
                mPreferred.value = "Email Access: Yes";
            } else if (!homephoneno.checked) {
                mEmails.value = homephonedetails;
                mPreferred.value = "Email Access: None";
            } else if (!mpfno.checked) {
                mEmails.value = fmobile;
                mPreferred.value = "Email Access: None";
            } else if (!mpmno.checked) {
                mEmails.value = mmobile;
                mPreferred.value = "Email Access: None";
            } else {
                mEmails.value = "NA";
            }
        }
   

    function checkboxinspect() {
        var checknone = document.getElementById("noinstitutions");
        var checkboxes = document.querySelectorAll('.nnone');
        var isChecked = false;

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                isChecked = true;
                break;
            }
        }

        if (isChecked) {
            checkboxes.forEach(function (checkbox) {
                checkbox.removeAttribute('required');
            });
            checknone.removeAttribute('required');
            checknone.setAttribute('disabled', 'disabled');
        } else {
            checkboxes.forEach(function (checkbox) {
                checkbox.setAttribute('required', 'required');
            });
            checknone.setAttribute('required', 'required');
            checknone.removeAttribute('disabled');
        }
    }

    function checkboxnone() {
        var checknone = document.getElementById("noinstitutions");
        var checkboxes = document.querySelectorAll('.nnone');
        var isChecked = false;
        if (checknone.checked) {
            isChecked = true;
        }
        if (isChecked) {
            checkboxes.forEach(function (checkbox) {
                checkbox.removeAttribute('required');
                checkbox.setAttribute('disabled', 'disabled');
            });
        } else {
            checkboxes.forEach(function (checkbox) {
                checkbox.setAttribute('required', 'required');
                checkbox.removeAttribute('disabled');
            });
        }
    }

    function selectedkehilla() {
        var selectElement = document.getElementById("moised");
        var synagogueone = document.getElementById("gurez");
        var synagoguetwo = document.getElementById("Othersy");
        var sezr = document.getElementById("sezr");
        var sven = document.getElementById("sven");
        var sgur = document.getElementById("sgur");
        var smiv = document.getElementById("smiv");
        var sskv = document.getElementById("sskv");
        var wwest = document.getElementById("wwest");
        var id_institution_container = document.getElementById("id_institution_container");
        var nosynagogue = document.getElementById("nosynagogue");
        var selectedValue = selectElement.value;
        if(selectedValue != ''){
            id_institution_container.classList.add("show");
            id_institution_container.classList.remove("hidden");
        }else{
            id_institution_container.classList.add("hidden");
            id_institution_container.classList.remove("show");
        }
        if (selectedValue == "Ezreini (Belz)" || selectedValue == "Gur") {
            synagoguetwo.classList.add("hidden");
            synagoguetwo.classList.remove("show");
            synagogueone.classList.add("show");
            synagogueone.classList.remove("hidden");
        } else {
            synagogueone.classList.add("hidden");
            synagogueone.classList.remove("show");
            synagoguetwo.classList.add("show");
            synagoguetwo.classList.remove("hidden");
        }
        if (selectedValue == "Ezreini (Belz)") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("show");
            hbm.classList.remove("hidden");
            hsemi.classList.add("show");
            hsemi.classList.remove("hidden");
            hyk.classList.add("show");
            hyk.classList.remove("hidden");
            hyg.classList.add("show");
            hyg.classList.remove("hidden");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.setAttribute("required", "required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("show");
            sezr.classList.remove("hidden");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Mivtzar") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("show");
            hyk.classList.remove("hidden");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("show");
            hbv.classList.remove("hidden");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.setAttribute("required", "required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("show");
            smiv.classList.remove("hidden");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Gur") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("show");
            hyk.classList.remove("hidden");
            hyg.classList.add("show");
            hyg.classList.remove("hidden");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("show");
            hstdtd.classList.remove("hidden");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.setAttribute("required", "required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("show");
            sgur.classList.remove("hidden");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Westcliff") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("hidden");
            hyk.classList.remove("show");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("show");
            school.classList.remove("hidden");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.setAttribute("required", "required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("show");
            wwest.classList.remove("hidden");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Venishmartem (Belz 99)") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("show");
            hyk.classList.remove("hidden");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.setAttribute("required", "required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("show");
            sven.classList.remove("hidden");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Skver") {
            hctt.classList.add("show");
            hctt.classList.remove("hidden");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("hidden");
            hyk.classList.remove("show");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("show");
            hbt.classList.remove("hidden");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.setAttribute("required", "required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.removeAttribute("required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("show");
            sskv.classList.remove("hidden");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("hidden");
            nosynagogue.classList.remove("show");
        } else if (selectedValue == "Beis Chinuch") {
            hctt.classList.add("hidden");
            hctt.classList.remove("show");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("hidden");
            hyk.classList.remove("show");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("show");
            hgg.classList.remove("hidden");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("show");
            hbyd.classList.remove("hidden");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.setAttribute("required", "required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("show");
            nosynagogue.classList.remove("hidden");
        } else {
            hctt.classList.add("hidden");
            hctt.classList.remove("show");
            hbm.classList.add("hidden");
            hbm.classList.remove("show");
            hsemi.classList.add("hidden");
            hsemi.classList.remove("show");
            hyk.classList.add("hidden");
            hyk.classList.remove("show");
            hyg.classList.add("hidden");
            hyg.classList.remove("show");
            hbv.classList.add("hidden");
            hbv.classList.remove("show");
            hstdtd.classList.add("hidden");
            hstdtd.classList.remove("show");
            hgg.classList.add("hidden");
            hgg.classList.remove("show");
            school.classList.add("hidden");
            school.classList.remove("show");
            hbt.classList.add("hidden");
            hbt.classList.remove("show");
            hbyd.classList.add("hidden");
            hbyd.classList.remove("show");
            sezrselect.removeAttribute("required");
            svenselect.removeAttribute("required");
            sgurselect.removeAttribute("required");
            smivselect.removeAttribute("required");
            sskvselect.removeAttribute("required");
            wwestselect.removeAttribute("required");
            nosynagogueselect.setAttribute("required", "required");
            sezr.classList.add("hidden");
            sezr.classList.remove("show");
            sven.classList.add("hidden");
            sven.classList.remove("show");
            sgur.classList.add("hidden");
            sgur.classList.remove("show");
            smiv.classList.add("hidden");
            smiv.classList.remove("show");
            sskv.classList.add("hidden");
            sskv.classList.remove("show");
            wwest.classList.add("hidden");
            wwest.classList.remove("show");
            nosynagogue.classList.add("show");
            nosynagogue.classList.remove("hidden");
        }
    }



    function selectedsynagogue(selectElement) {
        var selectedValue = selectElement.value;
        var othersynagogue = document.getElementById('nosynagogues');
        var nosynagogueselect = document.getElementById('nosynagogueselects');
        if (selectedValue == "Other") {
            othersynagogue.classList.add("show");
            othersynagogue.classList.remove("hidden");
            nosynagogueselect.setAttribute("required", "required");
        } else {
            othersynagogue.classList.add("hidden");
            othersynagogue.classList.remove("show");
            nosynagogueselect.removeAttribute("required");
        }
    }


    function fathermobilemodel() {
            var mModsf = document.getElementById("mModsf").value;
    var blockquestions = document.getElementById("blockquestions");
    var mBlokfv = document.getElementById("mBlokfv");
    var mBquef = document.getElementById("mBquef");
    var smartphonealertf = document.getElementById("smartphonealertf");
    var fatherimei = document.getElementById("fatherimei");
    var mImeif = document.getElementById("mImeif");
    var textmef = document.getElementById("textmef");
    var mTexcf = document.getElementById("mTexcf");
    var stickmef = document.getElementById("stickmef");
    var mstickfl = document.getElementById("mstickfl");
    var mstickf = document.getElementById("mstickf");
    var moiseds = document.getElementById("moised").value;
    var otherstickerfather = document.getElementById("otherstickerfather");
    var fatherotherstickers = document.getElementById("fatherotherstickers");
    if (mModsf == "Smartphone") {
        blockquestions.classList.add("hidden");
    blockquestions.classList.remove("show");
    mBlokfv.removeAttribute('required');
    mBlokfv.value = "";
    mBquef.removeAttribute('required');
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    smartphonealertf.innerHTML = "Smartphone information should be provided to the smartphone and tablet section below.";
    fatherimei.classList.add("hidden");
    fatherimei.classList.remove("show");
    mImeif.removeAttribute('required');
    mImeif.value = "";
    textmef.classList.add("hidden");
    textmef.classList.remove("show");
    mTexcf.removeAttribute('required');
    mTexcf.value = mTexcf.querySelector('option:first-of-type').value;
    stickmef.classList.add("hidden");
    stickmef.classList.remove("show");
    mstickfl.innerHTML = "";
    mstickf.removeAttribute('required');
    mstickf.value = mstickf.querySelector('option:first-of-type').value;
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            } else if (mModsf == "None" || mModsf == "" || mModsf == 'Kosher Sumsung 2G' ) {
        blockquestions.classList.add("hidden");
    blockquestions.classList.remove("show");
    mBlokfv.removeAttribute('required');
    mBlokfv.value = "";
    mBquef.removeAttribute('required');
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    smartphonealertf.innerHTML = "";
    textmef.classList.add("hidden");
    textmef.classList.remove("show");
    mTexcf.removeAttribute('required');
    mTexcf.value = mTexcf.querySelector('option:first-of-type').value;
    fatherimei.classList.add("hidden");
    fatherimei.classList.remove("show");
    mImeif.removeAttribute('required');
    mImeif.value = "";
    stickmef.classList.add("hidden");
    stickmef.classList.remove("show");
    mstickfl.innerHTML = "";
    mstickf.removeAttribute('required');
    mstickf.value = mstickf.querySelector('option:first-of-type').value;
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            } else if (mModsf == "Other") {
        blockquestions.classList.add("hidden");
    blockquestions.classList.remove("show");
    mBlokfv.removeAttribute('required');
    mBlokfv.value = "";
    mBquef.removeAttribute('required');
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    smartphonealertf.innerHTML = "";
    fatherimei.classList.add("show");
    fatherimei.classList.remove("hidden");
    mImeif.setAttribute('required', 'required');
    textmef.classList.add("hidden");
    textmef.classList.remove("show");
    mTexcf.removeAttribute('required');
    mTexcf.value = mTexcf.querySelector('option:first-of-type').value;
    stickmef.classList.add("hidden");
    stickmef.classList.remove("show");
    mstickfl.innerHTML = "";
    mstickf.removeAttribute('required');
    mstickf.value = mstickf.querySelector('option:first-of-type').value;
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            } else if (mModsf == "Nokia 105") {
        blockquestions.classList.add("show");
    blockquestions.classList.remove("hidden");
    mBlokfv.value = "Do you have version 2021 or later?";
    mBquef.setAttribute('required', 'required');
    smartphonealertf.innerHTML = "";
    textmef.classList.add("show");
    textmef.classList.remove("hidden");
    mTexcf.setAttribute('required', 'required');
    fatherimei.classList.add("hidden");
    fatherimei.classList.remove("show");
    mImeif.removeAttribute('required');
    mImeif.value = "";
    if (moiseds == "Skver") {
        stickmef.classList.add("show");
    stickmef.classList.remove("hidden");
    mstickfl.innerHTML = "Does it have " + moiseds + " Sticker";
    mstickf.setAttribute('required', 'required');
                } else {
        stickmef.classList.add("hidden");
    stickmef.classList.remove("show");
    mstickfl.innerHTML = "";
    mstickf.removeAttribute('required');
    mstickf.value = mstickf.querySelector('option:first-of-type').value;
                }
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            } else if (mModsf == "Qin") {
        blockquestions.classList.add("show");
    blockquestions.classList.remove("hidden");
    mBlokfv.value = "Select the type of sticker your mobile have?";
    mBquef.setAttribute('required', 'required');
    var optionElement4 = document.createElement("option");
    optionElement4.value = "";
    optionElement4.textContent = "SELECT";
    optionElement4.classList.add("hidden");
    optionElement4.classList.remove("show");
    mBquef.appendChild(optionElement4);
    var optionElement = document.createElement("option");
    optionElement.value = "TAG";
    optionElement.textContent = "TAG";
    mBquef.appendChild(optionElement);
    var optionElement1 = document.createElement("option");
    optionElement1.value = "Syog";
    optionElement1.textContent = "Syog";
    mBquef.appendChild(optionElement1);
    var optionElement2 = document.createElement("option");
    optionElement2.value = moiseds;
    optionElement2.textContent = moiseds;
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "Other";
    optionElement3.textContent = "Other";
    mBquef.appendChild(optionElement3);
    var optionElement5 = document.createElement("option");
    optionElement5.value = "None";
    optionElement5.textContent = "None";
    mBquef.appendChild(optionElement5);
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    mBquef.addEventListener('change', fatherothersticker);
    smartphonealertf.innerHTML = "";
    textmef.classList.add("show");
    textmef.classList.remove("hidden");
    mTexcf.setAttribute('required', 'required');
    fatherimei.classList.add("show");
    fatherimei.classList.remove("hidden");
    mImeif.setAttribute('required', 'required');
    mBquef.value = mBquef.querySelector('option:first-of-type').value;

            } else if (mModsf == "LG Wine Smart") {
                if (moiseds == "Ezreini (Belz)") {
        blockquestions.classList.add("hidden");
    blockquestions.classList.remove("show");
    mBlokfv.removeAttribute('required');
    mBlokfv.value = "";
    mBquef.removeAttribute('required');
                } else {
        blockquestions.classList.add("show");
    blockquestions.classList.remove("hidden");
    mBlokfv.value = "Does it have an updated TAG Sticker?";
    mBquef.setAttribute('required', 'required');
                }
    smartphonealertf.innerHTML = "";
    textmef.classList.add("show");
    textmef.classList.remove("hidden");
    mTexcf.setAttribute('required', 'required');
    fatherimei.classList.add("show");
    fatherimei.classList.remove("hidden");
    mImeif.setAttribute('required', 'required');
    stickmef.classList.add("show");
    stickmef.classList.remove("hidden");
    mstickfl.innerHTML = "Does it have " + moiseds + " Sticker";
    mstickf.setAttribute('required', 'required');
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.value = mBquef.querySelector('option:first-of-type').value;
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            } else {

        blockquestions.classList.add("show");
    blockquestions.classList.remove("hidden");
    mBlokfv.value = "Is it blocked by PuriFone/TAG?";
    mBquef.setAttribute('required', 'required');
    smartphonealertf.innerHTML = "";
    textmef.classList.add("show");
    textmef.classList.remove("hidden");
    mTexcf.setAttribute('required', 'required');
    fatherimei.classList.add("hidden");
    fatherimei.classList.remove("show");
    mImeif.removeAttribute('required');
    mImeif.value = "";
    if (moiseds == "Skver") {
        stickmef.classList.add("show");
    stickmef.classList.remove("hidden");
    mstickfl.innerHTML = "Does it have " + moiseds + " Sticker";
    mstickf.setAttribute('required', 'required');
                } else {
        stickmef.classList.add("hidden");
    stickmef.classList.remove("show");
    mstickfl.innerHTML = "";
    mstickf.removeAttribute('required');
    mstickf.value = mstickf.querySelector('option:first-of-type').value;
                }
    mBquef.options[5].remove();
    mBquef.options[4].remove();
    mBquef.options[3].remove();
    mBquef.options[2].remove();
    mBquef.options[1].remove();
    mBquef.options[0].remove();
    var optionElement1 = document.createElement("option");
    optionElement1.value = "";
    optionElement1.textContent = "Yes/No";
    mBquef.appendChild(optionElement1);
    optionElement1.classList.add("hidden");
    optionElement1.classList.remove("show");
    var optionElement2 = document.createElement("option");
    optionElement2.value = "Yes";
    optionElement2.textContent = "Yes";
    mBquef.appendChild(optionElement2);
    var optionElement3 = document.createElement("option");
    optionElement3.value = "No";
    optionElement3.textContent = "No";
    mBquef.appendChild(optionElement3);
    mBquef.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    fatherotherstickers.removeAttribute('name');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            }
        }

    function fatherothersticker() {
            var mBquef = document.getElementById("mBquef").value;
    var mBquefs = document.getElementById("mBquef");
    var otherstickerfather = document.getElementById("otherstickerfather");
    var fatherotherstickers = document.getElementById("fatherotherstickers");
    if (mBquef == 'Other') {
        mBquefs.removeAttribute('name');
    otherstickerfather.classList.add("show");
    otherstickerfather.classList.remove("hidden");
    fatherotherstickers.setAttribute('required', 'required');
    fatherotherstickers.setAttribute('name', 'mBquef');
            } else {
        mBquefs.setAttribute('name', 'mBquef');
    fatherotherstickers.removeAttribute('required');
    otherstickerfather.classList.add("hidden");
    otherstickerfather.classList.remove("show");
            }

        }
    function mothermobilemodel() {
        var mModsm = document.getElementById("mModsm").value;
        var blockquestionsm = document.getElementById("blockquestionsm");
        var mBlokmv = document.getElementById("mBlokmv");
        var mBquem = document.getElementById("mBquem");
        var smartphonealertm = document.getElementById("smartphonealertm");
        var motherimei = document.getElementById("motherimei");
        var mImeim = document.getElementById("mImeim");
        var textmem = document.getElementById("textmem");
        var mTexcm = document.getElementById("mTexcm");
        var stickmem = document.getElementById("stickmem");
        var mstickml = document.getElementById("mstickml");
        var mstickm = document.getElementById("mstickm");
        var moiseds = document.getElementById("moised").value;
        var otherstickermother = document.getElementById("otherstickermother");
        var motherotherstickers = document.getElementById("motherotherstickers");
        if (mModsm == "Smartphone") {
            blockquestionsm.classList.add("hidden");
            blockquestionsm.classList.remove("show");
            mBlokmv.removeAttribute('required');
            mBlokmv.value = "";
            mBquem.removeAttribute('required');
            mBquem.value = mBquem.querySelector('option:first-of-type').value;
            smartphonealertm.innerHTML = "Smartphone information should be provided to the smartphone and tablet section below.";
            motherimei.classList.add("hidden");
            motherimei.classList.remove("show");
            mImeim.removeAttribute('required');
            mImeim.value = "";
            textmem.classList.add("hidden");
            textmem.classList.remove("show");
            mTexcm.removeAttribute('required');
            mTexcm.value = mTexcm.querySelector('option:first-of-type').value;
            stickmem.classList.add("hidden");
            stickmem.classList.remove("show");
            mstickml.innerHTML = "";
            mstickm.removeAttribute('required');
            mstickm.value = mstickm.querySelector('option:first-of-type').value;
                mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        } else if (mModsm == "None" || mModsm == "") {
            blockquestionsm.classList.add("hidden");
            blockquestionsm.classList.remove("show");
            mBlokmv.removeAttribute('required');
            mBlokmv.value = "";
            mBquem.removeAttribute('required');
            mBquem.value = mBquem.querySelector('option:first-of-type').value;
            smartphonealertm.innerHTML = "";
            textmem.classList.add("hidden");
            textmem.classList.remove("show");
            mTexcm.removeAttribute('required');
            mTexcm.value = mTexcm.querySelector('option:first-of-type').value;
            motherimei.classList.add("hidden");
            motherimei.classList.remove("show");
            mImeim.removeAttribute('required');
            mImeim.value = "";
            stickmem.classList.add("hidden");
            stickmem.classList.remove("show");
            mstickml.innerHTML = "";
            mstickm.removeAttribute('required');
            mstickm.value = mstickm.querySelector('option:first-of-type').value;
            mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        } else if (mModsm == "Other") {
            blockquestionsm.classList.add("hidden");
            blockquestionsm.classList.remove("show");
            mBlokmv.removeAttribute('required');
            mBlokmv.value = "";
            mBquem.removeAttribute('required');
            mBquem.value = mBquem.querySelector('option:first-of-type').value;
            smartphonealertm.innerHTML = "";
            motherimei.classList.add("show");
            motherimei.classList.remove("hidden");
            mImeim.setAttribute('required', 'required');
            textmem.classList.add("hidden");
            textmem.classList.remove("show");
            mTexcm.removeAttribute('required');
            mTexcm.value = mTexcm.querySelector('option:first-of-type').value;
            stickmem.classList.add("hidden");
            stickmem.classList.remove("show");
            mstickml.innerHTML = "";
            mstickm.removeAttribute('required');
            mstickm.value = mstickm.querySelector('option:first-of-type').value;
            mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        } else if (mModsm == "Nokia 105") {
            blockquestionsm.classList.add("show");
            blockquestionsm.classList.remove("hidden");
            mBlokmv.value = "Do you have version 2021 or later?";
            mBquem.setAttribute('required', 'required');
            smartphonealertm.innerHTML = "";
            textmem.classList.add("show");
            textmem.classList.remove("hidden");
            mTexcm.setAttribute('required', 'required');
            motherimei.classList.add("hidden");
            motherimei.classList.remove("show");
            mImeim.removeAttribute('required');
            mImeim.value = "";
            if (moiseds == "Skver") {
                stickmem.classList.add("show");
                stickmem.classList.remove("hidden");
                mstickml.innerHTML = "Does it have " + moiseds + " Sticker";
                mstickm.setAttribute('required', 'required');
            } else {
                stickmem.classList.add("hidden");
                stickmem.classList.remove("show");
                mstickml.innerHTML = "";
                mstickm.removeAttribute('required');
                mstickm.value = mstickm.querySelector('option:first-of-type').value;
            }
            mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        } else if (mModsm == "Qin-Xiaomi"){ 
            blockquestionsm.classList.add("show");
                    blockquestionsm.classList.remove("hidden");
                    mBlokmv.value = "Select the type of sticker your mobile have?";
                    mBquem.setAttribute('required', 'required');
                    var optionElement4 = document.createElement("option");
                        optionElement4.value = "";
                        optionElement4.textContent = "SELECT";
                        optionElement4.classList.add("hidden");
                        optionElement4.classList.remove("show");
                        mBquem.appendChild(optionElement4);
                    var optionElement = document.createElement("option");
                        optionElement.value = "TAG";
                        optionElement.textContent = "TAG";
                        mBquem.appendChild(optionElement);
                    var optionElement1 = document.createElement("option");
                        optionElement1.value = "Syog";
                        optionElement1.textContent = "Syog";
                        mBquem.appendChild(optionElement1);
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = moiseds;
                        optionElement2.textContent = moiseds;
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "Other";
                        optionElement3.textContent = "Other";
                        mBquem.appendChild(optionElement3);
                    var optionElement5 = document.createElement("option");
                        optionElement5.value = "None";
                        optionElement5.textContent = "None";
                        mBquem.appendChild(optionElement5);
                        mBquem.options[2].remove();
                        mBquem.options[1].remove();
                        mBquem.options[0].remove();
                        mBquem.addEventListener('change', motherothersticker);
                        smartphonealertm.innerHTML = "";
                        textmem.classList.add("show");
                        textmem.classList.remove("hidden");
                        mTexcm.setAttribute('required', 'required');
                        motherimei.classList.add("show");
                        motherimei.classList.remove("hidden");
                        mImeim.setAttribute('required', 'required');
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
        } else if (mModsm == "LG Wine Smart") {
            if (moiseds == "Ezreini (Belz)") {
                blockquestionsm.classList.add("hidden");
                blockquestionsm.classList.remove("show");
                mBlokmv.removeAttribute('required');
                mBlokmv.value = "";
                mBquem.removeAttribute('required');
                mBquem.value = mBquem.querySelector('option:first-of-type').value;
            } else {
                blockquestionsm.classList.add("show");
                blockquestionsm.classList.remove("hidden");
                mBlokmv.value = "Does it have an updated TAG Sticker?";
                mBquem.setAttribute('required', 'required');
            }
            smartphonealertm.innerHTML = "";
            textmem.classList.add("show");
            textmem.classList.remove("hidden");
            mTexcm.setAttribute('required', 'required');
            motherimei.classList.add("show");
            motherimei.classList.remove("hidden");
            mImeim.setAttribute('required', 'required');
            stickmem.classList.add("show");
            stickmem.classList.remove("hidden");
            mstickml.innerHTML = "Does it have " + moiseds + " Sticker";
            mstickm.setAttribute('required', 'required');
            mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        } else {
            blockquestionsm.classList.add("show");
            blockquestionsm.classList.remove("hidden");
            mBlokmv.value = "Is it blocked by PuriFone/TAG?";
            mBquem.setAttribute('required', 'required');
            smartphonealertm.innerHTML = "";
            textmem.classList.add("show");
            textmem.classList.remove("hidden");
            mTexcm.setAttribute('required', 'required');
            motherimei.classList.add("hidden");
            motherimei.classList.remove("show");
            mImeim.removeAttribute('required');
            mImeim.value = "";
            if (moiseds == "Skver") {
                stickmem.classList.add("show");
                stickmem.classList.remove("hidden");
                mstickml.innerHTML = "Does it have " + moiseds + " Sticker";
                mstickm.setAttribute('required', 'required');
            } else {
                stickmem.classList.add("hidden");
                stickmem.classList.remove("show");
                mstickml.innerHTML = "";
                mstickm.removeAttribute('required');
                mstickm.value = mstickm.querySelector('option:first-of-type').value;
            }
            mBquem.options[5].remove();
                mBquem.options[4].remove();
                mBquem.options[3].remove();
                mBquem.options[2].remove();
                mBquem.options[1].remove();
                mBquem.options[0].remove();
                var optionElement1 = document.createElement("option");
                        optionElement1.value = "";
                        optionElement1.textContent = "Yes/No";
                        mBquem.appendChild(optionElement1);
                        optionElement1.classList.add("hidden");
                        optionElement1.classList.remove("show");
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = "Yes";
                        optionElement2.textContent = "Yes";
                        mBquem.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "No";
                        optionElement3.textContent = "No";
                        mBquem.appendChild(optionElement3);
                        mBquem.value = mBquem.querySelector('option:first-of-type').value;
                        mBquem.setAttribute('name','mBquem');
                        motherotherstickers.removeAttribute('required');
                        motherotherstickers.removeAttribute('name');
                        otherstickermother.classList.add("hidden");
                        otherstickermother.classList.remove("show");
        }
    }

    function motherothersticker() {
        var mBquem = document.getElementById("mBquem").value;
        var mBquems = document.getElementById("mBquem");
        var otherstickermother = document.getElementById("otherstickermother");
        var motherotherstickers = document.getElementById("motherotherstickers");
        if(mBquem == 'Other'){
        mBquems.removeAttribute('name');
        otherstickermother.classList.add("show");
        otherstickermother.classList.remove("hidden");
        motherotherstickers.setAttribute('required','required');
        motherotherstickers.setAttribute('name','mBquem');
    }else{
        mBquems.setAttribute('name','mBquem');
        motherotherstickers.removeAttribute('required');
        otherstickermother.classList.add("hidden");
        otherstickermother.classList.remove("show");
    }

    }


function myFunction(selectElement) {
    var additionalmodel = selectElement.value;
    var blockquestioncontainer = selectElement.closest('.col-md-6').querySelector('.bqcontainer');
    var mBlok = selectElement.closest('.col-md-6').querySelector('.mblokc');
    var mBque = selectElement.closest('.col-md-6').querySelector('.mbquec');
    var mImei = selectElement.closest('.col-md-6').querySelector('.mImeic');
    var mTexc = selectElement.closest('.col-md-6').querySelector('.mTexcc');
    var mstick = selectElement.closest('.col-md-6').querySelector('.mstickc');
    var smarphonecontaineralert = selectElement.closest('.col-md-6').querySelector('.smartalrtcont');
    var imeicontainer = selectElement.closest('.col-md-6').querySelector('.imeicont');
    var textcapibilitiescontainer = selectElement.closest('.col-md-6').querySelector('.textcapibilitiescont');
    var stikercontainer = selectElement.closest('.col-md-6').querySelector('.stikercont');
    var stickerlabel = selectElement.closest('.col-md-6').querySelector('.stickerlabelc');
    var moiseds = document.getElementById("moised").value;
    var otherstickercontainer = selectElement.closest('.col-md-6').querySelector('.otherstickercontainer');
    var otherstickers = selectElement.closest('.col-md-6').querySelector('.otherstickers');
    if (additionalmodel == "Smartphone") {
        blockquestioncontainer.classList.add("hidden");
        blockquestioncontainer.classList.remove("show");
        smarphonecontaineralert.innerHTML = "Smartphone information should be provided to the smartphone and tablet section below.";
        imeicontainer.classList.add("hidden");
        imeicontainer.classList.remove("show");
        textcapibilitiescontainer.classList.add("hidden");
        textcapibilitiescontainer.classList.remove("show");
        stikercontainer.classList.add("hidden");
        stikercontainer.classList.remove("show");
        mBlok.removeAttribute('required');
        mBque.removeAttribute('required');
        mImei.removeAttribute('required');
        mTexc.removeAttribute('required');
        mstick.removeAttribute('required');
        mBlok.value = "";
        mBque.value = mBque.querySelector('option:first-of-type').value;
        mImei.value = "";
        mTexc.value = mTexc.querySelector('option:first-of-type').value;
        mstick.value = mstick.querySelector('option:first-of-type').value;
        mBque.options[5].remove();
        mBque.options[4].remove();
        mBque.options[3].remove();
        mBque.options[2].remove();
        mBque.options[1].remove();
        mBque.options[0].remove();
        var optionElement1 = document.createElement("option");
                optionElement1.value = "";
                optionElement1.textContent = "Yes/No";
                mBque.appendChild(optionElement1);
                optionElement1.classList.add("hidden");
                optionElement1.classList.remove("show");
            var optionElement2 = document.createElement("option");
                optionElement2.value = "Yes";
                optionElement2.textContent = "Yes";
                mBque.appendChild(optionElement2);
            var optionElement3 = document.createElement("option");
                optionElement3.value = "No";
                optionElement3.textContent = "No";
                mBque.appendChild(optionElement3);
                mBque.value = mBque.querySelector('option:first-of-type').value;
                mBque.setAttribute('name','mBque[]');
                otherstickers.removeAttribute('required');
                otherstickers.removeAttribute('name');
                otherstickercontainer.classList.add("hidden");
                otherstickercontainer.classList.remove("show");
    } else if (additionalmodel == "Other") {
        blockquestioncontainer.classList.add("hidden");
        blockquestioncontainer.classList.remove("show");
        smarphonecontaineralert.innerHTML = "";
        imeicontainer.classList.add("show");
        imeicontainer.classList.remove("hidden");
        mImei.setAttribute('required', 'required');
        textcapibilitiescontainer.classList.add("hidden");
        textcapibilitiescontainer.classList.remove("show");
        stikercontainer.classList.add("hidden");
        stikercontainer.classList.remove("show");
        mBlok.removeAttribute('required');
        mBque.removeAttribute('required');
        mTexc.removeAttribute('required');
        mstick.removeAttribute('required');
        mBlok.value = "";
        mBque.value = mBque.querySelector('option:first-of-type').value;
        mTexc.value = mTexc.querySelector('option:first-of-type').value;
        mstick.value = mstick.querySelector('option:first-of-type').value;
        mBque.options[5].remove();
        mBque.options[4].remove();
        mBque.options[3].remove();
        mBque.options[2].remove();
        mBque.options[1].remove();
        mBque.options[0].remove();
        var optionElement1 = document.createElement("option");
                optionElement1.value = "";
                optionElement1.textContent = "Yes/No";
                mBque.appendChild(optionElement1);
                optionElement1.classList.add("hidden");
                optionElement1.classList.remove("show");
            var optionElement2 = document.createElement("option");
                optionElement2.value = "Yes";
                optionElement2.textContent = "Yes";
                mBque.appendChild(optionElement2);
            var optionElement3 = document.createElement("option");
                optionElement3.value = "No";
                optionElement3.textContent = "No";
                mBque.appendChild(optionElement3);
                mBque.value = mBque.querySelector('option:first-of-type').value;
                mBque.setAttribute('name','mBque[]');
                otherstickers.removeAttribute('required');
                otherstickers.removeAttribute('name');
                otherstickercontainer.classList.add("hidden");
                otherstickercontainer.classList.remove("show");
        
    } else if (additionalmodel == "Nokia 105") {
        blockquestioncontainer.classList.add("show");
        blockquestioncontainer.classList.remove("hidden");
        mBlok.value = "Do you have version 2021 or later?";
        mBque.setAttribute('required', 'required');
        smarphonecontaineralert.innerHTML = "This can be checked by dialing*#0000#";
        imeicontainer.classList.add("hidden");
        imeicontainer.classList.remove("show");
        textcapibilitiescontainer.classList.add("show");
        textcapibilitiescontainer.classList.remove("hidden");
        if (moiseds == "Skver") {
            stikercontainer.classList.add("hidden");
            stikercontainer.classList.remove("show");
            stickerlabel.innerHTML = "Skver Sticker";
            mstick.setAttribute('required', 'required');
            mImei.removeAttribute('required');
            mImei.value = "";
        } else {
            stikercontainer.classList.add("hidden");
            stikercontainer.classList.remove("show");
            mImei.removeAttribute('required');
            mstick.removeAttribute('required');
            mImei.value = "";
            mstick.value = mstick.querySelector('option:first-of-type').value;
        }
        mBque.options[5].remove();
        mBque.options[4].remove();
        mBque.options[3].remove();
        mBque.options[2].remove();
        mBque.options[1].remove();
        mBque.options[0].remove();
        var optionElement1 = document.createElement("option");
                optionElement1.value = "";
                optionElement1.textContent = "Yes/No";
                mBque.appendChild(optionElement1);
                optionElement1.classList.add("hidden");
                optionElement1.classList.remove("show");
            var optionElement2 = document.createElement("option");
                optionElement2.value = "Yes";
                optionElement2.textContent = "Yes";
                mBque.appendChild(optionElement2);
            var optionElement3 = document.createElement("option");
                optionElement3.value = "No";
                optionElement3.textContent = "No";
                mBque.appendChild(optionElement3);
                mBque.value = mBque.querySelector('option:first-of-type').value;
                mBque.setAttribute('name','mBque[]');
                otherstickers.removeAttribute('required');
                otherstickers.removeAttribute('name');
                otherstickercontainer.classList.add("hidden");
                otherstickercontainer.classList.remove("show");
    } else if (additionalmodel == "Qin-Xiaomi"){
        blockquestioncontainer.classList.add("show");
        blockquestioncontainer.classList.remove("hidden");
                    mBlok.value = "Select the type of sticker your mobile have?";
                    mBque.setAttribute('required', 'required');
                    var optionElement4 = document.createElement("option");
                        optionElement4.value = "";
                        optionElement4.textContent = "SELECT";
                        optionElement4.classList.add("hidden");
                        optionElement4.classList.remove("show");
                        mBque.appendChild(optionElement4);
                    var optionElement = document.createElement("option");
                        optionElement.value = "TAG";
                        optionElement.textContent = "TAG";
                        mBque.appendChild(optionElement);
                    var optionElement1 = document.createElement("option");
                        optionElement1.value = "Syog";
                        optionElement1.textContent = "Syog";
                        mBque.appendChild(optionElement1);
                    var optionElement2 = document.createElement("option");
                        optionElement2.value = moiseds;
                        optionElement2.textContent = moiseds;
                        mBque.appendChild(optionElement2);
                    var optionElement3 = document.createElement("option");
                        optionElement3.value = "Other";
                        optionElement3.textContent = "Other";
                        mBque.appendChild(optionElement3);
                    var optionElement5 = document.createElement("option");
                        optionElement5.value = "None";
                        optionElement5.textContent = "None";
                        mBque.appendChild(optionElement5);
                        mBque.options[2].remove();
                        mBque.options[1].remove();
                        mBque.options[0].remove();
                        mBque.addEventListener('change',function() {
                            othersticker(this);
                          });
                        smarphonecontaineralert.innerHTML = "";
        imeicontainer.classList.add("show");
        imeicontainer.classList.remove("hidden");
        mImei.setAttribute('required', 'required');
        textcapibilitiescontainer.classList.add("show");
        textcapibilitiescontainer.classList.remove("hidden");
                        mBque.value = mBque.querySelector('option:first-of-type').value;
    } else if (additionalmodel == "LG Wine Smart") {
        if (moiseds == "Ezreini (Belz)") {
            blockquestioncontainer.classList.add("hidden");
            blockquestioncontainer.classList.remove("show");
            mBlok.removeAttribute('required');
            mBque.removeAttribute('required');
            mBlok.value = "";
            mBque.value = mBque.querySelector('option:first-of-type').value;
        } else {
            blockquestioncontainer.classList.add("show");
            blockquestioncontainer.classList.remove("hidden");
            mBlok.value = "Does it have an updated TAG Sticker?";
            mBque.setAttribute('required', 'required');
        }
        smarphonecontaineralert.innerHTML = "";
        imeicontainer.classList.add("show");
        imeicontainer.classList.remove("hidden");
        mImei.setAttribute('required', 'required');
        textcapibilitiescontainer.classList.add("show");
        textcapibilitiescontainer.classList.remove("hidden");
        stikercontainer.classList.add("show");
        stikercontainer.classList.remove("hidden");
        mstick.setAttribute('required', 'required');
        stickerlabel.innerHTML = moiseds + " Sticker";
        mBque.options[5].remove();
        mBque.options[4].remove();
        mBque.options[3].remove();
        mBque.options[2].remove();
        mBque.options[1].remove();
        mBque.options[0].remove();
        var optionElement1 = document.createElement("option");
                optionElement1.value = "";
                optionElement1.textContent = "Yes/No";
                mBque.appendChild(optionElement1);
                optionElement1.classList.add("hidden");
                optionElement1.classList.remove("show");
            var optionElement2 = document.createElement("option");
                optionElement2.value = "Yes";
                optionElement2.textContent = "Yes";
                mBque.appendChild(optionElement2);
            var optionElement3 = document.createElement("option");
                optionElement3.value = "No";
                optionElement3.textContent = "No";
                mBque.appendChild(optionElement3);
                mBque.value = mBque.querySelector('option:first-of-type').value;
                mBque.setAttribute('name','mBque[]');
                otherstickers.removeAttribute('required');
                otherstickers.removeAttribute('name');
                otherstickercontainer.classList.add("hidden");
                otherstickercontainer.classList.remove("show");
    } else {
        blockquestioncontainer.classList.add("show");
        blockquestioncontainer.classList.remove("hidden");
        mBlok.value = "Is it blocked by PuriFone/TAG?";
        mBlok.classList.add("w-50");
        mBque.setAttribute('required', 'required');
        smarphonecontaineralert.innerHTML = "";
        imeicontainer.classList.add("hidden");
        imeicontainer.classList.remove("show");
        textcapibilitiescontainer.classList.add("show");
        textcapibilitiescontainer.classList.remove("hidden");
        if (moiseds == "Skver") {
            stikercontainer.classList.add("hidden");
            stikercontainer.classList.remove("show");
            stickerlabel.innerHTML = "Skver Sticker";
            mstick.setAttribute('required', 'required');
            mImei.removeAttribute('required');
            mImei.value = "";
        } else {
            stikercontainer.classList.add("hidden");
            stikercontainer.classList.remove("show");
            mImei.removeAttribute('required');
            mstick.removeAttribute('required');
            mImei.value = "";
            mstick.value = mstick.querySelector('option:first-of-type').value;
        }
        mBque.options[5].remove();
        mBque.options[4].remove();
        mBque.options[3].remove();
        mBque.options[2].remove();
        mBque.options[1].remove();
        mBque.options[0].remove();
        var optionElement1 = document.createElement("option");
                optionElement1.value = "";
                optionElement1.textContent = "Yes/No";
                mBque.appendChild(optionElement1);
                optionElement1.classList.add("hidden");
                optionElement1.classList.remove("show");
            var optionElement2 = document.createElement("option");
                optionElement2.value = "Yes";
                optionElement2.textContent = "Yes";
                mBque.appendChild(optionElement2);
            var optionElement3 = document.createElement("option");
                optionElement3.value = "No";
                optionElement3.textContent = "No";
                mBque.appendChild(optionElement3);
                mBque.value = mBque.querySelector('option:first-of-type').value;
                mBque.setAttribute('name','mBque[]');
                otherstickers.removeAttribute('required');
                otherstickers.removeAttribute('name');
                otherstickercontainer.classList.add("hidden");
                otherstickercontainer.classList.remove("show");
    }
}

    function othersticker(selectElement) {
        var additionalmodel = selectElement.value;
    var otherstickercontainer = selectElement.closest('.col-md-6').querySelector('.otherstickercontainer');
    var otherstickers = selectElement.closest('.col-md-6').querySelector('.otherstickers');
    if(additionalmodel == 'Other'){
        selectElement.removeAttribute('name');
        otherstickercontainer.classList.add("show");
        otherstickercontainer.classList.remove("hidden");
        otherstickers.setAttribute('required','required');
        otherstickers.setAttribute('name','mBque[]');
}else{
    selectElement.setAttribute('name','mBque[]');
    otherstickers.removeAttribute('required');
    otherstickercontainer.classList.add("hidden");
    otherstickercontainer.classList.remove("show");
}

}
    var cloneCount = 0;

    function cloneElement() {
        event.preventDefault();
        cloneCount++;
        var elementToClone = document.getElementById("brikclone");
        var clonedElement = elementToClone.cloneNode(true);
        clonedElement.classList.add("show");
        clonedElement.classList.remove("hidden");
        // Generate unique IDs for the cloned elements
        var uniqueId = "brikclone-" + cloneCount;
        clonedElement.id = uniqueId;
        clonedElement.querySelector('.ownerclss').id = "mOwner-" + cloneCount;
        clonedElement.querySelector('.ownerclss').setAttribute('required', 'required');
        clonedElement.querySelector('.modelclss').id = "mMods-" + cloneCount;
        clonedElement.querySelector('.modelclss').setAttribute('required', 'required');
        clonedElement.querySelector('.bqcontainer').id = "blockquestioncontainer-" + cloneCount;
        clonedElement.querySelector('.mblokc').id = "mBlok-" + cloneCount;
        clonedElement.querySelector('.mbquec').id = "mBque-" + cloneCount;
        clonedElement.querySelector('.smartalrtcont').id = "smarphonecontaineralert-" + cloneCount;
        clonedElement.querySelector('.imeicont').id = "imeicontainer-" + cloneCount;
        clonedElement.querySelector('.mImeic').id = "mImei-" + cloneCount;
        clonedElement.querySelector('.textcapibilitiescont').id = "textcapibilitiescontainer-" + cloneCount;
        clonedElement.querySelector('.mTexcc').id = "mTexc-" + cloneCount;
        clonedElement.querySelector('.stikercont').id = "stikercontainer-" + cloneCount;
        clonedElement.querySelector('.stickerlabelc').id = "stickerlabel-" + cloneCount;
        clonedElement.querySelector('.mstickc').id = "mstick-" + cloneCount;

        // Remove the delete button from the cloned element
        clonedElement.querySelector('.input-group-text .btn-danger').remove();

        // Add the delete button to the cloned element
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteElement(clonedElement);
        };
        clonedElement.querySelector('.input-group-text').appendChild(deleteButton);

        // Add the cloned element to the container
        var morebrikcontainer = document.getElementById("morebrikcontainer");
        morebrikcontainer.appendChild(clonedElement);

    }

    function deleteElement(element) {
        element.remove();
    }


    //basic device javascript end
    function opendesktopform() {
        var desktopquestions = document.getElementById("desktopquestions");
        var mduser = document.getElementById("mduser");
        var mdtype = document.getElementById("mdtype");
        var desktopclone1 = document.querySelector('.desktopclone1');
        var nomoredesktopclone2 = document.querySelector('.nomoredesktopclone2');
        desktopquestions.classList.add("show");
        desktopquestions.classList.remove("hidden");
        mduser.setAttribute('required', 'required');
        mdtype.setAttribute('required', 'required');
        desktopclone1.setAttribute('required', 'required');
        nomoredesktopclone2.setAttribute('required', 'required');


    }

    function closedesktopform() {
        var desktopquestions = document.getElementById("desktopquestions");
        var mduser = document.getElementById("mduser");
        var mdtype = document.getElementById("mdtype");
        var mfiln = document.querySelector('.mfiln');
        var mofil = document.querySelector('.mofil');
        var mfilt = document.querySelector('.mfilt');
        var mfili = document.querySelector('.mfili');
        var mfpoli = document.querySelector('.mfpoli');
        var mwhy = document.querySelector('.mwhy');
        var desktopclone1 = document.querySelector('.desktopclone1');
        var nomoredesktopclone2 = document.querySelector('.nomoredesktopclone2');
        desktopquestions.classList.add("hidden");
        desktopquestions.classList.remove("show");
        mfiln.classList.add("hidden");
        mfiln.classList.remove("show");
        mofil.classList.add("hidden");
        mofil.classList.remove("show");
        mfilt.classList.add("hidden");
        mfilt.classList.remove("show");
        mfili.classList.add("hidden");
        mfili.classList.remove("show");
        mfpoli.classList.add("hidden");
        mfpoli.classList.remove("show");
        mwhy.classList.add("hidden");
        mwhy.classList.remove("show");
        mduser.removeAttribute('required');
        mdtype.removeAttribute('required');
        desktopclone1.removeAttribute('required');
        nomoredesktopclone2.removeAttribute('required');
        mduser.value = mduser.querySelector('option:first-of-type').value;
        mdtype.value = mdtype.querySelector('option:first-of-type').value;
        mfiln.value = mfiln.querySelector('option:first-of-type').value;
        mofil.value = "";
        mfilt.value = mfilt.querySelector('option:first-of-type').value;
        mfili.value = "";
        mfpoli.value = mfpoli.querySelector('option:first-of-type').value;
        mwhy.value = "";
    }



function myNoMoreCloneFunction(selectElement) {
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    var addingagain = selectElement.closest('.originalss').querySelector('.addingagain');
    var desktopclone1 = selectElement.closest('.originalss').querySelector('.desktopclone1');
    var nomoredesktopclone2 = selectElement.closest('.originalss').querySelector('.nomoredesktopclone2');
    addingmoredesktop.classList.add("hidden");
    addingmoredesktop.classList.remove("show");
    addingagain.classList.add("show");
    addingagain.classList.remove("hidden");
    desktopclone1.removeAttribute('required');
    nomoredesktopclone2.removeAttribute('required');
}

function myPreviousoptionFunction(selectElement) {
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    var addingagain = selectElement.closest('.originalss').querySelector('.addingagain');
    var desktopclone1 = selectElement.closest('.originalss').querySelector('.desktopclone1');
    var nomoredesktopclone2 = selectElement.closest('.originalss').querySelector('.nomoredesktopclone2');
    addingmoredesktop.classList.add("show");
    addingmoredesktop.classList.remove("hidden");
    addingagain.classList.add("hidden");
    addingagain.classList.remove("show");
    desktopclone1.setAttribute('required', 'required');
    nomoredesktopclone2.setAttribute('required', 'required');
}
var arrayapp = [];

function insertAppAndUrl(selectElement) {
    var insertBtn = selectElement.value;
    var inputValue = selectElement.closest('.originalss').querySelector('.inputValue').value;
    var display = selectElement.closest('.originalss').querySelector('.display');
    arrayapp.push(inputValue).value;
    display.innerHTML = arrayapp.join(", ");
    display.value = arrayapp.join(", ");
}

function myDesktopFunction(selectElement) {
    var devicetype = selectElement.value;
    var appliurl = selectElement.closest('.originalss').querySelector('.appliurl');
    var mfiln = selectElement.closest('.originalss').querySelector('.mfiln');
    var mofil = selectElement.closest('.originalss').querySelector('.mofil');
    var mfilt = selectElement.closest('.originalss').querySelector('.mfilt');
    if (devicetype == "Home Computer") {
        appliurl.classList.add("show");
        appliurl.classList.remove("hidden");
        mfiln.classList.add("show");
        mfiln.classList.remove("hidden");
        mfiln.setAttribute('required', 'required');
    } else if (devicetype == "Office Computer") {
        appliurl.classList.add("hidden");
        appliurl.classList.remove("show");
        mfiln.classList.add("show");
        mfiln.classList.remove("hidden");
        mfiln.setAttribute('required', 'required');
    } else if (devicetype == "") {
        appliurl.classList.add("hidden");
        appliurl.classList.remove("show");
        mfiln.classList.add("hidden");
        mfiln.classList.remove("show");
        mfiln.removeAttribute('required');
    } else {
        appliurl.classList.add("hidden");
        appliurl.classList.remove("show");
        mfiln.classList.add("hidden");
        mfiln.classList.remove("show");
        mfiln.removeAttribute('required');
    }
}

function myFilternameFunction(selectElement) {
    var mfiln = selectElement.value;
    var mofil = selectElement.closest('.originalss').querySelector('.mofil');
    var mfilt = selectElement.closest('.originalss').querySelector('.mfilt');
    var mfili = selectElement.closest('.originalss').querySelector('.mfili');
    var mfpoli = selectElement.closest('.originalss').querySelector('.mfpoli');
    var mwhy = selectElement.closest('.originalss').querySelector('.mwhy');
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    if (mfiln == "Other") {
        mofil.classList.add("show");
        mofil.classList.remove("hidden");
        addingmoredesktop.classList.add("show");
        addingmoredesktop.classList.remove("hidden");
        mfilt.classList.add("hidden");
        mfilt.classList.remove("show");
        mfili.classList.add("hidden");
        mfili.classList.remove("show");
        mfpoli.classList.add("hidden");
        mfpoli.classList.remove("show");
        mofil.setAttribute('required', 'required');
        mfilt.removeAttribute('required');
        mfili.removeAttribute('required');
        mfpoli.removeAttribute('required');
        mfilt.value = mfilt.querySelector('option:first-of-type').value;
        mfili.value = "";
        mfpoli.value = mfpoli.querySelector('option:first-of-type').value;
        mwhy.value = "";
    } else if (mfiln == "") {
        mofil.classList.add("hidden");
        mofil.classList.remove("show");
        mfilt.classList.add("hidden");
        mfilt.classList.remove("show");
        mfili.classList.add("hidden");
        mfili.classList.remove("show");
        mfpoli.classList.add("hidden");
        mfpoli.classList.remove("show");
        mofil.removeAttribute('required');
        mfilt.removeAttribute('required');
        mfili.removeAttribute('required');
        mfpoli.removeAttribute('required');
        mofil.value = "";
        mfilt.value = mfilt.querySelector('option:first-of-type').value;
        mfili.value = "";
        mfpoli.value = mfpoli.querySelector('option:first-of-type').value;
        mwhy.value = "";
    } else if (mfiln == "No Filter") {
        mofil.classList.add("hidden");
        mofil.classList.remove("show");
        addingmoredesktop.classList.add("show");
        addingmoredesktop.classList.remove("hidden");
        mfilt.classList.add("hidden");
        mfilt.classList.remove("show");
        mfili.classList.add("hidden");
        mfili.classList.remove("show");
        mfpoli.classList.add("hidden");
        mfpoli.classList.remove("show");
        mofil.removeAttribute('required');
        mfilt.removeAttribute('required');
        mfili.removeAttribute('required');
        mfpoli.removeAttribute('required');
        mofil.value = "";
        mfilt.value = mfilt.querySelector('option:first-of-type').value;
        mfili.value = "";
        mfpoli.value = mfpoli.querySelector('option:first-of-type').value;
        mwhy.value = "";
    } else {
        mofil.classList.add("hidden");
        mofil.classList.remove("show");
        mfilt.classList.add("show");
        mfilt.classList.remove("hidden");
        mfili.classList.add("show");
        mfili.classList.remove("hidden");
        mfpoli.classList.add("show");
        mfpoli.classList.remove("hidden");
        addingmoredesktop.classList.add("hidden");
        addingmoredesktop.classList.remove("show");
        mfili.setAttribute('required', 'required');
        mfpoli.setAttribute('required', 'required');
        mofil.removeAttribute('required');
        mfilt.setAttribute('required', 'required');
        mofil.value = "";
    }
}

function myPolicyFunction(selectElement) {
    var mfpoli = selectElement.value;
    var mwhy = selectElement.closest('.originalss').querySelector('.mwhy');
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    if (mfpoli == "Cannot be under kehilla policy") {
        mwhy.classList.add("show");
        mwhy.classList.remove("hidden");
        mwhy.setAttribute('required', 'required');
        addingmoredesktop.classList.add("show");
        addingmoredesktop.classList.remove("hidden");
    } else if (mfpoli != "Cannot be under kehilla policy" && mfpoli != "") {
        mwhy.classList.add("hidden");
        mwhy.classList.remove("show");
        mwhy.removeAttribute('required');
        mwhy.value = "";
        addingmoredesktop.classList.add("show");
        addingmoredesktop.classList.remove("hidden");
    } else { }
}




    var cloneDesktopCount = 0;

    function cloneDesktopElement() {
        cloneDesktopCount++;
        var elementToClone = document.getElementById("originalss");
        var clonedElement = elementToClone.cloneNode(true);
        // Generate unique IDs for the cloned elements
        var uniqueId = "desktopclone-" + cloneDesktopCount;
        clonedElement.id = uniqueId;
        arrayapp = [];
        clonedElement.querySelector('.mduser').id = "mduser-" + cloneDesktopCount;
        clonedElement.querySelector('.mduser').setAttribute('required', 'required');
        clonedElement.querySelector('.mdtype').id = "mdtype-" + cloneDesktopCount;
        clonedElement.querySelector('.mdtype').setAttribute('required', 'required');
        clonedElement.querySelector('.mfiln').id = "mfiln-" + cloneDesktopCount;
        clonedElement.querySelector('.mofil').id = "mofil-" + cloneDesktopCount;
        clonedElement.querySelector('.mfilt').id = "mfilt-" + cloneDesktopCount;
        clonedElement.querySelector('.mfili').id = "mfili-" + cloneDesktopCount;
        clonedElement.querySelector('.mfpoli').id = "mfpoli-" + cloneDesktopCount;
        clonedElement.querySelector('.mwhy').id = "mwhy-" + cloneDesktopCount;
        clonedElement.querySelector('.deldev').id = "deldev-" + cloneDesktopCount;
        clonedElement.querySelector('.inputValue').id = "inputValue-" + cloneDesktopCount;
        clonedElement.querySelector('.display').id = "display-" + cloneDesktopCount;
        clonedElement.querySelector('.mfiln').value = mfilt.querySelector('option:first-of-type').value;
        clonedElement.querySelector('.mofil').value = "";
        clonedElement.querySelector('.mfilt').value = mfilt.querySelector('option:first-of-type').value;
        clonedElement.querySelector('.mfili').value = "";
        clonedElement.querySelector('.mfpoli').value = mfpoli.querySelector('option:first-of-type').value;
        clonedElement.querySelector('.mwhy').value = "";
        clonedElement.querySelector('.inputValue').value = "";
        clonedElement.querySelector('.display').value = "";
        clonedElement.querySelector('.display').innerHTML = "";
        clonedElement.querySelector('.mfiln').removeAttribute('required');
        clonedElement.querySelector('.mofil').removeAttribute('required');
        clonedElement.querySelector('.mfilt').removeAttribute('required');
        clonedElement.querySelector('.mfili').removeAttribute('required');
        clonedElement.querySelector('.mfpoli').removeAttribute('required');
        clonedElement.querySelector('.mwhy').removeAttribute('required');
        clonedElement.querySelector('.mfiln').classList.add("hidden");
        clonedElement.querySelector('.mfiln').classList.remove("show");
        clonedElement.querySelector('.mofil').classList.add("hidden");
        clonedElement.querySelector('.mofil').classList.remove("show");
        clonedElement.querySelector('.mfilt').classList.add("hidden");
        clonedElement.querySelector('.mfilt').classList.remove("show");
        clonedElement.querySelector('.mfili').classList.add("hidden");
        clonedElement.querySelector('.mfili').classList.remove("show");
        clonedElement.querySelector('.mfpoli').classList.add("hidden");
        clonedElement.querySelector('.mfpoli').classList.remove("show");
        clonedElement.querySelector('.mwhy').classList.add("hidden");
        clonedElement.querySelector('.mwhy').classList.remove("show");
        clonedElement.querySelector('.deldev').classList.add("show");
        clonedElement.querySelector('.deldev').classList.remove("hidden");
        clonedElement.querySelector('.appliurl').classList.add("hidden");
        clonedElement.querySelector('.appliurl').classList.remove("show");
        clonedElement.querySelector('.addingmoredesktop').classList.add("hidden");
        clonedElement.querySelector('.addingmoredesktop').classList.remove("show");
        clonedElement.querySelector('.addingagain').classList.add("hidden");
        clonedElement.querySelector('.addingagain').classList.remove("show");
        clonedElement.querySelector('.appliurl').id = "appliurl-" + cloneDesktopCount;
        clonedElement.querySelector('.headingOne').id = "headingOne-" + cloneDesktopCount;
        clonedElement.querySelector('.appsurlb').id = "appsurlb-" + cloneDesktopCount;
        clonedElement.querySelector('.appsurlb').setAttribute('data-bs-target', '#appsurl-' + cloneDesktopCount);
        clonedElement.querySelector('.appsurl').id = "appsurl-" + cloneDesktopCount;
        clonedElement.querySelector('.insertBtn').id = "insertBtn-" + cloneDesktopCount;
        clonedElement.querySelector('.inputValue').id = "inputValue-" + cloneDesktopCount;
        clonedElement.querySelector('.display').id = "display-" + cloneDesktopCount;
        clonedElement.querySelector('.addingmoredesktop').id = "addingmoredesktop-" + cloneDesktopCount;
        clonedElement.querySelector('.desktopclone1').id = "desktopclone1-" + cloneDesktopCount;
        clonedElement.querySelector('.desktopclone1').checked = false;
        clonedElement.querySelector('.nomoredesktopclone2').id = "nomoredesktopclone2-" + cloneDesktopCount;
        clonedElement.querySelector('.addingagain').id = "addingagain-" + cloneDesktopCount;
        clonedElement.querySelector('.backtopreviousoption').id = "backtopreviousoption-" + cloneDesktopCount;
        // Remove the delete button from the cloned element
        clonedElement.querySelector('.deldev .btn-danger').remove();
        // Add the delete button to the cloned element
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteElement(clonedElement);
        };
        clonedElement.querySelector('.deldev').appendChild(deleteButton);
        // Add the cloned element to the container
        var morepcdevcontainer = document.getElementById("morepcdevcontainer");
        morepcdevcontainer.appendChild(clonedElement);
    }

    function deleteDesktopElement(element) {
        element.remove();
    }
    function openandroidform() {
        var androidQuestions = document.getElementById("androidQuestions");
        var smduser = document.getElementById("smduser");
        var smdtype = document.getElementById("smdtype");
        var smfiln = document.getElementById("smfiln");
        var otherAndroidYes = document.querySelector('.otherAndroidYes');
        var otherAndroidNone = document.querySelector('.otherAndroidNone');
        androidQuestions.classList.add("show");
        androidQuestions.classList.remove("hidden");
        smduser.setAttribute('required', 'required');
        smdtype.setAttribute('required', 'required');
        smfiln.setAttribute('required', 'required');
        otherAndroidYes.setAttribute('required', 'required');
        otherAndroidNone.setAttribute('required', 'required');
    }

    function closeandroidform() {
        var androidQuestions = document.getElementById("androidQuestions");
        var smduser = document.querySelector('.smduser');
        var smdtype = document.querySelector('.smdtype');
        var smfiln = document.querySelector('.smfiln');
        var smofil = document.querySelector('.smofil');
        var smfili = document.querySelector('.smfili');
        var smfpoli = document.querySelector('.smfpoli');
        var smwhat = document.querySelector('.smwhat');
        var otherAndroidYes = document.querySelector('.otherAndroidYes');
        var otherAndroidNone = document.querySelector('.otherAndroidNone');
        androidQuestions.classList.add("hidden");
        androidQuestions.classList.remove("show");
        smduser.removeAttribute('required');
        smdtype.removeAttribute('required');
        smfiln.removeAttribute('required');
        smofil.removeAttribute('required');
        smfili.removeAttribute('required');
        smfpoli.removeAttribute('required');
        smwhat.removeAttribute('required');
        smduser.value = smduser.querySelector('option:first-of-type').value;
        smdtype.value = smdtype.querySelector('option:first-of-type').value;
        smfiln.value = smfiln.querySelector('option:first-of-type').value;
        smofil.value = "";
        smfili.value = "";
        smfpoli.value = smfpoli.querySelector('option:first-of-type').value;
        smwhat.value = smwhat.querySelector('option:first-of-type').value;
        otherAndroidYes.removeAttribute('required');
        otherAndroidNone.removeAttribute('required');
    }

    var cloneAndroidCount = 0;

    function cloneAndroidElement() {
        cloneAndroidCount++;
        var elementToClone = document.getElementById("androidOrigin");
        var clonedElement = elementToClone.cloneNode(true);
        // Generate unique IDs for the cloned elements
        var uniqueId = "androidclone-" + cloneAndroidCount;
        clonedElement.id = uniqueId;
        clonedElement.querySelector('.smduser').id = "smduser-" + cloneAndroidCount;
        clonedElement.querySelector('.smduser').setAttribute('required', 'required');
        clonedElement.querySelector('.smdtype').id = "smdtype-" + cloneAndroidCount;
        clonedElement.querySelector('.smdtype').setAttribute('required', 'required');
        clonedElement.querySelector('.smfiln').id = "smfiln-" + cloneAndroidCount;
        clonedElement.querySelector('.smfiln').setAttribute('required', 'required');
        clonedElement.querySelector('.smofil').id = "smofil-" + cloneAndroidCount;
        clonedElement.querySelector('.smfili').id = "smfili-" + cloneAndroidCount;
        clonedElement.querySelector('.smfpoli').id = "smfpoli-" + cloneAndroidCount;
        clonedElement.querySelector('.smwhat').id = "smwhat-" + cloneAndroidCount;
        clonedElement.querySelector('.androidRemoval').id = "androidRemoval-" + cloneAndroidCount;
        clonedElement.querySelector('.inputValuem').id = "inputValuem-" + cloneAndroidCount;
        clonedElement.querySelector('.displaym').id = "displaym-" + cloneAndroidCount;
        clonedElement.querySelector('.smfiln').value = mfilt.querySelector('option:first-of-type').value;
        clonedElement.querySelector('.smofil').value = "";
        clonedElement.querySelector('.smfili').value = "";
        clonedElement.querySelector('.smfpoli').value = mfpoli.querySelector('option:first-of-type').value;
        clonedElement.querySelector('.smwhat').value = "";
        clonedElement.querySelector('.inputValuem').value = "";
        clonedElement.querySelector('.displaym').value = "";
        clonedElement.querySelector('.displaym').innerHTML = "";
        clonedElement.querySelector('.smofil').removeAttribute('required');
        clonedElement.querySelector('.smfili').removeAttribute('required');
        clonedElement.querySelector('.smfpoli').removeAttribute('required');
        clonedElement.querySelector('.smwhat').removeAttribute('required');
        clonedElement.querySelector('.smofil').classList.add("hidden");
        clonedElement.querySelector('.smofil').classList.remove("show");
        clonedElement.querySelector('.smfili').classList.add("hidden");
        clonedElement.querySelector('.smfili').classList.remove("show");
        clonedElement.querySelector('.smfpoli').classList.add("hidden");
        clonedElement.querySelector('.smfpoli').classList.remove("show");
        clonedElement.querySelector('.smwhat').classList.add("hidden");
        clonedElement.querySelector('.smwhat').classList.remove("show");
        clonedElement.querySelector('.androidRemoval').classList.add("show");
        clonedElement.querySelector('.androidRemoval').classList.remove("hidden");
        clonedElement.querySelector('.addingmoreandroid').classList.add("hidden");
        clonedElement.querySelector('.addingmoreandroid').classList.remove("show");
        clonedElement.querySelector('.optionRetro').classList.add("hidden");
        clonedElement.querySelector('.optionRetro').classList.remove("show");
        clonedElement.querySelector('.appliurlm').id = "appliurlm-" + cloneAndroidCount;
        clonedElement.querySelector('.headingOnem').id = "headingOnem-" + cloneAndroidCount;
        clonedElement.querySelector('.appsurlbm').id = "appsurlbm-" + cloneAndroidCount;
        clonedElement.querySelector('.appsurlbm').setAttribute('data-bs-target', '#appsurlm-' + cloneAndroidCount);
        clonedElement.querySelector('.appsurlm').id = "appsurlm-" + cloneAndroidCount;
        clonedElement.querySelector('.insertBtnm').id = "insertBtnm-" + cloneAndroidCount;
        clonedElement.querySelector('.insertBtnm').removeAttribute("onclick");
        clonedElement.querySelector('.insertBtnm').removeAttribute("ontouchstart");
        clonedElement.querySelector('.insertBtnm').setAttribute("onclick", "insertAppAndUrlm" + cloneAndroidCount + "(this)");
        clonedElement.querySelector('.insertBtnm').setAttribute("ontouchstart", "insertAppAndUrlm" + cloneAndroidCount + "(this)");
        clonedElement.querySelector('.inputValuem').id = "inputValuem-" + cloneAndroidCount;
        clonedElement.querySelector('.displaym').id = "displaym-" + cloneAndroidCount;
        clonedElement.querySelector('.addingmoreandroid').id = "addingmoreandroid-" + cloneAndroidCount;
        clonedElement.querySelector('.otherAndroidYes').id = "otherAndroidYes-" + cloneAndroidCount;
        clonedElement.querySelector('.otherAndroidYes').checked = false;
        clonedElement.querySelector('.otherAndroidNone').id = "otherAndroidNone-" + cloneAndroidCount;
        clonedElement.querySelector('.optionRetro').id = "optionRetro-" + cloneAndroidCount;
        clonedElement.querySelector('.RetroToOption').id = "RetroToOption-" + cloneAndroidCount;
        var script = document.createElement('script');
        script.textContent = `
    var arrayapps${cloneAndroidCount} = [];
    function insertAppAndUrlm${cloneAndroidCount}(selectElement) {
      var insertBtnm = selectElement.value;
      var inputValuem = selectElement.closest('.androidOrigin').querySelector('.inputValuem').value;
      var displaym = selectElement.closest('.androidOrigin').querySelector('.displaym');
      arrayapps${cloneAndroidCount}.push(inputValuem).value;
      displaym.innerHTML = arrayapps${cloneAndroidCount}.join(", ");
      displaym.value = arrayapps${cloneAndroidCount}.join(", ");
    }
  `;
        clonedElement.appendChild(script);
        // Remove the delete button from the cloned element
        clonedElement.querySelector('.androidRemoval .btn-danger').remove();
        // Add the delete button to the cloned element
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteElement(clonedElement);
        };
        clonedElement.querySelector('.androidRemoval').appendChild(deleteButton);
        // Add the cloned element to the container
        var androidContainer = document.getElementById("androidContainer");
        androidContainer.appendChild(clonedElement);
    }

    function deleteAndroidElement(element) {
        element.remove();
    }

    document.addEventListener('DOMContentLoaded', function () {
        var formsubmit = document.getElementById('formsubmit');
        formsubmit.addEventListener('click', handleClickOrTouchsubmit);
        formsubmit.addEventListener('touchstart', handleClickOrTouchsubmit);
      
        function handleClickOrTouchsubmit(e) {
          e.preventDefault();
          var form = document.getElementById('id_ishur_form');
          var url = '../../backend/ishurApplicatin.php';
          var method = 'POST';
          var formData = new URLSearchParams(new FormData(form)).toString();
          if (form.checkValidity()) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
              if (xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                  // Redirect the user to another page
                  window.location = response.destination;
                } else if (response.status === 'smartphonealert') {
                  var smartphonewarning = document.getElementById('smartphonewarning');
                  smartphonewarning.innerHTML = 'Kindly provide details of your declared smartphone device above';
                } else if (response.status != 'smartphonealert') {
                  window.location = response.leanback;
                } else {
      
                }
              }
            };
            xhr.send(formData);
          } else {
            form.classList.add('was-validated');
          }
        }
      });
      