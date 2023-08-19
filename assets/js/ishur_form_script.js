//form submit
document.addEventListener('DOMContentLoaded', function () {
    var id_formSubmit = document.getElementById('id_formSubmit');
    id_formSubmit.addEventListener('click', handleClickOrTouchsubmit);
    id_formSubmit.addEventListener('touchstart', handleClickOrTouchsubmit);

    function handleClickOrTouchsubmit(e) {
        e.preventDefault();
        var form = document.getElementById('id_ishurForm');
        var url = '../../pages/ishurApplication.php';
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
                        // Redirect the user to another pages
                        window.location = response.destination;
                    } else {
                        var smartphonewarning = document.getElementById('smartphonewarning');
                        var response = JSON.parse(xhr.responseText);
                        var errorArray = response.destination;
                        var errorMessage = errorArray.join('<br>');
                        smartphonewarning.innerHTML = errorMessage;
                    }

                }
            };
            xhr.send(formData);
        } else {
            form.classList.add('was-validated');
        }
    }
});
//email & preference
function fathernone() {
    var fatheremailcontainer = document.getElementById('fatheremailinfo');
    var fatheremailinput = document.getElementById('id_father_emailAddress');
    fatheremailcontainer.classList.add("hidden");
    fatheremailcontainer.classList.remove("show");
    fatheremailinput.removeAttribute("required");
}
function fatheraccess() {
    var fatheremailcontainer = document.getElementById('fatheremailinfo');
    var fatheremailinput = document.getElementById('id_father_emailAddress');
    fatheremailcontainer.classList.add("show");
    fatheremailcontainer.classList.remove("hidden");
    fatheremailinput.setAttribute("required", "required");
}
function mothernone() {
    var motheremailcontainer = document.getElementById('motheremailinfo');
    var motheremailinput = document.getElementById('id_mother_emailAddress');
    motheremailcontainer.classList.add("hidden");
    motheremailcontainer.classList.remove("show");
    motheremailinput.removeAttribute("required");
}
function motheraccess() {
    var motheremailcontainer = document.getElementById('motheremailinfo');
    var motheremailinput = document.getElementById('id_mother_emailAddress');
    motheremailcontainer.classList.add("show");
    motheremailcontainer.classList.remove("hidden");
    motheremailinput.setAttribute("required", "required");
}
function mEmailAccount() {
    var mEmails = document.getElementById('username');
    var mPreferred = document.getElementById('preferredContactMethod');
    var fnone = document.getElementById('fnone');
    var mnone = document.getElementById('mnone');
    var homephoneno = document.getElementById('homephoneno');
    var mpfno = document.getElementById('mpfno');
    var mpmno = document.getElementById('mpmno');
    var fatheremailinput = document.getElementById('id_father_emailAddress').value;
    var motheremailinput = document.getElementById('id_mother_emailAddress').value;
    var homephonedetails = document.getElementById('id_home_contactNumber').value;
    var fmobile = document.getElementById('id_father_contactNumber').value;
    var mmobile = document.getElementById('id_mother_contactNumber').value;
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
//adding contact email
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
    var clonedInput = clonedElement.querySelector('input[name="emailAddress[]"]');
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
addmoreemailButton.addEventListener('click', addMoreEmail);
addmoreemailButton.addEventListener('touchstart', addMoreEmail);
//phone
function homephonenone() {
    var homephonecontainer = document.getElementById('homephonecontainer');
    var homephonedetails = document.getElementById('id_home_contactNumber');
    homephonecontainer.classList.add("hidden");
    homephonecontainer.classList.remove("show");
    homephonedetails.removeAttribute("required");
}
function homephoneadd() {
    var homephonecontainer = document.getElementById('homephonecontainer');
    var homephonedetails = document.getElementById('id_home_contactNumber');
    homephonecontainer.classList.add("show");
    homephonecontainer.classList.remove("hidden");
    homephonedetails.setAttribute("required", "required");
}
function fathermobilenone() {
    var fathermobcontainer = document.getElementById('fathermobcontainer');
    var fmobile = document.getElementById('id_father_contactNumber');
    fathermobcontainer.classList.add("hidden");
    fathermobcontainer.classList.remove("show");
    fmobile.removeAttribute("required");
}
function fathermobileadd() {
    var fathermobcontainer = document.getElementById('fathermobcontainer');
    var fmobile = document.getElementById('id_father_contactNumber');
    fathermobcontainer.classList.add("show");
    fathermobcontainer.classList.remove("hidden");
    fmobile.setAttribute("required", "required");
}
function mothermobilenone() {
    var mothermobilecontainer = document.getElementById('mothermobilecontainer');
    var mmobile = document.getElementById('id_mother_contactNumber');
    mothermobilecontainer.classList.add("hidden");
    mothermobilecontainer.classList.remove("show");
    mmobile.removeAttribute("required");
}
function mothermobileadd() {
    var mothermobilecontainer = document.getElementById('mothermobilecontainer');
    var mmobile = document.getElementById('id_mother_contactNumber');
    mothermobilecontainer.classList.add("show");
    mothermobilecontainer.classList.remove("hidden");
    mmobile.setAttribute("required", "required");
}
//adding contact phone
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
    var clonedInput = clonedElement.querySelector('input[name="mobileNumber[]"]');
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


function myMobile(mobileType) {
    var mobileDevice = mobileType.value;
    var TagContainer = mobileType.closest('.col-md-6').querySelector('.TagContainer');
    var StickerContainer = mobileType.closest('.col-md-6').querySelector('.StickerContainer');
    var ImeiContainer = mobileType.closest('.col-md-6').querySelector('.ImeiContainer');
    var TextContainer = mobileType.closest('.col-md-6').querySelector('.TextContainer');
    var moised = document.getElementById("moised").value;
    if (mobileType.length == 0) {
        return;
    } else {
        const xmlhttps = new XMLHttpRequest();
        xmlhttps.onload = function () {
            const responseData = JSON.parse(this.response);
            var tagValue = responseData.TagContainerValue;
            if (tagValue == 'Not Applicable') {
                TagContainer.innerHTML = '';
            } else {
                TagContainer.innerHTML = tagValue;
            }
            var stickerValue = responseData.stickerContainerValue;
            if (stickerValue == 'Not Applicable') {
                StickerContainer.innerHTML = '';
            } else {
                StickerContainer.innerHTML = stickerValue;
            }
            var ImeiValue = responseData.ImeiContainerValue;
            if (ImeiValue == 'Not Applicable') {
                ImeiContainer.innerHTML = '';
            } else {
                ImeiContainer.innerHTML = ImeiValue;
            }
            var TextValue = responseData.TextContainerValue;
            if (TextValue == 'Not Applicable') {
                TextContainer.innerHTML = '';
            } else {
                TextContainer.innerHTML = TextValue;
            }

        }

        xmlhttps.open("GET", "../../pages/form/basicmobileform.php?mtype=" + mobileDevice + "&kehilla=" + moised);
        xmlhttps.send();
    }
};
//Kehilla
function selectedkehilla(selectedkehilla) {
    var Basicphonequestions = document.getElementById("Basicphonequestions");
    var mainquestions = document.getElementById("mainquestions");
    var mainmobilequestions = document.getElementById("mainmobilequestions");
    Basicphonequestions.classList.remove("hidden");
    mainquestions.classList.remove("hidden");
    mainmobilequestions.classList.remove("hidden");
    const mobileDeviceSelects = document.querySelectorAll('.mobileDevice');

    mobileDeviceSelects.forEach(select => {
        // Store the original selected value in a custom attribute
        if (!select.hasAttribute('data-original-value')) {
            select.setAttribute('data-original-value', select.value);
        }

        // Set the select element's value back to the original value
        select.value = select.getAttribute('data-original-value');
    });
    if (selectedkehilla.length == 0) {
        document.getElementById("id_institution_container").innerHTML = "";
        document.getElementById("synagoguelabel").innerHTML = "";
        return;
    } else {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            const responseData = JSON.parse(this.response);
            document.getElementById("id_institution_container").innerHTML = responseData.institution;
            document.getElementById("synagoguelabel").innerHTML = responseData.synagoglabel;
            document.getElementById("synagogselect").classList.remove("hidden");
            document.getElementById("synagogselect").innerHTML = responseData.synagogueoption
        }
        xmlhttp.open("GET", "../../pages/form/getinstitutionoptions.php?sk=" + selectedkehilla);
        xmlhttp.send();
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
//institution
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
// basic mobile device


document.addEventListener("DOMContentLoaded", function () {
    function clonebesicphone() {
        var elementToClone = document.getElementById("cloneme");
        var clonedElement = elementToClone.cloneNode(true);
        clonedElement.classList.add("show");
        clonedElement.classList.remove("hidden");
        clonedElement.removeAttribute('id');

        var morebrikcontainer = document.getElementById("morebrikcontainer");
        morebrikcontainer.appendChild(clonedElement);

    };
    document.getElementById("addbrik").addEventListener("click", function () {
        clonebesicphone();
    });
    function removeAddressSet(event) {
        const removeButton = event.target;
        const addressSet = removeButton.closest(".address-set");
        addressSet.remove();
    };
    document.getElementById("morebrikcontainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            removeAddressSet(event);
        }
    });
});

//desktop

function opendesktopform(opendesktop) {
    var desktopquestions = opendesktop.closest('.col-md-12').querySelector('.desktopquestions');
    var deviceOwner = opendesktop.closest('.col-md-12').querySelector('.deviceOwner');
    desktopquestions.classList.remove("hidden");
    deviceOwner.setAttribute('required', 'required');

}

function closedesktopform(closedesktop) {
    var desktopquestions = closedesktop.closest('.col-md-12').querySelector('.desktopquestions');
    var deviceOwner = closedesktop.closest('.col-md-12').querySelector('.deviceOwner');
    desktopquestions.classList.add("hidden");
    deviceOwner.removeAttribute("required");
    deviceOwner.value = deviceOwner.querySelector('option:first-of-type').value;
}
//deviceowner
function deviceOwnerFunction(selectedOwner) {
    var deviceType = selectedOwner.closest('.originalss').querySelector('.deviceType');
    deviceType.classList.remove("hidden");
    deviceType.value = deviceType.querySelector('option:first-of-type').value;
}

//devicetype
function deviceTypeFunction(selectedType) {
    var filterName = selectedType.closest('.originalss').querySelector('.filterName');
    filterName.classList.remove("hidden");
    filterName.value = filterName.querySelector('option:first-of-type').value;
}

//selecting filter name
function filterNameFunction(filterNameselect) {
    var filterNamevalue = filterNameselect.value;
    var deviceType = filterNameselect.closest('.originalss').querySelector('.deviceType');
    var deviceTypeValue = deviceType.value;
    var otherFilterContainer = filterNameselect.closest('.originalss').querySelector('.otherFilterContainer');
    var otherFilter = filterNameselect.closest('.originalss').querySelector('.otherFilter');
    var addingmoredesktop = filterNameselect.closest('.originalss').querySelector('.addingmoredesktop');
    var filterEmailContainer = filterNameselect.closest('.originalss').querySelector('.filterEmailContainer');
    var filterEmail = filterNameselect.closest('.originalss').querySelector('.filterEmail');
    var filterPolicyContainer = filterNameselect.closest('.originalss').querySelector('.filterPolicyContainer');
    var filterPolicy = filterNameselect.closest('.originalss').querySelector('.filterPolicy');
    var appsurlcontainer = filterNameselect.closest('.originalss').querySelector('.appsurlcontainer');
    var requestedAccess = filterNameselect.closest('.originalss').querySelector('.requestedAccess');
    var filterType = filterNameselect.closest('.originalss').querySelector('.filterType');
    var requestedAccess = filterNameselect.closest('.originalss').querySelector('.requestedAccess');
    var otherFilter = filterNameselect.closest('.originalss').querySelector('.otherFilter');
    var filterPolicy = filterNameselect.closest('.originalss').querySelector('.filterPolicy');
    var filterEmail = filterNameselect.closest('.originalss').querySelector('.filterEmail');
    otherFilter.value = '';
    filterEmail.value = '';
    filterPolicy.value = filterPolicy.querySelector('option:first-of-type').value;
    filterType.value = filterType.querySelector('option:first-of-type').value;
    if (filterNamevalue == 'Other') {
        otherFilterContainer.classList.remove("hidden");
        otherFilter.setAttribute('required', 'required');
        filterType.classList.add("hidden");
        filterType.removeAttribute('required');
        filterEmailContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicyContainer.classList.add("hidden");
        filterPolicy.removeAttribute('required');
        addingmoredesktop.classList.remove("hidden");
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
    } else if (filterNamevalue == 'No Filter') {
        otherFilterContainer.classList.add("hidden");
        otherFilter.removeAttribute('required');
        filterType.classList.add("hidden");
        filterType.removeAttribute('required');
        filterEmailContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicyContainer.classList.add("hidden");
        filterPolicy.removeAttribute('required');
        addingmoredesktop.classList.remove("hidden");
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
    } else if ((deviceTypeValue == 'Home Desktop' || deviceTypeValue == 'Home Laptop') && filterNamevalue != 'No Filter' && filterNamevalue != 'Other') {
        otherFilterContainer.classList.add("hidden");
        otherFilter.removeAttribute('required');
        filterType.classList.remove("hidden");
        filterType.setAttribute('required', 'required');
        addingmoredesktop.classList.add("hidden");
        filterEmailContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicyContainer.classList.add("hidden");
        filterPolicy.removeAttribute('required');
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
    } else if ((deviceTypeValue == 'Office Desktop' || deviceTypeValue == 'Office Laptop') && filterNamevalue != 'No Filter' && filterNamevalue != 'Other') {
        otherFilterContainer.classList.add("hidden");
        otherFilter.removeAttribute('required');
        filterType.classList.add("hidden");
        filterType.removeAttribute('required');
        addingmoredesktop.classList.add("hidden");
        filterEmailContainer.classList.remove("hidden");
        filterEmail.setAttribute('required', 'required');
        filterPolicyContainer.classList.remove("hidden");
        filterPolicy.setAttribute('required', 'required');
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
    } else {
        otherFilterContainer.classList.add("hidden");
        otherFilter.removeAttribute('required');
        filterType.classList.add("hidden");
        filterType.removeAttribute('required');
        addingmoredesktop.classList.add("hidden");
        filterEmailContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicyContainer.classList.add("hidden");
        filterPolicy.removeAttribute('required');
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
    }
}
function filterTypeFunction(selectedfiltertype) {
    var filterTypevalue = selectedfiltertype.value;
    var filterEmailContainer = selectedfiltertype.closest('.originalss').querySelector('.filterEmailContainer');
    var filterEmail = selectedfiltertype.closest('.originalss').querySelector('.filterEmail');
    var filterPolicyContainer = selectedfiltertype.closest('.originalss').querySelector('.filterPolicyContainer');
    var filterPolicy = selectedfiltertype.closest('.originalss').querySelector('.filterPolicy');
    var appsurlcontainer = selectedfiltertype.closest('.originalss').querySelector('.appsurlcontainer');
    var requestedAccess = selectedfiltertype.closest('.originalss').querySelector('.requestedAccess');
    if (filterTypevalue == 'Filter') {
        appsurlcontainer.classList.remove("hidden");
        requestedAccess.setAttribute('required', 'required');
        filterEmailContainer.classList.remove("hidden");
        filterEmail.setAttribute('required', 'required');
        filterPolicyContainer.classList.remove("hidden");
        filterPolicy.setAttribute('required', 'required');
    } else {
        appsurlcontainer.classList.add("hidden");
        requestedAccess.removeAttribute('required');
        filterEmailContainer.classList.remove("hidden");
        filterEmail.setAttribute('required', 'required');
        filterPolicyContainer.classList.remove("hidden");
        filterPolicy.setAttribute('required', 'required');
    }
}
//selecting policy
function filterPolicyFunction(filterPolicyselect) {
    var filterPolicyValue = filterPolicyselect.value;
    var otherFilterContainer = filterPolicyselect.closest('.originalss').querySelector('.otherFilterContainer');
    var otherFilter = filterPolicyselect.closest('.originalss').querySelector('.otherFilter');
    var addingmoredesktop = filterPolicyselect.closest('.originalss').querySelector('.addingmoredesktop');
    if (filterPolicyValue == 'Cannot be under kehilla policy (Mosdos Technology Office)') {
        otherFilterContainer.classList.remove("hidden");
        otherFilter.setAttribute('required', 'required');
        otherFilter.setAttribute('placeholder', 'Specify why it cannot be under MTO');
        addingmoredesktop.classList.remove("hidden");
    } else {
        otherFilterContainer.classList.add("hidden");
        otherFilter.removeAttribute('required');
        addingmoredesktop.classList.remove("hidden");
    }
}
//other info
function filterAdditionalInformationFunction(filterAdditionalInformationselect) {
    var filterAdditionalInformationValue = filterAdditionalInformationselect.value;
    var addingmoredesktop = filterAdditionalInformationselect.closest('.originalss').querySelector('.addingmoredesktop');
    if (filterAdditionalInformationValue != '') {
        addingmoredesktop.classList.remove("hidden");
    } else {
        addingmoredesktop.classList.add("hidden");
    }
}
//apps and url push array
var arrayapp = [];
function insertAppAndUrl(selectElement) {
    var inputValues = selectElement.closest('.originalss').querySelector('.inputValue');
    var inputValue = inputValues.value;
    var requestedAccess = selectElement.closest('.originalss').querySelector('.requestedAccess');
    if (inputValue.length > 0) {
        arrayapp.push(inputValue);
        requestedAccess.innerHTML = arrayapp.join(", ");
        requestedAccess.value = arrayapp.join(", ");
        inputValues.innerHTML = 'Type Websites/Category here. . .';
        inputValues.value = '';
        inputValues.setAttribute('placeholder', 'Type Websites/Category here. . .');
    }
}
var cloneDesktopCount = 0;
function cloneDesktopElement(selectElement) {
    var elementToClone = document.getElementById("originalss");
    var morepcdevcontainer = document.getElementById("morepcdevcontainer");
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    var addingagain = selectElement.closest('.originalss').querySelector('.addingagain');
    addingmoredesktop.classList.add("hidden");
    addingagain.classList.remove("hidden");
    var clonedElement = elementToClone.cloneNode(true);
    clonedElement.querySelector('.deldev').classList.remove("hidden");
    clonedElement.removeAttribute('id');
    var deviceOwner = clonedElement.querySelector('.deviceOwner');
    clonedElement.querySelector('.deviceOwner').value = deviceOwner.querySelector('option:first-of-type').value;
    var deviceType = clonedElement.querySelector('.deviceType');
    clonedElement.querySelector('.deviceType').value = deviceType.querySelector('option:first-of-type').value;
    var filterName = clonedElement.querySelector('.filterName');
    clonedElement.querySelector('.filterName').value = filterName.querySelector('option:first-of-type').value;
    var filterType = clonedElement.querySelector('.filterType');
    clonedElement.querySelector('.filterType').value = filterType.querySelector('option:first-of-type').value;
    var filterPolicy = clonedElement.querySelector('.filterPolicy');
    clonedElement.querySelector('.filterPolicy').value = filterPolicy.querySelector('option:first-of-type').value;
    clonedElement.querySelector('.filterEmail').value = '';
    clonedElement.querySelector('.otherFilter').value = '';
    clonedElement.querySelector('.deviceType').removeAttribute('required');
    clonedElement.querySelector('.filterName').removeAttribute('required');
    clonedElement.querySelector('.filterType').removeAttribute('required');
    clonedElement.querySelector('.filterPolicy').removeAttribute('required');
    clonedElement.querySelector('.filterEmail').removeAttribute('required');
    clonedElement.querySelector('.otherFilter').removeAttribute('required');
    clonedElement.querySelector('.deviceType').classList.add("hidden");
    clonedElement.querySelector('.filterName').classList.add("hidden");
    clonedElement.querySelector('.filterType').classList.add("hidden");
    clonedElement.querySelector('.filterPolicyContainer').classList.add("hidden");
    clonedElement.querySelector('.filterEmailContainer').classList.add("hidden");
    clonedElement.querySelector('.otherFilterContainer').classList.add("hidden");
    clonedElement.querySelector('.addingagain').classList.add("hidden");
    clonedElement.querySelector('.desktopclone1').checked = false;
    clonedElement.querySelector('.nomoredesktopclone2').checked = false;
    clonedElement.querySelector('.appsurlcontainer').classList.add("hidden");
    clonedElement.querySelector('.requestedAccess').value = '';
    clonedElement.querySelector('.requestedAccess').removeAttribute('required');
    clonedElement.querySelector('.insertBtn').removeAttribute('onclick');
    clonedElement.querySelector('.insertBtn').removeAttribute('ontouchstart');
    clonedElement.querySelector('.insertBtn').setAttribute("onclick", "insertAppAndUrl" + cloneDesktopCount + "(this)");
    clonedElement.querySelector('.insertBtn').setAttribute("ontouchstart", "insertAppAndUrl" + cloneDesktopCount + "(this)");
    var script = document.createElement('script');
    script.textContent = `
    var arrayapp${cloneDesktopCount} = [];
function insertAppAndUrl${cloneDesktopCount}(selectElement) {
    var inputValues = selectElement.closest('.originalss').querySelector('.inputValue');
    var inputValue = inputValues.value;
    var requestedAccess = selectElement.closest('.originalss').querySelector('.requestedAccess');
    if (inputValue.length > 0){
        arrayapp${cloneDesktopCount}.push(inputValue);
        requestedAccess.innerHTML = arrayapp${cloneDesktopCount}.join(", ");
        requestedAccess.value = arrayapp${cloneDesktopCount}.join(", ");
        inputValues.innerHTML = 'Type Websites/Category here. . .';
        inputValues.value = '';
        inputValues.setAttribute('placeholder', 'Type Websites/Category here. . .');
    }
}
  `;
    clonedElement.appendChild(script);
    morepcdevcontainer.appendChild(clonedElement);
}
function deleteDesktopElement(element) {
    var originalss = element.closest('.originalss');
    if (originalss) {
        originalss.remove();
    }
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