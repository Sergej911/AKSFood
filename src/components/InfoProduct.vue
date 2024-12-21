<template>
    <div class="info-product">
        <button class="btn category-btn">Категория</button>
        <h1 class="product-title">
            Молочный "суп" с бананами и апельсиновой цедрой
        </h1>
        <div class="sub-info">
            <p class="info-date">
                17 июля 2024 г.
            </p>
            <span>\</span>
            <p class="info-author">
                AksFood
            </p>
            <div class="info-views">
                <img src="/public/InfoProduct-img/eye.png" alt="">
                <p>23</p>
            </div>
        </div>
        <img class="main-img" src="/public/InfoProduct-img/main-img.jpg" width="766" height="520" alt="">
        <p class="img-descr">
            Необычный молочный "суп" с бананами и апельсиновой цедрой. 
            Такой  интересный супчик с нежной шелковистой текстурой, 
            замечательным  молочно-фруктовым вкусом и 
            ароматом - отличный завтрак или оригинальный  десерт!
        </p>
        <p class="ingredients">
            <b>
                Молоко - 500 мл Бананы (неочищенные) - 500 г Апельсин 
                (для цедры) - 1 шт. или цедра апельсина - 2 ч. ложки
                Мука пшеничная - 40 г Сахар - 40 г Соль - 1 щепотка
            </b>
        </p>
        <p class="cooking-process">
            Подготавливаем продукты по списку. Бананы очищаем от 
            кожуры и нарезаем мякоть кусочками. С помощью мелкой 
            тёрки снимаем с апельсина примерно 2 ч. ложки цедры. 
            Нарезанные бананы складываем в чашу блендера и заливаем 
            примерно 300 мл  молока. Взбиваем на высокой скорости. 
            Всыпаем сахар. Добавляем соль. Снова взбиваем на высокой 
            скорости блендера. Молочно-банановую смесь переливаем в 
            кастрюлю (желательно с толстыми  стенками). Добавляем
             в смесь половину (1 ч. ложку) апельсиновой цедры. 
             Ставим на нагрев и, помешивая, доводим смесь до кипения. 
             В оставшемся холодном молоке разводим муку. 
             Хорошо перемешиваем, чтобы  не осталось комочков. 
             Постоянно помешивая, вливаем молочно-мучную смесь 
             в банановую. Не переставая помешивать, доводим смесь 
             о кипения и убираем с огня. Молочный суп с бананами и 
             апельсиновой цедрой готов. Раскладываем суп по тарелкам и 
             посыпаем оставшейся цедрой, при желании украшаем ломтиками  
             апельсина и подаём к столу. Приятного аппетита!
        </p>
        <div class="ready-dish">
            <img src="/public/InfoProduct-img/sub-img.jpg" width="379" height="275" alt="">
            <p class="dish-descr">
                Молочный "суп" с бананами и 
                апельсиновой цедрой — это изысканное блюдо,  
                которое сочетает в себе кремовую текстуру 
                молока с яркими нотками свежих фруктов. 
                В каждом ложечке этого восхитительного 
                десерта скрываются  кусочки спелого банана, 
                погруженные в нежное молочное облако,  п
                риправленное тонкой апельсиновой цедрой. 
                Легкий аромат цитрусов придает этому супу 
                особую утонченность, а сладость банана
                гармонично сочетается с легкой кремовой основой. 
                Этот молочный "суп" не только подарит вам  
                заряд бодрости и свежести, но и наполнит утро 
                солнечным настроением и  изысканным вкусом.
            </p>
        </div>
    </div>
</template>

<style scoped>
    .info-product {
        margin-bottom: 69px;
    }

    .category-btn {
        margin-bottom: 16px;
        width: 145px;
    }

    .product-title {
        margin-bottom: 12px;
        max-width: 556px;
        font-size: 32px;
        font-weight: 400;
        line-height: 38.73px;
        color: #000;
    }

    .sub-info {
        margin-bottom: 27px;
        display: flex;
        align-items: center;
        column-gap: 6px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        color: #000;
    }

    .info-date, .info-author, .info-views p {
        border-bottom: 1px solid #000;
    }

    .info-views {
        display: flex;
        align-items: center;
        column-gap: 10px;
    } 

    .main-img {
        margin-bottom: 23px;
    }

    .img-descr {
        margin-bottom: 12px;
        max-width: 766px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        color: #000;
    }

    .ingredients {
        margin-bottom: 12px;
        max-width: 766px;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        color: #000;
    }

    .cooking-process {
        margin-bottom: 15px;
        max-width: 812px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        color: #000;
    }

    .ready-dish {
        display: flex;
        column-gap: 22px;
    }

    .dish-descr {
        max-width: 401px;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        color: #000;
    }
</style>