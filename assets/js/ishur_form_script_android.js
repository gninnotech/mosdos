
//android script

function openandroidform(startqselect) {
    var androidQuestions = document.getElementById("androidQuestions");
    var primaryUser = startqselect.closest('.row').querySelector('.primaryUser');
    var deviceCategory = startqselect.closest('.row').querySelector('.deviceCategory');
    var filterName = startqselect.closest('.row').querySelector('.filterName');
    var displaym = startqselect.closest('.row').querySelector('.displaym');
    androidQuestions.classList.remove("hidden");
    primaryUser.setAttribute('required', 'required');
    deviceCategory.setAttribute('required', 'required');
    filterName.setAttribute('required', 'required');
    displaym.setAttribute('required', 'required');

}
function closeandroidform() {
    var androidQuestions = document.getElementById("androidQuestions");
    androidQuestions.classList.add("hidden");
}

function smartphonealert(selecteddevicetype) {
    var devicetypeValue = selecteddevicetype.value;
    var moised = document.getElementById("moised").value;
    var primaryUser = selecteddevicetype.closest('.androidOrigin').querySelector('.primaryUser').value;
    var smartnoti = selecteddevicetype.closest('.androidOrigin').querySelector('.smartnoti');
    if (devicetypeValue == 'Smartphone' && moised == 'Ezreini Stamford Hill' && primaryUser == 'Mother') {
        smartnoti.classList.remove("hidden");
    } else {
        smartnoti.classList.add("hidden");
    }

}
function selectedFilterName(filternameselected) {
    var filternameValue = filternameselected.value;
    var attachedEmailContainer = filternameselected.closest('.androidOrigin').querySelector('.attachedEmailContainer');
    var filterPolicyContainer = filternameselected.closest('.androidOrigin').querySelector('.filterPolicyContainer');
    var whatsappSettingsContainer = filternameselected.closest('.androidOrigin').querySelector('.whatsappSettingsContainer');
    var filterAdditionalInformationContainer = filternameselected.closest('.androidOrigin').querySelector('.filterAdditionalInformationContainer');
    var addingmoreandroid = filternameselected.closest('.androidOrigin').querySelector('.addingmoreandroid');
    var attachedEmail = filternameselected.closest('.androidOrigin').querySelector('.attachedEmail');
    var filterPolicy = filternameselected.closest('.androidOrigin').querySelector('.filterPolicy');
    var whatsappSettings = filternameselected.closest('.androidOrigin').querySelector('.whatsappSettings');
    var filterAdditionalInformation = filternameselected.closest('.androidOrigin').querySelector('.filterAdditionalInformation');
    if (filternameValue == 'Delta Mobile' || filternameValue == 'iPhone restrictions/perental control' || filternameValue == 'No Filter') {
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        whatsappSettingsContainer.classList.add("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        whatsappSettings.removeAttribute('required');
        filterAdditionalInformation.removeAttribute('required');
        addingmoreandroid.classList.remove("hidden");
    } else if (filternameValue == 'Other') {
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        whatsappSettingsContainer.classList.add("hidden");
        filterAdditionalInformationContainer.classList.remove("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        whatsappSettings.removeAttribute('required');
        filterAdditionalInformation.setAttribute('required', 'required');
        filterAdditionalInformation.setAttribute('placeholder', 'Specify filter name');
        addingmoreandroid.classList.remove("hidden");
    } else if (filternameValue != 'Delta Mobile' && filternameValue != 'iPhone restrictions/perental control' && filternameValue != 'No Filter' && filternameValue != 'Other' && filternameValue != '') {
        attachedEmailContainer.classList.remove("hidden");
        filterPolicyContainer.classList.remove("hidden");
        whatsappSettingsContainer.classList.remove("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.setAttribute('required', 'required');
        filterPolicy.setAttribute('required', 'required');
        whatsappSettings.setAttribute('required', 'required');
        filterAdditionalInformation.removeAttribute('required');
        addingmoreandroid.classList.remove("hidden");
    } else {
        attachedEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        whatsappSettingsContainer.classList.add("hidden");
        filterAdditionalInformationContainer.classList.add("hidden");
        attachedEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        whatsappSettings.removeAttribute('required');
        filterAdditionalInformation.removeAttribute('required');
        addingmoreandroid.classList.add("hidden");
    }
}
function whatsappFinal(whatsappselect) {
    var whatsappValue = whatsappselect.value;
    var moised = document.getElementById("moised").value;
    var primaryUser = whatsappselect.closest('.androidOrigin').querySelector('.primaryUser').value;
    var whatsnoti = whatsappselect.closest('.androidOrigin').querySelector('.whatsnoti');
    var addingmoreandroid = whatsappselect.closest('.androidOrigin').querySelector('.addingmoreandroid');
    if (whatsappValue == 'Unfiltered Whatsapp' && moised == 'Ezreini Stamford Hill' && primaryUser == 'Mother') {
        whatsnoti.classList.remove("hidden");
        addingmoreandroid.classList.remove("hidden");
    } else if (whatsappValue != 'Unfiltered Whatsapp' && moised != 'Ezreini Stamford Hill' && primaryUser != 'Mother' && whatsappValue != '') {
        whatsnoti.classList.add("hidden");
        addingmoreandroid.classList.remove("hidden");
    } else {
        whatsnoti.classList.add("hidden");
        addingmoreandroid.classList.add("hidden");
    }
}
var arrayapps = [];

function insertAppAndUrlm(selectElement) {
    var inputValuem = selectElement.closest('.androidOrigin').querySelector('.inputValuem').value;
    var inputValuems = selectElement.closest('.androidOrigin').querySelector('.inputValuem');
    var displaym = selectElement.closest('.androidOrigin').querySelector('.displaym');
    arrayapps.push(inputValuem).value;
    displaym.innerHTML = arrayapps.join(", ");
    displaym.value = arrayapps.join(", ");
    inputValuems.innerHTML = 'Type Apps/Category here. . .';
    inputValuems.value = '';
    inputValuems.setAttribute('placeholder', 'Type Apps/Category here. . .');

}
function myNoMoreAndroidClone(selectedElement) {
    var addingmoreandroid = selectedElement.closest('.androidOrigin').querySelector('.addingmoreandroid');
    var otherAndroidYes = selectedElement.closest('.androidOrigin').querySelector('.otherAndroidYes');
    var otherAndroidNone = selectedElement.closest('.androidOrigin').querySelector('.otherAndroidNone');
    var optionRetro = selectedElement.closest('.androidOrigin').querySelector('.optionRetro');
    addingmoreandroid.classList.add("hidden");
    addingmoreandroid.classList.remove("show");
    otherAndroidYes.removeAttribute('required');
    otherAndroidNone.removeAttribute('required');
    optionRetro.classList.add("show");
    optionRetro.classList.remove("hidden");
}

function myPreviousAndroidOption(selectedElement) {
    var addingmoreandroid = selectedElement.closest('.androidOrigin').querySelector('.addingmoreandroid');
    var otherAndroidYes = selectedElement.closest('.androidOrigin').querySelector('.otherAndroidYes');
    var otherAndroidNone = selectedElement.closest('.androidOrigin').querySelector('.otherAndroidNone');
    var optionRetro = selectedElement.closest('.androidOrigin').querySelector('.optionRetro');
    addingmoreandroid.classList.add("show");
    addingmoreandroid.classList.remove("hidden");
    otherAndroidYes.setAttribute('required', 'required');
    otherAndroidNone.setAttribute('required', 'required');
    otherAndroidYes.checked = false;
    otherAndroidNone.checked = false;
    optionRetro.classList.add("hidden");
    optionRetro.classList.remove("show");
}




var cloneAndroidCount = 0;
function cloneAndroidElement(selectElement) {
    var addingmoreandroid = selectElement.closest('.androidOrigin').querySelector('.addingmoreandroid');
    var otherAndroidYes = selectElement.closest('.androidOrigin').querySelector('.otherAndroidYes');
    var otherAndroidNone = selectElement.closest('.androidOrigin').querySelector('.otherAndroidNone');
    var optionRetro = selectElement.closest('.androidOrigin').querySelector('.optionRetro');
    addingmoreandroid.classList.add("hidden");
    otherAndroidYes.removeAttribute('required');
    otherAndroidNone.removeAttribute('required');
    optionRetro.classList.add("hidden");
    otherAndroidYes.checked = false;


    cloneAndroidCount++;
    var elementToClone = document.getElementById("androidOrigin");
    var clonedElement = elementToClone.cloneNode(true);
    var uniqueId = "androidclone-" + cloneAndroidCount;
    clonedElement.id = uniqueId;
    clonedElement.querySelector('.attachedEmailContainer').classList.add("hidden");
    clonedElement.querySelector('.filterPolicyContainer').classList.add("hidden");
    clonedElement.querySelector('.whatsappSettingsContainer').classList.add("hidden");
    clonedElement.querySelector('.attachedEmail').removeAttribute("required");
    clonedElement.querySelector('.filterPolicy').removeAttribute("required");
    clonedElement.querySelector('.whatsappSettings').removeAttribute("required");
    clonedElement.querySelector('.appsurlbm').setAttribute('data-bs-target', '#appsurl' + cloneAndroidCount);
    clonedElement.querySelector('.appsurlm').id = "appsurl" + cloneAndroidCount;
    clonedElement.querySelector('.androidRemoval').classList.remove("hidden");
    clonedElement.querySelector('.displaym').value = '';
    clonedElement.querySelector('.displaym').innerHTML = '';
    clonedElement.querySelector('.insertBtnm').removeAttribute("onclick");
    clonedElement.querySelector('.insertBtnm').removeAttribute("ontouchstart");
    clonedElement.querySelector('.insertBtnm').setAttribute("onclick", "insertAppAndUrlm" + cloneAndroidCount + "(this)");
    clonedElement.querySelector('.insertBtnm').setAttribute("ontouchstart", "insertAppAndUrlm" + cloneAndroidCount + "(this)");
    var script = document.createElement('script');
    script.textContent = `
    var arrayapps${cloneAndroidCount} = [];
    function insertAppAndUrlm${cloneAndroidCount}(selectElement) {
      var insertBtnm = selectElement.value;
      var inputValuem = selectElement.closest('.androidOrigin').querySelector('.inputValuem').value;
      var inputValuems = selectElement.closest('.androidOrigin').querySelector('.inputValuem');
      var displaym = selectElement.closest('.androidOrigin').querySelector('.displaym');
      arrayapps${cloneAndroidCount}.push(inputValuem).value;
      displaym.innerHTML = arrayapps${cloneAndroidCount}.join(", ");
      displaym.value = arrayapps${cloneAndroidCount}.join(", ");
      inputValuems.innerHTML = 'Type Apps/Category here. . .';
      inputValuems.value = '';
      inputValuems.setAttribute('placeholder', 'Type Apps/Category here. . .');
    }
  `;
    clonedElement.appendChild(script);
    var androidContainer = document.getElementById("androidContainer");
    androidContainer.appendChild(clonedElement);


}

function deleteAndroidElement(element) {
    var androidOrigin = element.closest('.androidOrigin');
    if (androidOrigin) {
        androidOrigin.remove();
    }
}

