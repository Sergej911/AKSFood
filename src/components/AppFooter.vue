<template>
    <div class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <img class="footer-logo" src="/public/AppFooter-img/footer-logo.png" width="232" height="108" alt="">
                <p class="footer-descr">
                    AksFood — это персональный блог, 
                    посвященный искусству еды, а также современным 
                    способам приготовления мамонта.
                </p>
                <div class="footer-links">
                    <a href="#">
                        <img src="/public/AppHead-img/1.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="/public/AppHead-img/2.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="/public/AppHead-img/3.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="/public/AppHead-img/4.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="/public/AppHead-img/5.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.footer {
    background-color: #000;
}

.footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-logo {
    margin-top: 34px;
    margin-bottom: 16px;
}

.footer-descr {
    margin-bottom: 5px;
    max-width: 675px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.73px;
    color: #fff;
}

.footer-links {
    margin-bottom: 230px;
    display: flex;
    align-items: center;
    column-gap: 17px;
}
</style>