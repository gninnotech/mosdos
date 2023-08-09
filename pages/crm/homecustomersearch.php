<div class="col-md-12">
    <div class="container-fluid text-start" id="id_form_container">
        <div class="row">
            <div class="col-md-12 mt-4 text-center ps-3 pe-3 hidden" id="headersearch">
                <p class="fw-semibold fs-3">Customer Search</p>
            </div>
            <div class="col-md-12 mt-1 text-center ps-3 pe-3 hidden" id="hrsearch">
                <hr style="border: 0.5px solid #7d97a5" />
            </div>
            <div class="table-responsive-sm overflow-auto h-100 hidden" id="cs_search_container" style="max-height: 350px">
                <table class="table table-hover table-sm text-start">
                    <thead id="myTables2">
                        <tr>
                            <th style="width:5%"><i class="bi bi-flag"></i></th>
                            <th style="width:15%"><a class="ms-3">Username</a></th>
                            <th style="width:15%">Name</th>
                            <th style="width:15%">Hebrew Name</th>
                            <th style="width:15%">Email</th>
                            <th style="width:15%">Phone</th>
                            <th style="width:30%">Address</th>
                        </tr>
                    </thead>
                    <tbody class="text-start" id="myTable">
                        <?php
                        $customersearchstmt = $pdo->prepare("SELECT * FROM customer_search");
                        $customersearchstmt->execute();
                        while ($customerSearch = $customersearchstmt->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                            <tr>
                                <td>
                                    <?php
                                    $style = "text-align:center;width:15pt; border-radius: 50%; background-color:" . htmlspecialchars($customerSearch["credibility"]) . ";color:" . htmlspecialchars($customerSearch["credibility"]) . ";";
                                    $text = ".";
                                    if ($customerSearch["credibility"] == "Green") {
                                        $text = "1";
                                    } elseif ($customerSearch["credibility"] == "Orange") {
                                        $text = "2";
                                    } elseif ($customerSearch["credibility"] == "Red") {
                                        $text = "3";
                                    }
                                    echo '<p style="' . $style . '" class="badge">' . $text . '</p>';
                                    ?>

                                </td>
                                <td>
                                    <input type="text" class="btn btn-link text-start" onclick="handleClick(this)" value="<?php echo $customerSearch['registeredEmail']; ?>">
                                </td>
                                <td>
                                    <?php echo $customerSearch["fullName"]; ?>
                                </td>
                                <td>
                                    <?php echo $customerSearch["hebrewName"]; ?>
                                </td>
                                <td>
                                    <?php
                                    if (isset($customerSearch["userEmail"]) && !empty($customerSearch["userEmail"])) {
                                        $emailAddresses = str_replace('~', '<br>', $customerSearch["userEmail"]);
                                        echo $emailAddresses;
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php
                                    if (isset($customerSearch["userMobile"]) && !empty($customerSearch["userMobile"])) {
                                        $contactNames = str_replace('~', '<br>', $customerSearch["userMobile"]);
                                        echo $contactNames;
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php echo $customerSearch["address"]; ?>
                                </td>
                            </tr>
                        <?php
                        }
                        ?>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<script src="../../assets/js/customer_search.js"></script>