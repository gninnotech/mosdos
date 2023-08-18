 <div class="col-md-12 mt-4 text-center ps-3 pe-3">
     <p class="fw-semibold fs-3">Dashboard</p>
 </div>
 <div class="col-md-12 mt-1 text-center ps-3 pe-3">
     <hr style="border: 0.5px solid #7d97a5" />
 </div>
 <div class="col-md-12 mt-4 ms-auto text-end">
     <div class="btn-group mb-2" role="group">
         <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Export <span class="caret"></span></button>
         <ul class="dropdown-menu" role="menu">
             <li class="ps-2" style="padding-right:2px"><a class="dataExport" data-type="excel">XLS</a></li>
             <li class="ps-2" style="padding-right:2px"><a class="dataExport" data-type="txt">TXT</a></li>
         </ul>
     </div>
 </div>
 <div class="table-responsive-sm overflow-auto h-100" style="max-height: 325px">
     <table id="example" class="display nowrap" width="100%">
         <thead>
             <tr>
                 <th>Name</th>
                 <th><i class="bi bi-flag"></i></th>
                 <th>Kehilla</th>
                 <th>School</th>
                 <th>שטיבל/ביהמ"ד</th>
                 <th>Status</th>
                 <th>Email</th>
                 <th>Device</th>
                 <th>Filter</th>
             </tr>
         </thead>

         <tfoot class="hidden">
             <tr>
                 <th style="width:5%">Name</th>
                 <th style="width:5%"><i class="bi bi-flag"></i></th>
                 <th style="width:10%">Kehilla</th>
                 <th style="width:15%">School</th>
                 <th style="width:10%">שטיבל/ביהמ"ד</th>
                 <th style="width:10%">Status</th>
                 <th style="width:15%">Email</th>
                 <th style="width:15%">Device</th>
                 <th style="width:15%">Filter</th>
             </tr>
         </tfoot>

         <tbody>
             <?php
                $dashboardstmt = $pdo->prepare("SELECT * FROM dashboard");
                $dashboardstmt->execute();
                while ($dashboard = $dashboardstmt->fetch(PDO::FETCH_ASSOC)) {
                ?>
                 <tr>
                     <td>
                         <?php echo $dashboard["fullName"]; ?>
                     </td>
                     <td>
                         <?php
                            $style = "text-align:center;width:15pt; border-radius: 50%; background-color:" . htmlspecialchars($dashboard["rating"]) . ";color:" . htmlspecialchars($dashboard["rating"]) . ";";
                            $text = ".";
                            if ($dashboard["rating"] == "Green") {
                                $text = "1";
                            } elseif ($dashboard["rating"] == "Orange") {
                                $text = "2";
                            } elseif ($dashboard["rating"] == "Red") {
                                $text = "3";
                            }
                            echo '<p style="' . $style . '" class="badge">' . $text . '</p>';
                            ?>

                     </td>
                     <td>
                         <?php echo $dashboard["moised"]; ?>
                     </td>
                     <td>
                         <?php
                            $institutionlist = str_replace('|', '<br>', $dashboard["institutionlist"]);
                            echo $institutionlist; ?>
                     </td>
                     <td>
                         <?php echo $dashboard["shul"]; ?>
                     </td>
                     <td>
                         <?php echo $dashboard["ishurStatus"]; ?>
                     </td>
                     <td class="ps-0 pt-0">
                         <input type="text" class="btn btn-link text-start ms-0 mt-0 ps-0 pt-0" onclick="handleClick(this)" value="<?php echo $dashboard['userName']; ?>">
                     </td>
                     <td>
                         <?php
                            if (isset($dashboard["deviceTypes"]) && !empty($dashboard["deviceTypes"])) {
                            $deviceTypes = str_replace('|', '<br>', $dashboard["deviceTypes"]);
                            echo $deviceTypes;
                            } ?>
                     </td>
                     <td>
                         <?php
                         if(isset($dashboard["filterPolicies"]) && !empty($dashboard["filterPolicies"])){
                            $filterPolicies = str_replace('|', '<br>', $dashboard["filterPolicies"]);
                            echo $filterPolicies;
                            } ?>
                     </td>

                 </tr>
             <?php
                }
                ?>
         </tbody>
     </table>
 </div>