<template>
    <div class="d-flex" style="width:100%">
        <div class="col-xl-4 col-md-12">
            <div class="card proj-t-card">
                <div class="card-body">
                    <div class="row align-items-center mb-30">
                        <div class="col-auto">
                            <i class="far fa-calendar-check text-red f-30"></i>
                        </div>
                        <div class="col pl-0">
                            <h6 class="mb-5">421 Signalisations</h6>
                            <h6 class="mb-0 text-red">Dernière mise à jour "date DMJ"</h6>
                        </div>
                    </div>
                    <div class="row align-items-center text-center">
                        <div class="col">
                            <h6 class="mb-0">195</h6></div>
                        <div class="col"><i class="fas fa-exchange-alt text-red f-18"></i></div>
                        <div class="col">
                            <h6 class="mb-0">10 jours</h6></div>
                    </div>
                    <h6 class="pt-badge bg-green">53%</h6>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="card proj-t-card">
                <div class="card-body">
                    <div class="row align-items-center mb-30">
                        <div class="col-auto">
                            <i class="fas fa-paper-plane text-red f-30"></i>
                        </div>
                        <div class="col pl-0">
                            <h6 class="mb-5">Mairie la plus concernée par les signalisations</h6>
                            <h6 class="mb-0 text-red">"Mairie de Douala 3e"</h6>
                        </div>
                    </div>
                    <div class="row align-items-center text-center">
                        <div class="col">
                            <h6 class="mb-0">1 semaine</h6></div>
                        <div class="col"><i class="fas fa-exchange-alt text-green f-18"></i></div>
                        <div class="col">
                            <h6 class="mb-0">100</h6></div>
                    </div>
                    <h6 class="pt-badge bg-red">76%</h6>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="card proj-t-card">
                <div class="card-body">
                    <div class="row align-items-center mb-30">
                        <div class="col-auto">
                            <i class="fas fa-lightbulb text-yellow f-30"></i>
                        </div>
                        <div class="col pl-0">
                            <h6 class="mb-5">Type de signalisation le plus relevé</h6>
                            <h6 class="mb-0 text-yellow">"Mauvais Stationnement"</h6>
                        </div>
                    </div>
                    <div class="row align-items-center text-center">
                        <div class="col">
                            <h6 class="mb-0">1 mois</h6></div>
                        <div class="col"><i class="fas fa-exchange-alt text-yellow f-18"></i></div>
                        <div class="col">
                            <h6 class="mb-0">48</h6></div>
                    </div>
                    <h6 class="pt-badge bg-yellow">73%</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignalisationsStats',
    data: ()=>({

    })
}
</script>