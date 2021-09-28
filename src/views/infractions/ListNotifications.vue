<template>
    <div class="container-fluid">
    <!--page header start -->
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file-text bg-blue"></i>
                        <div class="d-inline">
                            <h5>Notifications</h5>
                            <span>Liste des notifications</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="../index.html"><i class="ik ik-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Notifications</li>
                        </ol>
                    </nav>
                </div>
            </div>    
        </div>
        <!--page header end -->
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header"><h3>Liste des Infractions</h3></div>
                        <div class="card-body">
                            <div id="data_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data_table_length"><label>Show 
                                        <select name="data_table_length" aria-controls="data_table" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> entries</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6"><div id="data_table_filter" class="dataTables_filter">
                                        <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="data_table"></label></div>
                                    </div>
                                    </div>
                                    <div class="row"><div class="col-sm-12"><table id="data_table" class="table dataTable no-footer" role="grid" aria-describedby="data_table_info">
                                    <thead>
                                        <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data_table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending" style="width: 97.8125px;">Id</th><th class="nosort sorting_disabled" rowspan="1" colspan="1" aria-label="Avatar" style="width: 148.203px;">Avatar</th><th class="sorting" tabindex="0" aria-controls="data_table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 290.406px;">Name</th><th class="sorting" tabindex="0" aria-controls="data_table" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" style="width: 440.344px;">Email</th><th class="nosort sorting_disabled" rowspan="1" colspan="1" aria-label="&amp;nbsp;" style="width: 212.234px;">&nbsp;</th></tr>
                                    </thead>
                                    <tbody>
                                            <tr role="row" class="odd">
                                                    <td class="sorting_1">001</td>
                                                    <td><img src="/img/profile6.png" class="table-user-thumb" alt=""></td>
                                                    <td>Erich Heaney</td>
                                                    <td>erich@example.com</td>
                                                    <td>
                                                        <div class="table-actions">
                                                            <a href="#"><i class="ik ik-eye"></i></a>
                                                            <a href="#"><i class="ik ik-edit-2"></i></a>
                                                            <a href="#"><i class="ik ik-trash-2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">002</td>
                                                    <td><img src="/img/profile14.png" class="table-user-thumb" alt=""></td>
                                                    <td>Abraham Douglas</td>
                                                    <td>jgraham@example.com</td>
                                                    <td>
                                                        <div class="table-actions">
                                                            <a href="#"><i class="ik ik-eye"></i></a>
                                                            <a href="#"><i class="ik ik-edit-2"></i></a>
                                                            <a href="#"><i class="ik ik-trash-2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">003</td>
                                                    <td><img src="/img/profile6.png" class="table-user-thumb" alt=""></td>
                                                    <td>Roderick Simonis</td>
                                                    <td>grant.simonis@example.com</td>
                                                    <td>
                                                        <div class="table-actions">
                                                            <a href="#"><i class="ik ik-eye"></i></a>
                                                            <a href="#"><i class="ik ik-edit-2"></i></a>
                                                            <a href="#"><i class="ik ik-trash-2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">004</td>
                                                    <td><img src="/img/avatar.png" class="table-user-thumb" alt=""></td>
                                                    <td>Christopher Henry</td>
                                                    <td>henry.chris@example.com</td>
                                                    <td>
                                                        <div class="table-actions">
                                                            <a href="#"><i class="ik ik-eye"></i></a>
                                                            <a href="#"><i class="ik ik-edit-2"></i></a>
                                                            <a href="#"><i class="ik ik-trash-2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">005</td>
                                                    <td><img src="/img//profile6.png" class="table-user-thumb" alt=""></td>
                                                    <td>Sonia Wilkinson</td>
                                                    <td>boyle.aglea@example.com</td>
                                                    <td>
                                                        <div class="table-actions">
                                                            <a href="#"><i class="ik ik-eye"></i></a>
                                                            <a href="#"><i class="ik ik-edit-2"></i></a>
                                                            <a href="#"><i class="ik ik-trash-2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr></tbody>
                                        </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data_table_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data_table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="data_table_previous"><a href="#" aria-controls="data_table" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data_table" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data_table_next"><a href="#" aria-controls="data_table" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                    </div>
                                </div>
                            </div>
            </div>
        <notification-details v-bind:notification="selectedNotification"/>
    </div>
</template>
<script>
import NotificationDetails from '@/views/infractions/NotificationDetails.vue'
export default {
    name:"notifications",
    components: {
        NotificationDetails
    },
    data:()=>({
        selectedNotification:null,
        notifications:[],
        theme:{
            libelle: "",
            illustration:""
        }

    }),

    methods: {
        showDetails(notification) {
            this.selectedNotification = notification;
            console.log("notification",this.selectedNotification)
            $('#editLayoutItem').modal('show')
        },
        getNotifications(){
            axios.get('/notifications').then(response => {
			this.notifications = response.result	
               console.log("notifications",this.notifications)
	        })
        }
    },
    mounted() {
	  this.getNotifications()
	  this.$root.$on('new-notification-added', () => {
		  this.getThemes()
	  })
    }
    
}
</script>