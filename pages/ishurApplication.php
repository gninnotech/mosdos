<?php
include '../conn/dbConnection.php';
function sanitizeInput($data)
{
    if (is_array($data)) {
        $sanitizedData = array();
        foreach ($data as $key => $value) {
            $sanitizedData[$key] = sanitizeInput($value);
        }
        return $sanitizedData;
    } else {
        return is_string($data) ? trim(stripslashes(htmlspecialchars($data))) : $data;
    }
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = sanitizeInput($_POST);
    if(isset($data["id_users"]) && !empty($data["id_users"])){
        $id_users = htmlspecialchars($data["id_users"]);
    }else{
        //variable container
        $username = $firstName = $lastName = $address = $fatherOccupation = $hebrewFirstName = $hebrewSurname = $postal = $motherOccupation = $name_father_emailAddress = $name_mother_emailAddress = $name_home_contactNumber = $name_father_contactNumber = $name_mother_contactNumber =
        $usernameErr = $firstNameErr = $lastNameErr = $addressErr = $fatherOccupationErr = $hebrewFirstNameErr = $hebrewSurnameErr = $postalErr = $motherOccupationErr = $name_father_emailAddressErr = $name_mother_emailAddressErr = $name_home_contactNumberErr = $name_father_contactNumberErr = $name_mother_contactNumberErr = "";

        //validation
        $firstName = $data["firstName"];
        $lastName = $data["lastName"];
        $address = $data["address"];
        $fatherOccupation = $data["fatherOccupation"];
        $hebrewFirstName = $data["hebrewFirstName"];
        $hebrewSurname = $data["hebrewSurname"];
        $postal = $data["postal"];
        $motherOccupation = $data["motherOccupation"];
        $preferredContactMethod = $data["preferredContactMethod"];
        $hebrewpattern = "/^[\p{L}[:space:]!-@[-`{-~]+$/u";
        $username = $data["username"];
        $emailpattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
        $name_father_emailAddress = $data["name_father_emailAddress"];
        $name_mother_emailAddress = $data["name_mother_emailAddress"];
        $name_home_contactNumber = $data["name_home_contactNumber"];
        $name_father_contactNumber = $data["name_father_contactNumber"];
        $name_mother_contactNumber = $data["name_mother_contactNumber"];

        $userstmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
        $userstmt->execute([$username]);
        $users = $userstmt->fetch();
        $usersCount = $userstmt->rowCount();

        if($usersCount > 0){
            $usernameErr = $username.' is already in use, try a different one or reset your password.';
        }

        if (empty($firstName)) {
            $firstNameErr = "Firstname is required";
        } else {
            // Check if the name contains only letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/", $firstName)) {
                $firstNameErr = "Only letters and white space allowed";
            }
        }

        if (empty($lastName)) {
            $lastNameErr = "Lastname is required";
        } else {
            // Check if the name contains only letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/", $lastName)) {
                $lastNameErr = "Only letters and white space allowed";
            }
        }
        if (empty($address)) {
            $addressErr = "Address is required";
        }
        if (empty($postal)) {
            $postalErr = "Postal is required";
        }
        if (empty($hebrewFirstName)) {
            $hebrewFirstNameErr = "Hebrew firstname is required";
        }else{
            if (!preg_match($hebrewpattern, $hebrewFirstName)) {
                $hebrewFirstNameErr = "Hebrew letters and white space allowed";
            }
        }
        if (empty($hebrewSurname)) {
            $hebrewSurnameErr = "Hebrew firstname is required";
        }else{
            if (!preg_match($hebrewpattern, $hebrewSurname)) {
                $hebrewSurnameErr = "Hebrew letters and white space allowed";
            }
        }
        if (empty($fatherOccupation)) {
            $fatherOccupationErr = "Father occupation is required. Type N/A if not applicable";
        }
        if (empty($motherOccupation)) {
            $motherOccupationErr = "Mother occupation is required. Type N/A if not applicable";
        }
        if (!empty($name_father_emailAddress) && !preg_match($emailpattern, $name_father_emailAddress)) {
            $name_father_emailAddressErr = "Your father email is invalid";
        }
        if (!empty($name_mother_emailAddress) && !preg_match($emailpattern, $name_mother_emailAddress)) {
            $name_mother_emailAddressErr = "Your mother email is invalid";
        }
        $homeContact = '';
        if(!empty($name_home_contactNumber)){
            $homeContact =  preg_replace('/[^0-9]/', '', $name_home_contactNumber);
        }
        $fatherContact = '';
        if (!empty($name_father_contactNumber)) {
            $fatherContact =  preg_replace('/[^0-9]/', '', $name_father_contactNumber);
        }
        $motherContact = '';
        if (!empty($name_mother_contactNumber)) {
            $motherContact =  preg_replace('/[^0-9]/', '', $name_mother_contactNumber);
        }
        $errors = array(
            $usernameErr,
            $firstNameErr,
            $lastNameErr,
            $addressErr,
            $fatherOccupationErr,
            $hebrewFirstNameErr,
            $hebrewSurnameErr,
            $postalErr,
            $motherOccupationErr,
            $name_father_emailAddressErr,
            $name_mother_emailAddressErr
        );
        if (empty(array_filter($errors))) {
            //users
            $username = $data["username"];
            $password = password_hash('test1234', PASSWORD_DEFAULT);

            $insertusers = "INSERT INTO users (username, password) VALUES (?, ?)";
            $stmtinsertuser = $pdo->prepare($insertusers);
            $stmtinsertuser->bindParam(1, $username, PDO::PARAM_STR);
            $stmtinsertuser->bindParam(2, $password, PDO::PARAM_STR);
            $stmtinsertuser->execute();
            $id_users = $pdo->lastInsertId();
            $stmtinsertuser->closeCursor();
            //account settings
            $preferredContactMethod = $data["preferredContactMethod"];

            $insertaccntsettings = "INSERT INTO account_settings (id_users, preferredContactMethod) VALUES (?, ?)";
            $stmtinsertaccntsetting = $pdo->prepare($insertaccntsettings);
            $stmtinsertaccntsetting->bindParam(1, $id_users, PDO::PARAM_STR);
            $stmtinsertaccntsetting->bindParam(2, $preferredContactMethod, PDO::PARAM_STR);
            $stmtinsertaccntsetting->execute();
            $stmtinsertaccntsetting->closeCursor();


            //basic_informations table
            $firstName = $data["firstName"];
            $lastName = $data["lastName"];
            $hebrewFirstName = $data["hebrewFirstName"];
            $hebrewSurname = $data["hebrewSurname"];
            $address = $data["address"];
            $postal = $data["postal"];

            $insertbasicinformation = "INSERT INTO basic_informations (id_users, firstName, lastName, hebrewFirstName, hebrewSurname, address, postal) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmtinsertbasicinfo = $pdo->prepare($insertbasicinformation);
            $stmtinsertbasicinfo->bindParam(1, $id_users, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(2, $firstName, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(3, $lastName, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(4, $hebrewFirstName, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(5, $hebrewSurname, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(6, $address, PDO::PARAM_STR);
            $stmtinsertbasicinfo->bindParam(7, $postal, PDO::PARAM_STR);
            $stmtinsertbasicinfo->execute();
            $stmtinsertbasicinfo->closeCursor();

            //parent_information table
            $fatherOccupation = $data["fatherOccupation"];
            $motherOccupation = $data["motherOccupation"];

            $insertparentinformation = "INSERT INTO parent_information (id_users, fatherOccupation, motherOccupation) VALUES (?, ?, ?)";
            $stmtinsertparentinfo = $pdo->prepare($insertparentinformation);
            $stmtinsertparentinfo->bindParam(1, $id_users, PDO::PARAM_STR);
            $stmtinsertparentinfo->bindParam(2, $fatherOccupation, PDO::PARAM_STR);
            $stmtinsertparentinfo->bindParam(3, $motherOccupation, PDO::PARAM_STR);
            $stmtinsertparentinfo->execute();
            $stmtinsertparentinfo->closeCursor();

            //email_address_information
            $name_father_emailAddress = $data["name_father_emailAddress"];
            $name_mother_emailAddress = $data["name_mother_emailAddress"];
            $emailAddress = $data["emailAddress"];
        
            $insertemailAddress = "INSERT INTO email_address_information (id_users, registeredUser, emailAddress) VALUES (?, ?, ?)";
            $stmtinsertemailinfo = $pdo->prepare($insertemailAddress);
            $stmtinsertemailinfo->bindParam(1, $id_users, PDO::PARAM_STR);

            if(isset($name_father_emailAddress) && !empty($name_father_emailAddress)){
                $registeredUser = 'Father';
                $stmtinsertemailinfo->bindParam(2, $registeredUser, PDO::PARAM_STR);
                $stmtinsertemailinfo->bindParam(3, $name_father_emailAddress, PDO::PARAM_STR);
                $stmtinsertemailinfo->execute();
                
            }

            if (isset($name_mother_emailAddress) && !empty($name_mother_emailAddress)) {
                $registeredUser = 'Mother';
                $stmtinsertemailinfo->bindParam(2, $registeredUser, PDO::PARAM_STR);
                $stmtinsertemailinfo->bindParam(3, $name_mother_emailAddress, PDO::PARAM_STR);
                $stmtinsertemailinfo->execute();
            }
            $stmtinsertemailinfo->closeCursor(); 

            for ($i = 0; $i < count($emailAddress); $i++) {
                if (!empty($emailAddress[$i])) {
                    $emailAddressValue = isset($emailAddress[$i]) ? $emailAddress[$i] : "";
                
                    $registeredUser = 'Other';
                    $stmtinsertemailinfo->bindParam(1, $id_users, PDO::PARAM_STR);
                    $stmtinsertemailinfo->bindValue(2, $registeredUser, PDO::PARAM_STR);
                    $stmtinsertemailinfo->bindValue(3, $emailAddressValue, PDO::PARAM_STR);
                    $stmtinsertemailinfo->execute();
                    $stmtinsertemailinfo->closeCursor(); 
                }
            }
            //phone number
            $name_home_contactNumber = $data["name_home_contactNumber"];
            $name_father_contactNumber = $data["name_father_contactNumber"];
            $name_mother_contactNumber = $data["name_mother_contactNumber"];
            $contactNumber = $data["contactNumber"];

            $insertphone = "INSERT INTO phone_numbers (id_users, contactName, contactNumber) VALUES (?, ?, ?)";
            $stmtinsertphoneinfo = $pdo->prepare($insertphone);
            $stmtinsertphoneinfo->bindParam(1, $id_users, PDO::PARAM_STR);

            if (isset($name_father_contactNumber) && !empty($name_father_contactNumber)) {
                $registeredUser = 'Father';
                $stmtinsertphoneinfo->bindParam(2, $registeredUser, PDO::PARAM_STR);
                $stmtinsertphoneinfo->bindParam(3, $name_father_contactNumber, PDO::PARAM_STR);
                $stmtinsertphoneinfo->execute();
            }

            if (isset($name_mother_contactNumber) && !empty($name_mother_contactNumber)) {
                $registeredUser = 'Mother';
                $stmtinsertphoneinfo->bindParam(2, $registeredUser, PDO::PARAM_STR);
                $stmtinsertphoneinfo->bindParam(3, $name_mother_contactNumber, PDO::PARAM_STR);
                $stmtinsertphoneinfo->execute();
            }

            if (isset($name_home_contactNumber) && !empty($name_home_contactNumber)) {
                $registeredUser = 'Home';
                $stmtinsertphoneinfo->bindParam(2, $registeredUser, PDO::PARAM_STR);
                $stmtinsertphoneinfo->bindParam(3, $name_home_contactNumber, PDO::PARAM_STR);
                $stmtinsertphoneinfo->execute();
            }
            $stmtinsertphoneinfo->closeCursor(); 
            for ($i = 0; $i < count($contactNumber); $i++) {
                if (!empty($contactNumber[$i])) {
                    $contactNumberValue = isset($contactNumber[$i]) ? $contactNumber[$i] : "";

                    $registeredUser = 'Other';
                    $stmtinsertphoneinfo->bindParam(1, $id_users, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(2, $registeredUser, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(3, $contactNumberValue, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->execute();
                    $stmtinsertphoneinfo->closeCursor(); 
                    
                }
            }
            //form index
            $insertformIndex = "INSERT INTO form_index (id_users) VALUES (?)";
            $stmtformIndex = $pdo->prepare($insertformIndex);
            $stmtformIndex->bindParam(1, $id_users, PDO::PARAM_STR);
            $stmtformIndex->execute();
            $id_formIndex = $pdo->lastInsertId();
            $stmtformIndex->closeCursor();

            //community
            $synagogueinput = $data["synagogueinput"];
            $synagogue = $data["synagogue"];
            $moised = $data["moised"];

            $pushSynagogue = '';
            if($synagogue == 'Other'){
             $pushSynagogue = $synagogueinput;
            }else{
                $pushSynagogue = $synagogue;
            }

            $insertkehillainformation = "INSERT INTO kehillainformation (id_users, id_formIndex, moised, synagogue) VALUES (?, ?, ?, ?)";
            $stmtkehillainfo = $pdo->prepare($insertkehillainformation);
            $stmtkehillainfo->bindParam(1, $id_users, PDO::PARAM_STR);
            $stmtkehillainfo->bindParam(2, $id_formIndex, PDO::PARAM_STR);
            $stmtkehillainfo->bindParam(3, $moised, PDO::PARAM_STR);
            $stmtkehillainfo->bindParam(4, $pushSynagogue, PDO::PARAM_STR);
            $stmtkehillainfo->execute();
            $id_kehilla = $pdo->lastInsertId();
            $stmtkehillainfo->closeCursor();

            //institutions
            
            $insertphone = "INSERT INTO institution_information (id_formIndex, id_kehilla, institution) VALUES (?, ?, ?)";
            $stmtinsertphoneinfo = $pdo->prepare($insertphone);
            $institutions = $data["institutions"];
            for ($i = 0; $i < count($institutions); $i++) {
                if (!empty($institutions[$i])) {
                    $institutionsValue = isset($institutions[$i]) ? $institutions[$i] : "";
                    $stmtinsertphoneinfo->bindParam(1, $id_formIndex, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(2, $id_kehilla, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(3, $institutionsValue, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->execute();
                    $stmtinsertphoneinfo->closeCursor();
                }
            }

            //basic mobile device
            $mobileIdArray = array();
            $insertmobile = "INSERT INTO mobile_list (id_formIndex, mobileUser, mobileDevice) VALUES (?, ?, ?)";
            $stmtmobileinsert = $pdo->prepare($insertmobile);
            $mobileUser = $data["mobileUser"];
            $mobileDevice = $data["mobileDevice"];
            for ($i = 0; $i < count($mobileDevice); $i++) {
                if (!empty($mobileDevice[$i]) && $mobileDevice != 'None') {
                    $mobileUserValue = isset($mobileUser[$i]) ? $mobileUser[$i] : "";
                    $mobileDeviceValue = isset($mobileDevice[$i]) ? $mobileDevice[$i] : "";

                    $stmtmobileinsert->bindParam(1, $id_formIndex, PDO::PARAM_STR);
                    $stmtmobileinsert->bindValue(2, $mobileUserValue, PDO::PARAM_STR);
                    $stmtmobileinsert->bindValue(3, $mobileDeviceValue, PDO::PARAM_STR);
                    $stmtmobileinsert->execute();
                    $id_mobileValue = $pdo->lastInsertId();
                    array_push($mobileIdArray, $id_mobileValue);
                    $stmtmobileinsert->closeCursor();
                }
            }
            global $mobileIdArrays;
            $mobileIdArrays = $mobileIdArray;
            //mobile settings
            $insertmobilesettings = "INSERT INTO mobile_settings (id_mobileList, tagDetails, stickerType, imeiNumber) VALUES (?, ?, ?, ?)";
            $stmtmobilesettingsinsert = $pdo->prepare($insertmobilesettings);
            $tagDetails = $data["tagDetails"];
            $stickerType = $data["stickerType"];
            $imeiNumber = $data["imeiNumber"];
            for ($i = 0; $i < count($mobileIdArrays); $i++) {
                $mobileIdArraysValue = isset($mobileIdArrays[$i]) ? $mobileIdArrays[$i] : "";
                $tagDetailsValue = isset($tagDetails[$i]) ? $tagDetails[$i] : "";
                $stickerTypeValue = isset($stickerType[$i]) ? $stickerType[$i] : "";
                $imeiNumberValue = isset($imeiNumber[$i]) ? $imeiNumber[$i] : "";
                if (!empty($mobileIdArrays[$i]) && $mobileIdArrays != 'None') {
                   
                
                    $stmtmobilesettingsinsert->bindParam(1, $mobileIdArraysValue, PDO::PARAM_STR);
                    $stmtmobilesettingsinsert->bindValue(2, $tagDetailsValue, PDO::PARAM_STR);
                    $stmtmobilesettingsinsert->bindValue(3, $stickerTypeValue, PDO::PARAM_STR);
                    $stmtmobilesettingsinsert->bindValue(4, $imeiNumberValue, PDO::PARAM_STR);
                    $stmtmobilesettingsinsert->execute();
                    $stmtmobilesettingsinsert->closeCursor();

                    
                }
            }
            for ($i = 0; $i < count($mobileIdArrays); $i++) {
                $mobileIdArraysValue = isset($mobileIdArrays[$i]) ? $mobileIdArrays[$i] : "";

                // Mobile Validation
                $mobileStatusUpdate = '';

                $mobileValidationQuery = $pdo->prepare("SELECT * FROM mobile_validation WHERE id_mobileList = ?");
                $mobileValidationQuery->execute([$mobileIdArraysValue]); // Execute with an array
                $mobile_validation = $mobileValidationQuery->fetch();
                if ($mobile_validation !== false) {
                if (($mobile_validation["moised"] == 'Gur' || $mobile_validation["moised"] == 'Mivtzar' || $mobile_validation["moised"] == 'Beis Chinuch') && $mobile_validation["mobileUser"] == 'Mother' && $mobile_validation["mobileDevice"] == 'Smartphone') {
                    $mobileStatusUpdate = 'Invalid';
                } else if (($mobile_validation["moised"] == 'Gur' || $mobile_validation["moised"] == 'Mivtzar') &&
                    $mobile_validation["mobileUser"] == 'Father' && $mobile_validation["mobileDevice"] == 'Smartphone'
                ) {
                    $mobileStatusUpdate = 'Invalid';
                } else if ($mobile_validation["tagStatus"] == 'Invalid' || $mobile_validation["stickerStatus"] == 'Invalid' || $mobile_validation["imeiStatus"] == 'Invalid') {
                    $mobileStatusUpdate = 'Invalid';
                } else {
                    $mobileStatusUpdate = 'Valid';
                }

                // Update mobile_list with the calculated status
                $updateMobileStatusQuery = $pdo->prepare("UPDATE mobile_list SET mobileStatus = ? WHERE id_mobileList = ?");
                $updateMobileStatusQuery->execute([$mobileStatusUpdate, $mobileIdArraysValue]);
            }
            }

            $MobileUpdate = "UPDATE mobile_list SET mobileStatus = :mobileStatusUpdate WHERE id_mobileList = :mobileIdValue";
            $stmt = $pdo->prepare($MobileUpdate);
            $stmt->bindParam(':mobileStatusUpdate', $mobileStatusUpdate, PDO::PARAM_STR);
            $stmt->bindParam(':mobileIdValue', $mobileIdArraysValue, PDO::PARAM_INT);
            $stmt->execute();

            $primaryUser = $data["primaryUser"];
            $deviceCategory = $data["deviceCategory"];
            $filterName = $data["filterName"];
            $filterType = $data["filterType"];
            $attachedEmail = $data["attachedEmail"];
            $filterPolicy = $data["filterPolicy"];
            $filterAdditionalInformation = $data["filterAdditionalInformation"];
            $whatsappSettings = $data["whatsappSettings"];
            $appsAndUrlInformation = $data["appsAndUrlInformation"];
            for ($i = 0; $i < count($primaryUser); $i++) {
                $primaryUserValue = isset($primaryUser[$i]) ? $primaryUser[$i] : "";
                $filterTypeValue = isset($filterType[$i]) ? $filterType[$i] : "";
            }



            $response = array('status' => 'success', 'destination' => 'home.html');
            echo json_encode($response);
        } else {
            $response = array('status' => 'Fail', 'destination' => $errors);
            echo json_encode($response);
        }
        
    }
}
