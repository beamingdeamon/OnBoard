<template>
    <div class="bg-[#191B1D] h-[143px] w-full">
        <div class="pl-5 text-white flex h-full">
            <div class="w-[133px]"></div>
            <div class="pl-5 flex flex-col justify-center items-start">
                <div class="w-[133px]"></div>
                <div class="flex gap-2.5">
                    <h4 class="text-lg font-bold">Аманжол Арман Канатулы</h4>
                    <span
                        class="bg-purple-secondary/20 px-3 py-2 text-13 rounded"
                        style="border: 1px solid #7734fc"
                        >Аналитика</span
                    >
                </div>
                <div class="flex mt-2.5 mb-4 gap-4">
                    <p class="text-gray-placeholder text-13">
                        <span>Пол: </span><span class="font-bold">Мужчина</span>
                    </p>
                    <p class="text-gray-placeholder text-13">
                        <span>Возраст: </span><span class="font-bold">30</span>
                    </p>
                    <p class="text-gray-placeholder text-13">
                        <span>Гражданство: </span
                        ><span class="font-bold">Казахстан</span>
                    </p>
                </div>
                <div>
                    <el-button
                        color="#FF6854"
                        style="color: white"
                        :icon="Download"
                        >Скачать резюме</el-button
                    >
                    <el-button color="#F0F4F7" style="color: #6d767e"
                        >Скопировать</el-button
                    >
                </div>
            </div>
        </div>
    </div>
    <div class="px-5">
        <div class="flex mb-10">
            <div class="-mt-[120px]">
                <img src="/images/user.png" alt="" />
            </div>
            <div class="flex gap-10 pl-5 pt-4">
                <div class="text-gray-body text-13">
                    <span>Город: </span>
                    <span class="font-bold">г.Нур-Султан</span>
                </div>
                <div class="text-gray-body text-13">
                    <span>Телефон: </span>
                    <span class="font-bold">+7(000)000-00-14</span>
                </div>
                <div class="text-gray-body text-13">
                    <span>E-mail: </span>
                    <span class="font-bold">test14@test.com</span>
                </div>
            </div>
        </div>
        <div class="mb-10">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Дополнительная информация
            </h3>
            <div class="text-13 font-bold">
                Ожидаемый уровень заработной платы: 250 000,00 KZT
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Специализации
            </h3>
            <div class="flex gap-2 flex-wrap">
                <span class="px-3 bg-purple-secondary/20 py-2 text-13 rounded"
                    >Аналитик</span
                >
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Тип занятости
            </h3>
            <div class="flex gap-2 flex-wrap">
                <span class="px-3 bg-purple-secondary/20 py-2 text-13 rounded"
                    >Аналитик</span
                >
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                График работы
            </h3>
            <div class="flex gap-2 flex-wrap">
                <span class="px-3 bg-purple-secondary/20 py-2 text-13 rounded"
                    >Аналитик</span
                >
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Опыт работы - 8 лет, 9 месяцев
            </h3>
            <div class="mb-7">
                <h1 class="font-bold text-sm mb-2.5">
                    Проводник пассажирского вагона
                </h1>
                <p class="text-13 font-bold mb-2.5">Главный менеджер</p>
                <p class="text-[12.5px] text-gray-label mb-2.5">
                    Январь 2022 — Январь 2022 (1 месяц) Казахстан
                </p>
                <p class="text-[12.5px]">
                    В результате прохождения практики мною были приобретены
                    навыки работы с документами, используемые персоналом
                    Департамента кадров. Работа требовала аккуратности,
                    ответственности, коммуникабельности в этой отрасли.
                </p>
            </div>
            <div class="mb-7">
                <h1 class="font-bold text-sm mb-2.5">
                    Проводник пассажирского вагона
                </h1>
                <p class="text-13 font-bold mb-2.5">Главный менеджер</p>
                <p class="text-[12.5px] text-gray-label mb-2.5">
                    Январь 2022 — Январь 2022 (1 месяц) Казахстан
                </p>
                <p class="text-[12.5px]">
                    В результате прохождения практики мною были приобретены
                    навыки работы с документами, используемые персоналом
                    Департамента кадров. Работа требовала аккуратности,
                    ответственности, коммуникабельности в этой отрасли.
                </p>
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Знание языков
            </h3>
            <div class="flex gap-12 flex-wrap">
                <div>
                    <h5 class="text-13 font-bold mb-2.5">Английский</h5>
                    <p class="text-12.5 text-gray-label">Начальный</p>
                </div>
                <div>
                    <h5 class="text-13 font-bold mb-2.5">Английский</h5>
                    <p class="text-12.5 text-gray-label">Начальный</p>
                </div>
                <div>
                    <h5 class="text-13 font-bold mb-2.5">Английский</h5>
                    <p class="text-12.5 text-gray-label">Начальный</p>
                </div>
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">Навыки</h3>
            <div class="flex gap-2 flex-wrap">
                <span class="px-3 bg-purple-secondary/20 py-2 text-13 rounded"
                    >SMM маркетинг</span
                >
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-4">
                Сертификаты/квалификации
            </h3>
            <div>
                <div class="flex gap-7">
                    <span class="font-bold text-13">2019 </span>
                    <div>
                        <p class="font-bold text-13">Skillbox</p>
                        <p class="text-13 mt-2.5">
                            new.redmadrobot.ru, Дизайн мобильных приложений
                        </p>
                    </div>
                </div>
                <div class="flex gap-7 mt-3.5">
                    <span class="font-bold text-13">2019 </span>
                    <div>
                        <p class="font-bold text-13">Skillbox</p>
                        <p class="text-13 mt-2.5">
                            new.redmadrobot.ru, Дизайн мобильных приложений
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-9">
            <h3 class="text-base text-gray-label font-bold mb-3.5">
                Социальные сети
            </h3>
            <div class="flex gap-2 flex-wrap">
                <a href="#">
                    <unicon name="instagram" fill="#191B1D" />
                </a>
                <a href="#"><unicon name="facebook" fill="#191B1D" /></a>
                <a href="#"><unicon name="linkedin" fill="#191B1D" /></a>
                <a href="#"><unicon name="twitter" fill="#191B1D" /></a>
                <a href="#"><unicon name="telegram" fill="#191B1D" /></a>
                <a href="#"><unicon name="vk" fill="#191B1D" /></a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Download } from "@element-plus/icons-vue";
</script>
<style></style>
