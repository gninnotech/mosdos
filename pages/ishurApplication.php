<?php
include '../database/dbConnection.php';
//sanitation
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
    if (!isset($data["user_id"]) && empty($data["user_id"])) {

        //variable container 
        $userName = $firstName = $Surname = $address = $fatherOccupation = $hebrewName = $hebrewSurname = $postal = $motherOccupation = $preferredContactMethod =
            $name_father_emailAddress = $name_mother_emailAddress = $name_home_contactNumber = $name_father_contactNumber = $name_mother_contactNumber = $mobileNumber = $emailAddress =
            $userNameErr = $firstNameErr = $SurnameErr = $addressErr = $fatherOccupationErr = $hebrewNameErr = $hebrewSurnameErr = $postalErr = $motherOccupationErr = $userNameErr = $preferredContactMethodErr =
            $name_father_emailAddressErr = $name_mother_emailAddressErr = $name_home_contactNumberErr = $name_father_contactNumberErr = $name_mother_contactNumberErr = $mobileNumberErr = $emailAddressErr = "";

        //validation
        $firstName = $data["firstName"];
        $Surname = $data["Surname"];
        $address = $data["address"];
        $fatherOccupation = $data["fatherOccupation"];
        $hebrewName = $data["hebrewName"];
        $hebrewSurname = $data["hebrewSurname"];
        $postal = $data["postal"];
        $motherOccupation = $data["motherOccupation"];
        $preferredContactMethod = $data["preferredContactMethod"];
        $hebrewpattern = "/^[\p{L}[:space:]!-@[-`{-~]+$/u";
        $userName = $data["userName"];
        $emailpattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
        $name_father_emailAddress = $data["name_father_emailAddress"];
        $name_mother_emailAddress = $data["name_mother_emailAddress"];
        $name_home_contactNumber = $data["name_home_contactNumber"];
        $name_father_contactNumber = $data["name_father_contactNumber"];
        $name_mother_contactNumber = $data["name_mother_contactNumber"];

        $accountstmts = $pdo->prepare("SELECT * FROM accounts WHERE userName = ?");
        $accountstmts->execute([$userName]);
        $accounts = $accountstmts->fetch();
        $accountsValue = $accountstmts->rowCount();

        if ($accountsValue > 0) {
            $userNameErr = $username . ' is already in use, try a different one or reset your password.';
        }

        if (empty($firstName)) {
            $firstNameErr = "Firstname is required";
        } else {
            // Check if the name contains only letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/", $firstName)) {
                $firstNameErr = "Only letters and white space allowed";
            }
        }

        if (empty($Surname)) {
            $SurnameErr = "Surname is required";
        } else {
            // Check if the name contains only letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/", $Surname)) {
                $SurnameErr = "Only letters and white space allowed";
            }
        }
        if (empty($address)) {
            $addressErr = "Address is required";
        }
        if (empty($postal)) {
            $postalErr = "Postal is required";
        }
        if (empty($hebrewName)) {
            $hebrewNameErr = "Hebrew firstname is required";
        } else {
            if (!preg_match($hebrewpattern, $hebrewName)) {
                $hebrewNameErr = "Hebrew letters and white space allowed";
            }
        }
        if (empty($hebrewSurname)) {
            $hebrewSurnameErr = "Hebrew firstname is required";
        } else {
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
        if (!empty($name_home_contactNumber)) {
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
        $errors = array($userNameErr, $firstNameErr, $SurnameErr, $addressErr, $fatherOccupationErr, $hebrewNameErr, $hebrewSurnameErr, $postalErr, $motherOccupationErr, $name_father_emailAddressErr, $name_mother_emailAddressErr);
        if (!empty(array_filter($errors))) {
            $response = array('status' => 'Fail', 'destination' => $errors);
            echo json_encode($response);
        } else {

            //insert new account data
            $userName = $data["userName"];
            $password = password_hash('test1234', PASSWORD_DEFAULT);
            $insertusers = "INSERT INTO accounts (userName, password) VALUES (?, ?)";
            $stmtinsertuser = $pdo->prepare($insertusers);
            $stmtinsertuser->bindParam(1, $userName, PDO::PARAM_STR);
            $stmtinsertuser->bindParam(2, $password, PDO::PARAM_STR);
            $stmtinsertuser->execute();
            $user_ids = $pdo->lastInsertId();
            $stmtinsertuser->closeCursor();
            //insert new 
            //account settings
            $firstName = $data["firstName"];
            $Surname = $data["Surname"];
            $hebrewName = $data["hebrewName"];
            $hebrewSurname = $data["hebrewSurname"];
            $address = $data["address"];
            $postal = $data["postal"];
            $fatherOccupation = $data["fatherOccupation"];
            $motherOccupation = $data["motherOccupation"];
            $preferredContactMethod = $data["preferredContactMethod"];

            $insertuser_information = "INSERT INTO user_information 
        (user_id, firstName, Surname, hebrewName, hebrewSurname, address, postal, fatherOccupation, motherOccupation, preferredContact) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmtsinsertInformation = $pdo->prepare($insertuser_information);
            $stmtsinsertInformation->bindParam(1, $user_ids, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(2, $firstName, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(3, $Surname, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(4, $hebrewName, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(5, $hebrewSurname, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(6, $address, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(7, $postal, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(8, $fatherOccupation, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(9, $motherOccupation, PDO::PARAM_STR);
            $stmtsinsertInformation->bindParam(10, $preferredContactMethod, PDO::PARAM_STR);
            $stmtsinsertInformation->execute();
            $stmtsinsertInformation->closeCursor();


            //email_address_information
            $name_father_emailAddress = $data["name_father_emailAddress"];
            $name_mother_emailAddress = $data["name_mother_emailAddress"];
            $emailAddress = $data["emailAddress"];

            $insertemailAddress = "INSERT INTO emails (user_id, accountHolder, emailAddress) VALUES (?, ?, ?)";
            $stmtinsertemailinfo = $pdo->prepare($insertemailAddress);
            $stmtinsertemailinfo->bindParam(1, $user_ids, PDO::PARAM_STR);

            if (isset($name_father_emailAddress) && !empty($name_father_emailAddress)) {
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
                    $stmtinsertemailinfo->bindParam(1, $user_ids, PDO::PARAM_STR);
                    $stmtinsertemailinfo->bindValue(2, $registeredUser, PDO::PARAM_STR);
                    $stmtinsertemailinfo->bindValue(3, $emailAddressValue, PDO::PARAM_STR);
                    $stmtinsertemailinfo->execute();
                    $stmtinsertemailinfo->closeCursor();
                }
            }

            //phone contact
            //phone number
            $name_home_contactNumber = $data["name_home_contactNumber"];
            $name_father_contactNumber = $data["name_father_contactNumber"];
            $name_mother_contactNumber = $data["name_mother_contactNumber"];
            $mobileNumber = $data["mobileNumber"];

            $insertphone = "INSERT INTO phone_directory (user_id, mobileOwner, mobileNumber) VALUES (?, ?, ?)";
            $stmtinsertphoneinfo = $pdo->prepare($insertphone);
            $stmtinsertphoneinfo->bindParam(1, $user_ids, PDO::PARAM_STR);

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
            for ($i = 0; $i < count($mobileNumber); $i++) {
                if (!empty($mobileNumber[$i])) {
                    $mobileNumberValue = isset($mobileNumber[$i]) ? $mobileNumber[$i] : "";
                    $registeredUser = 'Other';
                    $stmtinsertphoneinfo->bindParam(1, $user_ids, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(2, $registeredUser, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->bindValue(3, $mobileNumberValue, PDO::PARAM_STR);
                    $stmtinsertphoneinfo->execute();
                    $stmtinsertphoneinfo->closeCursor();
                }
            }

            //application form insert
            $insertformIndex = "INSERT INTO application_forms (user_id) VALUES (?)";
            $stmtformIndex = $pdo->prepare($insertformIndex);
            $stmtformIndex->bindParam(1, $user_ids, PDO::PARAM_STR);
            $stmtformIndex->execute();
            $application_id = $pdo->lastInsertId();
            $stmtformIndex->closeCursor();

            //community

            $moised = $data["moised"];

            $insertkehillainformation = "INSERT INTO community (application_id, user_id, moised ) VALUES (?, ?, ?)";
            $stmtkehillainfo = $pdo->prepare($insertkehillainformation);
            $stmtkehillainfo->bindParam(1, $application_id, PDO::PARAM_STR);
            $stmtkehillainfo->bindParam(2, $user_ids, PDO::PARAM_STR);
            $stmtkehillainfo->bindParam(3, $moised, PDO::PARAM_STR);
            $stmtkehillainfo->execute();
            $kehilla_id = $pdo->lastInsertId();
            $stmtkehillainfo->closeCursor();

            //synagogue input
            $synagogueinput = $data["synagogueinput"];
            $synagogue = $data["synagogue"];

            $pushSynagogue = '';
            if ($synagogue == 'Other') {
                $pushSynagogue = $synagogueinput;
            } else {
                $pushSynagogue = $synagogue;
            }
            $insertsynagogueinformation = "INSERT INTO synagogue (kehilla_id, shul) VALUES (?, ?)";
            $stmtsynagogueinfo = $pdo->prepare($insertsynagogueinformation);
            $stmtsynagogueinfo->bindParam(1, $kehilla_id, PDO::PARAM_STR);
            $stmtsynagogueinfo->bindParam(2, $pushSynagogue, PDO::PARAM_STR);
            $stmtsynagogueinfo->execute();
            $stmtsynagogueinfo->closeCursor();
            //institutions
            $insertschool = "INSERT INTO institutions (kehilla_id, institution) VALUES (?, ?)";
            $stmtsschool = $pdo->prepare($insertschool);
            $institution = $data["institutions"];
            for ($i = 0; $i < count($institution); $i++) {
                if (!empty($institution[$i])) {
                    $institutionValue = isset($institution[$i]) ? $institution[$i] : "";
                    $stmtsschool->bindParam(1, $kehilla_id, PDO::PARAM_STR);
                    $stmtsschool->bindParam(2, $institutionValue, PDO::PARAM_STR);
                    $stmtsschool->execute();
                    $stmtsschool->closeCursor();
                }
            }

            //basic mobile device
            $mobileDevice = $data["mobileDevice"];
            $mobileUser = $data["mobileUser"];
            if (isset($data["tagDetails"]) && !empty($data["tagDetails"])) {
                $tagDetails = $data["tagDetails"];
            } else {
                $tagDetails = '';
            }

            if (isset($data["imeiNumber"]) && !empty($data["imeiNumber"])) {
                $imeiNumber = $data["imeiNumber"];
            } else {
                $imeiNumber = '';
            }

            if (isset($data["stickerType"]) && !empty($data["stickerType"])) {
                $stickerType = $data["stickerType"];
            } else {
                $stickerType = '';
            }

            if (isset($data["textCapabilities"]) && !empty($data["textCapabilities"])) {
                $textCapabilities = $data["textCapabilities"];
            } else {
                $textCapabilities = '';
            }

            for ($i = 0; $i < count($mobileDevice); $i++) {
                if (!empty($mobileDevice[$i]) && $mobileDevice != 'None') {


                    $mobileUserValue = isset($mobileUser[$i]) ? $mobileUser[$i] : "";
                    $mobileDeviceValue = isset($mobileDevice[$i]) ? $mobileDevice[$i] : "";
                    $tagDetailsValue = isset($tagDetails[$i]) ? $tagDetails[$i] : "";
                    $imeiNumberValue = isset($imeiNumber[$i]) ? $imeiNumber[$i] : "";
                    $stickerTypeValue = isset($stickerType[$i]) ? $stickerType[$i] : "";
                    $textCapabilitiesValue = isset($textCapabilities[$i]) ? $textCapabilities[$i] : "";

                    $insertmobile = "INSERT INTO mobile_devices (application_id, mobileUser, model, textCapabilities) VALUES (?, ?, ?, ?)";
                    $stmtmobileinsert = $pdo->prepare($insertmobile);
                    $stmtmobileinsert->bindParam(1, $application_id, PDO::PARAM_STR);
                    $stmtmobileinsert->bindValue(2, $mobileUserValue, PDO::PARAM_STR);
                    $stmtmobileinsert->bindValue(3, $mobileDeviceValue, PDO::PARAM_STR);
                    $stmtmobileinsert->bindValue(4, $textCapabilitiesValue, PDO::PARAM_STR);
                    $stmtmobileinsert->execute();
                    $mobile_id = $pdo->lastInsertId();
                    $stmtmobileinsert->closeCursor();

                    if (isset($tagDetailsValue) && !empty($tagDetailsValue)) {
                        $inserttagmobile = "INSERT INTO tag_settings (mobile_id, blockDetail) VALUES (?, ?)";
                        $stmttagmobileinsert = $pdo->prepare($inserttagmobile);
                        $stmttagmobileinsert->bindParam(1, $mobile_id, PDO::PARAM_STR);
                        $stmttagmobileinsert->bindValue(2, $tagDetailsValue, PDO::PARAM_STR);
                        $stmttagmobileinsert->execute();
                        $stmtmobileinsert->closeCursor();
                    }

                    if (isset($stickerTypeValue) && !empty($stickerTypeValue)) {
                        $insertstickermobile = "INSERT INTO sticker_settings (mobile_id, stickerDetail) VALUES (?, ?)";
                        $stmtstickermobileinsert = $pdo->prepare($insertstickermobile);
                        $stmtstickermobileinsert->bindParam(1, $mobile_id, PDO::PARAM_STR);
                        $stmtstickermobileinsert->bindValue(2, $stickerTypeValue, PDO::PARAM_STR);
                        $stmtstickermobileinsert->execute();
                        $stmtmobileinsert->closeCursor();
                    }

                    if (isset($imeiNumberValue) && !empty($imeiNumberValue)) {
                        $insertimeimobile = "INSERT INTO imei_settings (mobile_id, imeiNumber) VALUES (?, ?)";
                        $stmtimeimobileinsert = $pdo->prepare($insertimeimobile);
                        $stmtimeimobileinsert->bindParam(1, $mobile_id, PDO::PARAM_STR);
                        $stmtimeimobileinsert->bindValue(2, $imeiNumberValue, PDO::PARAM_STR);
                        $stmtimeimobileinsert->execute();
                        $stmtmobileinsert->closeCursor();
                    }
                }
            }

            //maindevice

            if (isset($data["deviceOwner"]) && !empty($data["deviceOwner"])) {
                $deviceOwner = $data["deviceOwner"];
            } else {
                $deviceOwner = '';
            }

            if (isset($data["deviceType"]) && !empty($data["deviceType"])) {
                $deviceType = $data["deviceType"];
            } else {
                $deviceType = '';
            }

            if (isset($data["filterName"]) && !empty($data["filterName"])) {
                $filterName = $data["filterName"];
            } else {
                $filterName = '';
            }

            if (isset($data["filterType"]) && !empty($data["filterType"])) {
                $filterType = $data["filterType"];
            } else {
                $filterType = '';
            }

            if (isset($data["filterEmail"]) && !empty($data["filterEmail"])) {
                $filterEmail = $data["filterEmail"];
            } else {
                $filterEmail = '';
            }

            if (isset($data["filterPolicy"]) && !empty($data["filterPolicy"])) {
                $filterPolicy = $data["filterPolicy"];
            } else {
                $filterPolicy = '';
            }
            if (isset($data["otherFilter"]) && !empty($data["otherFilter"])) {
                $otherFilter = $data["otherFilter"];
            } else {
                $otherFilter = '';
            }
            if (isset($data["requestedAccess"]) && !empty($data["requestedAccess"])) {
                $requestedAccess = $data["requestedAccess"];
            } else {
                $requestedAccess = '';
            }

            if (isset($data["whatsappDetail"]) && !empty($data["whatsappDetail"])) {
                $whatsappDetail = $data["whatsappDetail"];
            } else {
                $whatsappDetail = '';
            }
            for ($i = 0; $i < count($deviceOwner); $i++) {
                if (!empty($deviceOwner[$i])) {
                    $deviceOwnerValue = isset($deviceOwner[$i]) ? $deviceOwner[$i] : "";
                    $deviceTypeValue = isset($deviceType[$i]) ? $deviceType[$i] : "";
                    $filterNameValue = isset($filterName[$i]) ? $filterName[$i] : "";
                    $filterTypeValue = isset($filterType[$i]) ? $filterType[$i] : "";
                    $filterEmailValue = isset($filterEmail[$i]) ? $filterEmail[$i] : "";
                    $filterPolicyValue = isset($filterPolicy[$i]) ? $filterPolicy[$i] : "";
                    $otherFilterValue = isset($otherFilter[$i]) ? $otherFilter[$i] : "";
                    $requestedAccessValue = isset($requestedAccess[$i]) ? $requestedAccess[$i] : "";
                    $whatsappDetailValue = isset($whatsappDetail[$i]) ? $whatsappDetail[$i] : "";

                    $insertmain = "INSERT INTO main_devices (application_id, deviceOwner, deviceType) VALUES (?, ?, ?)";
                    $stmtmaininsert = $pdo->prepare($insertmain);
                    $stmtmaininsert->bindParam(1, $application_id, PDO::PARAM_STR);
                    $stmtmaininsert->bindParam(2, $deviceOwnerValue, PDO::PARAM_STR);
                    $stmtmaininsert->bindParam(3, $deviceTypeValue, PDO::PARAM_STR);
                    $stmtmaininsert->execute();
                    $mainDevice_id = $pdo->lastInsertId();
                    $stmtmaininsert->closeCursor();

                    $insertfilterSettings = "INSERT INTO filter_settings (mainDevice_id, filterName, filterType, filterEmail, filterPolicy, otherFilter) VALUES (?, ?, ?, ?, ?, ?)";
                    $stmtfilterinsert = $pdo->prepare($insertfilterSettings);
                    $stmtfilterinsert->bindParam(1, $mainDevice_id, PDO::PARAM_STR);
                    $stmtfilterinsert->bindParam(2, $filterNameValue, PDO::PARAM_STR);
                    $stmtfilterinsert->bindParam(3, $filterTypeValue, PDO::PARAM_STR);
                    $stmtfilterinsert->bindParam(4, $filterEmailValue, PDO::PARAM_STR);
                    $stmtfilterinsert->bindParam(5, $filterPolicyValue, PDO::PARAM_STR);
                    $stmtfilterinsert->bindParam(6, $otherFilterValue, PDO::PARAM_STR);
                    $stmtfilterinsert->execute();
                    $stmtfilterinsert->closeCursor();

                    if (!empty($requestedAccess[$i])) {
                        $requestedAccessValue = isset($requestedAccess[$i]) ? $requestedAccess[$i] : "";
                        $pushapps = explode(", ", $requestedAccessValue);
                        foreach ($pushapps as $appcommit) {
                            $insertappsurl = "INSERT INTO apps_url (mainDevice_id, requestedAccess) VALUES (?, ?)";
                            $stmtappsinsert = $pdo->prepare($insertappsurl);
                            $stmtappsinsert->bindParam(1, $mainDevice_id, PDO::PARAM_STR);
                            $stmtappsinsert->bindParam(2, $appcommit, PDO::PARAM_STR);
                            $stmtappsinsert->execute();
                            $stmtappsinsert->closeCursor();
                        }
                    }

                    if (isset($whatsappDetailValue) && !empty($whatsappDetailValue)) {
                        $insertwhat = "INSERT INTO whatsapp_settings (mainDevice_id, whatsappDetail) VALUES (?, ?)";
                        $stmtwhatinsert = $pdo->prepare($insertwhat);
                        $stmtwhatinsert->bindParam(1, $mainDevice_id, PDO::PARAM_STR);
                        $stmtwhatinsert->bindParam(2, $whatsappDetailValue, PDO::PARAM_STR);
                        $stmtwhatinsert->execute();
                        $stmtwhatinsert->closeCursor();
                    }
                }
            }



            $ProcessUnvalidatedTags = 'ProcessUnvalidatedTags';
            $tagInvalidstmt = $pdo->prepare("CALL $ProcessUnvalidatedTags()");
            $tagInvalidstmt->execute();
            $ProcessValidTags = 'ProcessValidTags';
            $tagValidstmt = $pdo->prepare("CALL $ProcessValidTags()");
            $tagValidstmt->execute();
            $ProcessUnvalidatedsticker = 'ProcessUnvalidatedsticker';
            $stickerInvalidstmt = $pdo->prepare("CALL $ProcessUnvalidatedsticker()");
            $stickerInvalidstmt->execute();
            $ProcessValidstickers = 'ProcessValidstickers';
            $stickerValidstmt = $pdo->prepare("CALL $ProcessValidstickers()");
            $stickerValidstmt->execute();
            $ProcessUnvalidatedMobileDevices = 'ProcessUnvalidatedMobileDevices';
            $mobileDevInvalidstmt = $pdo->prepare("CALL $ProcessUnvalidatedMobileDevices()");
            $mobileDevInvalidstmt->execute();
            $ProcessValidMobileDevice = 'ProcessValidMobileDevice';
            $mobileDevValidstmt = $pdo->prepare("CALL $ProcessValidMobileDevice()");
            $mobileDevValidstmt->execute();
            $update_device_status = 'update_device_status';
            $devicestats = $pdo->prepare("CALL $update_device_status()");
            $devicestats->execute();
            $ProcessUnderReviewDevice = 'ProcessUnderReviewDevice';
            $deviceUnderReview = $pdo->prepare("CALL $ProcessUnderReviewDevice()");
            $deviceUnderReview->execute();
            $whatsAppStatusUpdate = 'whatsAppStatusUpdate';
            $whatsAppReview = $pdo->prepare("CALL $whatsAppStatusUpdate()");
            $whatsAppReview->execute();

            $moisedValue = $data["moised"];
            $destinedroute = '';
            if ($moisedValue == 'Ezreini Stamford Hill' || $moisedValue == 'Mishmeres-Satmar' || $moisedValue == 'Gur' || $moisedValue == 'Venishmartem (Belz 99)' || $moisedValue == 'Westcliff' || $moisedValue == 'Beis Chinuch') {
                $destinedroute = '../checkout.html?appid=' . $application_id;
            } else {
                $destinedroute = 'home.html';
            }

            $response = array('status' => 'success', 'destination' => $destinedroute);
            echo json_encode($response);
        }
    } else {
        $user_ids = htmlspecialchars($data["user_id"]);
        $response = array('status' => 'success', 'destination' => 'home.html');
        echo json_encode($response);
    }
}
