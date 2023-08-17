 <div class="modal" id="myModal">
     <div class="modal-dialog modal-fullscreen w-100">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title">Filtered Results</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <table class="table table-hover table-sm" id="myTable">
                     <thead id="myTables2">
                         <tr>
                             <th style="width:5%"><i class="bi bi-flag"></i></th>
                             <th style="width:15%"><a class="ms-3">Username</a></th>
                             <th style="width:10%">Name</th>
                             <th style="width:10%">Hebrew Name</th>
                             <th style="width:20%">Email</th>
                             <th style="width:20%">Phone</th>
                             <th style="width:30%">Address</th>
                         </tr>
                     </thead>
                     <tbody>
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