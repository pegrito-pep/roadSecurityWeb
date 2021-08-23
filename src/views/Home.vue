<template>
    <div class="container-fluid">
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-layers bg-blue"></i>
                        <div class="d-inline">
                            <h5>Statistiques</h5>
                            <span>Vous pouvez avoir toutes vos statistiques ici</span>
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
                                <a href="#">Statistiques</a>
                            </li>
                            <!-- <li class="breadcrumb-item active" aria-current="page">Widget Statistic</li> -->
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <mairie-stats />
            <signalisations-stats />
             <taximans-stats />
            
           <!-- <langue-stats /> -->
        </div>
    </div>
</template>

<script>
    import MairieStats from '@/views/stats/MairieStats.vue'
    import SignalisationsStats from '@/views/stats/SignalisationsStats.vue'
    // import ChildsDetailStat from '@/views/stats/ChildsDetailStat.vue'
    import TaximansStats from '@/views/stats/TaximansStats.vue'  
export default {
    name: 'Home',
    components:{
        MairieStats,
        SignalisationsStats,
        // ChildsDetailStat,
        TaximansStats
    },
    data:()=>({

    })
}
</script>