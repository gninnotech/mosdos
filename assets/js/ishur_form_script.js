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
    var clonedInput = clonedElement.querySelector('input[name="contactNumber[]"]');
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
            }else{
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
        Basicphonequestions.classList.add("show");
        Basicphonequestions.classList.remove("hidden");
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
//computer and laptops office and home
//opening question
function opendesktopform(desktopform) {
    var desktopquestions = desktopform.closest('.col-md-12').querySelector('.desktopquestions');
    var primaryUser = desktopform.closest('.col-md-12').querySelector('.primaryUser');
    var deviceCategory = desktopform.closest('.col-md-12').querySelector('.deviceCategory');
    desktopquestions.classList.remove("hidden");
    primaryUser.setAttribute('required', 'required');
    deviceCategory.setAttribute('required', 'required');


}
//selecting none
function closedesktopform(desktopform) {
    var desktopquestions = desktopform.closest('.col-md-12').querySelector('.desktopquestions');
    var primaryUser = desktopform.closest('.col-md-12').querySelector('.primaryUser');
    var deviceCategory = desktopform.closest('.col-md-12').querySelector('.deviceCategory');
    var filtersettings = desktopform.closest('.col-md-12').querySelector('.filtersettings'); 
    var filterName = desktopform.closest('.col-md-12').querySelector('.filterName');
    var filterType = desktopform.closest('.col-md-12').querySelector('.filterType');
    var attachedEmailContainer = desktopform.closest('.col-md-12').querySelector('.attachedEmailContainer');
    var attachedEmail = desktopform.closest('.col-md-12').querySelector('.attachedEmail');
    var filterPolicyContainer = desktopform.closest('.col-md-12').querySelector('.filterPolicyContainer');
    var filterPolicy = desktopform.closest('.col-md-12').querySelector('.filterPolicy');
    var filterAdditionalInformationContainer = desktopform.closest('.col-md-12').querySelector('.filterAdditionalInformationContainer');
    var filterAdditionalInformation = desktopform.closest('.col-md-12').querySelector('.filterAdditionalInformation');
    desktopquestions.classList.add("hidden");
    filtersettings.classList.add("hidden");
    attachedEmailContainer.classList.add("hidden");
    filterPolicyContainer.classList.add("hidden");
    filterAdditionalInformationContainer.classList.add("hidden");
    primaryUser.removeAttribute('required');
    deviceCategory.removeAttribute('required');
    filterName.removeAttribute('required');
    filterType.removeAttribute('required');
    filterPolicy.removeAttribute('required');
    attachedEmail.removeAttribute('required');
    filterAdditionalInformation.removeAttribute('required');
    primaryUser.value = primaryUser.querySelector('option:first-of-type').value;
    deviceCategory.value = deviceCategory.querySelector('option:first-of-type').value;
    filterName.value = filterName.querySelector('option:first-of-type').value;
    filterType.value = filterType.querySelector('option:first-of-type').value;
    filterPolicy.value = filterPolicy.querySelector('option:first-of-type').value;
    attachedEmail.value('');
    filterAdditionalInformation.value('');

}
//selecting device type
function deviceCategoryFunction(deviceCategoryselect){
    var deviceCategoryValue = deviceCategoryselect.value;
    var filterName = deviceCategoryselect.closest('.originalss').querySelector('.filterName');
    var filterType = deviceCategoryselect.closest('.originalss').querySelector('.filterType');
    var filtersettings = deviceCategoryselect.closest('.originalss').querySelector('.filtersettings'); 
    var applurl = deviceCategoryselect.closest('.originalss').querySelector('.applurl');
    var display = deviceCategoryselect.closest('.originalss').querySelector('.display');
    if (deviceCategoryValue == 'Home Desktop' || deviceCategoryValue == 'Home Laptop'){
        filtersettings.classList.remove("hidden");
        filterName.classList.remove("hidden");
        filterType.classList.remove("hidden");
        applurl.classList.remove("hidden");
        filterName.setAttribute('required', 'required');
        filterType.setAttribute('required', 'required');
        display.setAttribute('required', 'required');
    } else if (deviceCategoryValue == 'Office Desktop' || deviceCategoryValue == 'Office Laptop') {
        filtersettings.classList.remove("hidden");
        filterName.classList.remove("hidden");
        filterType.classList.remove("hidden");
        applurl.classList.add("hidden");
        filterName.setAttribute('required', 'required');
        filterType.setAttribute('required', 'required');
        display.removeAttribute('required');
    }else{
        filtersettings.classList.add("hidden");
        filterName.classList.add("hidden");
        filterType.classList.add("hidden");
        applurl.classList.add("hidden");
        filterName.removeAttribute('required');
        filterType.removeAttribute('required');
        display.removeAttribute('required');
        filterName.value = primaryUser.querySelector('option:first-of-type').value;
        filterType.value = primaryUser.querySelector('option:first-of-type').value;

    }
}
//selecting filter name
function filterNameFunction(filterNameselect){
    var filterNamevalue = filterNameselect.value;
    var attachedEmailContainer = filterNameselect.closest('.originalss').querySelector('.attachedEmailContainer');
    var filterPolicyContainer = filterNameselect.closest('.originalss').querySelector('.filterPolicyContainer');
    var filterAdditionalInformationContainer = filterNameselect.closest('.originalss').querySelector('.filterAdditionalInformationContainer');
    var attachedEmail = filterNameselect.closest('.originalss').querySelector('.attachedEmail');
    var filterPolicy = filterNameselect.closest('.originalss').querySelector('.filterPolicy');
    var filterAdditionalInformation = filterNameselect.closest('.originalss').querySelector('.filterAdditionalInformation');
    var filterType = filterNameselect.closest('.originalss').querySelector('.filterType');
    var addingmoredesktop = filterNameselect.closest('.originalss').querySelector('.addingmoredesktop');
    if (filterNamevalue == 'Other'){
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        filterType.classList.add("hidden");
        filterAdditionalInformationContainer.classList.remove("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        filterAdditionalInformation.setAttribute('placeholder','Specify other filter');
        filterAdditionalInformation.setAttribute('required', 'required');
        filterType.removeAttribute('required');
    } else if (filterNamevalue == 'No Filter'){
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        filterType.classList.add("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        filterAdditionalInformation.removeAttribute('required');
        filterType.removeAttribute('required');
        addingmoredesktop.classList.remove("hidden");
    } else if (filterNamevalue != 'No Filter' && filterNamevalue != 'Other' && filterNamevalue != ''){
        attachedEmailContainer.classList.remove("hidden");
        filterPolicyContainer.classList.remove("hidden");
        filterType.classList.remove("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.setAttribute('required', 'required');
        filterPolicy.setAttribute('required', 'required');
        filterAdditionalInformation.removeAttribute('required');
        filterType.setAttribute('required', 'required');
    }else{
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        filterAdditionalInformation.removeAttribute('required');
    }

}
//selecting policy
function filterPolicyFunction(filterPolicyselect){
    filterPolicyValue = filterPolicyselect.value;
    filterAdditionalInformationContainer = filterPolicyselect.closest('.originalss').querySelector('.filterAdditionalInformationContainer');
    filterAdditionalInformation = filterPolicyselect.closest('.originalss').querySelector('.filterAdditionalInformation');
    var addingmoredesktop = filterPolicyselect.closest('.originalss').querySelector('.addingmoredesktop');
    if (filterPolicyValue == 'Cannot be under kehilla policy (Mosdos Technology Office)'){
        filterAdditionalInformationContainer.classList.remove("hidden");
        filterAdditionalInformation.setAttribute('required', 'required');
        filterAdditionalInformation.setAttribute('placeholder', 'Specify why it cannot be under MTO');
        addingmoredesktop.classList.add("hidden");
    }else{
        filterAdditionalInformationContainer.classList.add("hidden");
        filterAdditionalInformation.removeAttribute('required');
        addingmoredesktop.classList.remove("hidden");
    }

}
//other info
function filterAdditionalInformationFunction(filterAdditionalInformationselect){
    var filterAdditionalInformationValue = filterAdditionalInformationselect.value;
    var addingmoredesktop = filterAdditionalInformationselect.closest('.originalss').querySelector('.addingmoredesktop');
    if (filterAdditionalInformationValue != ''){
        addingmoredesktop.classList.remove("hidden");
    }else{
        addingmoredesktop.classList.add("hidden");
    }
}
//apps and url push array
var arrayapp = [];
function insertAppAndUrl(selectElement) {
    var inputValue = selectElement.closest('.originalss').querySelector('.inputValue').value;
    var inputValues = selectElement.closest('.originalss').querySelector('.inputValue');
    var display = selectElement.closest('.originalss').querySelector('.display');
    arrayapp.push(inputValue);
    display.innerHTML = arrayapp.join(", ");
    display.value = arrayapp.join(", ");
    inputValues.innerHTML = 'Type Websites/Category here. . .';
    inputValues.value = '';
    inputValues.setAttribute('placeholder', 'Type Websites/Category here. . .');
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
var cloneDesktopCount = 0;
function cloneDesktopElement(selectElement) {
    var addingmoredesktop = selectElement.closest('.originalss').querySelector('.addingmoredesktop');
    var desktopclone1 = selectElement.closest('.originalss').querySelector('.desktopclone1');
    var nomoredesktopclone2 = selectElement.closest('.originalss').querySelector('.nomoredesktopclone2');
    addingmoredesktop.classList.remove("show");
    addingmoredesktop.classList.add("hidden");
    desktopclone1.checked = false;
    addingmoredesktop.removeAttribute('required');
    desktopclone1.removeAttribute('required');
    nomoredesktopclone2.removeAttribute('required');


    cloneDesktopCount++;
    var elementToClone = document.getElementById("originalss");
    var clonedElement = elementToClone.cloneNode(true);
    var uniqueId = "desktopclone-" + cloneDesktopCount;
    clonedElement.id = uniqueId;
    clonedElement.querySelector('.appsurlb').setAttribute('data-bs-target', '#appsurl' + cloneDesktopCount );
    clonedElement.querySelector('.appsurl').id = "appsurl" + cloneDesktopCount;
    clonedElement.querySelector('.deldev').classList.remove("hidden");
    clonedElement.querySelector('.display').value = '';
    clonedElement.querySelector('.display').innerHTML = '';
    clonedElement.querySelector('.insertBtn').removeAttribute("onclick");
    clonedElement.querySelector('.insertBtn').removeAttribute("ontouchstart");
    clonedElement.querySelector('.insertBtn').setAttribute("onclick", "insertAppAndUrl" + cloneDesktopCount + "(this)");
    clonedElement.querySelector('.insertBtn').setAttribute("ontouchstart", "insertAppAndUrl" + cloneDesktopCount + "(this)");
    var script = document.createElement('script');
    script.textContent = `
    var arrayapps${cloneDesktopCount} = [];
    function insertAppAndUrl${cloneDesktopCount}(selectElements) {
      var insertBtn = selectElements.value;
      var inputValue = selectElements.closest('.originalss').querySelector('.inputValue').value;
      var display = selectElements.closest('.originalss').querySelector('.display');
      arrayapps${cloneDesktopCount}.push(inputValue).value;
      display.innerHTML = arrayapps${cloneDesktopCount}.join(", ");
      display.value = arrayapps${cloneDesktopCount}.join(", ");
    }
  `;
    clonedElement.appendChild(script);
    var morepcdevcontainer = document.getElementById("morepcdevcontainer");
    morepcdevcontainer.appendChild(clonedElement);
    

}
function deleteDesktopElement(element) {
    var originalss = element.closest('.originalss');
    if (originalss) {
        originalss.remove();
    }
}