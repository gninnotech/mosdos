
//android script

function openandroidform(startqselect) {
    var androidQuestions = document.getElementById("androidQuestions");
    var deviceOwner = startqselect.closest('.row').querySelector('.deviceOwner');
    var deviceType = startqselect.closest('.row').querySelector('.deviceType');
    var filterName = startqselect.closest('.row').querySelector('.filterName');
    var displaym = startqselect.closest('.row').querySelector('.displaym');
    androidQuestions.classList.remove("hidden");
    deviceOwner.setAttribute('required', 'required');
    deviceType.setAttribute('required', 'required');
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
    var deviceOwner = selecteddevicetype.closest('.androidOrigin').querySelector('.deviceOwner').value;
    var smartnoti = selecteddevicetype.closest('.androidOrigin').querySelector('.smartnoti');
    if (devicetypeValue == 'Smartphone' && moised == 'Ezreini Stamford Hill' && deviceOwner == 'Mother') {
        smartnoti.classList.remove("hidden");
    } else {
        smartnoti.classList.add("hidden");
    }

}
function selectedFilterName(filternameselected) {
    var filternameValue = filternameselected.value;
    var filterEmailContainer = filternameselected.closest('.androidOrigin').querySelector('.filterEmailContainer');
    var filterPolicyContainer = filternameselected.closest('.androidOrigin').querySelector('.filterPolicyContainer');
    var whatsappDetailContainer = filternameselected.closest('.androidOrigin').querySelector('.whatsappDetailContainer');
    var otherFilterContainer = filternameselected.closest('.androidOrigin').querySelector('.otherFilterContainer');
    var addingmoreandroid = filternameselected.closest('.androidOrigin').querySelector('.addingmoreandroid');
    var filterEmail = filternameselected.closest('.androidOrigin').querySelector('.filterEmail');
    var filterPolicy = filternameselected.closest('.androidOrigin').querySelector('.filterPolicy');
    var whatsappDetail = filternameselected.closest('.androidOrigin').querySelector('.whatsappDetail');
    var otherFilter = filternameselected.closest('.androidOrigin').querySelector('.otherFilter');
    var appliurlm = filternameselected.closest('.androidOrigin').querySelector('.appliurlm');
    var displaym = filternameselected.closest('.androidOrigin').querySelector('.displaym');
    var moised = document.getElementById("moised").value;
    if (filternameValue == 'Delta Mobile' || filternameValue == 'iPhone restrictions/perental control' || filternameValue == 'No Filter') {
        filterEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        otherFilterContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        otherFilter.removeAttribute('required');
        addingmoreandroid.classList.remove("hidden");
        appliurlm.classList.add("hidden");
        displaym.removeAttribute('required');
    } else if (filternameValue == 'Other') {
        filterEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        otherFilterContainer.classList.remove("hidden");
        filterEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        otherFilter.setAttribute('required', 'required');
        otherFilter.setAttribute('placeholder', 'Specify filter name');
        addingmoreandroid.classList.remove("hidden");
        appliurlm.classList.add("hidden");
        displaym.removeAttribute('required');
    } else if (filternameValue != 'Delta Mobile' && filternameValue != 'iPhone restrictions/perental control' && filternameValue != 'No Filter' && filternameValue != 'Other' && filternameValue != '') {
        filterEmailContainer.classList.remove("hidden");
        filterPolicyContainer.classList.remove("hidden");
        otherFilterContainer.classList.add("hidden");
        filterEmail.setAttribute('required', 'required');
        filterPolicy.setAttribute('required', 'required');
        otherFilter.removeAttribute('required');
        addingmoreandroid.classList.remove("hidden");
        appliurlm.classList.remove("hidden");
        displaym.setAttribute('required', 'required');
    } else {
        filterEmailContainer.classList.add("hidden");
        filterPolicyContainer.classList.add("hidden");
        otherFilterContainer.classList.add("hidden");
        filterEmail.removeAttribute('required');
        filterPolicy.removeAttribute('required');
        otherFilter.removeAttribute('required');
        addingmoreandroid.classList.add("hidden");
        appliurlm.classList.add("hidden");
        displaym.removeAttribute('required');
    }
    if (moised == 'Gur' || moised == 'Ezreini Stamford Hill'){
        whatsappDetailContainer.classList.add("hidden");
        whatsappDetail.removeAttribute('required');
    }else{
        whatsappDetail.setAttribute('required', 'required');
        whatsappDetailContainer.classList.remove("hidden");
    }


}
function whatsappFinal(whatsappselect) {
    var whatsappValue = whatsappselect.value;
    var moised = document.getElementById("moised").value;
    var deviceOwner = whatsappselect.closest('.androidOrigin').querySelector('.deviceOwner').value;
    var whatsnoti = whatsappselect.closest('.androidOrigin').querySelector('.whatsnoti');
    var addingmoreandroid = whatsappselect.closest('.androidOrigin').querySelector('.addingmoreandroid');
    if (whatsappValue == 'Unfiltered Whatsapp' && moised == 'Ezreini Stamford Hill' && deviceOwner == 'Mother') {
        whatsnoti.classList.remove("hidden");
        addingmoreandroid.classList.remove("hidden");
    } else if (whatsappValue != 'Unfiltered Whatsapp' && moised != 'Ezreini Stamford Hill' && deviceOwner != 'Mother' && whatsappValue != '') {
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
    clonedElement.querySelector('.filterEmailContainer').classList.add("hidden");
    clonedElement.querySelector('.filterPolicyContainer').classList.add("hidden");
    clonedElement.querySelector('.whatsappDetailContainer').classList.add("hidden");
    clonedElement.querySelector('.filterEmail').removeAttribute("required");
    clonedElement.querySelector('.filterPolicy').removeAttribute("required");
    clonedElement.querySelector('.whatsappDetail').removeAttribute("required");
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

